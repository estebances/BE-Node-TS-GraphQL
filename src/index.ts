import express from "express";
import defineRoutes from "./routes";
import config from "./config/app";
import middlewares from "./middlewares";
import dbConnect from "./config/database";
import { ApolloServer } from "apollo-server-express";
import Schema from "./schemas/recipes.schemas";
import Resolvers from "./resolvers/recipes.resolvers";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

const { api, port } = config;
const base = api.path;

const app = express();
const router = defineRoutes();

dbConnect();

app.use(base, middlewares);
app.use(base, router);

app.listen(port);

console.log(`Access your app now on http://localhost:${port}`);

// this route can be removed
app.get("/", (req, res) => res.send("BE Studio services is live"));

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`GraphQL server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);

export default app;
