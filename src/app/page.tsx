import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="mb-8 font-display text-9xl text-dark-slate">
        GIS Day 2025
      </h1>

      <div className="prose-xl font-medium text-chocolate">
        <p>
          GIS Day is celebrated on the 3rd Wednesday of November as an
          international forum for users of GIS technology to demonstrate
          real-world applications that are making a difference in society and
          for people to learn more about Geographic Information Systems (GIS)
          and its benefits.
        </p>
        <p className="my-4 font-semibold">
          This year&apos;s event is Wednesday November 12th |{" "}
          <a
            className="font-bold underline hover:underline-offset-2"
            href="https://cmu.libcal.com/event/14971789"
          >
            Come one, Come All!
          </a>
        </p>
        <p>
          A Pittsburgh GIS Day event is hosted by Carnegie Mellon University
          (CMU) Libraries and other partners. The 2025 planning committee
          includes the following people:
        </p>

        <ul className="list-disc">
          <li>
            Emma Slayton, Lynn Kawaratani, Erin Swift, and Jessica Benner,
            University Libraries, CMU
          </li>
          <li>Alex Hiniker, CMU Sustainability Initiative, CMU</li>
          <li>Suzy Li, School of Architecture, CMU</li>
          <li>
            Rich Nisa, Integrative Design, Arts, and Technology [IDeATe]
            Program, CMU
          </li>
          <li>Adam Kidane, Enterprise Space Information Management, CMU</li>
          <li>Catalina Moreno Lopez, College of Engineering, CMU</li>
          <li>Melinda Angeles and Eli Thomas, GIS Office, Allegheny County</li>
          <li>Boris Michev, University Library System, Pitt</li>
          <li>Susan Lucas, Urban Studies, Pitt</li>
          <li>Daniel Williams, Geology and Environmental Science, Pitt</li>
          <li>
            Giovanni Svevo, Department of Innovation and Performance, City of
            Pittsburgh
          </li>
          <li>
            Josh Mullenite, Falk School of Sustainability & Environment, Chatham
          </li>
          <li>Rachel Weeden and Ridge Wadell, Esri, Philadelphia</li>
          <li>Sam Buckley, Pittsburgh Regional Transit</li>
          <li>
            Steve Saylor and Ross Reilly, Western Pennsylvania Regional Data
            Center
          </li>
        </ul>

        <h2 className="mb-4 font-display text-2xl">
          Thank you to our Sponsors!
        </h2>
      </div>
      <ul className="grid h-fit w-fit grid-cols-4 gap-8">
        <li className="flex items-center">
          <a
            className="mx-auto"
            target="_blank"
            href="https://www.esri.com/en-us/about/about-esri/overview"
          >
            <Image
              alt="Esri"
              src="/logos/esri_logo.png"
              width={200}
              height={200}
            />
          </a>
        </li>
        <li className="flex items-center">
          <a
            className="mx-auto"
            target="_blank"
            href="https://www.larsondesigngroup.com/about/"
          >
            <Image
              alt="Larson Design Group"
              src="/logos/ldg_logo.png"
              width={100}
              height={100}
            />
          </a>
        </li>
        <li className="flex items-center">
          <a
            className="mx-auto"
            target="_blank"
            href="https://www.cmu.edu/sustainability-initiative/about/index.html"
          >
            <Image
              alt="CMU Sustainability Initiative"
              src="/logos/cmu_sustainability.png"
              width={200}
              height={200}
            />
          </a>
        </li>
        <li className="flex items-center">
          <a
            className="mx-auto"
            target="_blank"
            href="https://www.library.cmu.edu/about"
          >
            <Image
              alt="CMU Libraries"
              src="/logos/cmu_libraries_logo.png"
              width={200}
              height={200}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
