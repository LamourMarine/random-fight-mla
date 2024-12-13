-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : database
-- Généré le : lun. 18 nov. 2024 à 14:29
-- Version du serveur : 9.1.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `random_fight`
-- 
CREATE DATABASE IF NOT EXISTS random_fight;
USE random_fight;

-- --------------------------------------------------------

--
-- Structure de la table `characters`
--

CREATE TABLE `character` (
  `id_Character` int NOT NULL,
  `class_Character` varchar(225) DEFAULT NULL,
  `name_Character` varchar(225) DEFAULT NULL,
  `xp_Character` int DEFAULT '0',
  `avatar_Character` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `character` (`id_Character`, `class_Character`, `name_Character`, `xp_Character`, `avatar_Character`) VALUES
(1, 'Docker', 'Docker', 0, 'docker.webp'),
(3, 'Linux', 'Linux', 0, 'linux.webp'),
(4, 'Java', 'Java', 0, 'java.webp'),
(7, 'Swift', 'Swift', 0, 'swift.webp'),
(8, 'Php', 'Php', 0, 'php.webp'),
(9, 'MariaDB', 'MariaDB', 0, 'mariaDB.webp'),
(10, 'Podman', 'Podman', 0, 'podman.webp'),
(11, 'GitHub', 'GitHub', 0, 'gitHub.webp'),
(12, 'Go', 'Go', 0, 'go.webp');


-- --------------------------------------------------------

--
-- Structure de la table `characters_in`
--

CREATE TABLE `character_in` (
  `id_Character` int NOT NULL,
  `id_team` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `character_in` (`id_Character`, `id_team`) VALUES
(3, 1),
(4, 1),
(8, 1),
(9, 1),
(1, 2),
(11, 2),
(12, 2),
(7, 3),
(10, 3);
-- --------------------------------------------------------

--
-- Structure de la table `Players`
--

CREATE TABLE `player` (
  `id_Player` int NOT NULL,
  `First_name_Player` varchar(255) DEFAULT NULL,
  `Last_name_Player` varchar(255) DEFAULT NULL,
  `mail_Player` varchar(225) DEFAULT NULL,
  `password_Player` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `teams`
--

CREATE TABLE `team` (
  `id_team` int NOT NULL,
  `team_name_team` varchar(225) DEFAULT NULL,
  `victory_team` int DEFAULT '0',
  `defeat_team` int DEFAULT '0',
  `created_at_team` timestamp DEFAULT CURRENT_TIMESTAMP,
  `player_id_player` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `team` (`id_team`, `team_name_team`, `victory_team`, `defeat_team`, `created_at_team`, `player_id_player`) VALUES
(1, 'Les codeurs du dimanche', 0, 0, '2024-11-20 08:56:28', NULL),
(2, 'IA Lovers', 0, 0, '2024-11-20 08:57:18', NULL),
(3, 'Simplon', 0, 0, '2024-11-20 08:57:26', NULL);
--
-- Index pour les tables déchargées
--

--
-- Index pour la table `characters`
--
ALTER TABLE `character`
  ADD PRIMARY KEY (`id_Character`);

--
-- Index pour la table `characters_in`
--
ALTER TABLE `character_in`
  ADD PRIMARY KEY (`id_Character`,`id_team`),
  ADD KEY `FK_Character_in_id_team` (`id_team`);

--
-- Index pour la table `Players`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id_Player`);

--
-- Index pour la table `teams`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id_team`),
  ADD UNIQUE KEY `team_name_team` (`team_name_team`),
  ADD KEY `FK_team_player_id_player` (`player_id_player`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Characters`
--
ALTER TABLE `character`
  MODIFY `id_Character` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Players`
--
ALTER TABLE `player`
  MODIFY `id_Player` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `teams`
--
ALTER TABLE `team`
  MODIFY `id_team` int NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `characters_in`
--
ALTER TABLE `character_in`
  ADD CONSTRAINT `FK_Character_in_id_Character` FOREIGN KEY (`id_Character`) REFERENCES `character` (`id_Character`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `FK_Character_in_id_team` FOREIGN KEY (`id_team`) REFERENCES `team` (`id_team`);

--
-- Contraintes pour la table `teams`
--
ALTER TABLE `team`
  ADD CONSTRAINT `FK_teams_player_id_player` FOREIGN KEY (`player_id_player`) REFERENCES `player` (`id_Player`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
