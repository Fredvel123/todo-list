import { Sequelize } from "sequelize";
import {db_host, db_name, db_psswd, db_user} from '../variablesEnviroment/dotenv'

const sequelize = new Sequelize({
  host: db_host || "localhost",
  database: db_name || 'todo_app',
  password: db_psswd || 'freddy',
  username: db_user || "postgres",
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
