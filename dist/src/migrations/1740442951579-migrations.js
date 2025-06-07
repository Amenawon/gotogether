"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1740442951579 = void 0;
class Migrations1740442951579 {
    constructor() {
        this.name = 'Migrations1740442951579';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."trips_status_enum" AS ENUM('Upcoming', 'Ongoing', 'Completed', 'Canceled')`);
        await queryRunner.query(`CREATE TABLE "trips" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "startDate" date NOT NULL, "endDate" date NOT NULL, "status" "public"."trips_status_enum" NOT NULL DEFAULT 'Upcoming', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_f71c231dee9c05a9522f9e840f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "flights" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "airline" character varying NOT NULL, "flightNumber" character varying NOT NULL, "departureAirport" character varying NOT NULL, "arrivalAirport" character varying NOT NULL, "departureTime" TIMESTAMP NOT NULL, "arrivalTime" TIMESTAMP NOT NULL, "bookingReference" character varying, "cost" numeric(10,2), "currency" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tripId" uuid, CONSTRAINT "PK_c614ef3382fdd70b6d6c2c8d8dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "destinations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "locationName" character varying NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tripId" uuid, CONSTRAINT "PK_69c5e8db964dcb83d3a0640f3c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."activities_category_enum" AS ENUM('Sightseeing', 'Food', 'Adventure', 'Relaxation', 'Shopping', 'Cultural')`);
        await queryRunner.query(`CREATE TABLE "activities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "activityName" character varying NOT NULL, "description" text, "startTime" TIMESTAMP NOT NULL, "endTime" TIMESTAMP NOT NULL, "category" "public"."activities_category_enum" NOT NULL, "cost" numeric(10,2), "currency" character varying, "bookingReference" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tripId" uuid, "destinationId" uuid, CONSTRAINT "PK_7f4004429f731ffb9c88eb486a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_db768456df45322f8a749534322" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "flights" ADD CONSTRAINT "FK_c4cc80872be481805418bac5f6f" FOREIGN KEY ("tripId") REFERENCES "trips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD CONSTRAINT "FK_a2cb331f712897bbd7589fec670" FOREIGN KEY ("tripId") REFERENCES "trips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activities" ADD CONSTRAINT "FK_a05a503e997ca866e397aa4dfff" FOREIGN KEY ("tripId") REFERENCES "trips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activities" ADD CONSTRAINT "FK_1d7de8b3021172a447720f33230" FOREIGN KEY ("destinationId") REFERENCES "destinations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "activities" DROP CONSTRAINT "FK_1d7de8b3021172a447720f33230"`);
        await queryRunner.query(`ALTER TABLE "activities" DROP CONSTRAINT "FK_a05a503e997ca866e397aa4dfff"`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP CONSTRAINT "FK_a2cb331f712897bbd7589fec670"`);
        await queryRunner.query(`ALTER TABLE "flights" DROP CONSTRAINT "FK_c4cc80872be481805418bac5f6f"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_db768456df45322f8a749534322"`);
        await queryRunner.query(`DROP TABLE "activities"`);
        await queryRunner.query(`DROP TYPE "public"."activities_category_enum"`);
        await queryRunner.query(`DROP TABLE "destinations"`);
        await queryRunner.query(`DROP TABLE "flights"`);
        await queryRunner.query(`DROP TABLE "trips"`);
        await queryRunner.query(`DROP TYPE "public"."trips_status_enum"`);
    }
}
exports.Migrations1740442951579 = Migrations1740442951579;
//# sourceMappingURL=1740442951579-migrations.js.map