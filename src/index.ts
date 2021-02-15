import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {EventsResolver} from "./queries/EventsResolver";
import * as dotenv from 'dotenv';
import {RaceResolver} from "./queries/RaceResolver";

(async () => {
  dotenv.config()
  const app = express();
  app.use(express.static('public'))

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  let conn = await createConnection({ ...options, name: "default" });
  if(!conn.isConnected){
    console.log("Connection not created.")
    return
  }else{
    console.log("Connected")
  }

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [EventsResolver, RaceResolver],
      validate: true
    }),
    playground: true,
    introspection: true,
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
