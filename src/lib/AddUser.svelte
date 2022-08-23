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
    <form action="">
      <div>
        <label for="name">Name</label>
        <input
          class="border border-sky-500 rounded p-2"
          type="text"
          name=""
          id="name"
        />
      </div>
    </form>
    <button slot="submit-btn" class="border border-blue-500 px-2 py-1 rounded"
      >Add User</button
    >
  </AddModal>
{/if}
