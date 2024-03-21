import SpotifyEmbed from "@/components/SpotifyEmbed";
import { getTodaysEpisodes } from "@/utils/getEpisodes";

export default async function Home() {
  const data = await getTodaysEpisodes();

  return (
    <main className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-3xl mb-5 text-white">Latest Episode</h1>
      <SpotifyEmbed episodes={data} />
    </main>
  );
}
