import type { SVGProps } from 'react';

export const MezonTalimLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 30L20 10L30 30" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
    <text x="40" y="27" fontFamily="PT Sans, sans-serif" fontSize="20" fill="currentColor">Mezon Ta'lim</text>
  </svg>
);

export const MezonKengashiLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="15" width="10" height="10" fill="currentColor" />
    <text x="40" y="27" fontFamily="PT Sans, sans-serif" fontSize="20" fill="currentColor">Mezon Kengashi</text>
  </svg>
);

export const ADLAdvisoryLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M15 15L25 25M25 15L15 25" stroke="currentColor" strokeWidth="2"/>
    <text x="45" y="27" fontFamily="PT Sans, sans-serif" fontSize="20" fill="currentColor">ADL Advisory</text>
  </svg>
);
