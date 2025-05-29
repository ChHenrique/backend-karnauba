/*
  Warnings:

  - You are about to drop the column `color01` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `color02` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "color01" TEXT,
ADD COLUMN     "color02" TEXT;

-- AlterTable
ALTER TABLE "Place" DROP COLUMN "color01",
DROP COLUMN "color02";
