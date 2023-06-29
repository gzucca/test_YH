const services = require("../services");

const defaultController = (req, res) => {
  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.write(
    JSON.stringify({
      message: `API not found at ${req.url}`,
    })
  );
  res.end();
};

const getPricesController = async (req, res) => {
  const data = await services.getPrices();
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.write(
    JSON.stringify({
      message: "GET Succesfull",
      data,
    })
  );
  res.end();
};

module.exports = {
  defaultController,
  getPricesController,
};
