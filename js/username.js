function isValidUsername(text) {
    if (typeof text !== 'string') {
        return 'Netinkamo tipo parametras';
    }
    return true;
}

module.exports = isValidUsername;