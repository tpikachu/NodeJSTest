const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const path = require("path");
const app = express();

// Set port from env if no port in env then use 3000 as default portnum
const port = process.env.port || 3000;
app.set("port", port);

// create HTTP server
const server = http.createServer(app);
server.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", require("./routes/index"));
app.use("/api/user", require("./routes/user"));
app.use((req, res, next) => {
	res.status(404).send({ status: 404, error: "Not found" });
});

module.exports = app;
