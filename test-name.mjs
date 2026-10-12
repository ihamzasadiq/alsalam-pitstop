// Run: node test-name.mjs  (checks the name rules used on the start screen)
import fs from 'node:fs';
import assert from 'node:assert/strict';
const src = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const lines = src.split('\n').filter(l => /^const (firstName|cleanName) =/.test(l));
assert.equal(lines.length, 2, 'name helpers not found');
const { cleanName } = new Function(lines.join('\n') + '\nreturn { cleanName };')();
assert.equal(cleanName('  Hamza   Sadiq '), 'Hamza');
assert.equal(cleanName('A'), '');
assert.equal(cleanName('   '), '');
assert.equal(cleanName('محمد علي'), 'محمد');
assert.equal(cleanName('x'.repeat(40)).length, 18);
console.log('name rules ok');
