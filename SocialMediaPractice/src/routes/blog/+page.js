export async function load({fetch}) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts =await res.json();
    return{posts}; //need all this stuff but especially this ←
}