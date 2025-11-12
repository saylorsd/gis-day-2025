import { getMaps } from "@/lib/api";
import { TbPencil } from "react-icons/tb";

export default function OpenHousePages() {
  const maps = getMaps();

  return (
    <article className="not-prose-ul not-prose-li prose prose-sm md:prose-lg lg:prose-xl">
      <h1 className="text-5xl">Open House & Map Gallery</h1>
      <h2>Open House tables to visit in Rangos 2.</h2>
      <ul>
        <li>Larson Design Group</li>
        <li>
          University of Pittsburgh Library System - Boris Michev, bom17@pitt.edu
        </li>
        <li>
          Allegheny County; Eli Thomas, Tom Allison, Darin Palilla, Brian McBane
        </li>
        <li>
          City of Pittsburgh; Cherin Abdelsamie
          (cherin.abdelsamie@pittsburghpa.gov), Becky Reinhold
          (rebecca.reinhold@pittsburghpa.gov), Draven Bechtel-Clark
          (draven.bechtel-clark@pittsburghpa.gov) and Giovanni Svevo &lt;
          <a href="mailto:giovanni.svevo@pittsburghpa.gov">
            giovanni.svevo@pittsburghpa.gov
          </a>
          &gt;
        </li>
        <li>Esri</li>
        <li>
          Pittsburgh Water, Jackson Stoss, GIS Manager (jstoss@pgh2o.com) and
          Megan Hicks, Senior GIS Analyst (mhicks@pgh2o.com).{" "}
        </li>
        <li>
          ALCOSAN; Greg Alexander &ndash; greg.alexander@alcosan.org &amp; Amber
          Castelveter &ndash; amber.castelveter@alcosan.org
        </li>
        <li>
          Western Pennsylvania Regional Data Center, Steve Saylor
          (steven.saylor@pitt.edu), Ross Reilly (ror88@pitt.edu), Bob Gradeck
          (rmg44@pitt.edu)
        </li>
        <li>
          Pittsburgh Supercomputing Center; Matt Yoder (mjyoder@psc.edu) and
          Mariah Kenney (kenneyml@psc.edu)
        </li>
        <li>Pittsburgh Regional Transit</li>
      </ul>

      <h2>Map Gallery</h2>
      <div className="not-prose">
        <ul className="list-none p-0">
          {maps.map((item, i) => (
            <li className="my-8 pl-0" key={i}>
              <div className="mb-1">
                <a
                  className="text-lg md:text-2xl"
                  href={`/open-house/map-gallery/${item.slug}`}
                >
                  {item.title}
                </a>
              </div>
              <div className="flex flex-col-reverse md:flex-row md:items-center">
                <div className="mt-1 mr-4 text-sm font-medium md:text-lg">
                  {item.author}
                </div>
                {item.is_student && (
                  <div className="flex w-fit items-center rounded-xs border-2 border-dark-slate bg-hunyadi-yellow px-0.5 text-xs font-bold md:text-sm">
                    <TbPencil />
                    <div>Student Submission</div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
