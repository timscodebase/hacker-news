<script lang="ts">
	import { enhance } from '$app/forms';
	import MainNav from './MainNav.svelte';
</script>

<header>
	<form method="POST" action="?/reset" use:enhance>
		<button type="submit">
			<h1>Hacker News</h1>
		</button>
	</form>
	<MainNav />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		gap: var(--small-space);
		padding: var(--small-space);
		border-bottom: 2px solid var(--border-color);
		margin-bottom: var(--large-space);
	}
</style>
