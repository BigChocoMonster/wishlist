const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/typedefs");
const mocks = require("./schema/mocks");

const server = new ApolloServer({ typeDefs, mocks });
server.listen().then(() => {
  console.log("The server is running on 4000");
});
