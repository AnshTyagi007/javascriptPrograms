const AccessorArray = require("../../ArrayMethods/accessor_methods");

describe('AccessorArray Methods ', () => {
    let arr,arr_lastIndexOf, arr_flat, arr_flatMap, unsorted, arr_toSpliced;

    beforeEach(() => {
        arr= new AccessorArray(1, 2, 3, 4, 5, 6);
        arr_lastIndexOf= new AccessorArray(1, 2, 3, 4, 5, 3, 6, 7);
        arr_flat= new AccessorArray([1, [2, [3, 4, [11, 12]]], [5, [6, 7]], [8, [9]]]);
        arr_flatMap= new AccessorArray(2, 4, 6, 8);
        unsorted= new AccessorArray(2, 7, 3, 5, 4, 1, 6, 0);
        arr_toSpliced= new AccessorArray(1, 2, 7, 8, 9, 6, 7);
    });

    test.each([
        [0, 7, [7, 2, 3, 4, 5, 6]],
        [1, 9, [1, 9, 3, 4, 5, 6]],
        [4, 0, [1, 2, 3, 4, 0, 6]],
        [2, 8, [1, 2, 8, 4, 5, 6]],
        [-1, 7, [1, 2, 3, 4, 5, 7]],
    ])('with', (index, value, expected) => {
        expect(arr.with(index, value)).toEqual(expected);
    });

    test.each([
        [-7, 7],
        [6, 8],
    ])('with', (index, value) => {
        expect(() => {arr.with(index, value)}).toThrow('Index out of range');
    });

    test.each([
        [([7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]]
    ])('concatination', (arr1, expected) => {
        expect(arr.concat(arr1)).toEqual(expected);
    });

    test.each([
        [2, , [3, 4, 5, 6]],
        [2, 4, [3, 4]],
        [1, 5, [2, 3, 4, 5]],
        [1, -7, []],
        [-3, -5, []],
        [7, 3, []],
        [-2, , [5, 6]],
        [2, -1, [3, 4, 5]],
        [, , [1, 2, 3, 4, 5, 6]],
    ])('slice', (start, end, expected) => {
        expect(arr.slice(start, end)).toEqual(expected);
    });

    test.each([
        [1, 0],
        [3, 2],
        [6, 5],
        [7, -1],
    ])('indexOf', (value, expected) => {
        expect(arr.indexOf(value)).toEqual(expected);
    });

    test.each([
        [1, , 0],
        [3, , 5],
        [6, , 6],
        [7, , 7],
        [8, , -1],
    ])('lastIndexOf', (value, index, expected) => {
        expect(arr_lastIndexOf.lastIndexOf(value, index)).toEqual(expected);
    });

    test.each([
        [ , '1,2,3,4,5,6'],
        ['', '123456'],
        ['*', '1*2*3*4*5*6']
    ])('join', (middle, expected) => {
        expect(arr.join(middle)).toEqual(expected);
    });

    test.each([
        [1, true],
        [6, true],
        [0, false],
        [7, false],
    ])('includes', (value, expected) => {
        expect(arr.includes(value)).toEqual(expected);
    });

    test('flat', () => {
        expect(arr_flat.flat()).toEqual([1, 2, 3, 4, 11, 12, 5, 6, 7, 8, 9]);
    });

    test('flatMap', () => {
        expect(arr_flatMap.flatMap((element) => (element !== 8)?[element-1, element]:element-1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    test('toReversed', () => {
        expect(arr.toReversed()).toEqual([6, 5, 4, 3, 2, 1]);
    });

    test('toSorted', () => {
        expect(unsorted.toSorted()).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });

    test('toSpliced', () => {
        expect(arr_toSpliced.toSpliced(2, 3, 3, 4, 5)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});