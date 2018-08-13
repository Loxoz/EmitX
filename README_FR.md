# EmitX
> Langs: [EN](README.md) `FR`
### Description:
Ce petit projet vous permet de créer facilement des events listeners et des events emitters pour un usage facile des evénements personnalisé et l'utilisation des [webshockets](https://www.websocket.org/)

### Importation:
([npm](https://www.npmjs.com/) va arriver)

###### Dans votre code html:
```html
<script src="libs/EmitXListener.min.js"></script>
```
**[i]** La version .min.js est recommandée pour le web pour limiter le téléchargement des données de l'utilisateur
**/!\\** Et assurez-vous d'avoir placé l'importation devant tous vos scripts qui l'utilise pour le html

###### Dans votre code node.js:
```javascript
const EmitXListener = require("./libs/EmitXListener.js");
```

### Exemples & tutoriels:
*\[...\] sont des arguments optionnels*
```javascript
var client = new EmitXListener(); // Pour node.js, La variable créer au dessus a besoin d'utilise sa aussi,
                                  // assurez-vous que la variable après le 'new' est la variable qui 'require'
                                  // le fichier.

// créer/assigner (create/bind) des événement:
// <variable>.on(eventname, function) || aliases: <variable>.bind(...)
client.on("test", function(a) { console.log("Event 'test' emitted with argument: " + a); });

// puis nous verrifions la liste des événements:
console.log(client.events); // use 'console.log(JSON.stringify(client.events));' instead if you want to be a
                            // text (but you wouldn't see the functions)

// et on emit un evenement 'test':
// <variable>.emit(eventname, [argument]) || aliases: <variable>.fire(...)
client.emit("test", "hello world");
// la Console donne: "Event 'test' emitted with argument: hello world"

// mais c'est bien d'avoir des evenements et des emitter, mais si vous voulez en supprimer un,
// vous pouvez utiliser:
// <variable>.remove(eventid) || aliases: <variable>.unbind(eventid)
client.remove("ak9rb62wvbftyj17"); // cela va probablement donner false car l'id n'existe pas,
                                   // sinon il va donner true.

// mais il y a un problème: L'id de l'event va changer tout le temps, alors pour fixer ça, vous pouvez utiliser:
var tempevent = client.on("test", function(a) { console.log("Another test function.") });
// l'id spéciale de l'evenement sera stocké dans la variable:
console.log("Special spicies id: " + tempevent);
// Alors la Console va donner quelquechose dans le genre de: "Special spicies id: ozcmtdnqxzs9vzkh"

// on emit encore l'evenement:
client.emit("test", "oh hi!");
// la Console donne: "Event 'test' emitted with argument: oh hi!" | "Another test function."

// donc maintenent parceque nous avons l'id stocké dans une variable, on peut supprimer l'événement:
client.remove(tempevent);
// et maintenent:
client.emit("test", "boring imagination.");
// la Console donne: "Event 'test' emitted with argument: boring imagination."

// Il y a encore une fonction que vous pouvez utiliser, si vous voulez supprimer tous les événements
// enregistrés avec le même nom, vous pouvez utiliser:
// <variable>.clear(eventname)
client.clear("test"); // cela donnera true si nimpote quel événement a été trouvé
// et
console.log(client.events);
// la Console donne: "{}" <- seulement si vous avez suivis le tutoriel.

// N'oubliez-pas, l'argument peut être du json, c'est une meilleur solution que je recommande:
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
// tout cela donneras quelquechose dans le genre de:
// "Check successed by server at Tue Jul 24 2018 17:46:37 GMT+0200 (heure d’été d’Europe centrale)!" 
```
Exemple pour les websockets (web seulement):
```javascript
ws = new WebSocket('ws://...');
client = new EmitXListener();

ws.onmessage = function(raw) {
  var packet;
  try {
      packet = JSON.parse(raw.data);
  } catch (e) {
      console.log('Invalid recived packet: ', raw.data);
      return;
  }
    
  client.emit(packet.p, packet.a);
}

client.on("msg", function(a) {
  // en considérent que c'est du json
  var msg = a.message;
  var sender = a.sender;
  var name = a.name;
  var time = a.time;
  appendmessage(a.time, a.sender, a.name, a.message); // en considérent que c'est un fonction qui va
                                                      // ajouter le message sur la page
});
```

### Documentation
~~[la documentation c'est par ici](https://github.com/Loxoz/EmitX/wiki)~~ (indisponnible pour le moment)

> #### J'espère que vous apprécierez mon travail ❤️ metter moi une ⭐️ si vous l'avez trouvé utile pour me supporter
