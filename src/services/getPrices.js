module.exports = async () => {
  try {
    const data = {
      symbol: "LTCBTC",
      bidPrice: "4.00000000",
      bidQty: "431.00000000",
      askPrice: "4.00000200",
      askQty: "9.00000000",
    };
    return data;
  } catch (error) {
    console.log("Could not get prices from API:", error.message);
  }
};
