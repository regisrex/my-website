<script lang="ts">
  import AnimatedBtn from "$lib/components/AnimatedBtn.svelte";
  import Side from "$lib/components/Side.svelte";
  import ThemeSelector from "$lib/components/ThemeSelector.svelte";
  import "./app.css";
  let showside = false;
</script>

<main
  class="dark:bg-background min-h-screen dark:text-white/60 text-slate-400 text-sm flex flex-col gap-6 font-inter relative dark"
>
  <head>
    <title>R&eacute;gis N. (regisrex)</title>
  </head>
  <!-- <AnimatedBtn onHover={() => (showside = true)} /> -->
  <div class="absolute top-4 left-4 flex items-center gap-3">
    <!-- <AnimatedBtn /> -->
    <ThemeSelector />
  </div>
  {#if showside}
    <Side onMouseLeave={() => (showside = false)} />
  {/if}
  <div class="py-14">
    <slot />
  </div>
</main>
