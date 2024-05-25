import 'reflect-metadata';
import { injectable } from 'tsyringe';

@injectable()
class EmailService {
  sendEmail(message: string) {
    console.log(`Email sent with message: ${message}`);
  }
}

export default EmailService;
