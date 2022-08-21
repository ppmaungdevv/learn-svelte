<script>
  import fml_user from "../assets/img/fml_user.png";
  import fms_user from "../assets/img/fms_user.png";
  import shirt_user from "../assets/img/shirt_user.png";
  import hood_user from "../assets/img/hood_user.png";

  const users = [
    {
      id: 1,
      name: "U1",
      mail: "u1@m.co",
      img: fml_user,
    },
    {
      id: 2,
      name: "U2",
      mail: "u2@m.co",
      img: shirt_user,
    },
    {
      id: 3,
      name: "U3",
      mail: "u3@m.co",
      img: fms_user,
    },
    {
      id: 4,
      name: "U4",
      mail: "u4@m.co",
      img: hood_user,
    },
  ];
</script>

<div>
  <h1 class="text-3xl text-red-400">Users List</h1>
  {#each users as user, index (user.id)}
    <div>
      <img src={user.img} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.mail}</p>
    </div>
  {:else}
    <p>loading......</p>
  {/each}
</div>
