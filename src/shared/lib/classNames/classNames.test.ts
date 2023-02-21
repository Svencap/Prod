import { classNames } from './classNames';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });
    test('with additional class', () => {
        const expected = 'some class1 class2 class3';
        expect(classNames('some', {}, ['class1', 'class2', 'class3']))
            .toBe(expected);
    });
    test('with mods', () => {
        const expected = 'some class1 class2 hovered';
        expect(classNames('some', { hovered: true }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'some class1 class2';
        expect(classNames('some', { selected: false }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'some class1 class2';
        expect(classNames('some', { hovered: undefined }, ['class1', 'class2']))
            .toBe(expected);
    });
});
