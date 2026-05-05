CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`lastName` varchar(100) NOT NULL,
	`phone` varchar(30) NOT NULL,
	`email` varchar(320),
	`address` varchar(255) NOT NULL,
	`city` varchar(100) NOT NULL,
	`situation` text NOT NULL,
	`source` varchar(100) DEFAULT 'lead-capture',
	`status` enum('new','contacted','qualified','closed','lost') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
