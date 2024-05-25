import { inject, injectable } from 'tsyringe';
import EmailService from './EmailService';

@injectable()
class NotificationService {
  constructor(
    @inject('EmailService') private emailService: EmailService
  ) {}

  sendNotification(message: string) {
    this.emailService.sendEmail(message);
  }
}

export default NotificationService;
