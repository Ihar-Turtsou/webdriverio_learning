describe('Description of the test suit', () => {
  before(() => {
    console.log('runs before first test on this block');
});

after(() => {
    console.log('runs after last test on this block');
  });

  it('Test 1', () => {
    console.log('Execute code: Test 1');
  });
  it('Test 2', () => {
    console.log('Execute code: Test 2');
  });
});
