export async function load({fetch}) {
    const res = await fetch ("'https://dummyjson.com/recipes/1'");
    const recipes = await res.json();
    return {recipes};
}