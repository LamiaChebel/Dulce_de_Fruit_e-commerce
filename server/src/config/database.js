import mysql from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_USER, DB_PWD } from "./const.js";

const pool = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PWD,
});

pool.getConnection()
    .then(res => console.log(`Connected to the database Dulce de Fruit : ${res.config.database}`))
    .catch(error => console.log(`Can't connect to the database`, error));

export default pool;