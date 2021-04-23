const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schema');
const Resolvers = require('./resolvers');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { graphqlHTTP } = require('express-graphql');

//Store sensetive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const url = "mongodb+srv://iamuser:kartik@cluster0.kaued.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Connect to mongoDB Atlas
const connect = mongoose.connect(url,
{
      useNewUrlParser: true,
      useUnifiedTopology: true
});



connect.then((db) => {
      console.log(' ⚪️ Connected correctly to server ⚪️ !');
}, (err) => {
      console.log(err);
});

//Define Apollo Serverempl
const server = new ApolloServer({
      typeDefs: TypeDefs.typeDefs,
      resolvers: Resolvers.resolvers
});

//Define Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 9999 }, () =>
console.log(`📌  Server ready at http://localhost:9999${server.graphqlPath}`));
