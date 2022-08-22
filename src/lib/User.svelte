<script>
  import { identity } from "svelte/internal";

  export let user;
  //   export let id, img, name, mail;
</script>

<div
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center"
>
  <p class="w-10">{user.id}</p>
  <img class="rounded-full w-14 h-14" src={user.img} alt={user.name} />
  <p class="mx-4 w-20">{user.name}</p>
  <p class="mx-4 w-20">{user.mail}</p>
</div>
