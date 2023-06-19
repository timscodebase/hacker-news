export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function getHostName(url: string): string | null {
  if (!url) {
    return null;
  }
  const match = url.match(/:\/\/(www[0-9]?\.)?([^/:]+)/i);
  return match?.[2] ?? null;
}

export function formatedDate(time: number): string {
  return  (time);
}
