import mysql from "mysql2";

export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Alopicasso1",
  database: "social",
});
