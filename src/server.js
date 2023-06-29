const { getPricesController, defaultController } = require("./controllers");
const http = require("http");

const server = http.createServer((req, res) => {
  const reqURL = req.url;
  const reqMethod = req.method;
  switch (reqMethod) {
    case "GET": {
      if (reqURL === "/get-prices") {
        getPricesController(req, res);
        break;
      }
    }
    default: {
      defaultController(req, res);
    }
  }
});

module.exports = server;
