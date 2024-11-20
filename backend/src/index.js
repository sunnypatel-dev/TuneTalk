import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();


app.use('/api/users', userRoute)


const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})
