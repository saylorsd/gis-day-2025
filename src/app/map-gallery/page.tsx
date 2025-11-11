import { getMaps } from "@/lib/api";

export default function LightningTalksPage() {
  const maps = getMaps();

  return (
    <div>
      <h1 className="mb-12 font-display text-5xl">Map Gallery</h1>
      <nav>
        <ul className="space-y-6">
          {maps.map((item, i) => (
            <li key={i}>
              <p>
                <a className="text-xl" href={`/lightning-talks/${item.slug}`}>
                  {item.title}
                </a>
              </p>
              <p className="mt-1 text-lg">{item.author}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
