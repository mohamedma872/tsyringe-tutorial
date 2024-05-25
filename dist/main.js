"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const EmailService_1 = __importDefault(require("./services/EmailService"));
const NotificationService_1 = __importDefault(require("./services/NotificationService"));
// Register the EmailService with the container
tsyringe_1.container.register('EmailService', { useClass: EmailService_1.default });
// Resolve the NotificationService, which has a dependency on EmailService
const notificationService = tsyringe_1.container.resolve(NotificationService_1.default);
// Use the NotificationService to send a notification
notificationService.sendNotification('Hello, Dependency Injection with TSyringe!');
