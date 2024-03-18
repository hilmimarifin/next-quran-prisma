/*
  Warnings:

  - Made the column `name` on table `Bookmark` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `surat` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ayat` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmark" ALTER COLUMN "name" SET NOT NULL,
DROP COLUMN "surat",
ADD COLUMN     "surat" INTEGER NOT NULL,
DROP COLUMN "ayat",
ADD COLUMN     "ayat" INTEGER NOT NULL;
