const cmExample = require('.');

describe('cmExample', () => {
	it('Works', () => {
		expect(cmExample());
	});

	it('Appends input param', () => {
		expect(cmExample('cats')).toEqual('raccoons and cats');
	});
});
