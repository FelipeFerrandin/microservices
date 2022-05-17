/*
  Warnings:

  - The primary key for the `addres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_addres` on the `addres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `customer_address_id_fkey`;

-- AlterTable
ALTER TABLE `addres` DROP PRIMARY KEY,
    DROP COLUMN `id_addres`,
    ADD COLUMN `id_address` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_address`);

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `customer_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `addres`(`id_address`) ON DELETE RESTRICT ON UPDATE CASCADE;
