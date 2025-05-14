-- CreateEnum
CREATE TYPE "TechnicalVisitAvailability" AS ENUM ('NEXT_WEEK', 'NEXT_15_DAYS');

-- CreateTable
CREATE TABLE "form_contacts" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "windTurbineCount" INTEGER NOT NULL,
    "technicalVisitAvailability" "TechnicalVisitAvailability" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_contacts_pkey" PRIMARY KEY ("id")
);
