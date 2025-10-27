<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/recipies">recipes</a></li>
        <li><a href="/contact">contact us</a></li>
    </ul>
</nav>

<style>
    nav{
        width: 90%;
        margin-top: 10px auto;
    }
    ul{
        list-style: none;
        display:flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: space-around;

        
    }
    li{
        padding: 1em;
        background-color: aliceblue;
        border-radius: 2em;
    }

    @media(max-width:575px){
        ul{
            justify-content: flex-start;
        }
    }
</style>