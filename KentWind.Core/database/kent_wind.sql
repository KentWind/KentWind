-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2018 at 08:39 PM
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
-- Table structure for table `live_data`
--

CREATE TABLE `live_data` (
  `id` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  `direction` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `live_data`
--

INSERT INTO `live_data` (`id`, `speed`, `direction`, `time`) VALUES
(2, 32, 5, '2018-02-15 19:33:26');

-- --------------------------------------------------------

--
-- Table structure for table `wind_sensor`
--

CREATE TABLE `wind_sensor` (
  `id` int(11) NOT NULL,
  `location` text,
  `x` float NOT NULL,
  `y` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wind_sensor`
--

INSERT INTO `wind_sensor` (`id`, `location`, `x`, `y`) VALUES
(2, 'BOWMAN', 30, 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `live_data`
--
ALTER TABLE `live_data`
  ADD KEY `id` (`id`);

--
-- Indexes for table `wind_sensor`
--
ALTER TABLE `wind_sensor`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `live_data`
--
ALTER TABLE `live_data`
  ADD CONSTRAINT `id_consistency` FOREIGN KEY (`id`) REFERENCES `wind_sensor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
