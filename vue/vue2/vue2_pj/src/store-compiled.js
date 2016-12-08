'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Ctrlf on 16/11/28.
 */

var STORAGE_KEY = 'todos_vuejs';

exports.default = {
    fetch: function fetch() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
};

//# sourceMappingURL=store-compiled.js.map