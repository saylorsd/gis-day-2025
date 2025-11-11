import { getMap, getTalk } from "@/lib/api";

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const map = getMap(slug);

  if (!map) return <div></div>;

  return (
    <div>
      <p className="font-mono text-xs uppercase">Map</p>
      <h1 className="font-display text-4xl">{map.title}</h1>
      <div className="my-4">
        <p className="text-xl font-bold">{map.author}</p>
      </div>

      <div className="prose-lg mt-8 font-medium">
        <p>{map.abstract}</p>
      </div>
    </div>
  );
}
