/*
  Warnings:

  - The primary key for the `News` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `News` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "News" DROP CONSTRAINT "News_pkey",
ADD COLUMN     "clickCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "News_pkey" PRIMARY KEY ("id");
