/*
  Warnings:

  - You are about to drop the `form_contacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "form_contacts";

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "windTurbineCount" INTEGER NOT NULL,
    "technicalVisitAvailability" "TechnicalVisitAvailability" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");
