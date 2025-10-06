<script>
    import Card from "$lib/components/Card.svelte"
</script>

<h1>Welcome to dogs</h1>


<div class = dogpen>
    <Card name ={"john"} imgurl = {"https://placedog.net/1000/?random"}/>
    <Card name ={"jim"} imgurl = {"https://placedog.net/2000/?random"}/>
    <Card name ={"jane"} imgurl = {"https://placedog.net/200/?random"}/>
    <Card name ={"jamie"} imgurl = {"https://placedog.net/700/?random"}/>
    <Card name ={"janice"} imgurl = {"https://placedog.net/500/?random"}/>
</div>

<style>
.dogpen{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>
