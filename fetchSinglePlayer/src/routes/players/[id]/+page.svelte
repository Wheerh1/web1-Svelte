
<script>
    let {data} = $props();
    let mockplayer = {
    "id": 1,
    "first_name": "Stacy",
    "last_name": "Harty",
    "email": "sharty0@storify.com",
    "gender": "Male",
    "injured": false,
    "date_of_birth": "06/11/2007"
  };
</script>


<!-- highlight mockplayer and replace with the data name -->
<p>ready player the first</p>
<h2>player details</h2>
<h3>{mockplayer.first_name} {mockplayer.last_name}</h3>
<p>email :{mockplayer.email}</p>
<p>geneder: {mockplayer.gender}</p>
<p>injured: {mockplayer.injured ? 'true' : 'false'}</p>
<p>dob: {mockplayer.date_of_birth}</p>

<style>
    /* make pretty */
</style>