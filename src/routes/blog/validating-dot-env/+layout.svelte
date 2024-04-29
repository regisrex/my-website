<script>
  import P from "$lib/components/md/P.svelte";
  import { Icon, ArrowLeft } from "svelte-hero-icons";
</script>

<div class="flex items-start md:flex-row msm:flex-col">
  <div class="p-4 md:w-1/3 msm:w-screen flex items-end">
    <button on:click={() => history.back()}>
      <Icon src={ArrowLeft} class="w-4 h-4 hover:stroke-white" />
    </button>
  </div>
  <div class="p-4 md:w-2/3 msm:w-screen">
    <P>
      <slot />
    </P>
  </div>
</div>
