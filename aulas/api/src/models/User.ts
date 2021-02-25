import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")    // Informa que esta classe é uma representação para a entidade/tabela "users"
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    constructor() {
        if (!this.id) { this.id = uuid(); }
    }

}

export { User };