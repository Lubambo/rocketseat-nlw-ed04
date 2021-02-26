import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    const testDatabasePath = "./src/database/database.test.sqlite";

    return createConnection(
        // Se a variável de ambiente utilizada for "test", 
        // o caminho do banco de dados para conexão é o do banco de testes
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === "test" ? testDatabasePath : defaultOptions.database
        })
    );
}