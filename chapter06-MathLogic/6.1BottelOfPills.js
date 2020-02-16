/**
 * 6.1 
 * The Heavy Pill: You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight
1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle?
You can only use the scale once

Solution:
if you are taking one pill from each bottle - it wont help
take 1 pill from b1, 2 from b2, 3 from b3 and so on - 
you will end with 1 + 2 + 3 + 4 + 5 ... + 20 = 
sum of Arithmetic progression : n(2 * a1 + d(n-1)) / 2 -> 210

the sum of what you get(heavy + regular) - 210 / 1.1 will get you the number of the heavy bottle
 */