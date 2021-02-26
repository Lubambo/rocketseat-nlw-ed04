import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survy", async () => {
        const response = await await request(app).post("/surveys").send({
            title: "Title Example 1",
            description: "Description Exemple 1"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able to list all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Title Example 2",
            description: "Description Exemple 2"
        });

        const response = await request(app).get("/surveys");

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });
});

