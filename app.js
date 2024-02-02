const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

const config = {
  headers: { Authorization: `Bearer QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv` },
};

app.get("/api/trips", (request, response) => {
  axios
    .get("https://aio.server9.nelios.com/", config)
    .then((res) => {
      response.json(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const port = 8000;
app.listen(port, () => {
  console.log("App running on port" + port + "...");
});
