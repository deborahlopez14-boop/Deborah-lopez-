
import type { IconType } from './components/Icons';

export interface EventDetail {
  icon: IconType;
  title: string;
  description: string;
}

export interface TimelineEventNode {
  time: string;
  events: EventDetail[];
}

export interface Eon {
  name: string;
  timeRange: string;
  description?: string;
  color: string;
  dotColor: string;
  borderColor: string;
  shadowColor?: string;
  arrowColor?: string;
  arrowColorLeft?: string;
  events: TimelineEventNode[];
}
