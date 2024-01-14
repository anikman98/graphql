const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();
//mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true
mongoose.connect("mongodb://127.0.0.1:27017/gql-books");
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening at 4000");
});
