# Observer pattern

The observer pattern is a behavioral pattern that allows pieces of the project react to certain events.

Imagine you want to notify a group of users that a new post has been created.

The flow to create the post remain with a single purpose -- create a post -- then you triggers the event
"POST_CREATED" after creation.

The code responsible to notify the users will listen to the event "POST_CREATED", when the event is received
the notification will be sent.

### Issue

In scenarios where a lot of parts of the system needs to react to something, instead of each of this parts checking if "something" has happened,
they just listens for someone to notify them that something has changed. Or even, when you have to do something that is not totally related to the main execution, just like
the example above with post creation. Sending notification is not crucial for post creation, then we can delegate it to be handled by an event.
