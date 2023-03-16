const env = process.env.NODE_ENV || "development";

// use env variables or enter database info
const config = {
  development: {
    host: process.env.HOST_DATABASE || 'localhost',
    port : process.env.PORT_DATABASE || 3306,
    database: process.env.DATABASE || "recipes",
    user: process.env.USER_DATABASER || "root",
    password: process.env.PASS_DATABASE || "1234",
  },
};

module.exports = {
  client: "mysql2",
  connection: config[env],
  // migrations: {
  //   tableName: "migrations",
  // },
  // createTablesSafely: knex => tables => {
  //   const createTables = tables.map(({ name, schema }) => {
  //     return knex.schema.createTable(name, schema)
  //   });

  //   return Promise.all(createTables)
  //     .catch(e => {
  //       const dropTables = tables.map(({ name }) => {
  //         return knex.schema.dropTableIfExists(name);
  //       });

  //       return Promise.all(dropTables).then(() => Promise.reject(e));
  //     });
  // }
};
