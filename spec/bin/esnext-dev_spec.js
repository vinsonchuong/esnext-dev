import {childProcess} from 'node-promise-es6';

describe('esnext-dev', async () => {
  it('works', async () => {
    const {stdout} = await childProcess.exec('esnext-dev');
    expect(stdout.trim()).toBe('Hello World!');
  });
});
