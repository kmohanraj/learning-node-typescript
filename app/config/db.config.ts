module.exports = {
  HOST: "localhost",
  USER: "hive",
  PASSWORD: "letmein",
  DB: "node_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}