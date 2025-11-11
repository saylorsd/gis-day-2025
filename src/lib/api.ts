import { parse } from "yaml";
import path from "path";

import fs from "fs";
import {
  RawScheduleItem,
  RawTalk,
  ScheduleItem,
  ShortTalk,
  Talk,
  Map,
} from "@/lib/types";
import { parseScheduleItem, parseTalk } from "@/lib/util";

function getPath(filename: string) {
  return path.join(process.cwd(), "src", "data", filename);
}

export function getTalks() {
  const filename = getPath("lightning-talks.yaml");
  const file = fs.readFileSync(filename, {
    encoding: "utf-8",
  });
  const talks: RawTalk[] = parse(file);
  return talks.filter((t) => !!t);
}

export function getTalk(slug: string): Talk | undefined {
  const filename = getPath("lightning-talks.yaml");
  const file = fs.readFileSync(filename, {
    encoding: "utf-8",
  });
  const talks: RawTalk[] = parse(file);

  return parseTalk(talks.find((t) => t.slug === slug));
}

export function getSchedule(): (ScheduleItem | undefined)[] {
  const filename = getPath("schedule.yaml");
  const file = fs.readFileSync(filename, { encoding: "utf-8" });
  const schedule: RawScheduleItem[] = parse(file);

  return schedule.map(parseScheduleItem);
}

export function getShortTalks() {
  const filename = getPath("short-talks.yaml");
  const file = fs.readFileSync(filename, {
    encoding: "utf-8",
  });
  const talks: ShortTalk[] = parse(file);
  return talks;
}

export function getShortTalk(slug: string) {
  const filename = getPath("short-talks.yaml");
  const file = fs.readFileSync(filename, { encoding: "utf-8" });
  const talks: ShortTalk[] = parse(file);

  return talks.find((t) => t.slug === slug);
}

export function getMaps() {
  const filename = getPath("map-gallery.yaml");
  const file = fs.readFileSync(filename, { encoding: "utf-8" });
  const maps: Map[] = parse(file);
  return maps;
}

export function getMap(slug: string) {
  const filename = getPath("map-gallery.yaml");
  const file = fs.readFileSync(filename, { encoding: "utf-8" });
  const maps: Map[] = parse(file);

  return maps.find((t) => t.slug === slug);
}
