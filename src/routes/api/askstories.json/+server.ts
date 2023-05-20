import { json } from '@sveltejs/kit'

// export const prerender = true

export const GET = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
  const topstories = await response.json()

  return json(topstories)
}