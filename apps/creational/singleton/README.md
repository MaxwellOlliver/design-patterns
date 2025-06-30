# Singleton Pattern

Singleton consists on serving a single instance/reference of a object across the system.

Problem:

In the past, or even nowadays, having multiple instances of the same class could
cause a high memory usage.

Singleton pattern solves it by storing the first instance of the class, and whenever a part of the system needs to use it, instead of creating a new instance, it is returned the stored instance.
