import 'reflect-metadata';
import { container } from 'tsyringe';
import EmailService from './services/EmailService';
import NotificationService from './services/NotificationService';

// Register the EmailService with the container
container.register('EmailService', { useClass: EmailService });

// Resolve the NotificationService, which has a dependency on EmailService
const notificationService = container.resolve(NotificationService);

// Use the NotificationService to send a notification
notificationService.sendNotification('Hello, Dependency Injection with TSyringe!');
