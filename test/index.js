var tape = require("tape"),
    some = require("..");


tape("some(object, callback[, thisArg]) tests whether some element in the object passes the test implemented by the provided function", function(assert) {
    function fn(value, index) {
        return value === index;
    }

    assert.equals(some({
        a: "c",
        b: "b",
        c: "a"
    }, fn), true);
    assert.equals(some({
        a: "b",
        b: "c",
        c: "a"
    }, fn), false);

    assert.equals(some([0, 1, 2, 3, 4], fn), true);
    assert.equals(some([1, 2, 3, 4, 5], fn), false);

    assert.end();
});
