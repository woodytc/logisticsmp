-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Dec 04, 2014 at 05:59 AM
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
  ` strategic_id` int(11) NOT NULL,
  ` strategy_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seq` float NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `progress` float NOT NULL,
  `budget` float NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table `project`
-- 


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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

-- 
-- Dumping data for table `strategic`
-- 

INSERT INTO `strategic` VALUES (1, 2014, 'Test ยุทธศาสตร์ 1', 1);
INSERT INTO `strategic` VALUES (2, 2011, 'sdfsdfsdf', 3);
INSERT INTO `strategic` VALUES (3, 2008, 'sdfds', 2);
INSERT INTO `strategic` VALUES (4, 2008, 'sfsdf', 8);
INSERT INTO `strategic` VALUES (5, 2013, 'sfsdf', 5);
INSERT INTO `strategic` VALUES (6, 2007, 'xyz', 1);
INSERT INTO `strategic` VALUES (7, 2006, 'TEstgsdtafasdf fasdfasdf', 2);
INSERT INTO `strategic` VALUES (8, 2010, 'sdfsdf', 1);
INSERT INTO `strategic` VALUES (9, 2015, 'tsetse', 0);
INSERT INTO `strategic` VALUES (10, 2015, '152', 152);
INSERT INTO `strategic` VALUES (11, 2015, 'tsetse', 3);

-- --------------------------------------------------------

-- 
-- Table structure for table ` strategy`
-- 

CREATE TABLE ` strategy` (
  `id` int(11) NOT NULL auto_increment,
  ` strategic_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seq` float NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- 
-- Dumping data for table ` strategy`
-- 

