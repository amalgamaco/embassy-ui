import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useThemeColorModeSwtich } from '@amalgama/react-native-ui-kit';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { translate } from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import styles from './styles.module.css';

const ColorModeToggle = ( { className, value, onChange } ) => {
	const isBrowser = useIsBrowser();
	const switchColorMode = useThemeColorModeSwtich();

	const title = translate(
		{
			message: 'Switch between dark and light mode (currently {mode})',
			id: 'theme.colorToggle.ariaLabel',
			description: 'The ARIA label for the navbar color mode toggle'
		},
		{
			mode:
				value === 'dark'
					? translate( {
						message: 'dark mode',
						id: 'theme.colorToggle.ariaLabel.mode.dark',
						description: 'The name for the dark color mode'
					} )
					: translate( {
						message: 'light mode',
						id: 'theme.colorToggle.ariaLabel.mode.light',
						description: 'The name for the light color mode'
					} )
		}
	);

	useEffect( () => {
		switchColorMode( value );
	}, [ value, switchColorMode ] );

	return (
		<div className={clsx( styles.toggle, className )}>
			<button
				className={clsx(
					'clean-btn',
					styles.toggleButton,
					!isBrowser && styles.toggleButtonDisabled
				)}
				type="button"
				onClick={() => onChange( value === 'dark' ? 'light' : 'dark' )}
				disabled={!isBrowser}
				title={title}
				aria-label={title}>
				<IconLightMode
					className={clsx( styles.toggleIcon, styles.lightToggleIcon )}
				/>
				<IconDarkMode
					className={clsx( styles.toggleIcon, styles.darkToggleIcon )}
				/>
			</button>
		</div>
	);
};
export default React.memo( ColorModeToggle );
