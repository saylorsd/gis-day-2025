import { getMaps, getSchedule, getShortTalks, getTalks } from "@/lib/api";
import { ProgramItem, ProgramItemProps } from "@/ui/program-item";
import { TbPencil } from "react-icons/tb";

export default async function ProgramPage() {
  const schedule = getSchedule().filter((s) => !!s);

  const lighningTalks = getTalks();
  const shortTalks = getShortTalks();
  const maps = getMaps();

  const lightningTalks1: Partial<ProgramItemProps>[] = [
    ...lighningTalks
      .filter((t) => t.session === 1)
      .map((t) => ({
        title: t.title,
        speakers: t.speaker,
        organizations: t.organization,
        start: t.start,
        end: t.end,
      })),
    { title: "Q&A", duration: "10 minutes, 10:35-10:45 am" },
  ];

  const lightningTalks2: Partial<ProgramItemProps>[] = [
    ...lighningTalks
      .filter((t) => t.session === 2)
      .map((t) => ({
        title: t.title,
        speakers: t.speaker,
        organizations: t.organization,
        start: t.start,
        end: t.end,
      })),
    { title: "Q&A", duration: "10 minutes, 10:55-11:05 am" },
  ];

  const lightningTalks3: Partial<ProgramItemProps>[] = [
    ...lighningTalks
      .filter((t) => t.session === 3)
      .map((t) => ({
        title: t.title,
        speakers: t.speaker,
        organizations: t.organization,
        start: t.start,
        end: t.end,
      })),
    { title: "Q&A", duration: "10 minutes, 3:20-3:30" },
  ];

  const lightningTalks4: Partial<ProgramItemProps>[] = [
    ...lighningTalks
      .filter((t) => t.session === 4)
      .map((t) => ({
        title: t.title,
        speakers: t.speaker,
        organizations: t.organization,
        start: t.start,
        end: t.end,
      })),
    { title: "Q&A", duration: "6 minutes, 3:45-3:55" },
  ];

  return (
    <div className="">
      <h1 className="mb-6 font-display text-6xl md:mb-12 md:text-5xl">
        Program
      </h1>
      <h2 className="mb-4 font-display text-3xl md:text-4xl">
        High-Level Overview
      </h2>
      <p className="my-4">
        Held on the{" "}
        <a
          href="http://www.cmu.edu/cohon-university-center/images/floor-plans/CUC_2.pdf"
          target="_blank"
        >
          second floor
        </a>{" "}
        of the Cohon University Center at CMU
      </p>

      <ul
        className="w-full list-outside p-0 pl-0 md:text-lg"
        style={{ paddingLeft: 0 }}
      >
        <li
          className="flex flex-col pl-0 md:flex-row md:gap-2"
          style={{ paddingLeft: 0 }}
        >
          <span className="font-bold">Registration Table</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">hallway outside Rangos</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 inline-block md:ml-1 md:ml-2">
            8:30 am - 2:30 pm
          </span>
        </li>
        <li
          className="flex flex-col pl-0 md:flex-row md:gap-2"
          style={{ paddingLeft: 0 }}
        >
          <span className="font-bold">Quiet Room</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">the Dowd Room</span>
        </li>
        <li
          className="flex flex-col pl-0 md:flex-row md:gap-2"
          style={{ paddingLeft: 0 }}
        >
          <span className="font-bold">Escape Room</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">Class of 1987 Room</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">
            10:30 am - 3:00 pm{" "}
            <a
              className="ml-1 inline-flex items-center rounded-sm border-2 bg-teal-200 px-1 py-0.5 text-xs uppercase shadow transition-all duration-150 ease-in hover:bg-teal-400 hover:shadow-lg md:text-sm"
              style={{ textDecoration: "none" }}
              href="https://docs.google.com/spreadsheets/d/1MmnPdv8HcKdbzxAZ1Rhi9rTpAJrtrimN6WK1I3337Wo/edit?usp=sharing"
            >
              <TbPencil />
              <div>sign up for a time</div>
            </a>
          </span>
        </li>
        <li
          className="flex flex-col pl-0 md:flex-row md:gap-2"
          style={{ paddingLeft: 0 }}
        >
          <span className="font-bold">Geoguessr Challenge</span>{" "}
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">Pake Room </span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1"> 9:00 - 2:30 pm</span>
        </li>
        <li
          className="flex flex-col pl-0 md:flex-row md:gap-2"
          style={{ paddingLeft: 0 }}
        >
          <span className="font-bold">Map Gallery</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1">Rangos Ballroom</span>
          <span className="hidden md:inline"> | </span>
          <span className="ml-4 md:ml-1"> Voting ends at 2:30 pm</span>
        </li>
      </ul>

      <h3 className="mt-8 font-display text-2xl md:text-3xl">Schedule</h3>
      <p>Rangos Ballroom</p>
      <table className="mt-4 table-fixed text-sm md:table-auto md:text-lg lg:text-lg">
        <tbody>
          {schedule.map((item) => (
            <tr key={item.time.toISOString()} className="mb-1">
              <th className="w-20 pr-2 text-right font-mono md:w-auto lg:pr-4">
                {item.time.toLocaleTimeString(undefined, {
                  timeStyle: "short",
                })}
              </th>
              <td className="">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-8 font-display text-2xl md:text-3xl">Mappy Hour</h3>
      <p>Spirits & Tales in the Oaklander Hotel</p>
      <p>
        <a href="https://www.spiritsandtales.com/?utm_source=google&utm_medium=organic&utm_campaign=business_listing"></a>
      </p>
      <table className="mt-4 table-fixed text-sm md:table-auto md:text-lg lg:text-xl">
        <tbody>
          <tr>
            <th className="w-32 pr-2 text-right font-mono md:w-auto lg:pr-4">
              4:30 - 6:30 pm
            </th>
            <td>Sponsored by Larson Design Group</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-12 mb-6 font-display text-3xl md:text-4xl">
        Program Details
      </h2>
      <section id="program-details">
        <section id="morning-session" className="my-4">
          <div className="-mx-2 bg-dark-slate px-2 py-2 text-background">
            <h3 className="m-0 font-display text-2xl leading-none md:text-3xl">
              Morning Session
            </h3>
            <p className="mt-1 text-2xl">Rangos Ballroom</p>
          </div>
          <ul>
            <ProgramItem
              start="09:00"
              end="11:05"
              title="Talks with Coffee & Refreshments provided by Esri"
              top
            />
            <ProgramItem
              start="09:00"
              end="09:10"
              title="Opening Day"
              location="Rangos"
              items={[
                {
                  title: "Breathe Reset Connect with your Heart",
                  speakers: "Kristin Heath",
                  organizations: "CMU Libraries",
                },
              ]}
            />
            <ProgramItem
              start="09:10"
              end="10:00"
              title="Short Talks"
              location="Rangos"
              items={shortTalks.map((t) => ({
                title: t.title,
                speakers: t.speakers,
                duration: t.duration,
              }))}
            />
            <li className="my-6 text-xl font-bold uppercase">5 Minute Break</li>
            <ProgramItem
              start="10:10"
              end="10:20"
              title="Welcome"
              location="Rangos"
              items={[
                {
                  title: "Activities & Announcements",
                  speakers: "Jessica Benner",
                  organizations: "CMU Libraries",
                },
              ]}
            />

            <ProgramItem
              start="10:20"
              end="10:45"
              title="Lightning Talks Session 1"
              location="Rangos"
              detailsLink="/lightning-talks#session-1"
              items={lightningTalks1}
            />

            <ProgramItem
              start="10:45"
              end="11:05"
              title="Lightning Talks Session 2"
              location="Rangos"
              detailsLink="/lightning-talks#session-2"
              items={lightningTalks2}
            />
            <li className="my-6 text-xl font-bold uppercase">5 Minute Break</li>
          </ul>
        </section>
        <section id="midday-session" className="my-4">
          <div className="-mx-2 bg-dark-slate px-2 py-2 text-background">
            <h3 className="m-0 font-display text-2xl leading-none md:text-3xl">
              Mid-day Session & Lunch
            </h3>
            <p className="mt-1 text-2xl">Rangos Ballroom</p>
          </div>
          <ul>
            <ProgramItem
              start="11:10"
              end="11:40"
              title="Roundtable Discussions"
              location="Rangos"
              items={[
                {
                  title: "Round Table Topics",
                  duration: "10 min setup 20 min discussion, 11:10 - 11:40 am",
                },
                {
                  title:
                    "Two tables per topic. Each table has guiding questions for discussion. This is a time to informally connect with other participants with similar interests.",
                },
              ]}
            />
            <li className="my-6 text-xl font-bold uppercase">
              10 Minute Break
            </li>
            <ProgramItem
              start="11:50"
              end="12:30"
              title="Panel Discussion"
              location="Rangos"
            />
            <ProgramItem
              start="12:30"
              end="13:30"
              title="Lunch"
              location="Sponsored by CMU Sustainability Initiative"
              items={[
                {
                  title:
                    "Food will be set up in Rangos. Please use compost bins provided for compostable items.",
                },
              ]}
            />
          </ul>
        </section>
        <section id="afternoon-session" className="my-4">
          <div className="-mx-2 bg-dark-slate px-2 py-2 text-background">
            <h3 className="m-0 font-display text-2xl leading-none md:text-3xl">
              Afternoon Session
            </h3>
            <p className="mt-1 text-2xl">Rangos Ballroom</p>
          </div>
          <ul>
            <ProgramItem
              start="13:30"
              end="15:00"
              title="Open House & Map Gallery"
              detailsLink="/open-house"
              location="Rangos"
              items={[
                {
                  title: "Open House tables to visit in Rangos",
                  items: [
                    {
                      title:
                        "Visit them all to learn about local initiatives and projects, internship opportunities and more. ",
                    },
                  ],
                },
                {
                  title:
                    "Grand Challenge Expo | Working with County Health Data",
                  items: [
                    {
                      title:
                        "CMU’s Dietrich College offers Grand Challenge courses in its undergraduate program. This expo includes posters from a Grand Challenge course focused on Thinking with Evidence.",
                    },
                  ],
                },
                {
                  title: "Map Gallery",
                  items: [
                    {
                      title:
                        "Use the beads/buttons attached to your program to vote for three prizes. VOTING ENDS AT 2:30 pm",
                      items: [
                        { title: "Best Cartographic Map" },
                        { title: "Best Research Map" },
                        { title: "Best Student Entry" },
                      ],
                    },
                  ],
                },
              ]}
            />
            <ProgramItem
              start="15:00"
              end="15:05"
              title="Awards Presentation"
              location="Rangos"
            />

            <ProgramItem
              start="15:05"
              end="15:30"
              title="Lightning Talks Session 3"
              location="Rangos"
              detailsLink="/lightning-talks#session-3"
              items={lightningTalks3}
            />
            <ProgramItem
              start="15:30"
              end="15:55"
              title="Lightning Talks Session 4"
              location="Rangos"
              detailsLink="/lightning-talks#session-4"
              items={lightningTalks4}
            />

            <ProgramItem
              start="15:55"
              end="16:00"
              title="Closing & Thanks"
              location="Rangos"
            />
            <ProgramItem
              start="16:30"
              end="18:30"
              title="Mappy Hour with food and cash bar"
              speakers="Spirits & Tales (18 min walk)"
              organizations="5130 Bigelow Blvd, Pittsburgh, PA 15213"
              detailsLink="https://www.spiritsandtales.com/?utm_source=google&utm_medium=organic&utm_campaign=business_listing"
              items={[
                {
                  title:
                    "Feel free to mosey over on your own, but if you’d like to walk with a group: one group will leave at 4:15 pm and a second will leave at 4:30 pm. Meet at the Registration Table.",
                },
              ]}
            />
          </ul>
        </section>
      </section>
    </div>
  );
}
