var assert = require("assert"),
    some = require("../src/index");


describe("some(object, fn, thisArg)", function() {
    it("should loop over array or object and return true if some function called on item returns truthy else false", function() {
        var array = [0, 1, 2],
            object = {
                0: 0,
                1: 1,
                2: 2
            };

        assert.equal(
            some(array, function(value) {
                return value === 1;
            }),
            true
        );
        assert.equal(
            some(array, function(value) {
                return value === 3;
            }),
            false
        );

        assert.equal(
            some(object, function(value) {
                return typeof(value) === "number";
            }),
            true
        );
        assert.equal(
            some(object, function(value) {
                return typeof(value) === "string";
            }),
            false
        );
    });
});
