# Tqweem-e2e

In this repository you can find all the e2e tests for Tqweem system.
This is the second complete project that I've built e2e complete plan on.
The first one was for Aqarmap, and here is the link of it: https://github.com/Moataz-Mahmoud/AqarmapAutomation
This time I made too many enhancements in the project, here are some of these enhancements:

1- I used page objects. It's too much better to use them to think for the controllers and web elements in object-oriented way. The web page is a class. You create an object for each page. In this object, you create a variable for each web controller you will need to use. And then mutate the getters and setters and all the event handlers you will deal with. In the runner file, you will just call the setters, getters, and the event handlers to simulate the user's behaviour on each web page.

2- I used asyc/await for commands senchronization. As you may know, protractor is built in Javascript. And Javascript is an asynchronous programming languge. This means that the order of the commands you are writing in your source code may differ in the running (which is mostly the case). So for example, you won't be able to apply an action on an element before the script is locating it. Here you need to sync your commands to obligate the runner not to perform the action before locating the controller. There are many well known ways for handling this issue. One of them and the most advanced and effecient way is async/await.

So that's a quick notes about this repository.
It's time to get your hands dirty playing with it and trying to run it to discover more about how it works.
Have fun and contact me for any support.
