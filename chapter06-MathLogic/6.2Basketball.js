/**
 * You have a basketball hoop and someone says that you can play one of two games.
Game 1: You get one shot to make the hoop.
Game 2: You get three shots and you have to make two of three shots.
If p is the probability of making a particular shot, for which values of p should you pick one game
or the other?

2 of 3:
p * p * (1 - p) + p * (1 - p) * p + (1 - p) * p * p
3p^2(1-p)

3 of 3: p^3

p^3 + 3p^2(1-p) = 3p^2 - 2p^3

You should play Game 1 if P (Game 1) > P (Game 2): 
p > 3p^2 - 2p^3    / p
1 > 3p - 2p^2
2p^2 - 3p + 1 > 0
(2p - l)(p - 1) > 0 

when p = 0 its true
when p = 1
 */