/** Formats a "YYYY-MM" string as "Mon YYYY". */
export function formatMonth(value: string): string {
	const [year, month] = value.split('-').map(Number);
	const date = new Date(Date.UTC(year, month - 1, 1));
	return date.toLocaleDateString('en-GB', {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	});
}

/** Renders a job's date range, using "Present" for an open-ended role. */
export function formatRange(start: string, end: string | null): string {
	return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`;
}

/** Machine-readable value for a <time> element's datetime attribute. */
export function isoMonth(value: string): string {
	return value;
}
