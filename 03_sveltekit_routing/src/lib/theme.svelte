<script lang="ts">
	import { onMount } from 'svelte';

	// indicate if we're in dark mode or not
	let dark: boolean;

	// hide the control until we've decided what the intial mode is
	let hidden = true;

	onMount(() => {
		// use the existence of the dark dataset theme attribute on the html element for the initial value
		dark = document.documentElement.dataset.theme === 'dark';
		// show UI controls
		hidden = false;
		// listen for changes so we auto-adjust based on system settings
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);
		return () => matcher.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function toggle() {
		setMode(!dark);
	}

	function setMode(value: boolean) {
		dark = value;

		// update page styling
		if (dark) {
			document.documentElement.dataset.theme = 'dark';
		} else {
			document.documentElement.dataset.theme = 'light';
		}

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';

		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
</script>

<svelte:head>
	<!-- set dark mode class based on user preference / device settings (in head to avoid FOUC) -->
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.dataset.theme = 'dark';
		} else {
			document.documentElement.dataset.theme = 'light';
		}
	</script>
</svelte:head>

<!-- simple toggle version -->
<button data-theme={dark} class:hidden on:click={toggle}>
	{dark ? 'Light Mode' : 'Dark Mode'}
</button>
