<script lang="ts">
  import H3 from "$lib/components/md/H3.svelte";
  import { Icon, Eye } from "svelte-hero-icons";

  export let releaseDate: string;
  export let title: string;
  export let pubId: string;
  export let className = "";
  export let views = 0;
  export let description: string;
</script>

<div class="flex flex-col  items-start">
  <div class="mt-4 ">
    <p
      class=" msm:text-left dark:text-bluish-200/50 text-bluish-200"
    >
      {new Date(releaseDate).toDateString().replaceAll("/", " . ")}
    </p>
  </div>
  <div
    class="p-4 w-full dark:border-slate-100/5 border-b border-slate-100 {className}"
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class=" dark:text-bluish-100 justify-between text-slate-800 font-medium cursor-pointer flex items-center gap-2"
      href="/blog/{pubId}"
    >
      {title}
      <span
        class="dark:text-bluish-200/50 font-normal opacity-65 float-right text-bluish-200 flex items-center gap-1 text-right"
      >
        {views}

        <span>views</span>
        <!-- <Icon src={Eye} class="w-4 h-4" /> -->
      </span>
    </a>
    <p class="dark:text-bluish-200/50 text-bluish-200">
      {description}
    </p>
  </div>
</div>
