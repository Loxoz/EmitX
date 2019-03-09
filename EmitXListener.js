/*
 * Copyrights Loxoz
 * https://github.com/Loxoz/EmitX for more informations
 * https://twitter.com/LoxozYT
 * Give me a patreon ;) https://patreon.com/Loxoz
 */

if(typeof module !== "undefined") {
	module.exports = listener;
} else {
	this.EmitXListener = listener;
}

function listener() {
    this.events = {};
    
    // >>> recieve
    this.on = (e, f) => {
        if (typeof f == "function") {
            var spclid = getspecialid();
            this.events[spclid] = { name: e, function: f };

            return spclid;
        }
        else {
            return false;
        }
    }
    // aliases
    this.bind = (e, f) => { this.on(e, f); };

    // >>> Emit
    this.emit = (e, a, d = 0) => {
        if (!isNaN(d)) {d=0;}
        setTimeout(() => {
            for (evi in this.events) {
                if (this.events[evi].name == e) {
                    if (typeof this.events[evi].function == "function") {
                        this.events[evi].function(a);
                    }
                }
            }
        }, d);
    }
    // aliases
    this.fire = (e, a, d) => { this.emit(e, a, d); };

    // >>> Remove
    this.remove = (id) => {
        if (this.events[id] != undefined) {
            delete this.events[id];
            return true;
        }
        else {
            return false;
        }
    };
    // aliases
    this.unbind = (id) => { this.remove(id); };

    // >>> Clear
    this.clear = (e) => {
        var w = false;
        for (evi in this.events) {
            if (this.events[evi].name == e) {
                this.remove(evi);
                w = true;
            }
        }
        
        return w;
    };

    // Internal tools
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

    var createid = () => {
        var id = "";
        for (iin = 0; iin < 16; iin ++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }

    var getspecialid = () => {
        var id = createid();
        if (this.events != undefined) {
            while (this.events.hasOwnProperty(id)) {
                id = createid();
            }
        }

        return id;
    };
};
