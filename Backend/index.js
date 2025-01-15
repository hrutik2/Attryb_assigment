const express = require("express");
const cors = require("cors");
const { connection } = require("./connection");
const userRoutes = require("./Route/userRoutes");
const { CarRoutes } = require("./Route/carRoutes");
const { oem } = require("./Route/omnRoutes");
const { authMiddleware } = require("./middleware/auth");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


app.use("/users", userRoutes);
app.use("/car", CarRoutes);


app.listen(process.env.Port, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${process.env.Port}`);
    } catch (error) {
        console.error("Error starting the server:", error);
    }
});
