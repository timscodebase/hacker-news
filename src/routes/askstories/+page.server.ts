import type { Actions, PageServerLoad } from './$types'
import { base_url, number_of_topstories } from '$lib/config'

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

let story_links: string[] = []
let page = 1
const pageSize = number_of_topstories

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch(`${base_url}/api/askstories.json`)
  const story_ids: number[] = await response.json()

  story_ids.map((id: number) => {
    story_links.push(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  })

  const start = (page - 1) * pageSize;
	const end = start + pageSize;
	story_links = story_links.slice(start, end);

  const stories: Story[] = await Promise.all(story_links.map(async (link: string) => {
    const response = await fetch(link)
    const story: Story = await response.json()
    return story
  }))
  
  return {
    page,
    stories
  }
}

export const actions: Actions = {
  goForward: async () => {
    page += 1
    const start = (page - 1) * pageSize;
	  const end = start + pageSize;
	  story_links = story_links.slice(start, end);

    const stories: Story[] = await Promise.all(story_links.map(async (link: string) => {
      const response = await fetch(link)
      const story: Story = await response.json()
      return story
    }))

    return {
      stories
    }
  },
  goBack: async () => {
    page -= 1
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    story_links = story_links.slice(start, end);

    const stories: Story[] = await Promise.all(story_links.map(async (link: string) => {
      const response = await fetch(link)
      const story: Story = await response.json()
      return story
    }))

    return {
      stories
    }
  },
  reset: async () => {
    console.log('story_links', story_links);
    page = 1
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    story_links = story_links.slice(start, end);

    const stories: Story[] = await Promise.all(story_links.map(async (link: string) => {
      const response = await fetch(link)
      const story: Story = await response.json()
      return story
    }))

    return {
      stories
    }
  }
}