export function formatDate(date: number) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) 
      month = `0 ${month}`;
  if (day.length < 2) 
      day = `0 ${day}`;

  return [year, month, day].join('-');
}

export function getHostName(url: string): string | null {
  if (!url) {
    return null;
  }
  const match = url.match(/:\/\/(www[0-9]?\.)?([^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === "string" && match[2].length > 0) {
    return match[2];
  } else {
    return null;
  }
}

export function formatedDate(time: number) {
  const date = new Date(time);
  return date.toLocaleString();
}