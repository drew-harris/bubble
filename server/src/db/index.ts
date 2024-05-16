import { Pool } from "pg";
import { env } from "../env";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool);
