/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Itinerary` DROP FOREIGN KEY `Itinerary_userId_fkey`;

-- DropIndex
DROP INDEX `Itinerary_userId_fkey` ON `Itinerary`;

-- DropTable
DROP TABLE `User`;
