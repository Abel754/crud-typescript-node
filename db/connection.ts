import { Sequelize } from 'sequelize';


const db = new Sequelize('node', 'root', '', { // 1- nom BD, 2- usuari BD, 3- password BD, 4- objecte de configuració de la bd
    host: 'localhost',
    dialect: 'mysql',
}); 

export default db;