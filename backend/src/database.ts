import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://sa:Teste$123@localhost:3306/SimpleUrlShortening');

export default sequelize;