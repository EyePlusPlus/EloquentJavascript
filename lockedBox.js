var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
            return this._content;
    }
};

function withBoxUnlocked(body) {
    var oldVal = box.locked;
    if(box.locked) box.unlock();
    try{
        body();
    }
    finally{
        if(oldVal)
            box.lock();
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
    console.log(box.content);
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true