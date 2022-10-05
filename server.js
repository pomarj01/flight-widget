const PORT = 8000;
const axios = require('axios').default // get requests - getting data from the database
const express = require('express') // routing
const cors = require('cors') // cors messages
require('dotenv').config() // getting info from dotenv file to sort api keys


const app = express()
app.use(cors())

app.get('/flights', (req, res) => {
  const options = {
    url: `${process.env.URL}?page-size=10`,
    headers: {
      accept: "application/json",
      "X-Cassandra-Token": process.env.TOKEN,
    },
  };

  axios.request(options).then(response => {
    console.log(response.data)
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.listen(PORT, () => console.log('Running on port ' + PORT))