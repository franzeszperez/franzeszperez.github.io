/**
 * Single source of truth for all resume content.
 *
 * Edit this file when your experience changes — the pages and components read
 * from it, so you never have to touch markup to update a date or add a job.
 */

export interface Profile {
	name: string;
	headline: string;
	location: string;
	summary: string;
	email: string;
	links: Link[];
}

export interface Link {
	label: string;
	url: string;
}

export interface Job {
	company: string;
	role: string;
	/** Format: "YYYY-MM" */
	start: string;
	/** "YYYY-MM", or null if this is your current role. */
	end: string | null;
	location: string;
	summary: string;
	highlights: string[];
	stack: string[];
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Project {
	name: string;
	description: string;
	stack: string[];
	url: string | null;
}

export interface Education {
	institution: string;
	qualification: string;
	start: string;
	end: string | null;
}

export const profile: Profile = {
	name: 'Francesc Perez',
	headline: 'TODO: one-line positioning, e.g. "Senior Backend Engineer — distributed systems"',
	location: 'TODO: City, Country',
	summary:
		'TODO: two or three sentences a recruiter reads first. What you do, the kind of problems you solve, and what you are looking for.',
	email: 'TODO: your@email.com',
	links: [
		{ label: 'GitHub', url: 'https://github.com/TODO' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/TODO' },
	],
};

export const experience: Job[] = [
	{
		company: 'TODO: Company name',
		role: 'TODO: Your title',
		start: '2023-01',
		end: null,
		location: 'TODO: City / Remote',
		summary: 'TODO: one sentence on scope — team size, domain, what you owned.',
		highlights: [
			'TODO: an achievement with a number in it where possible.',
			'TODO: something you built or led, and the outcome.',
		],
		stack: ['TODO', 'Tech', 'Here'],
	},
];

export const skills: SkillGroup[] = [
	{ category: 'Languages', items: ['TODO'] },
	{ category: 'Frameworks', items: ['TODO'] },
	{ category: 'Infrastructure', items: ['TODO'] },
	{ category: 'Practices', items: ['TODO'] },
];

export const projects: Project[] = [
	{
		name: 'TODO: Project name',
		description: 'TODO: what it does and why it was interesting to build.',
		stack: ['TODO'],
		url: null,
	},
];

export const education: Education[] = [
	{
		institution: 'TODO: University or bootcamp',
		qualification: 'TODO: Degree or certificate',
		start: '2015-09',
		end: '2019-06',
	},
];
