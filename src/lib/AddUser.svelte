<script>
  import AddModal from "./AddModal.svelte";
  let show_modal = true;
</script>

<button
  on:click={() => (show_modal = true)}
  class="px-4 py-1 rounded border text-sky-700 border-sky-500">Add User</button
>
{#if show_modal}
  <AddModal on:close={() => (show_modal = false)}>
    <h3 class="text-2xl text-center">Add New</h3>
    <!-- <form action=""> -->
    <div class="py-1 px-2 my-4">
      <label for="">Name</label>
      <input type="text" class="px-2 py-1 w-full rounded border" />
    </div>

    <div class="py-1 px-2 my-4">
      <label for="">Email</label>
      <input type="email" class="px-2 py-1 w-full rounded border" />
    </div>

    <div class="py-1 px-2 my-4 flex justify-between">
      <label for="true">Active:</label>
      <div class="flex">
        <label for="true">Yes</label>
        <input
          type="radio"
          value="true"
          id="true"
          name="active"
          class="px-2 py-1 w-full rounded border mx-5"
        />
        <label for="false">No</label>
        <input
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
