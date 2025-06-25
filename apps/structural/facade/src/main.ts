// structural pattern: facade
console.log("🚀 Starting facade...");

// TODO: Implement your design pattern here
class Example {
  constructor() {
    console.log("Example class created");
  }

  public doSomething(): void {
    console.log("Doing something...");
  }
}

// Example usage
const example = new Example();
example.doSomething();

console.log("✅ facade completed!");
