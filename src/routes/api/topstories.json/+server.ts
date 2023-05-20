import { json } from '@sveltejs/kit'

export const GET = async ({ fetch }) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const topstories = await response.json()

  return json(topstories)
}