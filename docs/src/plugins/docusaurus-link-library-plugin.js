/* eslint-disable @typescript-eslint/no-var-requires */
const path = require( 'path' );

const docsRoot = path.resolve( __dirname, '..', '..' );
const embassyUIRoot = path.resolve( __dirname, '..', '..', '..' );

async function linkLibraryPlugin() {
	return {
		name: 'docusaurus-link-library-plugin',
		configureWebpack() {
			return {
				resolve: {
					alias: {
						// Link embassy-ui library
						'@amalgamaco/embassy-ui': path.resolve( embassyUIRoot, 'src' ),
						// Resolve react, react-dom and react-native-web packages to the doc's project
						// node_modules/ folder.
						'react': path.resolve( docsRoot, 'node_modules', 'react' ),
						'react-dom': path.resolve( docsRoot, 'node_modules', 'react-dom' ),
						'react-native-svg': 'react-native-svg-web',
						'react-native$': 'react-native-web',
						'react-native-web': path.resolve(
							docsRoot,
							'node_modules',
							'react-native-web'
						),
						[ path.resolve(
							embassyUIRoot,
							'src/components/main/DateInput/DatePicker/index.tsx'
						) ]: path.resolve(
							embassyUIRoot,
							'src/components/main/DateInput/DatePicker/index.web.tsx'
						)
					},
					extensions: [
						'.web.tsx',
						'.tsx',
						'.web.ts',
						'.ts',
						'.web.js',
						'.js',
						'...'
					]
				},
				module: {
					noParse: /react-native-date-picker/,
					rules: [
						// Process react-native-vector-icons through babel in oder to work
						{
							test: /\.(js|jsx|ts|tsx)$/,
							loader: 'babel-loader',
							include: [
								path.resolve( embassyUIRoot, 'node_modules/react-native-animatable/' ),
								path.resolve( docsRoot, 'node_modules/react-native-vector-icons/' )
							],
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
