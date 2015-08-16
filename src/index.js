var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arraySome = require("array-some"),
    objectSome = require("object-some");


module.exports = some;


function some(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 4);
    return isArrayLike(value) ?
        arraySome(value, callback) :
        objectSome(value, callback);
}
