<script lang="ts">
	export let href: string;
	export let className = '';
	export let rel = '';
</script>

<a {rel} class={className} {href} data-sveltekit-preload-data="hover">
	<slot />
</a>
