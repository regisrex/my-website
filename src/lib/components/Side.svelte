<script>
  export let onMouseLeave = () => {};
  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Works",
      href: "/work",
    },
    {
      label: "Contact me",
      href: "/contact",
    },
  ];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:mouseleave={onMouseLeave}
  class="flex flex-col gap-10 md:w-[14vw] msm:w-[70vw] py-24 border-b bg-transparent border-white/5 border-opacity-20 fixed backdrop-blur-xl px-10 min-h-screen max-h-screen border-r z-30"
>
  <div class="flex flex-col gap-4 py-10 underline-b decoration-opacity-10">
    {#each links as link}
      <a
        class="dark:text-bluish-200/50 text-bluish-200 hover:text-bluish-100"
        href={link.href}>{link.label}</a
      >
    {/each}
  </div>
</div>
