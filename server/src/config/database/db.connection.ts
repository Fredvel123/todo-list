import { Sequelize } from "sequelize";
import {db_host, db_name, db_psswd, db_user} from '../variablesEnviroment/dotenv'

const sequelize = new Sequelize({
  host: db_host,
  database: db_name,
  password: db_psswd,
  username: db_user,
  dialect: "postgres",
  logging: false
})

const testDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected success');
    
  } catch (err) {
    console.log("database error", err);
  }
}

testDatabase();

export default sequelize;
