/* eslint-disable @typescript-eslint/no-var-requires */
const path = require( 'path' );

async function linkLibraryPlugin() {
	return {
		name: 'docusaurus-link-library-plugin',
		configureWebpack() {
			return {
				resolve: {
					alias: {
						// Link react-native-ui-kit library
						'@amalgama/react-native-ui-kit': path.resolve( __dirname, '..', '..', '..', 'src' ),
						// Resolve react, react-dom and react-native-web packages to the doc's project
						// node_modules/ folder.
						'react': path.resolve( __dirname, '..', '..', 'node_modules', 'react' ),
						'react-dom': path.resolve( __dirname, '..', '..', 'node_modules', 'react-dom' ),
						'react-native-web': path.resolve(
							__dirname,
							'..',
							'..',
							'node_modules',
							'react-native-web'
						)
					}
				},
				module: {
					rules: [
						// Process react-native-vector-icons fonts
						{
							test: /\.ttf$/,
							loader: 'url-loader',
							include: path.resolve( __dirname, '../../node_modules/react-native-vector-icons' )
						},
						// Process react-native-vector-icons through babel in oder to work
						{
							test: /\.(js|jsx|ts|tsx)$/,
							loader: 'babel-loader',
							include: path.resolve( __dirname, '../../node_modules/react-native-vector-icons/' ),
							options: {
								presets: [
									'@babel/env',
									'@babel/preset-react',
									'module:metro-react-native-babel-preset'
								],
								plugins: [
									'react-native-web',
									'@babel/plugin-proposal-class-properties'
								]
							}
						}
					]
				}
			};
		}
	};
}

module.exports = linkLibraryPlugin;
