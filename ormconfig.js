module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,

  // for local testing change the 'dist' folder to 'src' and the 'js' extension for 'ts'

  migrations: [`src/database/migrations/*.ts`],

  entities: [`src/modules/cars/entities/*.ts`],

  cli: {
    migrationsDir: "src/database/migrations",
  },
};
