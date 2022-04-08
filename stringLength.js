function stringLength(str) {
    return str.length > 0 && str.length < 11 ? str.length : 'string should be between 1 and 10 length';
}

module.exports = stringLength;