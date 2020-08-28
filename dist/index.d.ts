/**
 *
 * @param str the string to convert
 * @param symbol currency symbol
 * @param symbolPosition position to attach symbol. Default: before
 * @param separator delimiter to use between numbers. Default: ' (single-quote)
 */
export declare const toCurrency: (str: string, symbol?: string, symbolPosition?: 'before' | 'after', separator?: string) => string;
/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "as", "of"
 */
export declare const toTitleCase: (str: string, keep?: string[]) => string;
/**
 *
 * @param str the string to convert
 * @param keep array of words to ignore. Like "London"
 * @param modify array of words to capitalize the first letter of, in addition to the first letter of the string
 */
export declare const toSentenceCase: (str: string, keep?: string[], modify?: string[]) => string;
/**
 *
 * @param str the string to convert
 * @param truncateOn index to cutoff the string. Default: 150
 */
export declare const toTruncatedText: (str: string, truncateOn?: number) => string;
