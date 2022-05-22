/*
  Warnings:

  - Added the required column `situation` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `situation` VARCHAR(191) NOT NULL;
