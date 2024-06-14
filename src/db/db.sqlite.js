import '../config/configEnv.js'
import sqlite3 from "sqlite3"
import { open } from "sqlite"

let connection = null

const db = process.env.DB_PATH;

export async function getDBConnection() {
  if (!connection) {
    connection = open({
      filename: db,
      driver: sqlite3.Database,
    })
  }
  return connection
}