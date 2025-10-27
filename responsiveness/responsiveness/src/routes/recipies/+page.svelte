<script>
    let {data} = $props();
    console.log(data.recipes)
</script>

<table>
    <thead>
        <tr>
            <th>Recipe name</th>
            <th>prep time</th>
            <th>difficulty</th>
            <th>servings</th>
            <th>cuisine</th>
        </tr>
    </thead>
    <tbody>
{#each data.recipes.recipes as recipe}
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.prepTimeMinutes}</td>
            <td>{recipe.difficulty}</td>
            <td>{recipe.servings}</td>
            <td>{recipe.cuisine}</td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
table{
    table-layout: fixed;
    width: 90%;
    margin-top: 10px, auto;
    
    border-collapse: collapse;
}
th,
td{
    border:1px, solid black;
    padding: 0.6em;
}

@media (max-width:786px){
    tr th:nth-child(5),
    tr td:nth-child(5){
        display: none;
    }
}
@media (max-width:416px){
    tr th:nth-child(3),
    tr td:nth-child(3){
        display: none;
    }
}
</style>