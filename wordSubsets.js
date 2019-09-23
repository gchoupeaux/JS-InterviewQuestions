/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.
*/

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */

/* example
wrr is a subset of warrior
a word is universal if every is a subset of this world

A = ['cat', 'doggy', 'car', 'bike']
B = ['caterpillar', 'dog', 'motor']

is 'caterpillar' a subset of 'cat' => no, so cat is not universal
is 'caterpillar' a subset 

--------------

A = ['caterpillar', 'coton']
B = ['cat', 'pillar']

cat is a subset of caterpillar
pillar is a subset of caterpillar
caterpillar is universal

*/

var wordSubsets = function(A, B) {

	// check if 

};