import React from 'react';
import {
	Button,
	Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Image, Text, UIKitIcon, VStack
} from '@amalgamaco/embassy-ui';

const CardExample = () => (
	<VStack marginBottom="5">
		<Text marginBottom="5" variant="headline">Card Component</Text>
		<Card marginX="12">
			<CardHeader
				avatar={{ uri: 'https://tinyurl.com/mrkdr42d' }}
				title="Header"
				subtitle="Subheader"
				rightActions={[
					<IconButton
						as={UIKitIcon}
						key="more-button"
						name="more-vertical-outline"
						onPress={() => window.alert( 'more button pressed' )}
					/>
				]}
			/>
			<CardMedia>
				<Image
					source={{ uri: 'https://placekitten.com/500/500' }}
					width="100%"
					resizeMode="cover"
					aspectRatio={1.5}
				/>
			</CardMedia>
			<CardContent>
				<Text variant="sh">Title</Text>
				<Text variant="body">Subhead</Text>
				<Text variant="body" paddingTop="2">
					Keep smiling, because life is a beautiful thing
					and there's so much to smile about.
				</Text>
			</CardContent>
			<CardActions>
				<Button flexShrink={1} variant="primary" py="2.5">Action 1</Button>
				<Button flexShrink={1} variant="secondary" py="2.5">Action 2</Button>
			</CardActions>
		</Card>
	</VStack>
);

export default CardExample;
