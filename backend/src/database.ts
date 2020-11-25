import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mssql://sa:xxxx@localhost:1433/SimpleUrlShortening');

export default sequelize;