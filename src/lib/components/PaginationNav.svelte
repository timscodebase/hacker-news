<script lang="ts">
	import { enhance } from '$app/forms';

	export let page: number;
	export let stories: any[];
</script>

<div>
	{#if page > 1}
		<form method="POST" action="?/goBack" use:enhance>
			<button type="submit">Go Back</button>
		</form>
	{:else}
		<div />
	{/if}

	{#if stories.length > 0}
		<form method="POST" action="?/goForward" use:enhance>
			<button type="submit">More Stories</button>
		</form>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
	}
</style>
