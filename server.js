const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHandleBars = require("express-handlebars");

const adminData = require(`./routes/admin`);
const shopRoutes = require(`./routes/shop`);

const app = express();

//config
app.engine("handlebars", expressHandleBars);
app.set("view engine", "handlebars");
app.set("views", "views");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(5000);
