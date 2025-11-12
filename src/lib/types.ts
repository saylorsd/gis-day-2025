export interface RawTalk {
  slug: string;
  title: string;
  speaker: string;
  organization: string;
  session: number;
  start: string;
  end: string;
  abstract: string;
}

export interface Talk {
  slug: string;
  title: string;
  speaker: string;
  organization: string;
  session: number;
  start: Date;
  end: Date;
  abstract: string;
}

export interface RawScheduleItem {
  title: string;
  time: string;
}

export interface ScheduleItem {
  title: string;
  time: Date;
}

export interface Map {
  slug: string;
  title: string;
  author: string;
  is_student: boolean;
  abstract: string;
}

export interface ShortTalk {
  slug: string;
  title: string;
  duration: string;
  start: string;
  speakers: string;
  abstract: string;
}
