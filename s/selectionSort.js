/* Selection sort implementation.
 *
 * |Name |Type    |Desc         |
 * |-----|--------|-------------|
 * |arr  |array   |Array to sort|
 * |[cmp]|function|Comparator   |
 * 
 * ```javascript
 * selectionSort([2, 1]); // -> [1, 2]
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

function exports(arr, cmp) 
{
    cmp = cmp || comparator;

    var tmp, min;

    for (var i = 0, len = arr.length; i < len; i++) 
    {
        min = i;
        for (var j = i + 1; j < len; j++) 
        {
            if (cmp(arr[j], arr[min]) < 0) 
            {
                min = j;
            }
        }
        if (i != min) 
        {
            tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    return arr;
}

function comparator(a, b) 
{
    return a - b;
}