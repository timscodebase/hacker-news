import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json`)
  const story = await response.json()

  if (!story) {
    throw error(404, 'Story not found')
  }

  return { story }
}