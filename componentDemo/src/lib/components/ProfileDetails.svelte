<script>
	import ProfileImage from './ProfileImage.svelte';
    let details = ["fluffy", "doggo","yey"]
</script>

<section class="right-panel">
	<h3>Details</h3>
	<ul>
		<li>{details[0]}</li>
		<li>{details[1]}</li>
		<li>{details[2]}</li>
	</ul>
</section>

<style>
    h3{
        font-size: 1.2em;
    }
    li{
        font-size: 1em;
    }
</style>
