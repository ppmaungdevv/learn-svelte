<script>
  import AddModal from "./AddModal.svelte";
  let show_modal = false;
</script>

<button
  on:click={() => (show_modal = true)}
  class="px-4 py-1 rounded border text-sky-700 border-sky-500">Add User</button
>
{#if show_modal}
  <AddModal on:close={() => (show_modal = false)} />
{/if}
