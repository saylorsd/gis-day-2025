import { getShortTalks } from "@/lib/api";
import { parseTime } from "@/lib/util";

export default function LightningTalksPage() {
  const lightningTalks = getShortTalks();

  return (
    <div>
      <h1 className="mb-12 font-display text-5xl">Short Talks</h1>
      <nav>
        <ul className="space-y-6">
          {lightningTalks.map((item, i) => (
            <li key={i}>
              <p className="text-sm font-bold">
                {parseTime(item.start).toLocaleString(undefined, {
                  timeStyle: "short",
                })}
              </p>
              <p>
                <a className="text-xl" href={`/short-talks/${item.slug}`}>
                  {item.title}
                </a>
              </p>
              <p className="mt-1 text-lg">{item.speakers}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
