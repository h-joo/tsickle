/**
 * @fileoverview added by tsickle
 * Generated from: test_files/docs_on_ctor_param_properties/docs_on_ctor_param_properties.ts
 * @suppress {checkTypes,const,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.docs_on_ctor_param_properties.docs_on_ctor_param_properties');
var module = module || { id: 'test_files/docs_on_ctor_param_properties/docs_on_ctor_param_properties.ts' };
goog.require('tslib');
class Clazz {
    /**
     * @public
     * @param {!Array<string>} id
     * @param {!Array<string>=} parameterProperty
     */
    constructor(id, parameterProperty = []) {
        this.id = id;
        this.parameterProperty = parameterProperty;
    }
}
exports.Clazz = Clazz;
/* istanbul ignore if */
if (false) {
    /**
     * @type {!Array<string>}
     * @public
     */
    Clazz.prototype.id;
    /**
     * Here is a docstring for the parameter property.
     * @type {!Array<string>}
     * @public
     */
    Clazz.prototype.parameterProperty;
}
