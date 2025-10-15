export async function load({fetch}) {
    const res = await fetch("https://my.api.mockaroo.com/players.json?key=1c2be0a0");
    const players =await res.json();
    return{players}; //need all this stuff but especially this ←
}