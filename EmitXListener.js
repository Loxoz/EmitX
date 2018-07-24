if(typeof module !== "undefined") {
	module.exports = EmitXListener;
} else {
	this.EmitXListener = listener;
}

function listener() {
    this.events = {};
    
    // >>> recieve
    this.on = function(e, f) {
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
    this.bind = function(e, f) { this.on(e, f); };

    // >>> Emit
    this.emit = function(e, a) {
        for (evi in this.events) {
            if (this.events[evi].name == e) {
                if (typeof this.events[evi].function == "function") {
                    this.events[evi].function(a);
                }
            }
        }
    }
    // aliases
    this.fire = function(e, a) { this.emit(e, a); };

    // >>> Remove
    this.remove = function(id) {
        if (this.events[id] != undefined) {
            delete this.events[id];
            return true;
        }
        else {
            return false;
        }
    };
    // aliases
    this.unbind = function(id) { this.remove(id); };

    // >>> Clear
    this.clear = function(e) {
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
    var chars = ["a", "b", "c", "d", "e", "f", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var createid = function() {
        var id = "";
        for (iin = 0; iin < 16; iin ++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }

    var getspecialid = function() {
        var id = createid();
        if (this.events != undefined) {
            while (this.events.hasOwnProperty(id)) {
                id = createid();
            }
        }

        return id;
    };
};
