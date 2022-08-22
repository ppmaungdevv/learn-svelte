<script>
  import fml_user from "../assets/img/fml_user.png";
  import fms_user from "../assets/img/fms_user.png";
  import shirt_user from "../assets/img/shirt_user.png";
  import hood_user from "../assets/img/hood_user.png";
  import User from "./User.svelte";

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
  const filter = (e) => {
    if (e.target.value === "null") {
      filtered_users = users;
      return;
    }
    const status = e.target.value === "true";
    console.log(status);
    filtered_users = users.filter((user) => user.active == status);
  };
</script>

<div>
  <h1 class="text-2xl text-center mt-10">Users List</h1>
  <select
    on:change={filter}
    name="user-filter"
    class="py-2 px-4 bg-white border rounded ml-4"
  >
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>Inactive</option>
  </select>
  <!-- {#each users as { id, name, mail, img }, index (id)} -->
  {#each filtered_users as user, index (user.id)}
    <!-- <User {id} {name} {mail} {img} /> -->
    <User {user} />
  {:else}
    <p>loading......</p>
  {/each}
</div>
