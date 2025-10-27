export async function load({fetch}) {
    const res = await fetch ("https://dummyjson.com/recipes");
    const recipes = await res.json();
    return {recipes};
}