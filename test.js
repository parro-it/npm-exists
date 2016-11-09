import test from 'ava';
import npmExists from '.';

test('is defined', t => {
	t.is(typeof npmExists, 'function');
});

test('return true for existant packages', async t => {
	t.true(await npmExists('request'));
});

test('return false for non existant packages', async t => {
	t.false(await npmExists('this-module-doesnt-exist'));
});

test('taobao source should works', async t => {
	t.true(await npmExists('request', 'taobao'));
});

