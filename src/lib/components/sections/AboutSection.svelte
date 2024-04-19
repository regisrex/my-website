<script lang="ts">
  export let key = "";
  export let className = "";
</script>

<div class="flex msm:flex-col md:flex-row items-start">
  <div class="p-4 md:w-1/3 msm:w-3/3">
    <p
      class="md:text-right msm:text-left dark:text-bluish-200/50 text-bluish-200"
    >
      {key}
    </p>
  </div>
  <div
    class="p-4 md:w-2/3 md:w-3/3 dark:text-bluish-200 text-slate-500 {className}"
  >
    <slot />
  </div>
</div>
