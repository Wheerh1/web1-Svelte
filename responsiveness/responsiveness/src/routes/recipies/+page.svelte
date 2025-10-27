<script>
    let {data} = $props();
    console.log(data.recipes)
</script>

<table>
    <thead>
        <tr>
            <td>Rescipie name</td>
            <td>prep time</td>
            <td>difficulty</td>
            <td>servings</td>
            <td>cusine</td>
        </tr>
    </thead>
    <tbody>
{#each data.recipes.recipes as recipe}
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.prepTimeMinutes}</td>
            <td>{recipe.difficulty}</td>
            <td>{recipe.servings}</td>
            <td>{recipe.cusine}</td>
        </tr>
    {/each}
    </tbody>
</table>

<style>
    
</style>