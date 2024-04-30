<script lang="ts">
  import AnimatedBtn from "$lib/components/AnimatedBtn.svelte";
  import Link from "$lib/components/Link.svelte";
  import Side from "$lib/components/Side.svelte";
  import ThemeSelector from "$lib/components/ThemeSelector.svelte";
  import Padded from "$lib/components/layouts/Padded.svelte";
  import "./app.css";
  let showside = false;
</script>

<main
  class="dark:bg-[#030712] min-h-screen dark:text-white/60 text-slate-400 text-sm flex flex-col gap-6 font-inter relative leading-7"
>
  <head>
    <title>R&eacute;gis N. (regisrex)</title>
  </head>
  <AnimatedBtn onHover={() => (showside = true)} />
  <div class="absolute top-4 right-4 flex items-center gap-3">
    <ThemeSelector />
  </div>
  {#if showside}
    <Side onMouseLeave={() => (showside = false)} />
  {/if}
  <div class="py-14">
    <div
      class="w-[30vw] z-0 h-[30vw] bg-gradient-to-br from-blue-400/10 to-transparent blur-3xl fixed"
      id="moving-thing"
    />
    <div class="z-20 relative">
      <slot />
    </div>
  </div>
  <Padded>
    <footer class="text-center opacity-15 hover:opacity-70 sticky pb-6">
      Built with ☕ by <Link href="https://github.com/regisrex"
        >R&eacute;gis NDIZIHIWE. <br />
      </Link> using <Link href="https://kit.svelte.dev">Svelte + kit</Link>, <Link
        href="https://tailwindcss.com">Tailwindcss</Link
      > and <Link href="https://vercel.com">Vercel</Link>
    </footer>
  </Padded>
</main>
