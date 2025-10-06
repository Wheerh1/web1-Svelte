<script>
	import favicon from '$lib/assets/favicon.svg';
	import { link } from 'fs';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
