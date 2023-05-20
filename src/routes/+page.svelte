<script lang="ts">
	import StoryList from '$lib/components/StoryList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: page = data?.page;
	$: stories = data?.stories;
</script>

<h2>Top Stories</h2>

<StoryList {page} {stories} />
