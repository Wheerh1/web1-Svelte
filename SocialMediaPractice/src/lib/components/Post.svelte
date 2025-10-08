<script>
    let { postData } = $props();
    console.log(postData);
</script>

<header>
    <img src = "{postData.avatar}" alt = "{postData.username}">
    <h3>{postData.username}</h3>
</header>
<main>
    <p>{postData.posttext}</p>
</main>
<footer>
    <p>{postData.postdate}</p>
    <p> likes: {postData.likes}</p>
</footer>

<style>
    img{
        max-width: 3rem;
        float: left;

    }
    main {
        clear:left;
        margin-top: 1em;
    }
</style>