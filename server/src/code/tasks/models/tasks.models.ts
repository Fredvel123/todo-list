import { DataTypes } from "sequelize";
import sequelize from "../../../config/database/db.connection";

const tasksModels = sequelize.define(
  "tasks",
  {
    id_task: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT, // 200 words max
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    create_at: {
      type: DataTypes.DATE,
    },
    finished_at: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);

export default tasksModels;
