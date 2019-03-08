module.exports = (input, options = {}) => {
	return input + ' & ' + (options.postfix || 'raccoons');
};
