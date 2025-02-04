import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCountryTable1737932623225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         // Create the country table
    await queryRunner.query(`
        CREATE TABLE country (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            code VARCHAR(10) NOT NULL
        );
      `);
        await queryRunner.query(`
            INSERT INTO "country" ("name", "code")
            VALUES
              ('United States', 'US'),
              ('Canada', 'CA'),
              ('United Kingdom', 'GB'),
              ('Germany', 'DE'),
              ('Australia', 'AU');
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE country;`);
    }

}
