const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + "/controllers/messages_controller.js")

const app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + "/../public/build") );

const baseUrl = "/api/messages";
app.post(baseUrl, mc.create);
app.get(baseUrl, mc.read);
// app.get(`${baseUrl}/:id`, mc.read)
app.put(`${baseUrl}/:id`, mc.update);
app.delete(`${baseUrl}/:id`, mc.destroy);

const port = 3000;
app.listen(port, ()=>{
    console.log("Listening on PORT: " + port)
})