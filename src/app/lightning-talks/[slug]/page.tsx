import { getTalk } from "@/lib/api";

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talk = getTalk(slug);

  if (!talk) return <div></div>;

  return (
    <div>
      <p className="font-mono text-xs uppercase">Lightning Talk</p>
      <h1 className="font-display text-4xl">{talk.title}</h1>
      <div className="my-4">
        <p className="text-xl font-bold">{talk.speaker}</p>
        <p className="text-lg font-medium">{talk.organization}</p>
      </div>

      <p className="my-4 text-lg font-bold">
        <span>
          {talk.start.toLocaleTimeString(undefined, { timeStyle: "short" })}
        </span>
        <span className="mx-2">&mdash;</span>
        <span>
          {talk.end.toLocaleTimeString(undefined, { timeStyle: "short" })}
        </span>
        <span className="ml-4 font-medium italic">Session {talk.session}</span>
      </p>
      <div className="prose-sm mt-8 font-medium md:prose-lg lg:prose-xl">
        <p>{talk.abstract}</p>
      </div>
    </div>
  );
}
