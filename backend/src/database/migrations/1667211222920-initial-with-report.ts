import { MigrationInterface, QueryRunner } from 'typeorm'

export class initialWithReport1667211222920 implements MigrationInterface {
  name = 'initialWithReport1667211222920'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."reports_institution_enum" AS ENUM('AH', 'CGH', 'KTPH', 'NTFGH', 'NUH (A)', 'SGH', 'SKH', 'TTSH')`,
    )
    await queryRunner.query(
      `CREATE TABLE "reports" ("id" character varying(255) NOT NULL, "institution" "public"."reports_institution_enum" NOT NULL, "reporterId" character varying(255) NOT NULL, "active" boolean NOT NULL, "waitMinutes" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "reporters" ("id" character varying(255) NOT NULL, "whitelisted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_7dc9abb7797d692a68ca3f289b2" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user_email_idx" ON "users" ("email") WHERE "deletedAt" IS NULL`,
    )
    await queryRunner.query(
      `CREATE TABLE "sessions" ("id" character varying(255) NOT NULL, "expiredAt" bigint NOT NULL, "json" text NOT NULL DEFAULT '', "destroyedAt" TIMESTAMP, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "sessions_expiredAt_idx" ON "sessions" ("expiredAt") `,
    )
    await queryRunner.query(
      `ALTER TABLE "reports" ADD CONSTRAINT "FK_4353be8309ce86650def2f8572d" FOREIGN KEY ("reporterId") REFERENCES "reporters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reports" DROP CONSTRAINT "FK_4353be8309ce86650def2f8572d"`,
    )
    await queryRunner.query(`DROP INDEX "public"."sessions_expiredAt_idx"`)
    await queryRunner.query(`DROP TABLE "sessions"`)
    await queryRunner.query(`DROP INDEX "public"."user_email_idx"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "reporters"`)
    await queryRunner.query(`DROP TABLE "reports"`)
    await queryRunner.query(`DROP TYPE "public"."reports_institution_enum"`)
  }
}
