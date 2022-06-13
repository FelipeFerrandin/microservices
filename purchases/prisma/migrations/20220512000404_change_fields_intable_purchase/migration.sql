/*
  Warnings:

  - You are about to drop the column `subtotal` on the `purchase_detail` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `purchase_detail` table. All the data in the column will be lost.
  - Added the required column `subtotal` to the `purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase`
    ADD COLUMN `subtotal` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `total` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `purchase_detail` DROP COLUMN `subtotal`,
DROP
COLUMN `total`;
