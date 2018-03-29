-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2018 at 06:10 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kent_wind`
--

-- --------------------------------------------------------

--
-- Table structure for table `historical_data`
--

CREATE TABLE `historical_data` (
  `SensorID` int(11) NOT NULL,
  `Speed` int(11) NOT NULL,
  `Direction` int(11) NOT NULL,
  `Time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `historical_data`
--

INSERT INTO `historical_data` (`SensorID`, `Speed`, `Direction`, `Time`) VALUES
(2, 33, 12, '2018-03-29 05:57:26'),
(3, 97, 4, '2018-03-29 05:57:26'),
(4, 94, 8, '2018-03-29 05:57:26'),
(5, 92, 10, '2018-03-29 05:57:26'),
(6, 49, 10, '2018-03-29 05:57:26'),
(7, 45, 10, '2018-03-29 05:57:26'),
(8, 67, 3, '2018-03-29 05:57:26'),
(9, 79, 9, '2018-03-29 05:57:26'),
(10, 20, 2, '2018-03-29 05:57:26'),
(2, 70, 12, '2018-03-29 06:28:35'),
(3, 95, 3, '2018-03-29 06:28:35'),
(4, 66, 5, '2018-03-29 06:28:35'),
(5, 12, 1, '2018-03-29 06:28:35'),
(6, 4, 1, '2018-03-29 06:28:35'),
(7, 29, 11, '2018-03-29 06:28:35'),
(8, 45, 6, '2018-03-29 06:28:35'),
(9, 60, 15, '2018-03-29 06:28:35'),
(10, 24, 3, '2018-03-29 06:28:35'),
(2, 32, 2, '2018-03-29 06:28:44'),
(3, 12, 2, '2018-03-29 06:28:44'),
(4, 52, 15, '2018-03-29 06:28:44'),
(5, 93, 11, '2018-03-29 06:28:44'),
(6, 85, 3, '2018-03-29 06:28:44'),
(7, 58, 7, '2018-03-29 06:28:44'),
(8, 61, 2, '2018-03-29 06:28:44'),
(9, 43, 5, '2018-03-29 06:28:44'),
(10, 9, 15, '2018-03-29 06:28:44'),
(2, 2, 6, '2018-03-29 06:29:18'),
(3, 18, 7, '2018-03-29 06:29:18'),
(4, 86, 4, '2018-03-29 06:29:18'),
(5, 13, 9, '2018-03-29 06:29:18'),
(6, 80, 8, '2018-03-29 06:29:18'),
(7, 11, 5, '2018-03-29 06:29:18'),
(8, 94, 7, '2018-03-29 06:29:18'),
(9, 71, 5, '2018-03-29 06:29:18'),
(10, 71, 14, '2018-03-29 06:29:18');

-- --------------------------------------------------------

--
-- Table structure for table `live_data`
--

CREATE TABLE `live_data` (
  `SensorID` int(11) NOT NULL,
  `Speed` int(11) NOT NULL,
  `Direction` int(11) NOT NULL,
  `Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `live_data`
--

INSERT INTO `live_data` (`SensorID`, `Speed`, `Direction`, `Time`) VALUES
(2, 94, 3, '2018-03-29 07:07:48'),
(3, 12, 2, '2018-03-29 07:07:48'),
(4, 86, 3, '2018-03-29 07:07:48'),
(5, 21, 10, '2018-03-29 07:07:48'),
(6, 16, 15, '2018-03-29 07:07:48'),
(7, 38, 6, '2018-03-29 07:07:48'),
(8, 41, 7, '2018-03-29 07:07:48'),
(9, 40, 2, '2018-03-29 07:07:48'),
(10, 57, 7, '2018-03-29 07:07:48');

-- --------------------------------------------------------

--
-- Table structure for table `wind_sensor`
--

CREATE TABLE `wind_sensor` (
  `SensorID` int(11) NOT NULL,
  `Location` text,
  `Longitude` float NOT NULL,
  `Latitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wind_sensor`
--

INSERT INTO `wind_sensor` (`SensorID`, `Location`, `Longitude`, `Latitude`) VALUES
(2, 'BOWMAN', 41.1485, -81.3461),
(3, 'LIB', 41.1467, -81.3419),
(4, 'LIQUID', 41.1443, -81.3415),
(5, 'MSB', 41.1443, -81.3415),
(6, 'HENDERSON', 41.1443, -81.3409),
(7, 'AERONAUTICS', 41.1443, -81.3409),
(8, 'RISMAN', 41.1471, -81.3517),
(9, 'KIVA', 41.1471, -81.3436),
(10, 'STUDENT CENTER', 41.2324, -81.3432);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `historical_data`
--
ALTER TABLE `historical_data`
  ADD KEY `id` (`SensorID`);

--
-- Indexes for table `live_data`
--
ALTER TABLE `live_data`
  ADD KEY `id` (`SensorID`);

--
-- Indexes for table `wind_sensor`
--
ALTER TABLE `wind_sensor`
  ADD PRIMARY KEY (`SensorID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `historical_data`
--
ALTER TABLE `historical_data`
  ADD CONSTRAINT `historical_consistency` FOREIGN KEY (`SensorID`) REFERENCES `wind_sensor` (`SensorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `live_data`
--
ALTER TABLE `live_data`
  ADD CONSTRAINT `id_consistency` FOREIGN KEY (`SensorID`) REFERENCES `wind_sensor` (`SensorID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
