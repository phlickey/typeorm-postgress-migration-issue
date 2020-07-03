import {MigrationInterface, QueryRunner} from "typeorm";

export class Secondary1593775194381 implements MigrationInterface {
    name = 'Secondary1593775194381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."user-table" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cbd362b52b7fa0f8f251bf5acf7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."user-table"`);
    }

}
