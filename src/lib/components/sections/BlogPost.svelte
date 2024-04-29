<script lang="ts">
  import H3 from "$lib/components/md/H3.svelte";

  export let releaseDate: string;
  export let title: string;
  export let pubId: string;
  export let className = "";
  export let description: string;
</script>

<div class="flex msm:flex-col md:flex-row items-start">
  <div class="p-4 md:w-1/3 msm:w-3/3">
    <p
      class="md:text-right msm:text-left dark:text-bluish-200/50 text-bluish-200"
    >
      {new Date(releaseDate).toLocaleDateString()}
    </p>
  </div>
  <div class="p-4 md:w-2/3 md:w-3/3 {className}">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class=" dark:text-bluish-100 text-slate-800 font-medium cursor-pointer"
      href="/blog/{pubId}"
    >
      {title}
    </a>
    <p class="dark:text-bluish-200/50 text-bluish-200">
      {description}
    </p>
  </div>
</div>
