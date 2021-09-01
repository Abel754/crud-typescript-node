import { DataTypes } from "sequelize";
import db from '../db/connection';

const Usuario = db.define('Usuario', { // define el nom del model -> Usuario, sempre la primera majúscula

    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    },

});


export default Usuario;