const MyString= require('../StringMethods/methods')

describe('String Methods', () => {
    let str;
    let str_concat;
    let str_replaceAll;
    let str_trim;

    beforeEach(() =>{
        str= new MyString('Hello World!');
        str_concat= new MyString('This is Ansh');
        str_replaceAll= new MyString('I love Cats. Cats are very easy to love. Cats are very popular.');
        str_trim= new MyString('    Hello World!  ')
    });

    test('valueOf', () => {
        expect(str.valueOf()).toEqual('Hello World!')
    });

    test.each([
        [0, 'H'],
        [6, 'W'],
        [-1, undefined],
    ])('charAt', (index, expected) => {
        expect(str.charAt(index)).toEqual(expected);
    });

    test.each([
        ['Hello', true],
        ['ello', false],
        ['World', false],
        ['H', true]
    ])('startsWith', (value, expected) => {
        expect(str.startsWith(value)).toEqual(expected);
    });

    test.each([
        ['World', false],
        ['World!', true],
        ['!', true],
        ['Hello', false]
    ])('endsWith', (value, expected) => {
        expect(str.endsWith(value)).toEqual(expected);
    });

    test.each([
        ['!', ,11],
        ['or', , 7],
        [' ', ,5],
        ['H', ,0],
        ['l', ,2],
        ['l', 13, -1],
        ['g', 5, -1],
    ])('indexOf', (value, index, expected) => {
        expect(str.indexOf(value, index)).toEqual(expected);
    });

    test.each([
        ['l', , 9],
        ['o', , 7],
        ['o', -1, -1],
    ])('lastIndexOf', (value, index, expected) => {
        expect(str.lastIndexOf(value, index)).toEqual(expected);
    });

    test.each([
        [7, , 'orld!'],
        [4, 9, 'o Wor'],
        [-4, , 'rld!'],
        [-9, -5, 'lo W'],
        [-9, 13, 'lo World!'],
        [-9, 13, 'lo World!'],
        [-9, -13, undefined],
        [, , 'Hello World!'],
        [4, 2, undefined],
    ])('slice', (start, end, expected) => {
        expect(str.slice(start, end)).toEqual(expected);
    });

    test('toUpperCase', () => {
        expect(str.toUpperCase()).toEqual('HELLO WORLD!');
    });

    test('concat', () => {
        expect(str.concat(str_concat)).toEqual('Hello World!This is Ansh')
    });

    test('split', () => {
        expect(str.split()).toEqual(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'])
    });

    test.each([
        ['World!', ,true],
        ['World!', 6, true],
        ['World!', 7, false],
    ])('includes', (value, index, expected) => {
        expect(str.includes(value, index)).toEqual(expected)
    });

    test('replace', () => {
        expect(str.replace('World', 'Ansh')).toEqual('Hello Ansh!')
    });

    test('replaceAll', () => {
        expect(str_replaceAll.replaceAll('Cats', 'Dogs')).toEqual('I love Dogs. Dogs are very easy to love. Dogs are very popular.')
    });

    test('trim', () => {
        expect(str_trim.trim()).toEqual('Hello World!');
    });

    test('trimStart', () => {
        expect(str_trim.trimStart()).toEqual('Hello World!  ');
    });

    test('trimEnd', () => {
        expect(str_trim.trimEnd()).toEqual('    Hello World!');
    });

    test.each([
        [2, 'Hello World!Hello World!'],
        [3, 'Hello World!Hello World!Hello World!'],
    ])('repeat', (value, expected) => {
        expect(str.repeat(value)).toEqual(expected)
    });
});