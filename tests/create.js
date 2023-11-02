// tests/test.js
const assert = require("assert");

// Fonction d'addition à tester
function addition(a, b) {
  return a + b;
}

// Test 1
const result1 = addition(2, 3);
const expected1 = 5;
assert.strictEqual(
  result1,
  expected1,
  "Le résultat de l'addition (2 + 3) devrait être égal à 5."
);

// Test 2
const result2 = addition(-2, -3);
const expected2 = -5;
assert.strictEqual(
  result2,
  expected2,
  "Le résultat de l'addition (-2 + -3) devrait être égal à -5."
);

// Test 3
const result3 = addition(0, 0);
const expected3 = 0;
assert.strictEqual(
  result3,
  expected3,
  "Le résultat de l'addition (0 + 0) devrait être égal à 0."
);

console.log("Tous les tests ont réussi.");
