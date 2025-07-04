## Adapter Pattern

The Adapter Pattern addresses the problem of integrating external services or libraries whose interfaces don't match the needs of the domain layer. Without adapters, your domain code would depend directly on specific implementations, leading to tight coupling and decreased flexibility.

### Problem

- Your domain layer needs to perform operations (e.g., sending emails, invoking external APIs) but should not depend on concrete implementations or third-party libraries.
- Direct dependencies on external services make testing hard and reduce the ability to swap implementations.

### Solution

Define a **Port** (interface) in your domain that specifies the required behavior. Then, implement one or more **Adapters** in the infrastructure layer that conform to this Port. The domain depends only on the Port, allowing you to change or mock the Adapter without altering domain code.

### How It Works

1. **Port Definition**: Declare an interface (e.g., `EmailSender`) in the domain layer.
2. **Domain Usage**: Inject the Port into domain services (e.g., `NotificationService`).
3. **Adapter Implementation**: Create concrete classes (e.g., `SmtpEmailAdapter`, `SendGridAdapter`) that implement the Port.
4. **Bootstrapping**: At application startup, wire the domain service to the chosen Adapter.

```ts
// domain/ports/EmailSender.ts
export interface EmailSender {
  send(to: string, subject: string, body: string): Promise<void>;
}

// domain/services/NotificationService.ts
export class NotificationService {
  constructor(private emailSender: EmailSender) {}

  async welcome(userEmail: string) {
    const message = `Hello! Welcome to our system.`;
    await this.emailSender.send(userEmail, "Welcome", message);
  }
}

// infrastructure/adapters/SmtpEmailAdapter.ts
import { EmailSender } from "../../domain/ports/EmailSender";

export class SmtpEmailAdapter implements EmailSender {
  constructor(/* smtp config */) {}

  async send(to: string, subject: string, body: string) {
    // SMTP sending logic...
  }
}

// application/bootstrap.ts
const smtpAdapter = new SmtpEmailAdapter(/* config */);
const notificationService = new NotificationService(smtpAdapter);
notificationService.welcome("user@example.com");
```

### Benefits

- **Decoupling**: Domain code remains independent of infrastructure details.
- **Testability**: Easily mock Ports for unit tests.
- **Flexibility**: Swap Adapters (SMTP, SendGrid, etc.) without modifying domain logic.
