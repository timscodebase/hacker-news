<script lang="ts">
	import Link from './Link.svelte';

	const nav_items = [
		{
			name: 'Top Stories',
			url: '/'
		},
		{
			name: 'Ask HN',
			url: '/askstories'
		}
	];
</script>

<nav>
	<ul>
		{#each nav_items as item}
			{#key item.url}
				<li>
					<Link href={item.url}>
						{item.name}
					</Link>
				</li>
			{/key}
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		gap: 1rem;
	}
</style>
