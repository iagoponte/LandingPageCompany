/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `form_contacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "form_contacts_email_key" ON "form_contacts"("email");
