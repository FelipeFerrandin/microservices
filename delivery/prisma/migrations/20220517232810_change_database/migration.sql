/*
  Warnings:

  - You are about to drop the column `customer_detail_id_customer_detail` on the `delivery` table. All the data in the column will be lost.
  - You are about to drop the `customer_detail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order_id_order` to the `delivery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `fk_delivery_customer_detail`;

-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `customer_detail_id_customer_detail`,
    ADD COLUMN `order_id_order` INTEGER NOT NULL;

-- DropTable
DROP TABLE `customer_detail`;

-- CreateTable
CREATE TABLE `order` (
    `id_order` INTEGER NOT NULL AUTO_INCREMENT,
    `id_customer` INTEGER NOT NULL,
    `address_id` INTEGER NOT NULL,
    `purchase_id` INTEGER NOT NULL,
    `customer_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_order`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `fk_delivery_order_idx` ON `delivery`(`order_id_order`);

-- AddForeignKey
ALTER TABLE `delivery` ADD CONSTRAINT `fk_delivery_order` FOREIGN KEY (`order_id_order`) REFERENCES `order`(`id_order`) ON DELETE NO ACTION ON UPDATE NO ACTION;
