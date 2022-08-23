<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const filter = (e) => {
    dispatch("filter", e.target.value);
  };
</script>

<select
  on:change={filter}
  name="user-filter"
  class="py-2 px-4 bg-white border rounded cursor-pointer"
>
  <option value={null}>All</option>
  <option value={true}>Active</option>
  <option value={false}>Inactive</option>
</select>
