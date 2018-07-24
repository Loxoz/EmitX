# EmitX
### Description:
This little project allows you to easily create events listeners and events emitters for an easy usage of custom events and webshockets usage!

### Import:
There is no hosting websites for the moment, then please download the project and drag where is your project:

###### In your html code:
```html
<script src="libs/EmitXListener.js"></script>
```
**/!\\** And make you sure to have placed the import befor all of your scripts imports for the html

###### In you node js code:
```javascript
var EmitXListener = require("./libs/EmitXListener.js");
```

### Examples & tutorial:
*\[...\] are optional arguments*
```javascript
var client = new EmitXListener(); // For node js, the variable created above need to use that too, make sure
                                  // the name after new is the require.

// create/bind an event:
// <variable>.on(eventname, function) || aliases: <variable>.bind(...)
client.on("test", function(a) { console.log("Event 'test' emitted with argument: " + a); });

// then check the events list:
console.log(client.events); // use 'console.log(JSON.stringify(client.events));' instead if you want to be a
                            // text (but you wouldn't see the functions)

// and emit an event to test:
// <variable>.emit(eventname, [argument]) || aliases: <variable>.fire(...)
client.emit("test", "hello world");
// Console return: "Event 'test' emitted with argument: hello world"

// but that's cool to have events and emitter, but if you want to remove one, you can use:
// <variable>.remove(eventid) || aliases: <variable>.unbind(eventid)
client.remove("ak9rb62wvbftyj17"); // this would return probably false because the id doesn't exists,
                                   // else it will return true.

// but there is a problem: The id of the event would change everytimes, then to fix that, you can use:
var tempevent = client.on("test", function(a) { console.log("Another test function.") });
// the special id of the event would be stored in the variable:
console.log("Special spicies id: " + tempevent);
// Then the console can return something like that: "Special spicies id: ozcmtdnqxzs9vzkh"

// emit again the event:
client.emit("test", "oh hi!");
// Console return: "Event 'test' emitted with argument: oh hi!" | "Another test function."

// so now because we have the id stored in a varible, we can remove this event:
client.remove(tempevent);
// and now:
client.emit("test", "boring imagination.");
// Console return: "Event 'test' emitted with argument: boring imagination."

// There is one more function you can use, if you want to clear every registered events with the same name:
// <variable>.clear(eventname)
client.clear("test"); // this will return true if any events were found
// and
console.log(client.events);
// Console return: "{}" <- only if you have followed the tutorial.
```

### Documentation
[here is the documentation](https://github.com/Loxoz/EmitX/documentation) (not avalible for the moment)

#### Hope you'll enjoy my work
