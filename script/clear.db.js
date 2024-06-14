import sqlite3 from "sqlite3";
import { open } from "sqlite";

const path = "./db/database.db";

let db;
try {
  db = await open({
    filename: path,
    driver: sqlite3.Database,
  });

  const tables = ["account", "identitie", "user", "verification"];

  let deletedRows = 0;

  for (const table of tables) {
    const result = await db.run(`DELETE FROM ${table}`);
    deletedRows += result.changes;
    console.log(`Deleted ${result.changes} rows from ${table}`);
  }

  if (deletedRows === 0) {
    console.log("No data found in any table.");
  }
} catch (error) {
  console.error("Error clearing the tables:", error);
  console.error(error.stack); 
} finally {
  if (db) {
    await db.close();
    console.log("Database connection closed.");
  }
}
