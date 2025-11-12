import { getTalks } from "@/lib/api";
import { parseTime } from "@/lib/util";
import { RawTalk } from "@/lib/types";

export default function LightningTalksPage() {
  const lightningTalks = getTalks();

  const session1 = lightningTalks.filter((t) => t.session === 1);
  const session2 = lightningTalks.filter((t) => t.session === 2);
  const session3 = lightningTalks.filter((t) => t.session === 3);
  const session4 = lightningTalks.filter((t) => t.session === 4);

  return (
    <div>
      <h1 className="mb-12 font-display text-6xl">Lightning Talks</h1>
      <nav>
        <ul className="space-y-8">
          <li id="session-1">
            <div className="font-display text-2xl">Session 1</div>
            <div className="font-mono">10:20 AM — 10:45 AM</div>
          </li>
          <SessionPart items={session1} />

          <li id="session-2">
            <div className="font-display text-2xl">Session 2</div>
            <div className="font-mono">10:45 AM — 11:05 AM</div>
          </li>
          <SessionPart items={session1} />

          <li id="session-3">
            <div className="font-display text-2xl">Session 3</div>
            <div className="font-mono">3:05 PM — 3:30 PM</div>
          </li>
          <SessionPart items={session1} />

          <li id="session-4">
            <div className="font-display text-2xl">Session 4</div>
            <div className="font-mono">3:30 PM — 3:55 PM</div>
          </li>
          <SessionPart items={session1} />
        </ul>
      </nav>
    </div>
  );
}

export function SessionPart(props: { items: RawTalk[] }) {
  return (
    <div>
      {props.items.map((item, i) => (
        <li key={i}>
          <p className="text-sm font-bold">
            {parseTime(item.start).toLocaleString(undefined, {
              timeStyle: "short",
            })}
          </p>
          <p className="mb-1">
            <a
              className="text-lg md:text-xl"
              href={`/lightning-talks/${item.slug}`}
            >
              {item.title}
            </a>
          </p>
          <p className="mt-1 text-lg">
            {item.speaker}, {item.organization}
          </p>
        </li>
      ))}
    </div>
  );
}
