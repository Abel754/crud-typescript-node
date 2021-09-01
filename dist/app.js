"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importacions
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// Configurar dot.env
dotenv_1.default.config();
// Inicialitzem la classe
const server = new server_1.default();
// Escolta tota l'estona
server.listen();
//# sourceMappingURL=app.js.map