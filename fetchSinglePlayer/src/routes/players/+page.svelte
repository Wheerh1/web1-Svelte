<script>
    let { data } = $props();
    console.log(data)
</script>

<h2>Players</h2>

<ul>
    {#each data.players as player}
        <li><a href="/players/{player.id}">{player.first_name} {player.last_name}</a></li>
    {/each}
</ul>