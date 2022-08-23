import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database/db.connection';

const usersModel = sequelize.define('users', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: DataTypes.TEXT, //VARCHAR(85),
  }, 
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  },
  email_key: {
    type: DataTypes.TEXT //VARCHAR(12),
  }, 
  create_at: {
    type: DataTypes.TIME
  }, 
  email_confirmed: {
    type: DataTypes.BOOLEAN
  },
  avatar: {
    type: DataTypes.TEXT,
  },
  cloud_id: {
    type: DataTypes.TEXT
  }

}, {
  timestamps: false
}) 

export default usersModel;