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
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false, // switch this to false once you have the initial tables created and use migrations instead
    logging: true,
    entities: ["src/models/**/*.js"],
    migrations: ["src/migrations/**/*.js"],
    subscribers: ["src/subscriber/**/*.js"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migrations",
      subscribersDir: "src/subscriber"
    }
  }
];
