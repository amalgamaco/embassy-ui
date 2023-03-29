import React from 'react';
import {
	Image, VStack, Text, HStack, Box
} from '@amalgamaco/embassy-ui';

const imageContainerProps = {
	backgroundColor: 'primary.200',
	borderRadius: 'md'

};
const SOURCE = { uri: 'https://placekitten.com/200/200' };
const ImageExamples = () => (
	<VStack marginBottom={'5'}>
		<Text variant="headline" margin={'3'}>Image Component</Text>
		<VStack space="2" alignItems="center" >
			<Text variant="subtitle">resizeMode cover and repeat</Text>
			<HStack space="4">
				<Box {...imageContainerProps}>
					<Image
						source={SOURCE}
						width={200}
						height={300}
					/>
				</Box>
				<Box {...imageContainerProps}>
					<Image
						source={SOURCE}
						width={200}
						height={400}
						resizeMode="repeat"
					/>
				</Box>
			</HStack>
			<Text variant="subtitle">resizeMode stretch and center</Text>
			<HStack space={4}>
				<Box {...imageContainerProps}>
					<Image
						source={SOURCE}
						width={250}
						height={350}
						resizeMode="stretch"
					/>
				</Box>
				<Box {...imageContainerProps}>
					<Image
						source={SOURCE}
						width={250}
						height={350}
						resizeMode="center"
					/>
				</Box>
			</HStack>
			<Text variant="subtitle">resizeMode contain</Text>
			<Box {...imageContainerProps}>
				<Image
					source={SOURCE}
					width={400}
					height={200}
					resizeMode="contain"
				/>
			</Box>
		</VStack>
	</VStack>
);

export default ImageExamples;
