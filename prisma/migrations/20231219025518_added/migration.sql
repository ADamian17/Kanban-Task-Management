/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Board` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Subtask" ALTER COLUMN "isCompleted" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Board_name_key" ON "Board"("name");
