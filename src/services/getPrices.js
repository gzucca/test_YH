module.exports = async () => {
  try {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/bookTicker?symbol=BNBBTC"
    );
    const data = await response.json();
    const { symbol, bidPrice, askPrice } = data;
    const bidWCommission = bidPrice * (1 + Number(process.env.COMMISSION));
    const askWCommission = askPrice * (1 + Number(process.env.COMMISSION));
    const midPrice = (bidWCommission + askWCommission) / 2;
    const returnedValues = {
      symbol,
      bidWCommission,
      askWCommission,
      midPrice,
    };
    return returnedValues;
  } catch (error) {
    console.log("Could not get prices from API:", error.message);
  }
};
