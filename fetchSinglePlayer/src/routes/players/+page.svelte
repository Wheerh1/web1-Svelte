<script>
    let { data } = $props();
    console.log(data)
</script>

<h2>Players</h2>

<ul>
    {#each data.players as player}
        <li>{player.first_name} - {player.email}</li>
    {/each}
</ul>