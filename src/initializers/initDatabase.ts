import getMySQLConnection from '../config/mysql';

const initDatabase = async (config: any) => {
  try {
    const connection = await getMySQLConnection();
    console.log("✅ 2. Connected to MySQL database");

    const dbModels = {
      mysql: { connection },
    };

    return dbModels;
  } catch (err: any) {
    console.error("❌ Failed to connect to MySQL:", err.message || err);

    return {
      mysql: { connection: null }
    };
  }
};

export default initDatabase;

//comment mysql