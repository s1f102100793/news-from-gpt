/*
  Warnings:

  - You are about to drop the column `content` on the `News` table. All the data in the column will be lost.
  - Added the required column `body` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `News` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "content",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "subtitle" TEXT NOT NULL,
ADD COLUMN     "video" TEXT NOT NULL;
