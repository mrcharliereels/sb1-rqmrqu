export function getYouTubeThumbnail(url: string): string {
  const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/)?.[1];
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
}