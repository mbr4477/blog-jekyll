---
layout: post
title: The Last Introduction to Orientation
author: Matthew Russell
date: 2024-02-01
---

If there's any single topic that has brought me to my knees, kicked me in the gut, and just plain humbled me since high school it's figuring out what direction I'm facing. That's not as much a joke as I wish it was. Normally, I'm pretty decent&mdash;dare I say above average[^1]&mdash;at visualizing problems, even in 3D. However, ask me to describe the orientation of a spaceship, and boom I'm a mess. I'm like some mental gymnast who got accidentally entered himself in an actual gymnastic competition but showed up at the wrong place *and* wrong time and ended up competing in event #6 of a decathlon.[^2] [^3] Catch me twisting my head in odd directions, folding and cutting scribbled index cards, making a finger (water) gun with my right hand and extending my middle finger[^4] out away from my palm (iykyk), or giving myself a thumbs up and twisting it left (ditto).

Why is wrapping my mind around orientation (a.k.a "attitude") representation so hard? I can't say for sure, but here are few excuses for my ineptitude:

- It's all relative. No, I'm not some postmodernist. It really is relative, since orientation only makes sense if we know what it's relative to.
- There is no good, intuitive way to represent an orientation mathematically, only some ways that are less bad than others. In some cases. Depending on what you need to do. And if it's Thursday.[^5]
- At least in 3D, it requires visualizing rotations around three axes. That's a massive step up from 2D where it only makes sense to rotate around one axis (the invisible "Z" axis that sticks up out of the page).

Anyway, this post is my attempt to once and for all convince myself that rotations make sense.

Let's start with the basics in 2D. Luckily if we can figure some things out in 2D, the intuition should translate to 3D even if we can't visualize it quite so easily.

It all starts with a coordinate frame . . .

![Baby's first reference frame.](/assets/20240201/fig00.png)

You've probably seen some version of this in Algebra I. If not, I am truly honored to be the first to show this to you. Beautiful isn't it.

Anyway, let's use this as our reference frame. That is, we assume it is fixed. The X axis always points right[^6] and the Y axis always points up. It probably seems silly to make a point of that but trust me, you'll be questioning everything by the time we finish this.

If that's our reference, we can use it to describe the location of something relative to those axes. The point where they touch is the "origin" where $x$ and $y$ are both 0. The X values increase in the direction of the red arrow, and Y values increase as we follow the green arrow. So if we pop this guy 🥸 into the graph, we can say his position is at $x = 8$, $y = 4$, or just (8, 4):

![Where is mustache man?](/assets/20240201/fig01.png) 

As fun as that little mustachioed man is, let's throw something else in there, maybe like this:

![An airplane.](/assets/20240201/fig02.png)

Oh yeah that's good. Great work everyone. Gotta love a good airplane. 🎉

It doesn't take an airplanologist to tell that our fun little flier is pointed along the X axis. Let's take it for a spin:

![Woohoo we go for a spin!](/assets/20240201/fig03.png)

Now it gets fun.[^7] How do we describe the orientation of the plane? Like exactly, with numbers. We could say the plane's orientation is 15 degrees counterclockwise from the X axis:

![Stick a line through it.](/assets/20240201/fig04.png)

But there's so much more to unpack here. (Thank goodness. Otherwise this would be a short post.) For starters, we measured the orientation as the angle from the reference frame X axis to the centerline of the plane. We didn't have to. We could've measured it from the Y axis to the centerline, giving 75 degrees clockwise (90 degrees clockwise, then back 15). Of course we could've picked a different line through the plane. If we picked a line sticking out the left wing, we would've got 15 degrees again&mdash;if we measured relative to the Y axis:

![Oh my.](/assets/20240201/fig05.png)

So we can say the plane's centerline is 15° counterclockwise from the reference X axis OR the centerline is 75° clockwise from the reference Y axis OR the plane's left wing is 15° counterclockwise from the reference Y axis. All are correct.

To clear up all this ambiguity, let's clarify how we want to make our measurement. Let's label the plane's centerline as the "airplane's X axis" so we know it should be compared to the reference X axis. Obviously we can pick a Y axis connected to the plane as well:

![We throw a body frame on that vehicle.](/assets/20240201/fig06.png)

Notice I labeled these "body" axes. That's because we think of them attached to the "body" of the airplane. So if you're hustling up to the (hopefully unoccupied) lavatory at the front, you will be always moving along the body X axis. However, relative to the outside-the-plane reference frame, you might be moving along both the X and Y axes. This clears things up a bit (about the axes, not your trip to the lavatory). Now we see that the whole body frame is 15 degrees counterclockwise relative to the reference frame. 

Now, I can't emphasis this enough: **we chose the body axes arbitrarily**.[^8] Nothing said we *have* to line up the body x with the centerline. We could've made our body frame like this:

![An alternative body frame.](/assets/20240201/fig06b.png)

In this case, the orientation is 165° clockwise from the reference frame. This is exactly the same orientation we had before, but the number is different because we defined the body frame differently. So to describe the orientation, we need to know which reference frame *and* body frame we're using. Because planes usually fly forward, and arrows point forward, we'll stick with the first body frame.

If you're not completely asleep by now, you may have a question: ✋

Yes, you in the back.

"How do we describe the line we spin the plane around? Like if the plane is one of those umbrellas in a tropical drink and rotating it in your pretty little diagram&ndash;"

Thank you, go on.

"&ndash;is like twisting the umbrella, then what's equivalent to the tiny toothpick umbrella handle?"

Wow, what an insightful question, that's a good one. We call that the "axis of rotation" and it's hard to see in the diagram because it's "sticking out of the screen." As in, if your screen wasn't stuck in flatland, you might poke your eye out if you leaned too close to get a better look. So we can't show it for real, but we can add a circled dot and imagine it's the tip of an arrow pointed out of the screen. It's safer for your eyeballs too.

![The umbrella stick.](/assets/20240201/fig07.png)

Let's call this umbrella-toothpick axis of rotation the Z axis. <!-- Here's something neat: the body z axis that sticks out the top of the plane is still lined up perfectly with the reference frame's z axis! It gives a us "stationary" line that doesn't change in the reference frame around which we can rotate the plane. -->Of course we can rotate clockwise or counterclockwise around this axis of rotation. How do we decide which is positive vs. negative? Forward vs. backward? Is our orientation +15° or -15°? 

Take your right hand and give me a good thumbs up. Now position your hand so your thumb points towards yourself and away from screen. At this point, two things have happened: 1) everyone around you thinks you are doing one of those motivational-speaker-positive-self-talk exercises[^9] and 2) your thumb is aligned with the imaginary z-axis arrow sticking out of the screen. Now look at the fingers on your right hand. They should be curled counterclockwise.[^10] That's kinda neat, why don't we just say counterclockwise is positive then?

Yeah that's how we collectively decided.[^11] But as long as we're consistent, it works out.

Okay so now we have an X, Y, and Z axis defined for our aircraft body. Since the body X points forward, body Y points left, and body Z points up (out of the screen), we call this the Forward-Left-Up or FLU frame.

To this point, we've been describing our rotation in an "axis-angle" format. The implied axis is the Z axis sticking out of the screen, and the angle is +15°. However, another convenient way to describe the orientation is with a rotation matrix. If axis-angle tells us "what's the angle from reference to body frame around this axis," the matrix approach tells us "where are the body axes positioned in the reference frame." Let me explain.

First, put a pin in the whole matrix thing for now. We'll come back to it. We'll answer the "where are the body axes" question first and then connect it back to matrices. However, we are going to need some trigonometry and the unit circle. As it sounds, the unit circle refers to circle with radius of one (a single unit). Using trig functions, we can calculate the X and Y coordinates of every point on the circle if given the angle $t$ from the +X axis:

![Gustavb, Public domain, via Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/8/8f/Unit_circle.svg){: style="display: block; margin: auto; max-height: 250px;"}

If you are wondering why cosine and sine happen to perfectly calculate the X and Y coordinates, it's because they are *defined* as the solution to this problem. That is, we define $\cos t$ as the X coordinate of a point on the unit circle for angle $t$ and $\sin t$ as the corresponding Y coordinate. Writing the coordinates using trig functions is convenient when we want to put them in terms of angle $t$​.

In our case, $t = 15^\circ$ for the body X axis. Assuming we make the axis length one, we get (0.866, 0.5) as the end of the body X axis in the reference frame. In terms of the unit circle, the body Y axis starts with $t = 90^\circ$ and then rotates the additional 15°, giving $t = 105^\circ$ and the endpoint as (-0.259, 0.966) in the reference frame. 

---

We can use this rotation to convert coordinates between the body frame and the reference frame. That is, we can switch between using the body x-y axes and the reference x-y axes to describe a point's position. For example, we can say the pilot is (hopefully) in the cockpit at the front of the plane which is roughly (2.5, 1.5) in the reference frame. In the body frame, the same point is roughly (2.9, 0) since the pilot is at the front of the plane (the +x direction) and centered (no offset along the body y axis):

![Where's the pilot?](/assets/20240201/fig08.png)

Notice that the pilot is in the exact same position, but we describe that position relative to two different coordinate frames, the body frame and the reference frame. So while (2.5, 1.5) and (2.9, 0) are both valid ways to describe where the pilot is, we need to specify our reference frame with each one.

How do we convert between them? To do that, we get to use my favorite single thing in math. Matrices! Woot! Here's what we'll be doing:


$$
\underbrace{
\begin{bmatrix}
x' \\ y'
\end{bmatrix}}_{\text{Output}}
=
\underbrace{
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}}_{\text{Rotation Matrix}}
\quad
\underbrace{
\begin{bmatrix}
x \\ y
\end{bmatrix}}_{\text{Input}}
$$


We use a 2x2 rotation matrix to transform our input coordinates. We multiply them together with *matrix multiplication.* Matrix multiplication is tricky, but here's a visualization that I always use when multiplying by hand:

![Matrix multiplication!](/assets/20240201/matrix_mult.gif){: style="max-width: 400px; margin: auto; display: block;"}

Here's the gist:

1. Slide the right-hand matrix up to create room for the result. Notice that makes the space needed for the result: 2 rows and 1 column.
2. Pivot the right-hand matrix so it is parallel to the rows of the left-hand matrix. Notice that this won't work if the right-hand matrix has more rows than the left-hand matrix has columns. 
3. Slide the matrix onto each row. Multiply overlapping values and then sum up everything on the row, left to right, pushing the result into the output matrix.

I don't know why ,but in my head I always think of this as flip, slide, squash.

<aside><p>
	Luckily we won't have to dive into it here, but this approach to matrix multiplication extends to bigger matrices too! In that case, the input might have two or more columns. We still slide it up to start, but now we have a bigger space underneath for our output. We do the flip, slide, and squash steps <em>for each column</em> since we have more than one. The final squash step squashes the result into the slot underneath the column we started with.
</p></aside>

Let's set this up to solve the pilot probem. The input is the position of the pilot in the **body** frame. The output is the position of the pilot in the **reference** frame:


$$
\underbrace{
\begin{bmatrix}
x' \\ y'
\end{bmatrix}}_{\text{In Reference}}
=
\underbrace{
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}}_{\text{Rotation Matrix}}
\quad
\underbrace{
\begin{bmatrix}
x \\ y
\end{bmatrix}}_{\text{In Body}}
$$


We can insert what we know:


$$
\underbrace{
\begin{bmatrix}
2.5 \\ 1.5
\end{bmatrix}}_{\text{In Reference}}
=
\underbrace{
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}}_{\text{Rotation Matrix}}
\quad
\underbrace{
\begin{bmatrix}
2.9 \\ 0
\end{bmatrix}}_{\text{In Body}}
$$


If we take the flip, slide, squash approach, we get these equations:


$$
\begin{aligned}
\begin{bmatrix}
2.5 \\ 1.5
\end{bmatrix}
&=
\begin{bmatrix}
2.9a + 0b \\
2.9c + 0d
\end{bmatrix}
=
\begin{bmatrix}
2.9a \\
2.9c 
\end{bmatrix} \\
2.5 = 2.9a &\implies a = 2.5 / 2.9 = 0.862 \\
1.5 = 2.9c &\implies b = 1.5 / 2.9 = 0.517 \\
\end{aligned}
$$
We can't find $b$ or $d$​ with this problem because the terms drop out when we multiple by zero. But we can set up a similar problem if we start with a point on the left side of the plane at the base of the wing. This point starts at (0, 1). It's hard to read the graph to find where that ends up in the reference frame after the rotation, but we can do some trigonometry[^12] to figure it out. You might, but probably don't, remember the unit circle. In a nutshell, the unit circle has a radius of one, and we can calculate the $x$ and $y$ coordinate of each point on the circle using $\cos t$ and $\sin t$ respectively, where $t$ is the angle counterclockwise from the $x$ axis:


In our case, we decided the angle $t = 15^\circ$. That means that if we start at (1, 0) on the unit circle&mdash;the point where the circle intersects the x axis&mdash;and rotate $15^\circ$, our new position would be ($\cos 15^\circ = 0.866$, $\sin 15^\circ = 0.5$) or (0.866, 0.5).

Now wait just one second. Those numbers look familiar. Those are really close to the values we calculated for $a$ and $c$​ in the rotation matrix for the pilot. So if we redo the pilot problem but instead of using the pilot's position we just pick the point on the unit circle (1, 0) pointing in the same direction as the pilot's initial position, we get this:


$$
\underbrace{
\begin{bmatrix}
0.862 \\ 0.517
\end{bmatrix}}_{\text{In Reference}}
=
\underbrace{
\begin{bmatrix}
0.862 & b \\
0.517 & d
\end{bmatrix}}_{\text{Rotation Matrix}}
\quad
\underbrace{
\begin{bmatrix}
1 \\ 0
\end{bmatrix}}_{\text{In Body}}
$$


Notice that since our point is just (1, 0), when we flip, slide, and squash, we just copy the first column of the rotation matrix into the output. Our guess from the graph gave us (0.862, 0.517), but from the unit circle we know that (1, 0) should really map to (0.866, 0.5). That means the first column of the rotation matrix is more accurately


$$
\begin{bmatrix}
0.866 \\ 0.5
\end{bmatrix}
=
\begin{bmatrix}
\cos 15^\circ & b \\
\sin 15^\circ & d
\end{bmatrix}
\begin{bmatrix}
1 \\ 0
\end{bmatrix}
$$


Okay okay now we're getting somewhere. We see that the first column of our rotation matrix *has* to be the $x$ and $y$ values on the unit circle for a rotation of $15^\circ$ because that the output *has* to match the unit circle when the input is (1, 0).

Hmm. So now we need to find $b$ and $d$. How can we build an equation that pulls out those values? Well if an input of (1, 0) copies the first column of the rotation matrix, what would (0, 1) do? It copies the second column!!


$$
\begin{bmatrix}
b \\ d
\end{bmatrix}
=
\begin{bmatrix}
\cos 15^\circ & b \\
\sin 15^\circ & d
\end{bmatrix}
\begin{bmatrix}
0 \\ 1
\end{bmatrix}
$$


Okay good *good*. Let's go back to the unit circle to see if we can figure out the $b$ and $d$ values now. Let's remember what this equation is saying. It says that ($b$, $d$) is the rotated position of (0, 1)&mdash;where the circle crosses the y axis&mdash;after we rotate it counterclockwise by $15^\circ$. The problem is that our equations for the unit circle only work as written if we start from (1, 0), not (0, 1):

![What's the (x, y) of this point?](/assets/20240201/fig09.png){: style="display: block; margin: auto; max-height: 250px;"}

Well here's a trick. We know that the angle from the x axis to the y axis is $90^\circ$ because they are perpendicular. So the angle to the green line is $t + 90^\circ$​! Let's see if this makes sense looking back at the diagram with the plane:


$$
\begin{aligned}
b = \cos(15^\circ + 90^\circ) &= \cos 105^\circ = -0.259\\
d = \sin(15^\circ + 90^\circ) &= \sin 105^\circ = 0.966
\end{aligned}
$$


Okay yes yes, this is looking good. The rotated y axis in the plane diagram is pointing in the same direction as (-0.259, 0.966), which is a little to the left of the original y axis and almost as far up. Now our rotation matrix looks like this:


$$
\begin{bmatrix}
x' \\ y'
\end{bmatrix}
=
\begin{bmatrix}
\cos t & \cos (t + 90^\circ) \\
\sin t & \sin (t + 90^\circ)
\end{bmatrix}
\begin{bmatrix}
x \\ y
\end{bmatrix}
$$


This is a lot. Let's recap what just happened:

1. We have a reference frame "attached" to the screen. As we have drawn it, the x direction is always right and the y direction is always up.

2. We have a coordinate frame "attached" to the plane. In this frame, the x direction always points toward the front of plane and the y axis always points out the left wing.

3. Initially, these two frames are aligned. The x axis of reference frame (pointing right) is lined up with the x axis of the body frame (pointing towards the front of the plane). The y axis of the reference frame (pointing up) is lined up with the y axis of the body frame (pointing out the left wing).

4. Next we rotate the plane $15^\circ$ counterclockwise. The reference frame doesn't move because it's attached to the screen. The body frame *does* move so the two frames are no longer aligned. We have rotated the frame by $+15^\circ$ around the z axis that is sticking out of the screen. 

5. We want to describe the new orientation of the plane with respect to the reference frame using a rotation matrix. This matrix answers the question, "Where did the x and y axes of the body frame move to in the reference frame?" We saw that the body x axis went from (1, 0) in the reference frame&mdash;aligned with the reference x axis&mdash;to (0.866, 0.5) in the reference frame. We saw that the body y axis went from (0, 1) in the reference frame&mdash;aligned with the reference y axis&mdash;to (-0.259, 0.966) in the reference frame. That gives us a rotation matrix like this:
   $$
   \begin{bmatrix}
   0.866 & -0.259 \\
   0.5 & 0.966
   \end{bmatrix}
   $$
   

[^1]: Pardon my arrogance
[^2]: I have no idea what event #6 is. Maybe I should look it up.
[^3]: Okay I looked it up. Event #6 is the 110 m hurdles at the start of day two. Yeah, it goes two days. But now that I think about it, cramming 10 things into one day would be kinda hard, so that makes sense. Way easier.
[^4]: Not what you think.
[^5]: Okay that part is inaccurate.
[^6]: When I first wrote this, I said $x$ pointed left . . . not a good start. See what I mean about humbling?
[^7]: Maybe. Depending on how you define fun. 
[^8]: Technically the reference frame was also arbitrary. We'll get into that later.
[^9]: "*This* guy is a go-getter."
[^10]: If not then you may want to seek medical attention.
[^11]: I like imagining this going down on a beach somewhere. Two math people are lounging on plastic furniture with their pineapple drinks when one sits up suddenly and says, "Rotating something in 2D is like spinning it around an imaginary umbrella-toothpick line sticking out of the paper! But which direction should be positive?" and the other one isn't really listening so she just gives a thumbs up to which the other replies "oh good idea we'll just use the direction your fingers curl."
[^12]: Wait don't go, please