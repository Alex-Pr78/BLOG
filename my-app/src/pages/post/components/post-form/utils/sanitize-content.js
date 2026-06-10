export const sanitizeContent = (content) => {
	return content
		.replaceAll('&nbsp;', ' ')
		.replace(/ +/, ' ')
		.replaceAll('<br>', '\n')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
};
