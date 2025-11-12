import { getMaps } from "@/lib/api";
import { TbPencil } from "react-icons/tb";

export default function OpenHousePages() {
  const maps = getMaps();

  return (
    <article className="not-prose-ul not-prose-li prose prose-sm md:prose-lg lg:prose-xl">
      <h1 className="text-5xl">Open House & Map Gallery</h1>
      <h2>Open House tables to visit in Rangos 2.</h2>
      <ul>
        <li>
          University of Pittsburgh, University Center for Social and Urban
          Research
        </li>
        <li>Pittsburgh Supercomputing Center (PSC)</li>
        <li>Monroeville Municipal Authority</li>
        <li>Allegheny County GIS</li>
        <li>Carnegie Library of Pittsburgh</li>
        <li>CMU Library Student Advisory Council</li>
        <li>Esri</li>
        <li>City of Pittsburgh GIS</li>
        <li>Larson Design Group</li>
        <li>Civic Mapper</li>
        <li>Pittsburgh Water</li>
        <li>Scotty Labs & Open FLAME</li>
        <li>PRT</li>
        <li>JMT</li>
        <li>WPRDC</li>
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
