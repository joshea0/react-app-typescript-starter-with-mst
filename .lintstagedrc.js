module.exports = {
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit'],
  '*.{jsx,js,tsx,ts}': ['prettier', 'eslint'],
  '*.styles.{jsx,tsx}': ['stylelint'],
};
