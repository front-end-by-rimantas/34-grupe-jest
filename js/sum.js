function sum(a, b) {
    if (typeof a !== 'number'
        && typeof b !== 'number') {
        return 'Abu parametrai turi buti skaiciaus tipo';
    }
    if (typeof a !== 'number') {
        return 'Pirmas parametras ne tinkamo tipo';
    }
    if (typeof b !== 'number') {
        return 'Antras parametras ne tinkamo tipo';
    }
    if (!isFinite(a) && !isFinite(b)) {
        return `Abu parametrai nera tinkami skaiciai (${a}, ${b})`;
    }
    if (!isFinite(a)) {
        return `Pirmas parametras nera tinkamas skaicius (${a})`;
    }
    if (!isFinite(b)) {
        return `Antras parametras nera tinkamas skaicius (${b})`;
    }
    return a + b;
}

module.exports = sum;