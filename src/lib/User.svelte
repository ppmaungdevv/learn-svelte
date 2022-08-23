<script>
  import { identity } from "svelte/internal";
  import { createEventDispatcher } from "svelte";

  export let user;
  //   export let id, img, name, mail;
  const dispatch = createEventDispatcher();
  const deleteUser = () => {
    dispatch("remove", user.id);
  };
</script>

<div
  class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center relative"
>
  <button
    on:click={deleteUser}
    class="absolute right-0 top-0 -mt-3 rounded-full w-5 h-5 text-center bg-red-400 hover:bg-red-600 text-sm text-white"
    >x</button
  >
  <p class="w-10">{user.id}</p>
  <img class="rounded-full w-14 h-14" src={user.img} alt={user.name} />
  <p class="mx-4 w-20">{user.name}</p>
  <p class="mx-4 w-20">{user.mail}</p>
</div>
