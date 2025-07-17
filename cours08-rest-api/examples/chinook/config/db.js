import sqlite3 from "sqlite3";

class SQLite3Driver {
  constructor() {
    this.db = new sqlite3.Database(
      "db/chinook.db",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.log("Erreur de connexion", err);
        }
      }
    );
  }

  async all(sqlStmt, ...values) {
    return new Promise((resolve, reject) => {
      this.db.all(sqlStmt, values, function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async run(sqlStmt, ...values) {
    return new Promise((resolve, reject) => {
      this.db.run(sqlStmt, values, function (err) {
        if (err) {
          reject(err);
        } else {
          // 'this' refers to the statement context, so we can get lastID and changes
          resolve({ lastID: this.lastID, changes: this.changes });
        }
      });
    });
  }

  async get(sqlStmt, ...values) {
    return new Promise((resolve, reject) => {
      this.db.get(sqlStmt, values, function (err, row) {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  async close() {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          reject(err.message);
        }
        resolve("Connexion fermée.");
      });
    });
  }
}

export default new SQLite3Driver();
