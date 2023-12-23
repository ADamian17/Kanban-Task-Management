/*
  Warnings:

  - A unique constraint covering the columns `[uri]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uri` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "uri" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Board_uri_key" ON "Board"("uri");
