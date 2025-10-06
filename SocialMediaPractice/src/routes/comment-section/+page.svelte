<script>
    import Comments from "$lib/components/Comments.svelte";
    let {data} = $props(); //important comes from the load function - has to be called data
    
</script>

{#each data.comments as comment}
    <Comments commentData = {comment} />
{/each}

