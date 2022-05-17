-- CreateTable
CREATE TABLE `customer_detail` (
    `id_customer_detail` INTEGER NOT NULL AUTO_INCREMENT,
    `id_customer` INTEGER NOT NULL,
    `address_id` INTEGER NOT NULL,
    `customer_name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_customer_detail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `delivery` (
    `id_delivery` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NULL,
    `data_transacao` DATETIME(0) NOT NULL,
    `situacao` VARCHAR(255) NOT NULL,
    `data_prevista` DATETIME(0) NOT NULL,
    `data_entrega` DATETIME(0) NULL,
    `latitude` VARCHAR(45) NULL,
    `longitude` VARCHAR(45) NULL,
    `customer_detail_id_customer_detail` INTEGER NOT NULL,

    INDEX `fk_delivery_customer_detail_idx`(`customer_detail_id_customer_detail`),
    PRIMARY KEY (`id_delivery`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `delivery` ADD CONSTRAINT `fk_delivery_customer_detail` FOREIGN KEY (`customer_detail_id_customer_detail`) REFERENCES `customer_detail`(`id_customer_detail`) ON DELETE NO ACTION ON UPDATE NO ACTION;
