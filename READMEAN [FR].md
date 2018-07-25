# EmitX
### Description:
Ce petit projet vous permet de créer facilement des events listeners et des events emitters pour un usage facile des evénements personnalisé et l'utilisation des [webshockets](https://www.websocket.org/)

### Importation:
Il n'y a pas de site d'hébergement du code pour ce projet pour le moment, alors veuillez le télécharger et le placer dans votre projet:
([npm](https://www.npmjs.com/) va arriver)

###### Dans votre code html:
```html
<script src="libs/EmitXListener.js"></script>
```
**/!\\** Et assurez-vous d'avoir pacé l'importation devant tous vos scripts qui l'utilise pour le html

###### Dans votre code node.js:
```javascript
const EmitXListener = require("./libs/EmitXListener.js");
```

### Exemples & tutoriels:
*\[...\] sont des arguments optionnels*
```javascript
var client = new EmitXListener(); // Pour node.js, La variable créer au dessus a besoin d'utilise sa aussi, assurez-
                                  // vous que la variable après le 'new' est la variable qui 'require' le fichier.

// créer/assigner (create/bind) en événement:
// <variable>.on(eventname, function) || aliases: <variable>.bind(...)
client.on("test", function(a) { console.log("Event 'test' emitted with argument: " + a); });

// puis nous verrifions la liste des événements:
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
// this all would return something like that:
// "Check successed by server at Tue Jul 24 2018 17:46:37 GMT+0200 (heure d’été d’Europe centrale)!" 
```

### Documentation
~~[here is the documentation](https://github.com/Loxoz/EmitX/wiki)~~ (not avalible for the moment)

#### Hope you'll enjoy my work
