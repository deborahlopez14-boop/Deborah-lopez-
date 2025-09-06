
import React from 'react';

export type IconType = 'planet' | 'bacteria' | 'dna' | 'fossil' | 'oxygen' | 'cell' | 'multicellular' | 'link';

interface IconProps {
    className?: string;
}

export const BracketIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        viewBox="0 0 20 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
    >
        <path d="M19 0H5C0 0 0 5 0 5V45C0 50 5 50 5 50C5 50 0 50 0 55C0 55 5 55 5 55V95C5 100 0 100 0 100H19" />
    </svg>
);


export const PlanetIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.812.678a1.25 1.25 0 00-1.624 0L1.31 11.23a1.25 1.25 0 001.077 2.138H4.75A7.5 7.5 0 0112 5.053a7.5 7.5 0 017.25 8.315h2.363a1.25 1.25 0 001.078-2.138L12.812.678zM12 10.25a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zM3.238 15a8.75 8.75 0 0017.524 0H3.238z" />
    </svg>
);

const BacteriaIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21.065.433.288.433l3.09.001c.223 0 .353-.223.288-.433A7.5 7.5 0 0012 3c-1.88 0-3.6.68-4.95 1.836z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v.01M12 12a4.5 4.5 0 00-4.5 4.5V18a1.5 1.5 0 001.5 1.5h6A1.5 1.5 0 0018 18v-1.5a4.5 4.5 0 00-4.5-4.5zm0 0v-3.75" />
    </svg>
);

const DnaIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

const FossilIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9c.368 0 .714.032 1.05.093m-1.05-.093a13.33 13.33 0 00-3.75-.515c-2.43 0-4.66.5-6.42 1.343m10.17 0a13.33 13.33 0 01-3.75.515c-2.43 0-4.66-.5-6.42-1.343m1.05 10.263c.336.06.682.093 1.05.093 2.828 0 5.38-1.02 7.21-2.583m-7.21 2.583a13.33 13.33 0 01-3.75.515c-2.43 0-4.66-.5-6.42-1.343m10.17 0c-.336.06-.682.093-1.05.093a13.33 13.33 0 01-3.75-.515c-2.43 0-4.66-.5-6.42-1.343M8.25 9.75c.368 0 .714.032 1.05.093m-1.05-.093c-.45 1.52-1.28 2.85-2.22 3.868" />
    </svg>
);

const OxygenIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.166 9.51c.713-1.332 2.023-2.26 3.534-2.26s2.821.928 3.534 2.26m-7.068 4.98a4.5 4.5 0 007.068 0M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
);

const CellIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.233 3.633a2.25 2.25 0 013.534 0 2.25 2.25 0 010 3.182 11.95 11.95 0 01-3.534 2.457m-11.466 2.457a12.024 12.024 0 003.534 2.457 2.25 2.25 0 003.534 0 11.95 11.95 0 003.534-2.457m-11.466-2.457c-1.281 1.28-2.048 2.98-2.048 4.881s.767 3.602 2.048 4.881m11.466-9.762c1.281-1.28 2.048-2.98 2.048-4.881s-.767-3.602-2.048-4.881" />
    </svg>
);

const MulticellularIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V13.5m0 0V16.5m0-3h-3m3 0h3M5.25 10.5h.008v.008H5.25v-.008zM5.25 13.5h.008v.008H5.25v-.008zM5.25 16.5h.008v.008H5.25v-.008zM7.5 10.5h.008v.008H7.5v-.008zM7.5 13.5h.008v.008H7.5v-.008zM7.5 16.5h.008v.008H7.5v-.008zM9.75 10.5h.008v.008H9.75v-.008zM9.75 13.5h.008v.008H9.75v-.008zM9.75 16.5h.008v.008H9.75v-.008z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21a3 3 0 003-3V6a3 3 0 00-3-3H4.508c.075.034.148.072.22.114l5.248 3.5a3 3 0 003.556 0l5.248-3.5c.072-.042.145-.08.22-.114H19.5a3 3 0 013 3v12a3 3 0 01-3 3h-15z" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);


interface EventIconProps extends IconProps {
    type: IconType;
}

export const EventIcon: React.FC<EventIconProps> = ({ type, className }) => {
    switch (type) {
        case 'planet':
            return <PlanetIcon className={className} />;
        case 'bacteria':
            return <BacteriaIcon className={className} />;
        case 'dna':
            return <DnaIcon className={className} />;
        case 'fossil':
            return <FossilIcon className={className} />;
        case 'oxygen':
            return <OxygenIcon className={className} />;
        case 'cell':
            return <CellIcon className={className} />;
        case 'multicellular':
            return <MulticellularIcon className={className} />;
        case 'link':
            return <LinkIcon className={className} />;
        default:
            return null;
    }
};
