import { getToken } from "./getToken";

const CHUCK_AND_BUCK_SHOW_ID = '5o0aLC3RomTUYo6J46MRyk';

export type SpotifyEpisode = {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: Record<string, any>;
  href: string;
  id: string;
  images: Record<string, any>[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: Record<string, any>;
  type: string;
  uri: string;
};


export async function getTodaysEpisodes() {
  const { access_token } = await getToken();
  const response = await fetch(`https://api.spotify.com/v1/shows/${CHUCK_AND_BUCK_SHOW_ID}/episodes?limit=4`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`
    },
    next: { revalidate: 3600 },
  });

  const { items } = await response.json();
  // Episodes are not always 4 hours, so can't just return all 4 from api response (IE. March Madness Thursday/Friday).
  return items.filter((item: SpotifyEpisode) => (items[0].release_date === item.release_date));
}