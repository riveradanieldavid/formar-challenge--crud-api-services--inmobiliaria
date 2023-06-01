import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const pass = process.env.DB_PASSWORD

// datos db local
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',//usuario_mysql
    password: pass, //contraseña_mysql
    database: 'inmobiliariadb'//nombre_base_de_datos
});

// conexion con la db
connection.connect((error) => {
    if (error) {
        console.error('Failed to connect to the database:', error);
    } else {
        console.log('Successful connection to the database');
    }
});
