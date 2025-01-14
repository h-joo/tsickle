/**
 * @fileoverview added by tsickle
 * Generated from: test_files/nonnullable/nonnullable.ts
 * @suppress {checkTypes,const,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.nonnullable.nonnullable');
var module = module || { id: 'test_files/nonnullable/nonnullable.ts' };
goog.require('tslib');
/**
 * TSickle generally does not support parameterized type aliases, because
 * JSCompiler does not support them either, and emits `?`. However TSickle
 * special cases `NonNullable<A>` to emit just `A`, so that the compiler does
 * not back off optimizations for properties accessed on the `?` type.
 * The main drawback is that to JS code the return type of this function still
 * appears to contain null or undefined. This causes some inconvenience, but
 * on balance is better than the optimization backoff and loss of type safety
 * caused by `?`.
 * @template A
 * @param {(null|A)} value
 * @param {A} def
 * @return {A}
 */
function getOrDefault(value, def) {
    return (/** @type {A} */ ((value || def)));
}
/**
 * @return {string}
 */
function getMsg() {
    /** @type {(null|string)} */
    const maybeNull = Math.random() > 0.5 ? 'hello' : null;
    return getOrDefault(maybeNull, 'goodbye');
}
console.log(getMsg());
