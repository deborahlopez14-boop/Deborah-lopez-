
import React from 'react';
import { BracketIcon } from './Icons';

interface Stage {
    title: string;
}

interface StageGroup {
    groupTitle: string;

    stages: Stage[];
}

interface OriginStagesProps {
    stageGroups: StageGroup[];
}

export const OriginStages: React.FC<OriginStagesProps> = ({ stageGroups }) => {
    return (
        <div className="p-4 rounded-lg bg-white/60 backdrop-blur-md border border-slate-200 shadow-lg shadow-slate-200/60">
            <h2 className="text-xl font-bold text-center text-cyan-800 mb-6">Etapas Clave del Origen</h2>
            <div className="space-y-6">
                {stageGroups.map((group) => (
                    <div key={group.groupTitle} className="flex gap-4">
                        <div className="flex-shrink-0 w-5 h-auto">
                            <BracketIcon className="w-full h-full text-cyan-500/70" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-cyan-700 text-md mb-2">{group.groupTitle}</h3>
                            <ul className="space-y-1.5">
                                {group.stages.map((stage, i) => (
                                    <li key={i} className="text-sm text-slate-700 flex">
                                        <span className="text-cyan-600 mr-2">▪</span>
                                        <span>{stage.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};