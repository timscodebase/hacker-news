<script lang="ts">
	import { enhance } from '$app/forms';
	import MainNav from './MainNav.svelte';
</script>

<header>
	<div class="logo">
		<a href="/">
			<h1>Hacker News</h1>
		</a>
	</div>
	<MainNav />
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	@media (max-width: 800px) {
		header {
			grid-template-columns: 1fr;
		}
	}

	.logo {
		display: flex;
		align-items: center;
	}
</style>
