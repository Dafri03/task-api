-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN DEFAULT false,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
