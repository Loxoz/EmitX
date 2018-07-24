/*
 * Copyrights Loxoz
 * https://github.com/Loxoz/EmitX for more informations
 * https://twitter.com/LoxozYT
 */

if(typeof module !== "undefined") {
	module.exports = listener;
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
    var createid = function() {
        return Array.from(Array(20)).map(function(i){return (~~(Math.random()*36)).toString(36)}).join('');
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
