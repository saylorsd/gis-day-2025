import { parseTime } from "@/lib/util";

export interface ProgramItemProps {
  top?: boolean;

  start: string;
  end: string;

  title: string;
  location?: string;
  detailsLink?: string;

  speakers?: string;
  organizations?: string;

  duration?: string;
  items?: Array<Partial<ProgramItemProps>>;
}

export function ProgramItem(props: ProgramItemProps) {
  const startDate = parseTime(props.start);
  const endDate = parseTime(props.end);

  function getDurations(item: Partial<ProgramItemProps>) {
    if (item.duration) {
      return item.duration;
    }
    if (item.start && item.end) {
      const start = parseTime(item.start);
      const end = parseTime(item.end);
      const dur = (end.getTime() - start.getTime()) / 1000 / 60;

      const startString = start
        .toLocaleTimeString(undefined, { timeStyle: "short" })
        .substring(
          0,
          start.toLocaleTimeString(undefined, { timeStyle: "short" }).length -
            2,
        );

      return `${dur} min, ${startString} - ${end.toLocaleTimeString(undefined, { timeStyle: "short" })}`;
    }
    return null;
  }

  return (
    <li className="my-8">
      <div className="mb-4 text-lg leading-none">
        <div className="inline-block font-mono font-bold">
          <span>
            {startDate.toLocaleTimeString(undefined, { timeStyle: "short" })}
          </span>
          <span className="mx-2">&mdash;</span>
          <span>
            {endDate.toLocaleTimeString(undefined, { timeStyle: "short" })}
          </span>
        </div>
        <div className="ml-4 inline-block font-bold">{props.title}</div>
        {!!props.location && (
          <>
            <div className="ml-2 inline-block font-medium">|</div>
            <div className="ml-2 inline-block font-medium">
              {props.location}
            </div>
          </>
        )}
      </div>
      {(!!props.speakers || !!props.organizations) && (
        <div>
          <span>{props.speakers}</span>, <span>{props.organizations}</span>
        </div>
      )}

      {!!props.items && (
        <ul className="list ml-8 space-y-4">
          {props.items.map((item) => (
            <li key={item.title} className="">
              <div className="-ml-2 inline-block font-semibold">
                <span className="text-xl leading-none">&bull;</span>{" "}
                {item.title}
              </div>
              {(!!item.speakers || !!item.organizations) && (
                <>
                  <div className="ml-2 inline-block">|</div>

                  <div className="ml-2 inline-block">
                    <span>{item.speakers}</span>,{" "}
                    <span>{item.organizations}</span>
                  </div>
                </>
              )}

              {!!getDurations(item) && (
                <div className="ml-2 inline-block italic">
                  ({getDurations(item)})
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
