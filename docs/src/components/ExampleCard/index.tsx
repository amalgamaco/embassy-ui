import React from 'react';
import {
	Card, CardContent, CardHeader, CardActions, VStack, IconButton,
	UIKitIcon, Image, Text, Button, CardMedia
} from '@amalgamaco/embassy-ui';

const ExampleCard = () => (
	<VStack marginBottom="5" width={327}>
		<Card>
			<CardHeader
				avatar={{ uri: 'https://tinyurl.com/mrkdr42d' }}
				title="Jhon Doe"
				subtitle="Cat Influencer"
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
				<Text variant="sh">Advice for future generations</Text>
				<Text variant="body">And for the current ones :)</Text>
				<Text variant="body" paddingTop="2">
					Keep smiling, because life is a beautiful thing
					and there's so much to smile about.
				</Text>
			</CardContent>
			<CardActions>
				<Button variant="primary" py="2.5" onPress={() => window.alert( 'liked' )}>Like</Button>
				<Button variant="secondary" py="2.5" onPress={() => window.alert( 'disliked' )}>Dislike</Button>
			</CardActions>
		</Card>
	</VStack>
);

export default ExampleCard;
