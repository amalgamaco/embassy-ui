import React from 'react';
import {
	Card, CardContent, CardHeader, CardActions, VStack, IconButton,
	UIKitIcon, Image, Text, Button, CardMedia
} from '@amalgama/embassy-ui';

const ExampleCard = () => (
	<VStack marginBottom="5" width={327}>
		<Card>
			<CardHeader
				avatar={{ uri: 'https://tinyurl.com/mrkdr42d' }}
				title="Header"
				subtitle="Subheader"
				rightActions={[
					<IconButton
						as={UIKitIcon}
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
				<Button variant="primary" py="2.5">Action 1</Button>
				<Button variant="secondary" py="2.5">Action 2</Button>
			</CardActions>
		</Card>
	</VStack>
);

export default ExampleCard;
