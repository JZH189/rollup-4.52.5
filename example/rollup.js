const { rollup } = require('../dist/rollup');

const outputOption = {
	file: './es.js',
	format: 'es'
};

async function build() {
	try {
		debugger
		const { write } = await rollup({ input: `${__dirname}/index.js` });
		await write(outputOption);
	} catch (error) {
		console.log('error: ', error);
	}
}

build();
