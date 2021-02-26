import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
    // Executa as migrations antes de iniciar os testes.
    // Isso é feito para criar o banco de dados para testes.
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201);
    });

    it("Should not be able to create a new user with exists email", async () => {
        const response = await await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });

});
