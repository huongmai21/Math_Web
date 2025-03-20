const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/db_mysql"); // Kết nối MySQL
require("./config/db_mongo"); // Kết nối MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
