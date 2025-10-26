class YouTubeChannel {
  constructor() {
    this.subscribers = [];
  }
  subscribe(user) {
    this.subscribers.push(user);
    user.update("You have subscribed the channel");
  }
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter(sub => sub !== user);
    user.update("You have unsubscribed the channel");
  }
  notify(message) {
    this.subscribers.forEach(sub => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
  update(message) {
    console.log(`${this.name}: ${message}`);
  }
}

// Create channel and users
const sheryians = new YouTubeChannel();
const user1 = new User("Harsh");
const user2 = new User("Amit");

// Subscribing users to the channel
sheryians.subscribe(user1); // Output: Harsh: You have subscribed the channel
sheryians.subscribe(user2); // Output: Amit: You have subscribed the channel

// Notifying all subscribers
sheryians.notify("New video is live!"); 
// Output: Harsh: New video is live!
// Output: Amit: New video is live!

// Unsubscribing a user
sheryians.unsubscribe(user1); // Output: Harsh: You have unsubscribed the channel

// Send notifications again
sheryians.notify("We are closing the channel!");
// Output: Amit: We are closing the channel!
