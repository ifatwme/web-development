-- CreateTable
CREATE TABLE "Todo" (
    "uid" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("uid")
);
