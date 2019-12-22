
const { GraphQLServer } = require('graphql-yoga');
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));

/*
require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
const PORT = process.env.PORT;
const base_url = process.env.ENV_URL || 'https://tedfr.run-us-west1.goorm.io';
const typeDefs = `
    type Query{
        hello: String!
    }
`;
const resolvers = {
  Query: {
    hello: () => "Hi"
  }
};
const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ port: PORT, url: base_url }, () =>
  console.log(`Server running on  http://localhost:${4000}`)
);
*/