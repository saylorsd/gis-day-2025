import { RawScheduleItem, RawTalk, ScheduleItem, Talk } from "@/lib/types";

export function parseTime(t: string): Date {
  const [hours, minutes] = t.split(":");
  return new Date(`2025-11-12T${hours}:${minutes}`);
}

export function parseTalk(raw: RawTalk | undefined): Talk | undefined {
  if (!raw) return undefined;
  const start = parseTime(raw.start);
  const end = new Date(start.getTime() + 5 * 60 * 1000);
  return { ...raw, start, end };
}

export function parseScheduleItem(
  raw: RawScheduleItem | undefined,
): ScheduleItem | undefined {
  if (!raw) return undefined;
  const time = parseTime(raw.time);
  return { ...raw, time };
}
