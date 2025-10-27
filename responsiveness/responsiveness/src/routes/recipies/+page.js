export async function load({fetch}) {
    const res = await fetch ("https://my.api.mockaroo.com/players.json?key=6e8297b0");
    const players = await res.json();
    return {players};
}