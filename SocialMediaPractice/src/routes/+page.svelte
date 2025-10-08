<script>
    import Post from '$lib/components/Post.svelte';
    let posts = [
        {
            username: "bob",
            avatar: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
            postdate: "12/05/5",
            posttext: "lorem ipsum",
            likes: 6
        },
        {
            username: "rachel",
            avatar: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
            postdate: "05/",
            posttext: "stuff and things",
            likes: 56
        },
        {
            username: "Raim",
            avatar: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
            postdate: "16/5/66",
            posttext: "I hate Case SEns",
            likes: 66
        },
        {
            username: "names",
            avatar: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
            postdate: "65",
            posttext: "stuuff",
            likes: 2
        }
    ]

</script>



{#each posts as post}
    <Post postData={post}/>
{/each}



