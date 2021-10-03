/**
 *
 * @param str the string to convert
 * @param symbol currency symbol
 * @param symbolPosition position to attach symbol. Default: before
 * @param separator delimiter to use between numbers. Default: ' (single-quote)
 */
export const toCurrency = (
    str,
    symbol: string = '',
    symbolPosition: 'before' | 'after' = 'before',
    separator: string = "'",
) => {
    if (str.split('').length < 4) {
        return str;
    }
    const reversedArray = str.split('').reverse();
    let reversedStr = '';
    reversedArray.forEach((ch, index) => {
        const isThirdUnit = (index + 1) % 3 == 0;
        const isNotFirstElement = index + 1 != reversedArray.length;
        reversedStr += ch;
        if (isThirdUnit && isNotFirstElement) {
            reversedStr += separator;
        }
    });
    const currency = reversedStr.split('').reverse().join('');
    return symbolPosition == 'before' ? `${symbol}${currency}` : `${currency}${symbol}`;
};

/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "as", "of"
 */
export const toTitleCase = (str: string, keep: string[] = []) => {
    const words = str.split(' ');
    const titleWords = words.map(word => {
        if (keep.includes(word)) {
            return word;
        }
        return `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;
    });
    return titleWords.join(' ');
};

/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "London"
 * @param modify array of words to capitalize the first letter of, in addition to the first letter of the string
 */
export const toSentenceCase = (
    str: string,
    keep: string[] = [],
    modify: string[] = [],
) => {
    const words = str.split(' ');
    const sentenceWords = words.map(word => {
        if (keep.includes(word)) {
            return word;
        }
        if (modify.includes(word)) {
            return `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;
        }
        return word.toLowerCase();
    });
    const sentence = sentenceWords.join(' ');
    return `${sentence.charAt(0).toUpperCase()}${sentence.substring(1)}`;
};

/**
 * 
 * @param str the string to convert
 * @param truncateOn index to cutoff the string. Default: 150
 */
export const toTruncatedText = (str: string, truncateOn = 150) => {
    return `${str.slice(0, truncateOn).trim()}...`;
};
