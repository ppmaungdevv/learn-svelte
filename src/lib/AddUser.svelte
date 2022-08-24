<script>
  import { createEventDispatcher } from "svelte";

  import AddModal from "./AddModal.svelte";
  let show_modal = false;
  const new_user = {};
  const dispatch = createEventDispatcher();
  const handleSubmit = (e) => {
    dispatch("addUser", new_user);
    show_modal = false;
  };
</script>

<button
  on:click={() => (show_modal = true)}
  class="px-4 py-1 rounded border text-sky-700 border-sky-500">Add User</button
>
{#if show_modal}
  <AddModal on:close={() => (show_modal = false)} on:onSubmit={handleSubmit}>
    <h3 class="text-2xl text-center">Add New</h3>
    <!-- <form action=""> -->
    <div class="py-1 px-2 my-4">
      <label for="">Name</label>
      <input
        bind:value={new_user.name}
        type="text"
        class="px-2 py-1 w-full rounded border"
      />
    </div>

    <div class="py-1 px-2 my-4">
      <label for="">Email</label>
      <input
        bind:value={new_user.mail}
        type="email"
        class="px-2 py-1 w-full rounded border"
      />
    </div>

    <div class="py-1 px-2 my-4 flex justify-between">
      <label for="true">Active:</label>
      <div class="flex">
        <label for="true">Yes</label>
        <input
          bind:group={new_user.active}
          type="radio"
          value="true"
          id="true"
          name="active"
          class="px-2 py-1 w-full rounded border mx-5"
        />
        <label for="false">No</label>
        <!-- use bind group for radio buttons -->
        <input
          bind:group={new_user.active}
          type="radio"
          value="false"
          id="false"
          name="active"
          class="px-2 py-1 w-full rounded border mx-5"
        />
      </div>
    </div>

    <button
      type="submit"
      slot="submit-btn"
      class="px-2 py-1 bg-blue-800 text-white rounded">Create</button
    >
    <!-- </form> -->
  </AddModal>
{/if}
