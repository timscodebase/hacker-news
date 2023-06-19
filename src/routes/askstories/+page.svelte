<script lang="ts">
	import PaginationNav from '$lib/components/PaginationNav.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { formatedDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	$: page = data?.page;
	$: stories = data?.stories;
</script>

<svelte:head>
	<title>Ask Hacker News</title>
</svelte:head>

<h2>Ask Hacker News</h2>

{#if stories}
	<ul>
		{#each stories as story}
			<li>
				<p>
					<ExternalLink href={`${story.url}`}>
						{story.title}
					</ExternalLink>
				</p>
				<p class="small">
					{story.score} points by {story.by}
					{formatedDate(story.time)}
				</p>
			</li>
		{/each}
	</ul>
	<PaginationNav {page} {stories} />
{/if}

<style>
	li {
		padding: var(--small-space) 0;
	}

	.small {
		font-size: var(--small-font-size);
	}
</style>
