import { getDataSource } from "../../../infra/database";
class CheckApplicationStatusService {
  async execute() {
    const dataSource = await getDataSource();
    const databaseVersionResult = await dataSource.query("SHOW server_version");
    const databaseVersionValue = databaseVersionResult[0].server_version;
    const databaseMaxConnectionsResult = await dataSource.query(
      "SHOW max_connections;",
    );
    const databaseMaxConnectionsValue =
      databaseMaxConnectionsResult[0].max_connections;
    const databaseName = process.env.POSTGRES_DB;
    const databaseOpenedConnectionsResult = await dataSource.query(
      "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1",
      [databaseName],
    );
    const databaseOpenedConnectionsValue =
      databaseOpenedConnectionsResult[0].count;
    return {
      updated_at: new Date().toISOString(),
      dependencies: {
        database: {
          version: databaseVersionValue,
          max_connections: parseInt(databaseMaxConnectionsValue),
          opened_connections: databaseOpenedConnectionsValue,
        },
      },
    };
  }
}

export { CheckApplicationStatusService };
