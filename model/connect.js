const { Sequelize } = require("sequelize");
const config = require("dotenv").config();

const username = process.env.DB_USERNAME;
const pass = process.env.DB_PASS;
const database = process.env.DB_NAME;

(async function connection() {
  try {
    const db = new Sequelize(username, pass, database, {
      host: "localhost",
      dialect: "postgres",

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
    await db.authenticate();
    console.log("Database connected...");
  } catch (e) {
    console.log(e);
  }
})()

module.exports = db;
