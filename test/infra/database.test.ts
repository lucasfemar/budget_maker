import { QueryTypes } from 'sequelize';
import { getSequelizeConnection } from '../../src/infra/database';
describe('Test connection', () => {
    test('It should connect to database and exec a query', async () => {
        const sequelize = await getSequelizeConnection();
        const query = await sequelize.query('select 1 + 1 as result;', {
            type: QueryTypes.SELECT,
        });
        expect(query).toEqual([{ result: 2 }]);
    });
});
