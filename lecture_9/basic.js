const n = 5;

let pattern = "";

function buildAlternatingSequence(first, second, count) {
	const values = [];
	for (let i = 0; i < count; i++) {
		values.push(i % 2 === 0 ? first : second);
	}
	return values.join(" ");
}

for (let row = 1; row <= 2 * n - 1; row++) {
	const count = row <= n ? row : 2 * n - row;
	const first = row;
	const second = 10 - row;

	const left = buildAlternatingSequence(first, second, count);
	const right = buildAlternatingSequence(second, first, count);
	const gap = "    ".repeat(n - count);
	const separator = gap.length > 0 ? gap : " ";

	pattern += left + separator + right + "\n";
}



console.log(pattern);
