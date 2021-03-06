/* Check if value is a typed array.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |Value to check                |
 * |return|boolean|True if value is a typed array|
 *
 * ```javascript
 * isTypedArr([]); // -> false
 * isTypedArr(new Unit8Array); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr each');

function exports(val)
{
    return !!map[objToStr(val)];
}

var map = {};

each([
    'Int8Array',
    'Int16Array',
    'Int32Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array'
], function (val)
{
    map['[object ' + val + ']'] = true;
});