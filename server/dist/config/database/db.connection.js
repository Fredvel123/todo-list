"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("../variablesEnviroment/dotenv");
const sequelize = new sequelize_1.Sequelize({
    host: dotenv_1.db_host,
    database: dotenv_1.db_name,
    password: dotenv_1.db_psswd,
    username: dotenv_1.db_user,
    dialect: "postgres",
    logging: false
});
const testDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log('Database connected success');
    }
    catch (err) {
        console.log("database error", err);
    }
});
testDatabase();
exports.default = sequelize;
