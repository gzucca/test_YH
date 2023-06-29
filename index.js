require("dotenv").config();
const server = require("./src/server");
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
