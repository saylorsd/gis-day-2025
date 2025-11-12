import { getShortTalk } from "@/lib/api";
import { parseTime } from "@/lib/util";

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talk = getShortTalk(slug);

  if (!talk) return <div></div>;

  return (
    <div>
      <p className="font-mono text-xs uppercase">Short Talk</p>
      <h1 className="font-display text-4xl">{talk.title}</h1>
      <div className="my-4">
        <p className="text-xl font-bold">{talk.speakers}</p>
      </div>

      <p className="my-4 text-lg font-bold">
        <div>{talk.duration}</div>
      </p>
      <div className="prose-sm mt-8 font-medium md:prose-lg lg:prose-xl">
        <p>{talk.abstract}</p>
      </div>
    </div>
  );
}
