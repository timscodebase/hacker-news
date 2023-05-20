<script lang="ts">
	import PaginationNav from '$lib/components/PaginationNav.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import Link from '$lib/components/Link.svelte';
	import { formatedDate, getHostName } from '$lib/utils';

	interface Story {
		by: string;
		descendants: number;
		id: number;
		kids: number[];
		score: number;
		text?: string;
		time: number;
		title: string;
		type: string;
		url: string;
	}

	export let page: number;
	export let stories: Story[] = [];
</script>

{#if stories}
	<ul>
		{#each stories as story}
			<li>
				<p>
					<ExternalLink href={`${story.url}`}>
						{story.title}
					</ExternalLink>
					<Link className="soft" href={`/${story.id}`}>({getHostName(story.url)})</Link>
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
