## Strategy Pattern

**Definition:**
Defines a family of algorithms, encapsulates each one behind a common interface, and makes them interchangeable at runtime without exposing implementation details to the client.

Interchangeable: Any concrete implementation of the strategy interface can replace another without altering the context or client code; you can swap strategies dynamically because the context only relies on the common interface.

### 1. Interface

```java
interface NotificationStrategy {
  void send(Notification message);
}
```

All concrete strategies implement this single-method interface to perform the notification.

---

### 2. Concrete Strategies

- `EmailNotification` implements `NotificationStrategy`
- `SmsNotification` implements `NotificationStrategy`
- `PushNotification` implements `NotificationStrategy`

Each class encapsulates the specific logic for sending via its channel.

---

### 3. Context

```java
class NotificationSender {
  private NotificationStrategy strategy;

  public NotificationSender(NotificationStrategy strategy) {
    this.strategy = strategy;
  }

  public void send(Notification message) {
    strategy.send(message);
  }
}
```

The context holds a reference to the selected strategy and delegates execution to it.

---

### 4. When to Use

- You need to switch between interchangeable behaviors or algorithms at runtime.
- You want to adhere to the Open/Closed Principle (OCP) by adding new strategies without modifying existing code.

---

### 5. Benefits

- **Open/Closed Principle:** Easily add new algorithms (strategies) without changing the context or client code.
- **Single Responsibility:** Each strategy class has one well-defined reason to change.
- **Runtime Flexibility:** Swap strategies dynamically based on context or configuration.

---

### 6. Drawbacks

- Increases the number of classes and interfaces in the codebase.
- May introduce unnecessary complexity if there’s only one algorithm.

---

_Example usage:_

```java
NotificationStrategy strategy = new EmailNotification();
NotificationSender sender = new NotificationSender(strategy);
sender.send(orderConfirmation);
```
