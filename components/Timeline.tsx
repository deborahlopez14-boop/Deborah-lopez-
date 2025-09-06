
import React, { useState } from 'react';
import type { Eon, TimelineEventNode, EventDetail } from '../types';
import { EventIcon, ChevronDownIcon } from './Icons';

interface TimelineProps {
  eons: Eon[];
}

const TimelineCard: React.FC<{ eventNode: TimelineEventNode; eon: Eon; index: number }> = ({ eventNode, eon, index }) => {
  const isRightSide = index % 2 === 0;
  const alignmentClasses = isRightSide
    ? 'md:ml-auto md:pl-16'
    : 'md:mr-auto md:pr-16 md:text-right';
  const arrowClasses = isRightSide
    ? `md:left-0 md:-ml-2 md:border-l-0 md:border-r-[16px] ${eon.arrowColor || 'md:border-r-white'}`
    : `md:right-0 md:-mr-2 md:border-r-0 md:border-l-[16px] ${eon.arrowColorLeft || 'md:border-l-white'}`;
  const dotPosition = isRightSide ? 'md:left-[-11px]' : 'md:right-[-11px]';

  const animationClass = isRightSide ? 'animate-slideInRight' : 'animate-slideInLeft';

  return (
    <div 
        className={`mb-12 md:mb-8 flex md:w-1/2 ${alignmentClasses} relative opacity-0 ${animationClass}`}
        style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <div className={`hidden md:block absolute top-1.5 w-6 h-6 rounded-full ${eon.dotColor} ${dotPosition} border-4 border-gray-50`}></div>
      <div className={`w-full bg-white/80 backdrop-blur-sm p-6 rounded-lg border ${eon.borderColor} shadow-lg shadow-slate-200/60 relative transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${eon.shadowColor} group`}>
        <div className={`hidden md:block absolute top-4 w-0 h-0 border-transparent border-t-8 border-b-8 ${arrowClasses}`}></div>
        <time className={`text-sm font-semibold uppercase tracking-wider ${eon.color}`}>{eventNode.time}</time>
        <div className="mt-4 space-y-5">
            {eventNode.events.map((event: EventDetail, eventIdx: number) => (
                <div key={eventIdx} className={`flex gap-4 ${isRightSide ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}>
                    <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <EventIcon type={event.icon} className={`w-8 h-8 ${eon.color}`} />
                    </div>
                    <div className={`${isRightSide ? '' : 'md:text-right'} flex-1 min-w-0`}>
                        <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ eons }) => {
  const [collapsedEons, setCollapsedEons] = useState<Set<string>>(new Set());

  const toggleEon = (eonName: string) => {
    setCollapsedEons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eonName)) {
        newSet.delete(eonName);
      } else {
        newSet.add(eonName);
      }
      return newSet;
    });
  };

  return (
    <div className="relative">
      {/* Central line */}
      <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-1 -ml-0.5 bg-slate-200 rounded-full"></div>

      {eons.map((eon, eonIndex) => {
        const isCollapsed = collapsedEons.has(eon.name);
        return (
          <section key={eonIndex} className="mb-4 md:mb-8">
            <div className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm py-2">
              <button
                onClick={() => toggleEon(eon.name)}
                className="w-full flex justify-between items-center text-left p-4 rounded-lg hover:bg-slate-200/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:ring-sky-500 transition-colors"
                aria-expanded={!isCollapsed}
                aria-controls={`eon-content-${eonIndex}`}
              >
                <div className="text-center w-full">
                  <h2 className={`text-2xl md:text-3xl font-bold ${eon.color}`}>{eon.name}</h2>
                  <p className="text-slate-500">{eon.timeRange}</p>
                  {eon.description && (
                     <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto mt-2 text-center">
                        {eon.description}
                     </p>
                  )}
                </div>
                <ChevronDownIcon className={`w-8 h-8 text-slate-500 transition-transform duration-300 flex-shrink-0 ${!isCollapsed ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <div
              id={`eon-content-${eonIndex}`}
              className={`grid transition-all duration-700 ease-in-out ${isCollapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="relative flex flex-col items-center pt-8">
                  {eon.events.map((eventNode, eventIndex) => (
                    <TimelineCard key={eventIndex} eventNode={eventNode} eon={eon} index={eventIndex} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  );
};