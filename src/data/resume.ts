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
	/**
	 * Optional, and currently unset by choice: a mailto on a public page is
	 * scraped within days. When absent, the site's primary action becomes
	 * LinkedIn instead of email. Set it to switch back.
	 */
	email?: string;
	/** Same reasoning as `email`, and likewise unset. */
	phone?: string;
	links: Link[];
}

export interface Link {
	label: string;
	url: string;
}

/** An app shipped as part of a role. `url` points at a store listing if public. */
export interface App {
	name: string;
	url: string | null;
	/**
	 * Filename of the app's mark inside `public/logos/`, e.g. `'ces.png'`.
	 *
	 * Optional: an app with no logo falls back to a drawn monogram tile, so the
	 * row never renders a broken image or an empty box. Logos are ink
	 * monochrome, not the full-colour store icon — `npm run logos` converts
	 * them. See scripts/logos.mjs and DESIGN.md on the two-accent palette.
	 */
	logo?: string;
}

export interface Job {
	company: string;
	role: string;
	/** Format: "YYYY-MM" */
	start: string;
	/** "YYYY-MM", or null if this is your current role. */
	end: string | null;
	location: string;
	/** Short scope line, rendered above the highlights. */
	summary: string;
	highlights: string[];
	stack: string[];
	apps?: App[];
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Project {
	name: string;
	description: string;
	/** Format: "YYYY", shown as-is. */
	year: string;
	stack: string[];
	url: string | null;
}

export interface Education {
	institution: string;
	qualification: string;
	location?: string;
	start?: string;
	end?: string | null;
}

export interface Certification {
	name: string;
	issuer: string;
	year?: string;
}

export const profile: Profile = {
	name: 'Francesc Pérez',
	headline: 'Senior Android & Backend Engineer',
	location: 'Barcelona, Spain',
	summary:
		'Product-driven engineer with 8+ years building offline-first Android apps and scalable backend systems in Kotlin, Java, and Spring Boot. I own features end to end — from architecture through implementation and testing — across mobile, CMS integrations, and microservices. I pioneered Jetpack Compose adoption and Kotlin Multiplatform initiatives at Eventbase, and lean on Clean Architecture, SOLID, and unidirectional data flow (MVI, MVVM) to keep systems maintainable.',
	// No email and no phone here by choice. Both are private, and anything on a
	// public page is scraped by spam bots within days. Contact runs through
	// LinkedIn instead; a recruiter who asks can be given either directly.
	// Adding an `email` back here re-enables the mailto actions automatically.

	links: [
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/francescperezpascual/' },
	],
};

export const experience: Job[] = [
	{
		company: 'Fanatics',
		role: 'Senior Android & Backend Engineer (Contractor)',
		start: '2026-01',
		end: null,
		location: 'USA · Remote',
		summary:
			'Full-stack work across the Fanatics app and its backend-for-frontend layer, spanning CMS, APIs, and client features.',
		highlights: [
			'Pioneered full-stack and platform expansion by architecting custom blocks in Payload CMS (Next.js) and implementing server-side business logic in Kotlin and Spring Boot.',
			'Engineered backend services backed by PostgreSQL and Redis to parse CMS content, dynamically enrich widgets with live YouTube API video feeds, and construct optimized JSON payloads for Android and iOS clients.',
			"Spearheaded cross-organizational integration to bring Fanatics Collect's Instant Rips feature into the primary Fanatics app — investigating infrastructure, querying GraphQL APIs, and transforming data to align with the BFF widget schema.",
			'Created a dedicated Promotions API to handle promotional data and link targeted promotions directly to specific screens in the mobile app.',
			'Defined and developed dynamic carousel widgets that render multi-source data feeds across client apps.',
			'Spearheaded core UX and registration features for Fanatics Fest 2026, integrating a custom Leap Event Tech SDK and building bridges for analytics, logging, and deep linking.',
			"Expanded Fanatics' BFF component library by designing and deploying new widget types.",
			'Implemented the "Moments" feature, integrating the YouTube IFrame Player API to deliver a reel-style video viewing experience.',
		],
		stack: [
			'Kotlin',
			'Spring Boot',
			'Payload CMS',
			'Next.js',
			'GraphQL',
			'PostgreSQL',
			'Redis',
			'Android SDK',
		],
		apps: [{ name: 'Fanatics App', url: "https://play.google.com/store/apps/details?id=com.fanatics" }],
	},
	{
		company: 'Eventbase',
		role: 'Senior Android Developer',
		start: '2019-06',
		end: '2025-11',
		location: 'Vancouver, BC, Canada',
		summary:
			'Offline-first event apps for high-profile global clients, plus platform-level technical direction and mentorship.',
		highlights: [
			'Developed highly customizable, offline-first event applications in Kotlin for global corporate clients including Cisco, Deloitte, CES, and SXSW.',
			'Pioneered Jetpack Compose adoption across the organization by building an influential prototype and training engineers to accelerate platform-wide integration.',
			'Led technical direction and system architecture for 10+ end-to-end features, collaborating closely with Product, Design, and Backend teams.',
			'Spearheaded a Kotlin Multiplatform initiative, significantly reducing platform-specific code duplication between Android and iOS.',
			'Optimized CI/CD build pipelines using Jenkins to achieve reliable, predictable release cycles.',
			'Refactored legacy codebases to eliminate technical debt, improving app performance in low-connectivity event venues.',
			'Upgraded 20+ core platform libraries to align with modern Android OS releases and Kotlin updates.',
			'Mentored a team of 5 Android developers and hosted 10+ technical knowledge-sharing sessions.',
		],
		stack: [
			'Kotlin',
			'Jetpack Compose',
			'Kotlin Multiplatform',
			'Android SDK',
			'Coroutines',
			'Flow',
			'Room',
			'Jenkins',
		],
		apps: [
			{ name: 'SXSW GO', url: "https://play.google.com/store/apps/details?id=com.xomodigital.sxswgo&hl=en" },
			{ name: 'CES', url: "https://play.google.com/store/apps/details?id=com.cta.cestech&hl=en" },
			{ name: 'VMware', url: "https://play.google.com/store/apps/details?id=com.vmware.explore&hl=en" },
			{ name: 'Salesforce', url: "https://play.google.com/store/apps/details?id=com.salesforce.dreamforce&hl=en" },
		],
	},
	{
		company: 'Fickl',
		role: 'Junior Full Stack Developer',
		start: '2021-04',
		end: '2022-08',
		location: 'Vancouver, BC, Canada',
		summary: 'Frontend and serverless work on a marketing web platform.',
		highlights: [
			'Built dynamic user interface components in React.js for a marketing web platform.',
			'Maintained Firebase Firestore databases for persistent cloud data storage.',
			'Authored, tested, and deployed serverless Firebase Cloud Functions.',
		],
		stack: ['React.js', 'Firebase', 'Firestore', 'Cloud Functions', 'JavaScript'],
	},
	{
		company: 'Napptilus Tech Labs',
		role: 'Android Developer',
		start: '2017-12',
		end: '2019-03',
		location: 'Barcelona, Spain',
		summary: 'High-volume e-commerce Android apps for European and LATAM retail brands.',
		highlights: [
			'Contributed to high-volume e-commerce applications including Oysho (500K+ downloads) and Privalia.',
			'Developed feature updates and resolved complex issues using Java, Kotlin, and the MVP architecture pattern.',
			'Integrated RESTful APIs using Retrofit, RxJava, and GSON; built comprehensive unit tests with Mockito.',
			'Engineered a localized refund and return processing module for Privalia across European and LATAM markets.',
			'Built an internal automated expense-reporting mobile app using Kotlin and MLKit OCR.',
		],
		stack: ['Java', 'Kotlin', 'MVP', 'Retrofit', 'RxJava', 'GSON', 'Mockito', 'MLKit'],
		apps: [
			{ name: 'Oysho', url: "https://play.google.com/store/apps/details?id=com.inditex.oysho&hl=en" },
			{ name: 'Privalia', url: "https://play.google.com/store/apps/details?id=com.privalia.privalia&hl=en" },
			{ name: 'Invoice Reporter', url: "https://github.com/franzeszperez/invoicereporter" },
		],
	},
	{
		company: 'Everis',
		role: 'IT Consultant',
		start: '2014-03',
		end: '2017-12',
		location: 'Barcelona, Spain',
		summary: 'Technology consulting in the banking division for major financial institutions.',
		highlights: [
			'Delivered technology consulting services within the banking division for major financial client institutions.',
			'Integrated Murex trading platforms with institutional backend systems to streamline P&L tracking and accounting workflows.',
		],
		stack: ['Murex', 'Java', 'SQL'],
	},
];

export const skills: SkillGroup[] = [
	{
		category: 'Mobile Development',
		items: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Java', 'Ktor', 'Retrofit'],
	},
	{
		category: 'Backend & Web',
		items: [
			'Spring Boot',
			'Kotlin',
			'Payload CMS',
			'Next.js',
			'GraphQL',
			'PostgreSQL',
			'Redis',
			'REST APIs',
		],
	},
	{
		category: 'Architecture & Patterns',
		items: ['Clean Architecture', 'MVVM', 'MVI', 'MVP', 'Backend For a Frontend (BFF)'],
	},
	{
		category: 'Testing & CI/CD',
		items: ['Mockito', 'Unit Testing', 'UI Testing', 'Jenkins CI'],
	},
	{
		category: 'Frameworks & Tooling',
		items: ['Coroutines', 'Flow', 'RxJava', 'Koin', 'Moshi', 'Room', 'Agile/Scrum'],
	},
];

export const projects: Project[] = [
	{
		name: 'DOY App',
		year: '2020',
		description:
			'Real-time event management application built in Kotlin during a COVID-19 hackathon, featuring user registration, event scheduling, live group chat, and integrated video calling. Built on Clean Architecture, MVVM, and SOLID principles for modularity and scalability.',
		stack: ['Kotlin', 'Clean Architecture', 'MVVM'],
		url: null,
	},
];

export const education: Education[] = [
	{
		institution: 'Valencian International University',
		qualification: "Master's Degree in Artificial Intelligence",
		location: 'Valencia, Spain',
		start: '2018',
		end: '2019',
	},
	{
		institution: 'Polytechnic University of Catalonia',
		qualification: "Bachelor's Degree in Telecommunications Engineering",
		location: 'Barcelona, Spain',
		start: '2011',
		end: '2017',
	},
];

export const certifications: Certification[] = [
	{ name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', year: '2023' },
];
