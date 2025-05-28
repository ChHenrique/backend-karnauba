/*
  Warnings:

  - You are about to drop the column `phone` on the `Place` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Place` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Place" DROP COLUMN "phone",
DROP COLUMN "website",
ADD COLUMN     "color01" TEXT,
ADD COLUMN     "color02" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "whatsapp" TEXT;
