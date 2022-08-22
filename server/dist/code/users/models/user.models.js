"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../../../config/database/db.connection"));
const usersModel = db_connection_1.default.define('users', {
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: sequelize_1.DataTypes.TEXT, //VARCHAR(85),
    },
    email: {
        type: sequelize_1.DataTypes.TEXT
    },
    password: {
        type: sequelize_1.DataTypes.TEXT
    },
    email_key: {
        type: sequelize_1.DataTypes.TEXT //VARCHAR(12),
    },
    create_at: {
        type: sequelize_1.DataTypes.TIME
    },
    email_confirmed: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
exports.default = usersModel;
