/*
  Warnings:

  - You are about to drop the column `windTurbineCount` on the `contacts` table. All the data in the column will be lost.
  - The `technicalVisitAvailability` column on the `contacts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "windTurbineCount",
ADD COLUMN     "businessType" TEXT,
ADD COLUMN     "lgpdConsent" BOOLEAN,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "position" DROP NOT NULL,
DROP COLUMN "technicalVisitAvailability",
ADD COLUMN     "technicalVisitAvailability" TEXT;

-- DropEnum
DROP TYPE "TechnicalVisitAvailability";
