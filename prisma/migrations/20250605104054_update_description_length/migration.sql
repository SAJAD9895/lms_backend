-- CreateTable
CREATE TABLE "completed_modules" (
    "id" SERIAL NOT NULL,
    "user_uid" TEXT,
    "module_id" INTEGER,
    "completed_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "completed_modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "thumbnail" TEXT,
    "price" DECIMAL(10,2),
    "instructor" VARCHAR(100),
    "instructor_role" VARCHAR(100),
    "instructor_avatar" TEXT,
    "duration" VARCHAR(50),
    "published" DATE,
    "level" VARCHAR(100),
    "preview_video" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enrollments" (
    "id" SERIAL NOT NULL,
    "user_uid" TEXT,
    "course_id" INTEGER,
    "enrolled_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enrollments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modules" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER,
    "title" VARCHAR(255),

    CONSTRAINT "modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "uid" TEXT NOT NULL,
    "phone" VARCHAR(20),
    "name" VARCHAR(100),
    "role" VARCHAR(50),
    "mobile" BOOLEAN DEFAULT false,
    "pc" BOOLEAN DEFAULT false,
    "mobile_address" VARCHAR(255),
    "pc_address" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "videos" (
    "id" SERIAL NOT NULL,
    "module_id" INTEGER,
    "title" VARCHAR(255),
    "duration" VARCHAR(20),
    "is_preview" BOOLEAN DEFAULT false,
    "link" VARCHAR(50),

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "completed_modules_user_uid_module_id_key" ON "completed_modules"("user_uid", "module_id");

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_user_uid_course_id_key" ON "enrollments"("user_uid", "course_id");

-- AddForeignKey
ALTER TABLE "completed_modules" ADD CONSTRAINT "completed_modules_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "completed_modules" ADD CONSTRAINT "completed_modules_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_user_uid_fkey" FOREIGN KEY ("user_uid") REFERENCES "users"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "modules" ADD CONSTRAINT "modules_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
