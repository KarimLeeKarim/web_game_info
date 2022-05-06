export function truncateWords<S, N>(sentence: string, amount: N, tail: S): string {
	const words: any = sentence.split(' ');

	if (amount >= words.length) {
		return sentence;
	}

	const truncated = words.slice(0, amount);
	return `${truncated.join(' ')}${tail}`;
}
