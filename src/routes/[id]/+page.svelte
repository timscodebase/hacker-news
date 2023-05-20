<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: story = data.story;
	$: date = new Date(story.time);
	$: formatedDate = date.toLocaleString();
</script>

{#if story}
	<h2>{story.title}</h2>
	<p>{story.score} points by {story.by} {formatedDate}</p>
	{#if story.text}
		{@html story.text}
	{/if}
	{#if story.url}
		<a href={story.url}>{story.url}</a>
	{/if}
{/if}

<style>
	a {
		display: block;
		padding-top: var(--x-large-space);
	}
</style>
