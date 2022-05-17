/*
  Warnings:

  - You are about to drop the column `adress_id` on the `customer` table. All the data in the column will be lost.
  - Added the required column `address_id` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `customer_adress_id_fkey`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `adress_id`,
    ADD COLUMN `address_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `addres`(`id_addres`) ON DELETE RESTRICT ON UPDATE CASCADE;
