-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2021 at 01:01 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogpostdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `score` double(20,2) DEFAULT 0.00,
  `status` int(1) DEFAULT 1 COMMENT '0 = pending, 1 = active, 2 = canceled',
  `jwt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `phoneNo`, `image`, `score`, `status`, `jwt`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Sujan', 'Das', 'admin@admin.com', '$2a$10$v2Zfh3yMnQFr/jjydogPjOecBaq9tmgwlBKsWJPFRXSyHOCIvhWui', 'foys lake', '0987456321', NULL, 0.00, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGltZSI6IjIwMjEtMTAtMjFUMTE6MjU6MDUuNzQzWiIsImlhdCI6MTYzNDgxNTUwNX0.oL4uy6qcZLswjGXyOzET7DWHliSSsyJGJt1wkto2E44', '2021-10-21 17:24:12', '2021-10-21 17:25:05', NULL),
(2, 'Shuvo', 'Das', 'admin2@admin.com', '$2a$10$BU2tCNIiQABbOVKLyrRexeiEW9MVGpY5XcwuzdPvT7LBV.CXBgDLm', 'foys lake', '0987456321', NULL, 0.00, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidGltZSI6IjIwMjEtMTAtMjNUMDQ6NTk6MjMuMDM2WiIsImlhdCI6MTYzNDk2NTE2M30.efWvIYI3MYmM39f12xVbxmHYfRN4QtG_enGG-F7uwlo', '2021-10-21 17:24:35', '2021-10-23 10:59:23', NULL),
(3, 'Mizan', 'Vai', 'admin3@admin.com', '$2a$10$EycPYrgRJj.S0LSnqZP8/O1ft7cFaYkWdc2E89suzXbB72cpTBTma', 'foys lake', '0987456321', NULL, 0.00, 1, NULL, '2021-10-21 17:24:58', '2021-10-21 17:24:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_category_histories`
--

CREATE TABLE `admin_category_histories` (
  `id` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `type` int(11) DEFAULT 1 COMMENT ' 0 = deleted, 1 = created, 2 = updated',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_category_histories`
--

INSERT INTO `admin_category_histories` (`id`, `adminId`, `categoryId`, `type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 1, '2021-10-21 17:25:25', '2021-10-21 17:25:25', NULL),
(2, 1, 2, 1, '2021-10-21 17:26:25', '2021-10-21 17:26:25', NULL),
(3, 1, 2, 2, '2021-10-21 17:26:55', '2021-10-21 17:26:55', NULL),
(4, 1, 2, 0, '2021-10-21 17:27:23', '2021-10-21 17:27:23', NULL),
(5, 1, 3, 1, '2021-10-21 17:30:33', '2021-10-21 17:30:33', NULL),
(6, 2, 4, 1, '2021-10-23 11:22:52', '2021-10-23 11:22:52', NULL),
(7, 2, 5, 1, '2021-10-23 11:25:09', '2021-10-23 11:25:09', NULL),
(8, 2, 6, 1, '2021-10-23 11:25:53', '2021-10-23 11:25:53', NULL),
(9, 2, 5, 0, '2021-10-23 11:26:50', '2021-10-23 11:26:50', NULL),
(10, 2, 6, 0, '2021-10-23 11:26:56', '2021-10-23 11:26:56', NULL),
(11, 2, 3, 0, '2021-10-23 12:14:08', '2021-10-23 12:14:08', NULL),
(12, 2, 3, 3, '2021-10-23 12:14:52', '2021-10-23 12:14:52', NULL),
(13, 2, 3, 3, '2021-10-23 12:16:15', '2021-10-23 12:16:15', NULL),
(14, 2, 3, 3, '2021-10-23 12:17:12', '2021-10-23 12:17:12', NULL),
(15, 2, 3, 3, '2021-10-23 12:19:58', '2021-10-23 12:19:58', NULL),
(16, 2, 5, 3, '2021-10-23 12:23:33', '2021-10-23 12:23:33', NULL),
(17, 2, 6, 3, '2021-10-23 12:23:38', '2021-10-23 12:23:38', NULL),
(18, 2, 2, 4, '2021-10-23 12:52:20', '2021-10-23 12:52:20', NULL),
(19, 2, 2, 4, '2021-10-23 12:53:03', '2021-10-23 12:53:03', NULL),
(20, 2, 2, 4, '2021-10-23 12:53:59', '2021-10-23 12:53:59', NULL),
(21, 2, 2, 4, '2021-10-23 12:59:03', '2021-10-23 12:59:03', NULL),
(22, 2, 2, 4, '2021-10-23 12:59:18', '2021-10-23 12:59:18', NULL),
(23, 2, 2, 4, '2021-10-23 12:59:47', '2021-10-23 12:59:47', NULL),
(24, 2, 2, 4, '2021-10-23 13:03:11', '2021-10-23 13:03:11', NULL),
(25, 2, 2, 4, '2021-10-23 13:05:45', '2021-10-23 13:05:45', NULL),
(26, 2, 4, 0, '2021-10-23 13:06:12', '2021-10-23 13:06:12', NULL),
(27, 2, 4, 4, '2021-10-23 13:06:20', '2021-10-23 13:06:20', NULL),
(28, 2, 4, 0, '2021-10-23 13:08:00', '2021-10-23 13:08:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `admin_post_histories`
--

CREATE TABLE `admin_post_histories` (
  `id` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `type` int(11) DEFAULT 1 COMMENT ' 0 = deleted, 1 = created, 2 = updated',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin_post_histories`
--

INSERT INTO `admin_post_histories` (`id`, `adminId`, `postId`, `type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 1, '2021-10-21 18:36:23', '2021-10-21 18:36:23', NULL),
(2, 1, 2, 1, '2021-10-23 15:30:43', '2021-10-23 15:30:43', NULL),
(3, 1, 2, 2, '2021-10-23 15:46:08', '2021-10-23 15:46:08', NULL),
(4, 1, 2, 2, '2021-10-23 15:47:29', '2021-10-23 15:47:29', NULL),
(5, 1, 2, 2, '2021-10-23 15:47:32', '2021-10-23 15:47:32', NULL),
(6, 1, 2, 2, '2021-10-23 16:05:31', '2021-10-23 16:05:31', NULL),
(7, 1, 2, 0, '2021-10-23 16:32:38', '2021-10-23 16:32:38', NULL),
(8, 1, 2, 4, '2021-10-23 17:14:50', '2021-10-23 17:14:50', NULL),
(9, 1, 2, 0, '2021-10-23 17:15:31', '2021-10-23 17:15:31', NULL),
(10, 1, 2, 4, '2021-10-23 17:16:29', '2021-10-23 17:16:29', NULL),
(11, 1, 2, 0, '2021-10-23 17:17:18', '2021-10-23 17:17:18', NULL),
(12, 1, 2, 3, '2021-10-23 17:34:46', '2021-10-23 17:34:46', NULL),
(13, 1, 3, 1, '2021-10-24 13:29:15', '2021-10-24 13:29:15', NULL),
(14, 1, 4, 1, '2021-10-24 13:29:51', '2021-10-24 13:29:51', NULL),
(15, 1, 5, 1, '2021-10-24 13:30:30', '2021-10-24 13:30:30', NULL),
(16, 1, 6, 1, '2021-10-24 13:31:06', '2021-10-24 13:31:06', NULL),
(17, 1, 7, 1, '2021-10-24 13:31:35', '2021-10-24 13:31:35', NULL),
(18, 1, 8, 1, '2021-10-24 13:31:54', '2021-10-24 13:31:54', NULL),
(19, 1, 9, 1, '2021-10-24 13:32:22', '2021-10-24 13:32:22', NULL),
(20, 1, 10, 1, '2021-10-24 13:32:47', '2021-10-24 13:32:47', NULL),
(21, 1, 11, 1, '2021-10-24 13:33:08', '2021-10-24 13:33:08', NULL),
(22, 1, 12, 1, '2021-10-24 13:33:32', '2021-10-24 13:33:32', NULL),
(23, 1, 13, 1, '2021-10-24 13:33:55', '2021-10-24 13:33:55', NULL),
(24, 1, 14, 1, '2021-10-24 13:34:21', '2021-10-24 13:34:21', NULL),
(25, 1, 15, 1, '2021-10-24 13:34:53', '2021-10-24 13:34:53', NULL),
(26, 1, 16, 1, '2021-10-24 13:35:14', '2021-10-24 13:35:14', NULL),
(27, 1, 17, 1, '2021-10-24 16:13:40', '2021-10-24 16:13:40', NULL),
(28, 1, 18, 1, '2021-10-24 16:14:34', '2021-10-24 16:14:34', NULL),
(29, 1, 19, 1, '2021-10-24 16:14:51', '2021-10-24 16:14:51', NULL),
(30, 1, 20, 1, '2021-10-24 16:16:19', '2021-10-24 16:16:19', NULL),
(31, 1, 21, 1, '2021-10-24 16:16:31', '2021-10-24 16:16:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1 COMMENT '0 = pending, 1 = active, 2 = canceled',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `status`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Technology', 'technology', 1, '2021-10-21 17:25:25', '2021-10-21 17:25:25', NULL),
(2, 'Programming', 'programming', 1, '2021-10-21 17:26:25', '2021-10-21 17:26:55', NULL),
(4, 'Social Media', 'social-media', 1, '2021-10-23 11:22:52', '2021-10-23 11:22:52', '2021-10-23 13:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `postId`, `userId`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 1, '1', 'this is 1st comment of 1st post of 1st category from 1st user', '2021-10-24 13:12:12', '2021-10-24 13:12:12');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `body` varchar(255) NOT NULL,
  `status` int(1) DEFAULT 1 COMMENT '0 = pending, 1 = active, 2 = deactive, 3 = deleted',
  `keywords` varchar(255) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `body`, `status`, `keywords`, `categoryId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'sunt-aut-facere-repellat-provident-occaecati-excepturi-optio-reprehenderit', 'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-21 18:36:23', '2021-10-21 18:36:23', NULL),
(3, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'ea-molestias-quasi-exercitationem-repellat-qui-ipsa-sit-aut', 'et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:29:15', '2021-10-24 13:29:15', NULL),
(4, 'eum et est occaecati', 'eum-et-est-occaecati', 'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:29:51', '2021-10-24 13:29:51', NULL),
(5, 'nesciunt quas odio', 'nesciunt-quas-odio', 'repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:30:30', '2021-10-24 13:30:30', NULL),
(6, 'dolorem eum magni eos aperiam quia', 'dolorem-eum-magni-eos-aperiam-quia', 'ut aspernatur corporis harum nihil quis provident sequi\\nmollitia nobis aliquid molestiae\\nperspiciatis et ea nemo ab reprehenderit accusantium quas\\nvoluptate dolores velit et doloremque molestiae', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:31:06', '2021-10-24 13:31:06', NULL),
(7, 'magnam facilis autem', 'magnam-facilis-autem', 'dolore placeat quibusdam ea quo vitae\\nmagni quis enim qui quis quo nemo aut saepe\\nquidem repellat excepturi ut quia\\nsunt ut sequi eos ea sed quas', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:31:35', '2021-10-24 13:31:35', NULL),
(8, 'dolorem dolore est ipsam', 'dolorem-dolore-est-ipsam', 'dignissimos aperiam dolorem qui eum\\nfacilis quibusdam animi sint suscipit qui sint possimus cum\\nquaerat magni maiores excepturi\\nipsam ut commodi dolor voluptatum modi aut vitae', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 1, '2021-10-24 13:31:54', '2021-10-24 13:31:54', NULL),
(9, 'nesciunt iure omnis dolorem tempora et accusantium', 'nesciunt-iure-omnis-dolorem-tempora-et-accusantium', 'consectetur animi nesciunt iure dolore\\nenim quia ad\\nveniam autem ut quam aut nobis\\net est aut quod aut provident voluptas autem voluptas', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:32:22', '2021-10-24 13:32:22', NULL),
(10, 'optio molestias id quia eum', 'optio-molestias-id-quia-eum', 'quo et expedita modi cum officia vel magni\\ndoloribus qui repudiandae\\nvero nisi sit\\nquos veniam quod sed accusamus veritatis error', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:32:47', '2021-10-24 13:32:47', NULL),
(11, 'et ea vero quia laudantium autem', 'et-ea-vero-quia-laudantium-autem', 'electus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\\naccusamus in eum beatae sit\\nvel qui neque voluptates ut commodi qui incidunt\\nut animi commodi', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:33:08', '2021-10-24 13:33:08', NULL),
(12, 'in quibusdam tempore odit est dolorem', 'in-quibusdam-tempore-odit-est-dolorem', 'itaque id aut magnam\\npraesentium quia et ea odit et ea voluptas et\\nsapiente quia nihil amet occaecati quia id voluptatem\\nincidunt ea est distinctio odio', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:33:32', '2021-10-24 13:33:32', NULL),
(13, 'dolorum ut in voluptas mollitia et saepe quo animi', 'dolorum-ut-in-voluptas-mollitia-et-saepe-quo-animi', 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\\niste corrupti reiciendis voluptatem eius rerum\\nsit cumque quod eligendi laborum minima\\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsa', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:33:55', '2021-10-24 13:33:55', NULL),
(14, 'voluptatem eligendi optio', 'voluptatem-eligendi-optio', 'fuga et accusamus dolorum perferendis illo voluptas\\nnon doloremque neque facere\\nad qui dolorum molestiae beatae\\nsed aut voluptas totam sit illum', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:34:21', '2021-10-24 13:34:21', NULL),
(15, 'eveniet quod temporibus', 'eveniet-quod-temporibus', 'reprehenderit quos placeat\\nvelit minima officia dolores impedit repudiandae molestiae nam\\nvoluptas recusandae quis delectus\\nofficiis harum fugiat vitae', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:34:53', '2021-10-24 13:34:53', NULL),
(16, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odio', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 13:35:14', '2021-10-24 13:35:14', NULL),
(17, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odioslkda;kjlfklsdf', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odioslkdakjlfklsdf', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 16:13:40', '2021-10-24 16:13:40', NULL),
(18, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odioslkda;kjlfklsdfdsfd', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odioslkdakjlfklsdfdsfd', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 16:14:34', '2021-10-24 16:14:34', NULL),
(19, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odioslkda;kjlfklsdfdsfddsfsd', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odioslkdakjlfklsdfdsfddsfsd', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 16:14:51', '2021-10-24 16:14:51', NULL),
(20, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odioslkda;kjlfklsdfdsfddsfsddfdf', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odioslkdakjlfklsdfdsfddsfsddfdf', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '\"[\\\"abc\\\", \\\"xyz\\\"]\"', 2, '2021-10-24 16:16:19', '2021-10-24 16:16:19', NULL),
(21, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odioslkda;kjlfklsdfdsfddsfsddfdfewrewr', 'sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odioslkdakjlfklsdfdsfddsfsddfdfewrewr', 'suscipit nam nisi quo aperiam aut\\nasperiores eos fugit maiores voluptatibus quia\\nvoluptatem quis ullam qui in alias quia est\\nconsequatur magni mollitia accusamus ea nisi voluptate dicta', 1, '[\"abc\",\"xyz\"]', 2, '2021-10-24 16:16:31', '2021-10-24 16:16:31', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `score` double(20,2) DEFAULT 0.00,
  `status` int(1) DEFAULT 1 COMMENT '0 = pending, 1 = active, 2 = canceled',
  `jwt` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `phoneNo`, `image`, `score`, `status`, `jwt`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Sujan', 'Das', 'user@user.com', '$2a$10$XTQAS0TRzMsJltaGRbQJSuyaP4Ggd2af0N8KnFfiCtNBJuQslFIEG', 'foys lake', '0987456321', NULL, 0.00, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidGltZSI6IjIwMjEtMTAtMjNUMTI6MTA6MzMuOTM2WiIsImlhdCI6MTYzNDk5MTAzM30.wrX99YSz8yJFMHv2DaVOh5d62UlE-PQ8DjJJ5_17Xjo', '2021-10-23 18:10:26', '2021-10-23 18:10:33', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `admin_category_histories`
--
ALTER TABLE `admin_category_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_post_histories`
--
ALTER TABLE `admin_post_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admin_category_histories`
--
ALTER TABLE `admin_category_histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `admin_post_histories`
--
ALTER TABLE `admin_post_histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
