"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
require("dotenv/config");
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// settings
app.set('port', process.env.PORT || 8000);
// routes
app.get('/', (req, res) => {
    res.json({
        message: "server is running successfully",
        documentation: "https://github.com/Fredvel123/todo-list/tree/master/server/#readme",
    });
});
// routers - users
const users_router_1 = __importDefault(require("./code/users/routers/users.router"));
app.use('/api/users', users_router_1.default);
exports.default = app;
