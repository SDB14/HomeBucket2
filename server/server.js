const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");
const multer = require("multer");

const { connectDB } = require("./db");

const app = express();
dotenv.config();
connectDB();

app.use(express.static("uploads"))

const { authenticate } = require("./middleware/auth");

app.use(cors());
app.use(authenticate);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome! Go to /graphql" });
});

app.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    graphiql: true,
    context: req
  }))
);

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`);
  }
});

let upload = multer({ storage });

app.post("/upload", upload.single("file"), async function (req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return res.send(error);
  }
  res.send(file);
});

// const seed = require("./db/SeedCategory")
// const seedCategories = async () => await seed()

app.listen(process.env.PORT, () => {
  console.log(`App running on PORT ${process.env.PORT}`);
});
