<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const story = data.story;
	const { by, text, title, score, url } = story;
	const date = new Date(story.time);
	const formatedDate = date.toLocaleString();
</script>

<svelte:head>
	<title>Ask HN - {title}</title>
	<!-- <meta property="twitter:image" content="Twitter link preview image URL" />
	<meta property="twitter:card" content="summary_large_image" /> -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={text} />
	<meta property="og:image" content="Link preview image URL" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={text} />
	<meta property="og:url" content={url} />
</svelte:head>

{#if story}
	<h2>{title}</h2>
	<p>{score} points by {by} {formatedDate}</p>
	{#if text}
		{@html text}
	{/if}
	{#if url}
		<a href={url}>{url}</a>
	{/if}
{/if}

<style>
	a {
		display: block;
		padding-top: var(--x-large-space);
	}
</style>
