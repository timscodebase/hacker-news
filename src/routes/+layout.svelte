<script lang="ts">
	import './app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	main {
		padding: var(--small-space);
	}
</style>
