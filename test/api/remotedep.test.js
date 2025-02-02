import { Generator } from '@jspm/generator';
import assert from 'assert';

const generator = new Generator({
  mapUrl: import.meta.url,
  defaultProvider: 'jspm',
  env: ['production', 'browser']
});

await generator.install({ target: './local/pkg', subpath: './remotedep' });
const json = generator.getMap();

assert.strictEqual(json.imports['localpkg/remotedep'], './local/pkg/d.js');
assert.strictEqual(json.scopes['./'].react, 'https://ga.jspm.io/npm:react@16.14.0/index.js');
