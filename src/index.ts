import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {EventsResolver} from "./queries/EventsResolver";
import * as path from 'path'
import * as dotenv from 'dotenv';

(async () => {
  const app = express();
  dotenv.config()

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [EventsResolver],
      validate: true
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;

  app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
  })

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
