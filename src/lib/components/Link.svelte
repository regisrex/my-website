<script lang="ts">
  export let href: string;
  export let className: string = "";
</script>

<a
  {href}
  class="underline underline-offset-4 decoration-bluish-200/20 hover:decoration-bluish-200 dark:text-blue-200  text-slate-400 {className}"
>
  <slot />
</a>
