CREATE TABLE `google_reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`authorName` varchar(255) NOT NULL,
	`authorPhotoUrl` text,
	`rating` int NOT NULL,
	`text` text NOT NULL,
	`relativeTimeDescription` varchar(100),
	`publishedAt` timestamp,
	`isVisible` int NOT NULL DEFAULT 1,
	`sortOrder` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `google_reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`key` varchar(100) NOT NULL,
	`value` text,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `settings_key` PRIMARY KEY(`key`)
);
