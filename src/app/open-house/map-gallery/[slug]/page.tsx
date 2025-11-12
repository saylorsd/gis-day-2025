import { getMap, getTalk } from "@/lib/api";
import { marked } from "marked";

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const map = getMap(slug);

  if (!map) return <div></div>;

  const content = marked.parse(map.abstract);

  return (
    <div>
      <p className="font-mono text-xs uppercase">Map</p>
      <h1 className="font-display text-4xl">{map.title}</h1>
      <div className="my-4">
        <p className="text-xl font-bold">{map.author}</p>
      </div>

      <div
        className="prose prose-sm mt-8 font-medium md:prose-lg lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
