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
// import * as jwt from 'jwt-then';
// import config from '../../config/config';
// import User from './user.model';
const stylists_1 = require("../models/stylists");
class UserController {
    constructor() {
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const stylist = yield stylists_1.Stylists.find();
                if (!stylist) {
                    return res.status(404).send({
                        success: false,
                        message: 'stylist not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: users
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User.findById(req.params.id, { password: 0 });
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: user
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, email, password } = req.body;
            try {
                const userUpdated = yield User.findByIdAndUpdate(req.params.id, {
                    $set: {
                        name,
                        lastName,
                        email,
                        password
                    }
                }, { new: true });
                if (!userUpdated) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                res.status(200).send({
                    success: true,
                    data: userUpdated
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User.findByIdAndRemove(req.params.id);
                if (!user) {
                    return res.status(404).send({
                        success: false,
                        message: 'User not found',
                        data: null
                    });
                }
                res.status(204).send();
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null
                });
            }
        });
    }
}
exports.default = UserController;
