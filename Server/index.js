const express = require("express");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/Schema');

const app = express();

app.use('/graphql', graphqlHTTP({
}));

app.listen(3000, () => {
    console.log("Listening on port 3000")
});

