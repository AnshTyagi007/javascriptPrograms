const IterationArray= require('../../ArrayMethods/iteration_methods');

describe('IterationArray Methods', () => {
    let arr;

    beforeEach(() => {
        arr= new IterationArray(1, 2, 3, 4, 5, 6);
    });

    test('forEach', () => {
        expect(arr.forEach((element) => element+1)).toEqual(undefined);
    });

    test('map', () => {
        expect(arr.map(element => element*2)).toEqual([2, 4, 6, 8, 10, 12]);
    });

    test('filter', () => {
        expect(arr.filter(element => element>3)).toEqual([4, 5, 6]);
    });

    test('reduce', () => {
        expect(arr.reduce((total, element) => total-element)).toEqual(-19);
    });

    test('reduceRight', () => {
        expect(arr.reduceRight((total, element) => total-element)).toEqual(-9);
    });

    test.each([
        [(element) => element%2===0, 2],
        [(element) => element%7===0, undefined],
    ])('find', (myFunction, expected) => {
        expect(arr.find(myFunction)).toEqual(expected);
    });

    test.each([
        [(element) => element%2===0, 1],
        [(element) => element%2===2, -1],
    ])('findIndex', (myFunction, expected) => {
        expect(arr.findIndex(myFunction)).toEqual(expected);
    });

    test('findLast', () => {
        expect(arr.findLast((element) => element%2===0)).toEqual(6);
    });

    test('findLastIndex', () => {
        expect(arr.findLastIndex((element) => element%2===0)).toEqual(5);
    });

    test.each([
        [(element) => element%5===0, true],
        [(element) => element%7===0, false],
    ])('some', (myFunction, expected) => {
        expect(arr.some(myFunction)).toEqual(expected);
    });

    test.each([
        [(element) => element%5===0, false],
        [(element) => element%7!==0, true],
    ])('some', (myFunction, expected) => {
        expect(arr.every(myFunction)).toEqual(expected);
    });
});