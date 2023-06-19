<script lang="ts">
	export let href: string;
	export let className = '';
	export let rel = '';
</script>

<a {rel} class={className} {href} data-sveltekit-preload-data="hover">
	<slot />
</a>

<style>
	/* Mobile Media Query */
	@media (max-width: 800px) {
		a {
			display: inline-block;
			margin: 0.25rem;
			padding: 0.25rem;
		}
	}
</style>
