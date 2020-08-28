import { toCurrency, toTitleCase, toSentenceCase, toTruncatedText } from './';

test('toCurrency', () => {
    expect(toCurrency('100')).toBe(`100`);
    expect(toCurrency('11100')).toBe(`11'100`);
    expect(toCurrency('111100')).toBe(`111'100`);
    expect(toCurrency('11111100')).toBe(`11'111'100`);
    expect(toCurrency('11100', '$')).toBe(`$11'100`);
    expect(toCurrency('111000', '$', 'after')).toBe(`111'000$`);
    expect(toCurrency('111000', '$', 'before', ',')).toBe(`$111,000`);
});

test('toTitleCase', () => {
    expect(toTitleCase('all lower case string')).toBe('All Lower Case String');
    expect(toTitleCase('ALL UPPER CASE STRING')).toBe('All Upper Case String');
    expect(toTitleCase('MiXed case stRiNg')).toBe('Mixed Case String');
    expect(toTitleCase('a quick brown fox jumps over the lazy dog', ['the'])).toBe(
        'A Quick Brown Fox Jumps Over the Lazy Dog',
    );
});

test('toSentenceCase', () => {
    expect(toSentenceCase('all lower case sentence')).toBe('All lower case sentence');
    expect(toSentenceCase('ALL UPPER CASE SENTENCE')).toBe('All upper case sentence');
    expect(toSentenceCase('mIxEd CaSe SenTeNce')).toBe('Mixed case sentence');
    expect(toSentenceCase('he Is iN Las vegas', ['Las'], ['vegas'])).toBe(
        'He is in Las Vegas',
    );
});

test('toTruncatedText', () => {
    expect(toTruncatedText('Some very long text')).toBe('Some very long text...');
    expect(toTruncatedText('Some very long text', 10)).toBe('Some very...');
});
