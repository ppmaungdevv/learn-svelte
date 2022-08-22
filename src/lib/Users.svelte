<script>
  import fml_user from "../assets/img/fml_user.png";
  import fms_user from "../assets/img/fms_user.png";
  import shirt_user from "../assets/img/shirt_user.png";
  import hood_user from "../assets/img/hood_user.png";
  import User from "./User.svelte";
  import Filter from "./Filter.svelte";

  const users = [
    {
      id: 1,
      name: "Manager_1",
      mail: "manager_1@m.co",
      img: fml_user,
      active: true,
    },
    {
      id: 2,
      name: "Hr",
      mail: "humanresource@m.co",
      img: shirt_user,
      active: true,
    },
    {
      id: 3,
      name: "Developer_1",
      mail: "developer_1@m.co",
      img: fms_user,
      active: true,
    },
    {
      id: 4,
      name: "Developer_2",
      mail: "developer_2@m.co",
      img: hood_user,
      active: false,
    },
  ];
  let filtered_users = users;
  // ------ normal event
  // const filter = (e) => {
  //   if (e.target.value === "null") {
  //     filtered_users = users;
  //     return;
  //   }
  //   const status = e.target.value === "true";
  //   console.log(status);
  //   filtered_users = users.filter((user) => user.active == status);
  // };
  // -------- dispatch event
  const filter = (e) => {
    const { detail } = e;
    console.log(typeof detail);
    if (detail === "null") {
      return;
    }
    const status = detail === "true";
    filtered_users = users.filter((user) => user.active == status);
  };

  const remove = (e) => {
    const { detail } = e;
    console.log(detail);
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">Users List</h1>
  <Filter on:filter={filter} />
  <!-- {#each users as { id, name, mail, img }, index (id)} -->
  {#each filtered_users as user, index (user.id)}
    <!-- <User {id} {name} {mail} {img} /> -->
    <User {user} on:remove={remove} />
  {:else}
    <p>loading......</p>
  {/each}
</div>
