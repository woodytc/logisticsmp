-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Dec 08, 2014 at 05:52 AM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `deshboard`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `activity`
-- 

CREATE TABLE `activity` (
  `id` int(11) NOT NULL auto_increment,
  `parent_id` int(11) NOT NULL default '0',
  `์project_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `progress` float NOT NULL,
  `budget` float NOT NULL,
  `seq` float NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `activity`
-- 


-- --------------------------------------------------------

-- 
-- Table structure for table `project`
-- 

CREATE TABLE `project` (
  `id` int(11) NOT NULL auto_increment,
  `strategic_id` int(11) NOT NULL,
  `strategy_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seq` float NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `progress` decimal(10,2) default NULL,
  `budget` decimal(20,2) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

-- 
-- Dumping data for table `project`
-- 

INSERT INTO `project` VALUES (2, 11, 5, 'jfxmekt', 125, '2014-12-01', '2014-12-31', 0.70, 7000000.00);
INSERT INTO `project` VALUES (3, 13, 5, 'sfsdfsdf', 2, '2014-12-25', '2014-12-31', 0.80, 789456.00);
INSERT INTO `project` VALUES (4, 1, 5, '12313', 125, '2014-12-01', '2014-12-16', 1.00, 8000000.00);

-- --------------------------------------------------------

-- 
-- Table structure for table `strategic`
-- 

CREATE TABLE `strategic` (
  `id` int(11) NOT NULL auto_increment,
  `year` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seq` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

-- 
-- Dumping data for table `strategic`
-- 

INSERT INTO `strategic` VALUES (1, 2014, 'sfsdfsdf', 1);
INSERT INTO `strategic` VALUES (5, 2013, 'ss', 5);
INSERT INTO `strategic` VALUES (11, 2015, 'qqq', 3);
INSERT INTO `strategic` VALUES (13, 2015, 'sfsdfsssssfsd', 4);
INSERT INTO `strategic` VALUES (14, 2008, '13132', 15);

-- --------------------------------------------------------

-- 
-- Table structure for table `strategy`
-- 

CREATE TABLE `strategy` (
  `id` int(11) NOT NULL auto_increment,
  `strategic_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seq` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

-- 
-- Dumping data for table `strategy`
-- 

INSERT INTO `strategy` VALUES (3, 1, '5555666', 2);
INSERT INTO `strategy` VALUES (5, 13, 'sfsdfsdf', 2);
