<script lang="ts">
	import { base } from '$app/paths';
	export let href: string;
	export let className = '';
	export let rel = '';
	export let isHeader: boolean = false;
	$: theClass = isHeader ? `${className} header` : className;
</script>

<a {rel} class={theClass} href={base + href} data-sveltekit-preload-data="tap">
	<slot />
</a>

<style>
	a {
		text-decoration: underline;
	}
	a:hover {
		text-decoration: none;
	}

	.header {
		text-decoration: none;
	}

	.soft {
		font-size: 0.889rem;
		color: var(--soft-color);
	}
</style>
