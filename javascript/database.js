const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "credable",
  database: "lms",
  connectionLimit: 10,
});
