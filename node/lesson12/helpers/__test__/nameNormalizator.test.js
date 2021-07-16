const { nameNormalizator } = require('../nameNormalizator');

const nameNormalizatorData = [
  { input: 'John Doe', output: 'John Doe' },
  { input: 'John@Doe', output: 'John Doe' },
  { input: 'john doe', output: 'John Doe' },
  { input: 'JOHN DOE', output: 'John Doe' },
  { input: 'John-Doe', output: 'John Doe' },
  { input: '     John-Doe       ', output: 'John Doe' },
  { input: 'John         Doe', output: 'John Doe' },
  { input: 'John Doé', output: 'John Doe' },
  { input: 'John      .Doè.', output: 'John Doe' },
  { input: undefined, output: '' },
  { input: null, output: '' },
  { input: '', output: '' },
  { input: 'email@gmail.com', output: 'Email Gmail Com' }, // This function will not work correctly for emails
  { input: '+34567890098', output: '34567890098' }, // Will not work for phones
];

describe('Test helpers folder', () => {
  test('nameNormalizator test', () => {
    nameNormalizatorData.forEach((testObject) => {
      const nameToCheck = nameNormalizator(testObject.input);

      expect(nameToCheck).toBe(testObject.output);
    });
  });
});
