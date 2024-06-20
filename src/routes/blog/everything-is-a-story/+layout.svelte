<script>
  import Link from "$lib/components/Link.svelte";
  import P from "$lib/components/md/P.svelte";
  import { Icon, ArrowLeft } from "svelte-hero-icons";
</script>

<div class="flex items-start flex-col">
  <div class="p-4  msm:w-full flex items-end">
    <button on:click={() => history.back()}>
      <Icon src={ArrowLeft} class="w-4 h-4 hover:stroke-white" />
    </button>
  </div>
  <div class="p-4 msm:w-full">
    <P>
      <slot />
    </P>
  </div>
</div>
