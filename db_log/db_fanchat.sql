-- MySQL Script generated by MySQL Workbench
-- Thu Oct 24 23:08:16 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario_chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario_chat` (
  `idusuario_chat` INT NOT NULL,
  `nome_usuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario_chat`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`logs_usuarios_chat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`logs_usuarios_chat` (
  `idlogs_usuario_chat` INT NOT NULL AUTO_INCREMENT,
  `character_name` VARCHAR(255) NOT NULL,
  `message` LONGTEXT NOT NULL,
  `response_chat` LONGTEXT NOT NULL,
  `timestamp` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_chat_idusuario_chat` INT NOT NULL,
  PRIMARY KEY (`idlogs_usuario_chat`, `usuario_chat_idusuario_chat`),
  UNIQUE INDEX `idlogs_usuarios_chat_UNIQUE` (`idlogs_usuario_chat` ASC) VISIBLE,
  INDEX `fk_logs_usuarios_chat_usuario_chat_idx` (`usuario_chat_idusuario_chat` ASC) VISIBLE,
  CONSTRAINT `fk_logs_usuarios_chat_usuario_chat`
    FOREIGN KEY (`usuario_chat_idusuario_chat`)
    REFERENCES `mydb`.`usuario_chat` (`idusuario_chat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
