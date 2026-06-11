const n = 5;

let pattern = "";

// Upper half
for (let i = 1; i <= n; i++) {
	const stars = "* ".repeat(i);
	const spaces = "  ".repeat(2 * (n - i));
	pattern += stars + spaces + stars + "\n";
}

// Lower half
for (let i = n; i >= 1; i--) {
	const stars = "* ".repeat(i);
	const spaces = "  ".repeat(2 * (n - i));
	pattern += stars + spaces + stars + "\n";
}

console.log(pattern);
