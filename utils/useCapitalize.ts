/**
 * Convert first letter of a word to uppercase
 * @param {string} word
 * @return {string} Letter with Uppercase
 */
export default function useCapitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
