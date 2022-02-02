const sum = require("./sum.js");

describe('Netinkamo tipo parametrai', () => {
    test('neduodam visiskai jokiu reiksmiu', () => {
        expect(sum()).toBe('Abu parametrai turi buti skaiciaus tipo');
    });
    test('pirmas parametras yra boolean', () => {
        expect(sum(true, 5)).toBe('Pirmas parametras ne tinkamo tipo');
    });
    test('pirmas parametras yra string', () => {
        expect(sum('true', 5)).toBe('Pirmas parametras ne tinkamo tipo');
    });
    test('pirmas parametras yra array', () => {
        expect(sum([], 5)).toBe('Pirmas parametras ne tinkamo tipo');
    });
    test('antras parametras yra boolean', () => {
        expect(sum(5, true)).toBe('Antras parametras ne tinkamo tipo');
    });
    test('antras parametras yra string', () => {
        expect(sum(5, 'true')).toBe('Antras parametras ne tinkamo tipo');
    });
    test('antras parametras yra array', () => {
        expect(sum(5, [])).toBe('Antras parametras ne tinkamo tipo');
    });
    test('abu parametrai yra stringai', () => {
        expect(sum('a', 'b')).toBe('Abu parametrai turi buti skaiciaus tipo');
    });
    test('abu parametrai yra undefined', () => {
        expect(sum(undefined, undefined)).toBe('Abu parametrai turi buti skaiciaus tipo');
    });
});

describe('Tinkamo tipo parametai, bet neteisingomis reiksmemis', () => {
    test('pirmas yra NaN', () => {
        expect(sum(NaN, 5)).toBe('Pirmas parametras nera tinkamas skaicius (NaN)');
    });
    test('antras yra NaN', () => {
        expect(sum(5, NaN)).toBe('Antras parametras nera tinkamas skaicius (NaN)');
    });
    test('abu yra NaN', () => {
        expect(sum(NaN, NaN)).toBe('Abu parametrai nera tinkami skaiciai (NaN, NaN)');
    });
    test('pirmas yra Infinity', () => {
        expect(sum(Infinity, 5)).toBe('Pirmas parametras nera tinkamas skaicius (Infinity)');
    });
    test('antras yra Infinity', () => {
        expect(sum(5, Infinity)).toBe('Antras parametras nera tinkamas skaicius (Infinity)');
    });
    test('abu yra Infinity', () => {
        expect(sum(Infinity, Infinity)).toBe('Abu parametrai nera tinkami skaiciai (Infinity, Infinity)');
    });
    test('pirmas yra -Infinity', () => {
        expect(sum(-Infinity, 5)).toBe('Pirmas parametras nera tinkamas skaicius (-Infinity)');
    });
    test('antras yra -Infinity', () => {
        expect(sum(5, -Infinity)).toBe('Antras parametras nera tinkamas skaicius (-Infinity)');
    });
    test('abu yra -Infinity', () => {
        expect(sum(-Infinity, -Infinity)).toBe('Abu parametrai nera tinkami skaiciai (-Infinity, -Infinity)');
    });
    test('pirmas yra NaN, antras yra Infinity', () => {
        expect(sum(NaN, Infinity)).toBe('Abu parametrai nera tinkami skaiciai (NaN, Infinity)');
    });
});

describe('Tinkami parametai, teisingomis reiksmemis', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('3.14 + 3.14 = 6.28', () => {
        expect(sum(3.14, 3.14)).toBeCloseTo(6.28, 5);
    });
    test('0.1 + 0.2 = 0.3', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
    test('1 + 0.2 = 1.2', () => {
        expect(sum(1, 0.2)).toBeCloseTo(1.2, 5);
    });
    test('-1 + -2 = -3', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    test('-3.14 + -3.14 = -6.28', () => {
        expect(sum(-3.14, -3.14)).toBeCloseTo(-6.28, 5);
    });
    test('-0.1 + -0.2 = -0.3', () => {
        expect(sum(-0.1, -0.2)).toBeCloseTo(-0.3, 5);
    });
    test('-1 + -0.2 = -1.2', () => {
        expect(sum(-1, -0.2)).toBeCloseTo(-1.2, 5);
    });
    test('1 + 0 = 1', () => {
        expect(sum(1, 0)).toBe(1);
    });
    test('0.1 + 0 = 0.1', () => {
        expect(sum(0.1, 0)).toBeCloseTo(0.1, 5);
    });
    test('-0.1 + 0 = -0.1', () => {
        expect(sum(-0.1, 0)).toBeCloseTo(-0.1, 5);
    });
});