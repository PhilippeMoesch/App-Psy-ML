-- MySQL dump 10.13  Distrib 8.0.18, for Linux (x86_64)
--
-- Host: localhost    Database: mysql
-- ------------------------------------------------------
-- Server version	8.0.26-google

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `MyDB`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `MyDB` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `MyDB`;

--
-- Table structure for table `measures`
--

DROP TABLE IF EXISTS `measures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `measures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `measure` varchar(15) DEFAULT NULL,
  `occuredOn` text,
  `owner_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  KEY `ix_measures_id` (`id`),
  CONSTRAINT `measures_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measures`
--

LOCK TABLES `measures` WRITE;
/*!40000 ALTER TABLE `measures` DISABLE KEYS */;
INSERT INTO `measures` VALUES (1,'Isolation','2022-09-10T16:37:55.000Z',NULL);
/*!40000 ALTER TABLE `measures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ein_dat` text,
  `clinician` text,
  `dept` text,
  `comment` text,
  `fm_sum` int DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `date` text,
  `h1` int DEFAULT NULL,
  `h2` int DEFAULT NULL,
  `h3` int DEFAULT NULL,
  `h4` int DEFAULT NULL,
  `h5` int DEFAULT NULL,
  `h6` int DEFAULT NULL,
  `h7` int DEFAULT NULL,
  `h8` int DEFAULT NULL,
  `h9` int DEFAULT NULL,
  `h10` int DEFAULT NULL,
  `h11` int DEFAULT NULL,
  `h12` int DEFAULT NULL,
  `ffe` varchar(3) DEFAULT NULL,
  `ort_v_ein` int DEFAULT NULL,
  `ein_art` int DEFAULT NULL,
  `einw_inst` int DEFAULT NULL,
  `dropout_pb_ein` int DEFAULT NULL,
  `dropout_ph_ein` int DEFAULT NULL,
  `geschl` int DEFAULT NULL,
  `alter` int DEFAULT NULL,
  `bildung` int DEFAULT NULL,
  `zivilstand` int DEFAULT NULL,
  `besch_voll` tinyint(1) DEFAULT NULL,
  `besch_teil` tinyint(1) DEFAULT NULL,
  `besch_reha` tinyint(1) DEFAULT NULL,
  `besch_gesch` tinyint(1) DEFAULT NULL,
  `besch_haus` tinyint(1) DEFAULT NULL,
  `besch_iv_ahv` tinyint(1) DEFAULT NULL,
  `besch_nicht` tinyint(1) DEFAULT NULL,
  `besch_ausb` tinyint(1) DEFAULT NULL,
  `besch_unbek` tinyint(1) DEFAULT NULL,
  `hpt_diagn_num` varchar(2) DEFAULT NULL,
  `home_scale` int DEFAULT NULL,
  `F2_scale` int DEFAULT NULL,
  `urgent` int DEFAULT NULL,
  `pred` float DEFAULT NULL,
  `day_0` float DEFAULT NULL,
  `day_1_end` float DEFAULT NULL,
  `pred_med` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_tests_pid` (`pid`),
  KEY `ix_tests_id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (1,'string','string','string','string',0,30,'16:30',0,0,0,4,0,0,0,0,0,1,0,0,'No',1,1,1,1,0,1,33,1,1,1,1,1,1,1,1,1,1,1,'F0',0,0,0,0.3,0.2,0.2,0.1),(2,'string','string','string','string',0,30,'16:31',0,4,0,4,0,0,2,0,2,1,0,0,'No',1,1,1,1,0,1,33,1,1,1,1,1,1,1,1,1,1,1,'F0',0,0,0,0.4,0.3,0.2,0.1),(4,'','','','',0,555,'16:41',9,9,9,9,9,9,9,9,9,9,9,9,'No',0,1,9,0,0,1,43,9,9,0,0,0,0,1,0,0,0,0,'F2',1,0,1,0.101,0.082,0.018,0.003);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `mydata`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mydata` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `mydata`;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-10 15:31:41
