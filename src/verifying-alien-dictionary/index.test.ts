import { test, expect } from "vitest";
import { verifyingAlienDictionary } from "./";

test("verifying alien dictionary is false", () => {
  expect(verifyingAlienDictionary(["conocer", "cono"], "abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

test("verifying alien dictionary is true", () => {
  expect(verifyingAlienDictionary(["habito", "hacer", "lectura", "sonreir"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

test("weird scenario #1", () => {
  expect(verifyingAlienDictionary(["habito", "habito", "hacer", "lectura", "sonreir"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

test("weird scenario #2", () => {
  expect(verifyingAlienDictionary(["habito"], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

test("weird scenario #3", () => {
  expect(verifyingAlienDictionary([], "hlabcdefgijkmnopqrstuvwxyz")).toBe(true);
});

test("weird scenario #4", () => {
  expect(verifyingAlienDictionary(["h", "hhh", "hhhh", "hh"], "hhlabcdefgijkmnopqrstuvwxyz")).toBe(false);
});

test("weird scenario #5", () => {
  expect(verifyingAlienDictionary(["biweekly", "mother", "wrestling"], "s")).toBe(false);
});

test("weird scenario #6", () => {
  expect(verifyingAlienDictionary([], "")).toBe(true);
});

/**
 * habito, hacer, lectura, sonreir
 * 
 * alfabeto_dict
 *  h  l  a  b  c  d  e  f  g  i  j  k  m  n  o  p  q  r  s  t  u  v  w  x  y  z
 * 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
 * 
 * cono
 * conocer
 * 
 * conocer
 * cono
 * 
 * -------------------------------------------------------------------------------
 * 
 * compareTwoWords(word1, word2, mappedAlphabet)
 *   conocer
 *   cono
 * 
 *   c(5) -- c(5) ~~ 
 *   o(15) -- o(15)
 *   n(14) -- n(14)
 *   o(15) -- o(15)
 *   c(5) -- //
 * 
 * if word1 has more characters that word 2 return false
 * 
 * -------------------------------------------------------------------------------
 * 
 * -------------------------------------------------------------------------------
 * 
 * compareTwoWords(word1, word2)
 *   habito
 *   hacer
 * 
 *   h(1) -- h(1)
 *   a(3) -- a(3)
 *   b(4) < c(5)
 * 
 * if word1 has more characters that word 2 return false
 * we say is true if word1 char value is less than word2 char
 * 
 * -------------------------------------------------------------------------------
 * 
 * En un bucle for
 * 1.
 * habito
 * hacer
 * 
 * 1 3 4
 * 1 3 5
 * 
 * 2.
 * hacer
 * lectura
 * 1 19
 * 
 * 3.
 * lectura
 * sonreir
 * 2 < 19
 * 
 * 4.
 * sonreir
 */