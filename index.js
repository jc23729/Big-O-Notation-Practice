Step One: Simplifying Expressions
Simplify the following big O expressions as much as possible:

Simplify the following big O expressions as much as possible:

O(n + 10)
O(100 * n)
O(25)
O(n^2 + n^3)
O(n + n + n + n)
O(1000 * log(n) + n)
O(1000 * n * log(n) + n)
O(2^n + n^2)
O(5 + 3 + 1)
O(n + n^(1/2) + n^2 + n * log(n)^10)

O(n + 10) -> O(n)
O(100 * n) -> O(n)
O(25) -> O(1)
O(n^2 + n^3) -> O(n^3)
O(n + n + n + n) -> O(n)
O(1000 * log(n) + n) -> O(n)
O(1000 * n * log(n) + n) -> O(n log n)
O(2^n + n^2) -> O(2^n)
O(5 + 3 + 1) -> O(1)
O(n + n^(1/2) + n^2 + n * log(n)^10) -> O(n^2)

// Step Two: Calculating Time Complexity
// Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// Time Complexity:

function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

// Time Complexity: O(n)

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
