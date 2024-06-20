<script lang="ts">
  import { page } from "$app/stores";
  import AboutSection from "$lib/components/sections/AboutSection.svelte";
  import BlogPost from "$lib/components/sections/BlogPost.svelte";
</script>

<div>
  <div class="flex items-start w-full">
    <div class="p-4 w-2/3">
      <p class="text-black dark:text-bluish-100 text-3xl font-black">Blog</p>
    </div>
  </div>
  <div class="flex flex-col mt-4">
    {#each $page.data.blogs as blog}
      <BlogPost
        title={blog.title}
        description={blog.description}
        pubId={blog.pubId}
        views={blog.views}
        releaseDate={blog.releaseDate}
      />
    {/each}
  </div>
</div>
