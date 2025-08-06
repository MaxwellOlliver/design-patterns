# Builder Pattern

**Definition:**
The Builder pattern is a creational design pattern that constructs complex objects step by step. It separates the construction of an object from its representation, allowing the same construction process to create different representations.

### Problem

Creating complex objects with multiple optional parameters can lead to:

- **Constructor telescoping**: Multiple constructors with different parameter combinations
- **Unclear parameter order**: Hard to remember which parameter goes where
- **Error-prone initialization**: Easy to pass parameters in wrong positions
- **Immutable object creation**: Difficulty creating immutable objects with many optional fields

### Solution

The Builder pattern provides a fluent interface for constructing objects step by step:

1. **Builder Class**: Contains methods for setting each property
2. **Fluent Interface**: Methods return the builder instance for method chaining
3. **Build Method**: Constructs and returns the final object
4. **Encapsulation**: Hides complex construction logic from the client

---

## Implementation

### 1. Product Class

```typescript
export class HttpClient {
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(baseUrl: string, headers: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", ...this.headers },
    });
    return await response.json();
  }

  // ... other HTTP methods
}
```

The product class represents the complex object being built.

---

### 2. Builder Class

```typescript
export class HttpClientBuilder {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = "";
    this.headers = {};
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this; // Enable method chaining
  }

  setHeaders(headers: Record<string, string>) {
    this.headers = headers;
    return this; // Enable method chaining
  }

  build() {
    return new HttpClient(this.baseUrl, this.headers);
  }
}
```

The builder encapsulates the construction logic and provides a fluent interface.

---

### 3. Client Usage

```typescript
const client = new HttpClientBuilder()
  .setBaseUrl("https://api.github.com")
  .setHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer token123",
  })
  .build();

const response = await client.get("/users/MaxwellOlliver");
```

Clean, readable object construction with method chaining.

---

### 4. When to Use

- **Complex object creation** with many optional parameters
- **Step-by-step construction** where order matters
- **Immutable objects** that need fluent creation syntax
- **Multiple representations** of the same object type
- **Configuration objects** with many optional settings

---

### 5. Benefits

- **Fluent Interface**: Readable, chainable method calls
- **Flexibility**: Add parameters in any order
- **Immutability**: Create immutable objects easily
- **Validation**: Validate parameters before building
- **Reusability**: Reuse builder instances with different configurations

---

### 6. Drawbacks

- **Additional Complexity**: More classes and code
- **Memory Overhead**: Builder instances consume memory
- **Overkill for Simple Objects**: Unnecessary for objects with few parameters
