import { Sequelize } from 'sequelize';

async function getSequelizeConnection() {
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    return sequelize;
}

export { getSequelizeConnection };
