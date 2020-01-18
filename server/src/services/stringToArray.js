function string2Array(string, separador) {
    return string.split(separador).map(word => word.trim());
}

module.exports = string2Array;