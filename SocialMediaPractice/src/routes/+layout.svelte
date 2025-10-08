<script>
	import favicon from '$lib/assets/favicon.svg';
    import Navagation from '$lib/components/Navagation.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <h1>My website for stuff</h1>
    <Navagation/>
</header>

{@render children?.()}

<style>
    :global(body) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
