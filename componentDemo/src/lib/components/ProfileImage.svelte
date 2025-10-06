<script>
	let { name = "dogo", imgurl = 'https://placedog.net/2000/?random' } = $props();
</script>

<section class="left-panel">
	<h2>{name}</h2>
	<img src={imgurl} alt={name} />
</section>

<style>
	img {
		max-width: 100%;
	}
    h2{
        font-size: 1.7em;
    }
</style>
