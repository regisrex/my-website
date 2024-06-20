<script lang="ts">
  export let key = "";
  export let className = "";
</script>

<div class="flex msm:flex-col   items-start">
  <div class="p-4 ">
    <p
      class="md:text-right msm:text-left dark:text-bluish-200/50 text-bluish-200"
    >
      {key}
    </p>
  </div>
  <div
    class="p-4  dark:text-bluish-200 text-slate-500 {className}"
  >
    <slot />
  </div>
</div>
