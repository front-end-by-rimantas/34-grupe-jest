const isValidUsername = require("./username.js");

describe('Netinkamo tipo parametras', () => {
    test('neduotas parametras', () => {
        expect(isValidUsername()).toBe('Netinkamo tipo parametras');
    });
})

describe('Tinkamo tipo parametras, bet su blogomis reiksmemis', () => {
    test('Li - per trumpas', () => {
        expect(isValidUsername('Li')).toBe('Per trumpas');
    });
})

describe('Tinkamo tipo parametras', () => {
    test('John', () => {
        expect(isValidUsername('John')).toBeTruthy();
    });
})