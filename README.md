
# TSyringe Dependency Injection Tutorial

## Introduction

This repository contains a step-by-step guide on using TSyringe for dependency injection in a TypeScript project. TSyringe is a powerful and easy-to-use dependency injection library that helps create modular, maintainable, and testable code.

## Project Structure

```
src/
├── services/
│   ├── EmailService.ts
│   └── NotificationService.ts
├── main.ts
```

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/tsyringe-tutorial.git
   cd tsyringe-tutorial
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Initialize TypeScript configuration (if not already done):**

   ```bash
   npx tsc --init
   ```

4. **Configure `tsconfig.json`:**

   Make sure the following options are enabled in your `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "experimentalDecorators": true,
       "emitDecoratorMetadata": true
     },
     "include": ["src"]
   }
   ```

## Usage

1. **Build the project:**

   ```bash
   npx tsc
   ```

   This will compile your TypeScript files into JavaScript and place them in the `dist` directory.

2. **Run the project:**

   ```bash
   node dist/main.js
   ```

   You should see the following output:

   ```
   Email sent with message: Hello, Dependency Injection with TSyringe!
   ```

## Code Overview

### EmailService.ts

```typescript
import 'reflect-metadata';
import { injectable } from 'tsyringe';

@injectable()
class EmailService {
  sendEmail(message: string) {
    console.log(`Email sent with message: ${message}`);
  }
}

export default EmailService;
```

### NotificationService.ts

```typescript
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
```

### main.ts

```typescript
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
```

## Contributing

Feel free to fork this repository, make improvements, and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License.



