const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const adminRoutes = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

const app = express();

//config
app.set("view engine", "pug");
app.set("views", "views");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(5000);
