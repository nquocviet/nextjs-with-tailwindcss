export const formatDate = (
	date: Date | number,
	opts?: Intl.DateTimeFormatOptions,
	locales: string | string[] = 'en-US'
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
	const options = opts || defaultOptions

	return new Intl.DateTimeFormat(locales, options).format(date)
}
