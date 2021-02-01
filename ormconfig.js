module.exports = [
  {
    name: "development",
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migrations",
      subscribersDir: "src/subscriber"
    }
  },
  {
    name: "production",
    type: "mysql",
    host: process.env.HOST,
    port: process.env.MSQ_PORT,
    username: process.env.MSQ_USER,
    password: process.env.MSQ_PASSWORD,
    database: process.env.DATABASE,
    autoReconnect: true,
    synchronize: true, // switch this to false once you have the initial tables created and use migrations instead
    logging: true,
    entities: ["dist/models/**/*.js"],
    cli: {
      entitiesDir: "dist/models"
    }
  }
];
