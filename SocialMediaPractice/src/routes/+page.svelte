<script>
    import Post from '$lib/components/Post.svelte';
    let posts = [
        {
            username: "bob",
            avatar: "",
            postdate: "12/05/5",
            posttext: "lorem ipsum",
            likes: 6
        },
        {
            username: "rachel",
            avatar: "",
            postdate: "05/",
            posttext: "stuff and things",
            likes: 56
        },
        {
            username: "Raim",
            avatar: "",
            postdate: "16/5/66",
            posttext: "I hate Case SEns",
            likes: 66
        },
        {
            username: "names",
            avatar: "",
            postdate: "65",
            posttext: "stuuff",
            likes: 2
        }
    ]

</script>



{#each posts as post}
    <Post postData={post}/>
{/each}



