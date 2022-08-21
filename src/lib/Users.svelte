<script>
  import fml_user from "../assets/img/fml_user.png";
  import fms_user from "../assets/img/fms_user.png";
  import shirt_user from "../assets/img/shirt_user.png";
  import hood_user from "../assets/img/hood_user.png";

  const users = [
    {
      id: 1,
      name: "Manager_1",
      mail: "manager_1@m.co",
      img: fml_user,
    },
    {
      id: 2,
      name: "Hr",
      mail: "humanresource@m.co",
      img: shirt_user,
    },
    {
      id: 3,
      name: "Developer_1",
      mail: "developer_1@m.co",
      img: fms_user,
    },
    {
      id: 4,
      name: "Developer_2",
      mail: "developer_2@m.co",
      img: hood_user,
    },
  ];
</script>

<div>
  <h1 class="text-2xl text-center mt-10">Users List</h1>
  {#each users as user, index (user.id)}
    <div
      class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center"
    >
      <p class="w-10">{user.id}</p>
      <img class="rounded-full w-14 h-14" src={user.img} alt={user.name} />
      <p class="mx-4 w-20">{user.name}</p>
      <p class="mx-4 w-20">{user.mail}</p>
    </div>
  {:else}
    <p>loading......</p>
  {/each}
</div>
