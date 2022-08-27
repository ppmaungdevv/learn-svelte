<script>
  import fml_user from "../assets/img/fml_user.png";

  import User from "./User.svelte";
  import Filter from "./Filter.svelte";
  import AddUser from "./AddUser.svelte";
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { bounceIn, quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";

  import { count, user_from_store, addUser, remove } from "../store";

  $: filtered_users = $user_from_store; // reactive variable
  // ------------ tween
  const progress = tweened(0, {
    duration: 1000,
    easing: bounceIn,
  });

  onMount(() => {
    console.log(count);
    progress.set(filtered_users.length);
  });

  let users = $user_from_store; // shorthand for count.subscribe((val) => (count_val = val));
  // let filtered_users = users;
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
    if (detail == "null") {
      filtered_users = $user_from_store;
      return;
    }
    const status = detail === "true";
    filtered_users = $user_from_store.filter((user) => user.active == status);
  };

  // --------- svelte store
  let count_val;
  count.subscribe((val) => (count_val = val));

  const inc = () => {
    count.update((val) => val + 1);
  };
  const desc = () => {
    count.update((val) => val - 1);
  };
</script>

<div>
  <button on:click={inc}>+</button>
  <button on:click={desc}>-</button>
  {count_val}
  <h1 class="text-2xl text-center mt-8">Users List</h1>
  <div class="flex justify-between mx-4">
    <Filter on:filter={filter} />
    <AddUser on:addUser={addUser} />
  </div>
  <progress max="10" min="0" value={$progress} class="ml-4" />
  <!-- {#each users as { id, name, mail, img }, index (id)} -->
  {#each filtered_users as user, index (user.id)}
    <div animate:flip={{ delay: 250, duration: 1000, easing: quintOut }}>
      <!-- <User {id} {name} {mail} {img} /> -->
      <User {user} on:remove={remove} />
    </div>
  {:else}
    <p>loading......</p>
  {/each}
</div>
