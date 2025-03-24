const MutatorArray= require('../../ArrayMethods/mutator_methods');

describe('MutatorArray Methods', () => {
    let arr, arr_sort;
    beforeEach(() => {
        arr= new MutatorArray(1, 2, 3, 4, 5, 6);
        arr_sort= new MutatorArray(6, 3, 2, 5, 4, 0, 1, 7, 9, 8)
    });

    test(
        'pop', () => {
            expect(arr.pop()).toEqual(6);
        }
    );

    test(
        'push', () => {
            expect(arr.push(6)).toEqual(7);
        }
    );

    test(
        'shift', () => {
            expect(arr.shift()).toEqual(1);
        }
    );

    test(
        'unshift', () => {
            expect(arr.unshift(0)).toEqual(7);
        }
    );

    // splice test cases
    test(
        'splice', () => {
            expect(arr.splice(-10, 3, 3, 4, 5)).toEqual([1, 2, 3]);
        }
    );

    test(
        'splice', () => {
            expect(arr.splice(-10, 0, 3, 4, 5)).toEqual([]);
        }
    );

    test(
        'splice', () => {
            expect(arr.splice(-3, 2, 3, 4, 5)).toEqual([4, 5]);
        }
    );

    test(
        'splice', () => {
            expect(arr.splice(10, 2, 7, 8, 9)).toEqual([]);
        }
    );

    test(
        'splice', () => {
            expect(arr.splice(1, 2, 2, 3, 4, 5)).toEqual([2, 3]);
        }
    );

    test(
        'splice', () => {
            expect(arr.splice(1, 0, 1.2, 1.4, 1.6, 1.8)).toEqual([]);
        }
    );

    test.each([
        [2, , , {'0':1, '1':2, '2':1, '3':2, '4':3, '5':4, 'length':6}],
        [1, 2, , {'0':1, '1':3, '2':4, '3':5, '4':6, '5':6, 'length':6}],
        [1, 3, 5, {'0':1, '1':4, '2':5, '3':4, '4':5, '5':6, 'length':6}],
        [, , , {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [-7, 1, 3, {'0':2, '1':3, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [-4, 1, 3, {'0':1, '1':2, '2':2, '3':3, '4':5, '5':6, 'length':6}],
        [-4, -2, , {'0':1, '1':2, '2':5, '3':6, '4':5, '5':6, 'length':6}],
        [-4, -2, -7, {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [-4, -3, -1, {'0':1, '1':2, '2':4, '3':5, '4':5, '5':6, 'length':6}],
    ])(
        'copyWithin', (target, start, end, expected) => {
            expect(arr.copyWithin(target, start, end)).toEqual(expected);
        }
    );

    test(
        'sort', () => {
            expect(arr_sort.sort()).toEqual({"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "length": 10});
        }
    );

    test(
        'reverse', () => {
            expect(arr.reverse()).toEqual({"0": 6, "1": 5, "2": 4, "3": 3, "4": 2, "5": 1, "length": 6});
        }
    );

    test.each([
        [4, , , {'0':4, '1':4, '2':4, '3':4, '4':4, '5':4, 'length':6}],
        [4, 1, , {'0':1, '1':4, '2':4, '3':4, '4':4, '5':4, 'length':6}],
        [4, 1, 2, {'0':1, '1':4, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [4, 1, 1, {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [4, -3, -2, {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [4, 3, 5, {'0':1, '1':2, '2':3, '3':4, '4':4, '5':6, 'length':6}],
        [4, 6, 5, {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
        [4, 3, -7, {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, 'length':6}],
    ])(
        'fill', (value, start, end, expected) => {
            expect(arr.fill(value, start, end)).toEqual(expected);
        }
    );
})