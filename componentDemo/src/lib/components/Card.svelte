<script>
	import ProfileDetails from './ProfileDetails.svelte';
	import ProfileImage from './ProfileImage.svelte';
    let { name = "dogy", imgurl = 'https://placedog.net/2000/?random' } = $props();

</script>

<div>
	<ProfileImage name = {name} imgurl = {imgurl}/>
	<ProfileDetails />
</div>

<style>
	div {
		background-color: rgb(252, 248, 242);
		border: 1px solid darkgrey;
		border-radius: 3px;
		box-shadow: 1px 5px 5px rgb(212, 175, 201);
		padding: 1em;
		/* max-width: 25%; */
		display: flex;
		font-family: 'Times New Roman', Times, serif;
		gap: 0.5em;
		margin: 1.5em;
	}
</style>
