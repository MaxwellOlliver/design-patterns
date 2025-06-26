# Facade Pattern

Provides a simplified interface to a complex subsystem by orchestrating calls to multiple internal classes or modules.

Instead of the client invoking various scattered methods directly, it calls the Facade, which:

- Instantiates and configures the required subsystems

- Executes operations in the correct order

- Handles return values and errors in one place
