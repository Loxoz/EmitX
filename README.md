# EmitX
> Langs: `EN` [FR](README_FR.md)
### Description:
This little project allows you to easily create events listeners and events emitters for an easy usage of custom events and [webshockets](https://www.websocket.org/) usage!

### Import:
###### In your html code:
```html
<script src="https://raw.githubusercontent.com/Loxoz/EmitX/master/OpenRelease/EmitXListener.min.js"></script>
<!-- or -->
<script src="libs/EmitXListener.min.js"></script>
```
**[i]** The .min.js version is recommended for the web to save user's data downloading
**/!\\** And make you sure to have placed the import befor all of your scripts imports for the html

###### In you node.js code:
```javascript
const EmitXListener = require("./libs/EmitXListener.js");
```
([npm](https://www.npmjs.com/) import for node.js is coming)

### Examples & tutorial:
*\[...\] are optional arguments*
```javascript
var client = new EmitXListener(); // For node.js, the variable created above need to use that too, make sure
                                  // the variable after 'new' is the variable who require the file.

// create/bind an event:
// <variable>.on(eventname, function) || aliases: <variable>.bind(...)
client.on("test", function(a) { console.log("Event 'test' emitted with argument: " + a); });

// then check the events list:
console.log(client.events); // use 'console.log(JSON.stringify(client.events));' instead if you want to be a
                            // text (but you will not see the functions)

// and emit a test event:
// <variable>.emit(eventname, [argument]) || aliases: <variable>.fire(...)
client.emit("test", "hello world");
// Console return: "Event 'test' emitted with argument: hello world"

// but that's cool to have events and emitter, but if you want to remove one, you can use:
// <variable>.remove(eventid) || aliases: <variable>.unbind(eventid)
client.remove("ak9rb62wvbftyj17"); // this will return probably false because the id doesn't exists,
                                   // else it will return true.

// but there is a problem: The id of the event will change everytimes, then to fix that, you can use:
var tempevent = client.on("test", function(a) { console.log("Another test function.") });
// the special id of the event will be stored in the variable:
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

// There is one more function you can use, if you want to clear every registered events with the same name,
// you can use:
// <variable>.clear(eventname)
client.clear("test"); // this will return true if any events were found
// and
console.log(client.events);
// Console return: "{}" <- only if you have followed the tutorial.

// Don't forget, the argument can be json, this is a better way that i recommand:
client.on("check", function(a) {
  var msg;
  if (a.type == "success") {
    msg = "Check successed by " + a.name + " at " + new Date(a.time) + "!";
  }
  else {
    msg = "Check failed";
  }
  console.log(msg);
});

client.emit("check", { type: "success", name: "server", time: (new Date).getTime() } );
// this all will return something like that:
// "Check successed by server at Tue Jul 24 2018 17:46:37 GMT+0200 (heure d’été d’Europe centrale)!" 
```

### Documentation
~~[here is the documentation](https://github.com/Loxoz/EmitX/wiki)~~ (not avalible for the moment)

> #### Hope you'll enjoy my work ❤️ leave a ⭐️ if you found it useful to support me
