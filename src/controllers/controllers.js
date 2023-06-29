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
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  const data = await services.getPrices();
    console.log(data);
    res.write(`${JSON.stringify(data)}\n\n`)
  setInterval(async () => {
    const data = await services.getPrices();
    console.log(data);
    res.write(`${JSON.stringify(data)}\n\n`); // SSE data format
  }, process.env.UPDATE_FREQUENCY);
};


module.exports = {
  defaultController,
  getPricesController,
};
