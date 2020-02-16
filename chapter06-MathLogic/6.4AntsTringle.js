/**
 * There are three ants on different vertices of a triangle. What is the probability of
collision (between any two or all of them) if they start walking on the sides of the triangle? Assume
that each ant randomly picks a direction, with either direction being equally likely to be chosen, and
that they walk at the same speed.
Similarly, find the probability of collision with n ants on an n-vertex polygon. 

Solution:
Will colide if 2 of them will go to the same direction ->
( 1 / 2 ) directions 

Same direction
(1 / 2) ^ 3 + (1 / 2) ^ 3

Not same direction - colide - >
1 - (1 / 2) ^ 3 + (1 / 2) ^ 3 = 3 / 4
 */