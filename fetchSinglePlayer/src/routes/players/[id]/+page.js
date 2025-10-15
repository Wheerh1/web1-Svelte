export async function load({ fetch,params }) {
    const res = await fetch(`https://my.api.mockaroo.com/player/${params.id}.json?key=1c2be0a0`);
    const player =await res.json();
    return{player}; //need all this stuff but especially this ←              ↑kill jason if no work
}