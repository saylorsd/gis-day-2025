"use client";

import Link from "next/link";
import { useState } from "react";
import { TbChevronDown, TbMenu2 } from "react-icons/tb";

export function NavMenu(props: { small?: boolean }) {
  const [subOpen, setSubOpen] = useState(false);
  const [open, setOpen] = useState(false);

  if (props.small)
    return (
      <div>
        <nav className="block md:hidden">
          <button onClick={() => setOpen(!open)}>
            <TbMenu2 className="size-10" />
          </button>
          <ul
            className="absolute left-0 w-full px-2"
            style={{ display: open ? "flex" : "none" }}
          >
            <div
              className="mt-2 w-full space-y-2 border-2 bg-background p-4 px-4 text-lg shadow-md"
              onClick={() => setOpen(!open)}
            >
              <li>
                <Link href="/program">Program</Link>
              </li>
              <li>
                <Link href="/venue">Other Info</Link>
              </li>
              <li>
                <Link href="/lightning-talks">Lightning Talks</Link>
              </li>
              <li>
                <Link href="/short-talks">Short Talks</Link>
              </li>
              <li>
                <Link href="/open-house">Open House & Map Gallery</Link>
              </li>
            </div>
          </ul>
        </nav>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 font-sans text-xl">
            <li>
              <Link href="/program">Program</Link>
            </li>
            <li>
              <Link href="/venue">Other Info</Link>
            </li>
            <li>
              <button
                className="link flex items-center"
                onClick={() => setSubOpen(!subOpen)}
              >
                <TbChevronDown />
                <div>Content</div>
              </button>
              <ul
                className="absolute left-0 w-full items-end pr-10"
                style={{
                  display: subOpen ? "flex" : "none",
                  flexDirection: "column",
                }}
              >
                <div
                  className="mt-2 space-y-1 border-2 bg-background p-2 text-right shadow-md"
                  onClick={() => setOpen(!open)}
                >
                  <li>
                    <Link href="/lightning-talks">Lightning Talks</Link>
                  </li>
                  <li>
                    <Link href="/short-talks">Short Talks</Link>
                  </li>
                  <li>
                    <Link href="/open-house">Open House & Map Gallery</Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
}
