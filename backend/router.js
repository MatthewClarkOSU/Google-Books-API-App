const express = require('express');
const https = require("https");
require('dotenv').config()

const router = express.Router();

router.get("/volumeSearch", async (req, res) => {

    const searchWord = req.query.searchWord
    const page = parseInt(req.query.page)
    const maxResults = parseInt(req.query.itemsPerPage)
    const startIndex = (page - 1) * maxResults
    const mySecret = process.env.API_KEY


    https
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&startIndex=${startIndex}&maxResults=${maxResults}&key=${mySecret}`,

            resp => {
                let data = [];

                resp.on("data", chunk => {
                    data += chunk;
                });

                resp.on("end", () => {

                    let parsedData = JSON.parse(data);

                    const result = {
                        totalItems: parsedData.totalItems,
                        hasNextPage: (startIndex * maxResults <= parsedData.totalItems) ? true : false,
                        hasPreviousPage: (startIndex > 0) ? true : false,
                        items: parsedData.items ? parsedData.items.map(
                            (item) => {
                                return (
                                    {
                                        id: item.id,
                                        title: item.volumeInfo.title,
                                        authors: item.volumeInfo.authors,
                                        description: item.volumeInfo.description,
                                        publishedDate: item.volumeInfo.publishedDate,
                                        image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : null,
                                        link: item.volumeInfo.infoLink,
                                    }

                                )

                            }
                        )
                            : {}
                    }

                    console.log(result)
                    res.header("Access-Control-Allow-Origin", "*");
                    res.json(result)
                });
            })
        .on("error", err => {
            console.log("Error: " + err.message);
        });
})

module.exports = router