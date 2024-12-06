const cache = new Map();

function get(key) {
    if (cache.has(key)) {
        return cache.get(key)
    }
    return null;
}

function set(key, value) {
    cache.set(key, value);
}


function clear() {
    cache.clear();
}


module.exports = {get, set, clear}
