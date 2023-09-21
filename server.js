import express from "express";
import cors from "cors"
import selectMenu from "./routers/selectMenu.js";
import toggleMenu from "./routers/toggleMenu.js";
import cardOne from "./routers/cardOne.js";
import cardTwo from "./routers/cardTwo.js";
import cardThree from "./routers/cardThree.js";
import cardFour from "./routers/cardFour.js";
import cardFive from "./routers/cardFive.js";
import cardSix from "./routers/cardSix.js";
import cardSeven from "./routers/cardSeven.js";
import cardEight from "./routers/cardEight.js";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/selectMenu", selectMenu);
app.use("/toggleMenu", toggleMenu);
app.use("/cardOne", cardOne);
app.use("/cardTwo", cardTwo);
app.use("/cardThree", cardThree);
app.use("/cardFour", cardFour);
app.use("/cardFive", cardFive);
app.use("/cardSix", cardSix);
app.use("/cardSeven", cardSeven);
app.use("/cardEight", cardEight);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});