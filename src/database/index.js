import Sequelize from 'sequelize';
import database from '../config/database.js';
import Aluno from '../models/Aluno.js';

const models = [Aluno];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
