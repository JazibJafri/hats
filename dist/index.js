Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param str the string to convert
 * @param symbol currency symbol
 * @param symbolPosition position to attach symbol. Default: before
 * @param separator delimiter to use between numbers. Default: ' (single-quote)
 */
var toCurrency = function (str, symbol, symbolPosition, separator) {
    if (symbol === void 0) { symbol = ''; }
    if (symbolPosition === void 0) { symbolPosition = 'before'; }
    if (separator === void 0) { separator = "'"; }
    if (str.split('').length < 4) {
        return str;
    }
    var reversedArray = str.split('').reverse();
    var reversedStr = '';
    reversedArray.forEach(function (ch, index) {
        var isThirdUnit = (index + 1) % 3 == 0;
        var isNotFirstElement = index + 1 != reversedArray.length;
        reversedStr += ch;
        if (isThirdUnit && isNotFirstElement) {
            reversedStr += separator;
        }
    });
    var currency = reversedStr.split('').reverse().join('');
    return symbolPosition == 'before' ? "" + symbol + currency : "" + currency + symbol;
};
/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "as", "of"
 */
var toTitleCase = function (str, keep) {
    if (keep === void 0) { keep = []; }
    var words = str.split(' ');
    var titleWords = words.map(function (word) {
        if (keep.includes(word)) {
            return word;
        }
        return "" + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    });
    return titleWords.join(' ');
};
/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "London"
 * @param modify array of words to capitalize the first letter of, in addition to the first letter of the string
 */
var toSentenceCase = function (str, keep, modify) {
    if (keep === void 0) { keep = []; }
    if (modify === void 0) { modify = []; }
    var words = str.split(' ');
    var sentenceWords = words.map(function (word) {
        if (keep.includes(word)) {
            return word;
        }
        if (modify.includes(word)) {
            return "" + word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        }
        return word.toLowerCase();
    });
    var sentence = sentenceWords.join(' ');
    return "" + sentence.charAt(0).toUpperCase() + sentence.substring(1);
};
/**
 *
 * @param str the string to convert
 * @param truncateOn index to cutoff the string. Default: 150
 */
var toTruncatedText = function (str, truncateOn) {
    if (truncateOn === void 0) { truncateOn = 150; }
    return str.slice(0, truncateOn).trim() + "...";
};

exports.toCurrency = toCurrency;
exports.toSentenceCase = toSentenceCase;
exports.toTitleCase = toTitleCase;
exports.toTruncatedText = toTruncatedText;
//# sourceMappingURL=index.js.map
