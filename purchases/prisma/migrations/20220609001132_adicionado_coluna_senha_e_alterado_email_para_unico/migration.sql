/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situation` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer`
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `purchase`
    ADD COLUMN `situation` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `customer_email_key` ON `customer` (`email`);
