// Importacions
import dotenv from 'dotenv';
import Server from './models/server';

// Configurar dot.env
dotenv.config();

// Inicialitzem la classe
const server = new Server();

// Escolta tota l'estona
server.listen();