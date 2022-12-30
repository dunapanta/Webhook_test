"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.get("/", function (req, res) {
    return res.status(200).json({ message: "Webhook test" });
});
app.post("/webhook", function (req, res) {
    console.log(req.body);
    return res.status(200).json({ message: "success", webhook: req.body });
});
app.listen(PORT, function () {
    console.log("Server listening on port http://localhost:".concat(PORT));
});
