## Abstract Factory

**Definition**
The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

---

### 1. Product Interfaces

```ts
// components/button.ts
export interface Button {
  onClick: () => void;
  render: () => string;
}

// components/input.ts
export interface Input {
  onChange: (value: string) => void;
  render: () => string;
}
```

Define common interfaces that all product families must implement.

---

### 2. Abstract Factory Interface

```ts
// factories/component.factory.ts
import { Button } from "../components/button";
import { Input } from "../components/input";

export interface ComponentFactory {
  createButton: () => Button;
  createInput: () => Input;
}
```

Declares the creation methods for each product type in the family.

---

### 3. Concrete Products (Family: macOS)

```ts
// system-design/components/macos/macos-button.component.ts
import { Button } from "../../../components/button";

export class MacosButtonComponent implements Button {
  onClick(): void {
    console.log("Macos button clicked");
  }

  render(): string {
    return "Macos button";
  }
}

// system-design/components/macos/macos-input.component.ts
import { Input } from "../../../components/input";

export class MacosInputComponent implements Input {
  onChange(value: string): void {
    console.log("Macos input changed:", value);
  }

  render(): string {
    return "Macos input";
  }
}
```

Concrete implementations specific to the macOS family with consistent look and behavior.

---

### 4. Concrete Products (Family: Windows)

```ts
// system-design/components/windows/windows-button.component.ts
import { Button } from "../../../components/button";

export class WindowsButtonComponent implements Button {
  onClick(): void {
    console.log("Windows button clicked");
  }

  render(): string {
    return "Windows button";
  }
}

// system-design/components/windows/windows-input.component.ts
import { Input } from "../../../components/input";

export class WindowsInputComponent implements Input {
  onChange(value: string): void {
    console.log("Windows input changed:", value);
  }

  render(): string {
    return "Windows input";
  }
}
```

Concrete implementations specific to the Windows family with consistent look and behavior.

---

### 5. Concrete Factories

```ts
// system-design/factories/macos-component.factory.ts
import { ComponentFactory } from "../../factories/component.factory";
import { MacosButtonComponent } from "../components/macos/macos-button.component";
import { MacosInputComponent } from "../components/macos/macos-input.component";

export class MacosComponentFactory implements ComponentFactory {
  createButton(): Button {
    return new MacosButtonComponent();
  }

  createInput(): Input {
    return new MacosInputComponent();
  }
}

// system-design/factories/windows-component.factory.ts
import { ComponentFactory } from "../../factories/component.factory";
import { WindowsButtonComponent } from "../components/windows/windows-button.component";
import { WindowsInputComponent } from "../components/windows/windows-input.component";

export class WindowsComponentFactory implements ComponentFactory {
  createButton(): Button {
    return new WindowsButtonComponent();
  }

  createInput(): Input {
    return new WindowsInputComponent();
  }
}
```

Each concrete factory creates a complete family of related products.

---

### 6. Client Usage

```ts
// main.ts
import { ComponentFactory } from "./factories/component.factory";
import { MacosComponentFactory } from "./system-design/factories/macos-component.factory";
import { WindowsComponentFactory } from "./system-design/factories/windows-component.factory";

class Application {
  constructor(private readonly factory: ComponentFactory) {}

  render(): void {
    const button = this.factory.createButton();
    const input = this.factory.createInput();

    button.onClick();
    input.onChange("test");
  }
}

class MacosApplication extends Application {
  constructor() {
    super(new MacosComponentFactory());
  }
}

class WindowsApplication extends Application {
  constructor() {
    super(new WindowsComponentFactory());
  }
}

// Usage
const macosApp = new MacosApplication();
macosApp.render(); // Uses macOS-styled components

const windowsApp = new WindowsApplication();
windowsApp.render(); // Uses Windows-styled components
```

Demonstrates how client code uses factories to create consistent families of objects.

---

### 7. Benefits

- **Family consistency:** ensures all products in a family work together and have consistent behavior.
- **Isolation of concrete classes:** client code doesn't depend on specific implementations.
- **Easy family switching:** change the entire product family by switching the factory.
- **Supports product variants:** new families can be added without changing existing code.

---

### 8. Drawbacks

- **Complexity overhead:** more complex than Simple Factory due to multiple interfaces and classes.
- **Rigid structure:** adding new product types requires updating all factory interfaces and implementations.
- **Can become large:** with many product families and types, the codebase can grow significantly.

---

### 9. When to Use

- You need to create families of related objects that must be used together.
- You want to provide a library of products and reveal only their interfaces.
- You need to configure your application with one of multiple families of products.
- You want to enforce constraints that products from the same family are used together.

---

### 10. Abstract Factory vs Simple Factory

| Aspect          | Simple Factory              | Abstract Factory                         |
| --------------- | --------------------------- | ---------------------------------------- |
| **Purpose**     | Create single objects       | Create families of related objects       |
| **Complexity**  | Low                         | Higher                                   |
| **Flexibility** | Limited to one product type | Multiple related product types           |
| **Use Case**    | Simple object creation      | Product families that must work together |
