---
name: Twinball
tools: [Godot, C#, Game Design, Project Management, UI/UX]
image: ../images/TwinballTitle.png
description: An action packed Anime inspired Boss Rush game where you play Pinball, In Development
---
# Twinball

{% capture carousel_images %}
../images/carouselImages/TBCar1.png
../images/carouselImages/TBCar2.png
../images/carouselImages/TBCar3.png
../images/carouselImages/TBCar4.png
{% endcapture %}
{% include elements/carousel.html %}
## Overview
(note! this project is still in progress along with this page!)

Currently in development, Twinball is the first game I've made solely for myself. This isn't for class or a game jam, I am developing the game out of my own passion. It is a single player Pinball Boss Rush game. I am developing the game under my game studio, Studio Collider.

The game was developed as a passion project in Godot before May 2025. Afterwards it was accepted into [RIT's Magic Maker Program](https://www.rit.edu/simonecenter/magic-maker-program), where it is currently being developed further with a small team of RIT Students.

## Story
Working as underpaid nuclear waste techs, Match and Wedge Jackpot have just about had it with their dead-end jobs. Approached by a mad scientist with an opportunity for change, the twins begin to take on crime bosses, corrupt sherifs, and cyborg lesbians in order to claim the treasure of Spin City.


## The Design Pillars of Twinball

Twinball presented itself with an interesting challenge when it came to designing it's core mechanics. Pinball is a traditionally vertical game, and video games are a traditionally horizontal medium. Since we were designing it as a boss rush game, that also meant we had two different types of games to pull ideas from. 

After this, I decided to think about a very simple question. What is the worst thing that can happen to the player? I then asked what the worst thing that could happen to the Boss was? What was each person trying to prevent or make happen. Simple! They don't want the ball to hit them, they want it to hit the other. 

From this, we had our Design Pillars. 

### Exploration

Levels will have several different obstacles and components, some of them leading to big rewards if you have the skill to make it. We want players to feel interested in aiming at different objects at a level.

### The Ball Keeps Moving

No matter what, the ball has to keep moving. Everything on the board tries to get the ball to move either in the direction the players want, or the opposite. Even a ball moving AWAY from the boss is a ball that can be redirected.

### Strategy 

The player has different options for balls to use and ways to use them. The types of balls available and the balls that a player chooses to bring into battle will inform their decision on where to aim and what to aim for.

We then based our new mechanics and refined our existing ones to fit this. Every object on a table would now be descended from one of four types, based off what happens when the ball interacts with it.

BUMPERS: when the ball hits this, they ricochet off.

ROLLOVERS: when the balls hits this, they are 'enabled' and the ball passes over it easily.

GRABBERS: when the balls hits this, the ball is frozen before being launch in a certain direction.

LOCKS: when the ball hits this, the ball is taken off the board entirely.

ENVIRONMENT: A catch-all type for different types of hazards and unique special elements to a level that don't necessarily involve the ball. .

## Art Design
Working with the same art lead from Delivery Dan, I drafted up concept sketches and character designs that she would then ideate on and send back to me.

<img src="../images/InitialSketch.png">
Initial Design for the Two Protagonists

<img src="../images/TwinballChess.png">
Artist, Maya Teng's, second passthrough

<img src="../images/PinballTitle.png">
Pre-Alpha concept art, done by me, based off Maya's designs, November 2025


## Acceptance into Magic Maker 2025

After much effort and a rigorous application process, Twinball was accepted into RIT's Magic Maker Program, an incubator program for RIT Students where we'd get real experience working with stakeholders and producers on our project. We got a new artist, Elizabeth (Liz) Doherty, who helped us establish more of that 'Studio Trigger' feel we were going for for the game, and got a composer to help us make music for the game as well.

<img src="../images/TwinsLiz.png">
Lead Character Artist, Liz Doherty, second passthrough of Characters after acceptance into Magic, May 2025



If you'd like to read more about Twinball and the more behind the scenes of it's development, check out these blog posts I wrote about it!
- [Redesigning Twinball's UI in Magic Maker](../blog/redesigning-twinballs-ui) - This talks about my UI/UX Design work over the summer with Magic Maker 2025
- [How My First Real Game Failed](../blog/how-my-first-real-game-failed) - This talks about Twinballs early development and how we pivoted to make it work
- [The Level Design of Twinball](../blog/the-level-design-of-twinball) - This discusses the Level Design Philsophy of Twinball and how I adapted my notes on Flow and Level Design to fit the game
- [The Narrative Design of Twinball](../blog/the-narrative-design-of-twinball) - This discusses the World, Characters, and the overall themes in Twinballs Narrative




