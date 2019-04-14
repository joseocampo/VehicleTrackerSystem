-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 15, 2018 at 05:12 PM
-- Server version: 5.7.21-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tracker_system_db`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `administrator` (IN `user` VARCHAR(40))  BEGIN
	SET @object = '*.*';

	SET @query = CONCAT('GRANT ALL PRIVILEGES ON ', @object, ' TO ', user);
	PREPARE stmt FROM @query;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
	FLUSH PRIVILEGES;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_administrador` (IN `user` VARCHAR(40))  BEGIN
	REVOKE ALL PRIVILEGES, GRANT OPTION FROM user;
	FLUSH PRIVILEGES;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `drop_user` (IN `user` VARCHAR(40))  BEGIN

	SET @query = CONCAT('DROP USER ', user);
	PREPARE stmt FROM @query;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
	FLUSH PRIVILEGES;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `vehicle_user` (IN `user` VARCHAR(40))  BEGIN
	SET @object =   'tracker_system_db.';
    SET @fails 	= 	CONCAT('GRANT INSERT ON ',@object,'t_failures to ',user);
    SET @incident = CONCAT('GRANT INSERT ON ',@object,'t_incidents to ',user);
    SET @routes =   CONCAT('GRANT INSERT, UPDATE ON ',@object,'t_routes to ',user);

	PREPARE stmt FROM @fails;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
    
    PREPARE stmt2 FROM @incident;
	EXECUTE stmt2;
	DEALLOCATE PREPARE stmt2;
    
    PREPARE stmt3 FROM @routes;
	EXECUTE stmt3;
	DEALLOCATE PREPARE stmt3;
    
	FLUSH PRIVILEGES;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `t_binnacle`
--

CREATE TABLE `t_binnacle` (
  `User` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_failures`
--

CREATE TABLE `t_failures` (
  `PK_Date` datetime NOT NULL,
  `Cost` float NOT NULL,
  `Details` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `FK_User` varchar(12) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FK_Vehicle` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_incidents`
--

CREATE TABLE `t_incidents` (
  `PK_Date` datetime NOT NULL,
  `Details` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `Cost` float NOT NULL,
  `FK_User` varchar(12) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FK_Vehicle` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_municipality_details`
--

CREATE TABLE `t_municipality_details` (
  `Name` varchar(45) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Logo` mediumblob NOT NULL,
  `Address` varchar(50) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Mission` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Vission` text CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Phone_number` varchar(12) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_routes`
--

CREATE TABLE `t_routes` (
  `PK_Date` date NOT NULL,
  `Travel` blob NOT NULL,
  `Details` varchar(45) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `FK_User` varchar(12) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `FK_Vehicle` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_user_information`
--

CREATE TABLE `t_user_information` (
  `PK_Id` varchar(12) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Name` varchar(20) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Surname` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Second_surname` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Area` varchar(25) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Phone_number` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `Email` varchar(20) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `Address` varchar(45) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `vehicle` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_vehicle`
--

CREATE TABLE `t_vehicle` (
  `PK_License_plate` varchar(8) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Model` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Brand` varchar(15) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `Year_purchase` varchar(4) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_failures`
--
ALTER TABLE `t_failures`
  ADD PRIMARY KEY (`PK_Date`),
  ADD KEY `User` (`FK_User`),
  ADD KEY `Vehicle` (`FK_Vehicle`);

--
-- Indexes for table `t_incidents`
--
ALTER TABLE `t_incidents`
  ADD PRIMARY KEY (`PK_Date`),
  ADD KEY `User` (`FK_User`),
  ADD KEY `Vehicle` (`FK_Vehicle`);

--
-- Indexes for table `t_routes`
--
ALTER TABLE `t_routes`
  ADD PRIMARY KEY (`PK_Date`),
  ADD KEY `User` (`FK_User`),
  ADD KEY `Vehicle` (`FK_Vehicle`);

--
-- Indexes for table `t_user_information`
--
ALTER TABLE `t_user_information`
  ADD PRIMARY KEY (`PK_Id`),
  ADD KEY `FKVehicleU` (`vehicle`);

--
-- Indexes for table `t_vehicle`
--
ALTER TABLE `t_vehicle`
  ADD PRIMARY KEY (`PK_License_plate`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_failures`
--
ALTER TABLE `t_failures`
  ADD CONSTRAINT `fk_failures_user` FOREIGN KEY (`FK_User`) REFERENCES `t_user_information` (`PK_Id`),
  ADD CONSTRAINT `fk_failures_vehicle` FOREIGN KEY (`FK_Vehicle`) REFERENCES `t_vehicle` (`PK_License_plate`);

--
-- Constraints for table `t_incidents`
--
ALTER TABLE `t_incidents`
  ADD CONSTRAINT `fk_incidents_user` FOREIGN KEY (`FK_User`) REFERENCES `t_user_information` (`PK_Id`),
  ADD CONSTRAINT `fk_incidents_vehicle` FOREIGN KEY (`FK_Vehicle`) REFERENCES `t_vehicle` (`PK_License_plate`);

--
-- Constraints for table `t_routes`
--
ALTER TABLE `t_routes`
  ADD CONSTRAINT `fk_routes_user` FOREIGN KEY (`FK_User`) REFERENCES `t_user_information` (`PK_Id`),
  ADD CONSTRAINT `fk_routes_vehicle` FOREIGN KEY (`FK_Vehicle`) REFERENCES `t_vehicle` (`PK_License_plate`);

--
-- Constraints for table `t_user_information`
--
ALTER TABLE `t_user_information`
  ADD CONSTRAINT `fk_user_vehicle` FOREIGN KEY (`vehicle`) REFERENCES `t_vehicle` (`PK_License_plate`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
