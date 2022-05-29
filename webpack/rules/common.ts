export const babelLoader = {
	loader: 'babel-loader'
}

export const typescriptRule = {
	test: /\.tsx?$/,
	use: [babelLoader],
	exclude: /node_modules/
}

export const javascriptRule = {
	test: /\.jsx?$|\.js?$/,
	use: [babelLoader],
	exclude: /node_modules/
}

export const htmlRule = {
	test: /\.(html)$/,
	use: {
		loader: 'html-loader'
	}
}

export const mediasRule = {
	test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	type: 'asset/resource',
	generator: {
		filename: 'images/[name][ext]',
	}
}


export const svgRule = {
	test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
	type: 'asset/inline'
}
