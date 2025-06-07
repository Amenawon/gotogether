"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCountryTable1737932623225 = void 0;
class CreateCountryTable1737932623225 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE country (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            code VARCHAR(10) NOT NULL
        );
      `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE country;`);
    }
}
exports.CreateCountryTable1737932623225 = CreateCountryTable1737932623225;
//# sourceMappingURL=1737932623225-CreateCountryTable.js.map