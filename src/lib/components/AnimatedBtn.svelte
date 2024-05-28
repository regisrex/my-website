<script lang="ts">
    export let onHover = () => {};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    on:mouseenter={onHover}
    stroke="currentColor"
    class="w-6 h-6 fixed top-4 left-4 z-50"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
</svg>
