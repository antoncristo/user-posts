import { createPool, Pool } from "mysql";

const CONNECTION_PORT = 3306;
const CONNECTION_LIMIT = 6;

let pool: Pool;

export const init = () => {
  try {
    pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      connectionLimit: CONNECTION_LIMIT,
      port: CONNECTION_PORT,
    });
  } catch (err) {
    throw new Error("[DB][Connection]: failed");
  }
};

export const execute = <T>(
  query: string,
  params: string[] | Object
): Promise<T> => {
  try {
    if (!pool)
      throw new Error(
        "[DB][Connection][Error]: mysql pool was not created correctly"
      );

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    console.error("[mysql.connector][execute][Error]:", error);
    throw new Error("[mysql.connector][execute][Error]: See console");
  }
};
