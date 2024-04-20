---
layout: wiki
learn: true
title: Thinking with Probability
tags:
  - Probability
---

# Learning Objectives

1. Understand how probability distributions describe uncertain events
   1. Understand how conditional distributions describe events considering information about other events
      1. Understand that conditional events do not imply causation or chronology
   2. Understand how marginal distributions describe events if we know nothing about certain events
2. Understand how we factorize joint distributions
   1. Why can't we multiple two distributions if they aren't independent?
3. Understand probability notation
   1. Understand the parallels between function notation and probability notation

## Tools

- Venn diagram
- Decision tree


---

I don't think I can overstate how powerful it is to think about the world probabilistically. Things happen with varying degrees of uncertainty. In math-speak, we say the world is *stochastic*. Thinking probabilistically lets us describe, plan, and act under that uncertainty. 

## Most things aren't random

Why not just say the world is random? Because it isn't, at least not in the typical way we use the word. When we think of something as *random*, it implies that we don't have any information about it. It's completely unpredictable. However, that's not true for most things.

For example, my commute time isn't truly random. I know something about the ranges of possible times and how likely each range might be, even though I can't predict with certainty my precise commute time each day. The randomness is weighted or biased towards certain times over others, so we use the word *stochastic* to describe a process that we might have some information about but can't predict with certainty.

[![XKCD: Sports](https://imgs.xkcd.com/comics/sports.png){: style="float:right; margin-left: 2em;"}](https://xkcd.com/904/)

Stochasticity shows up in nearly every aspect of life:

- Your yearly medical expenses aren't known for certain but fall in an expected range based on preexisting conditions, family history, and the activities you participate in (e.g., downhill skiing on a double black diamond slope through a densely wooded area). You can't budget for the exact amount you'll need, but if you know the probability of each medical event, you can budget an amount that covers 99% of projected futures. (Including the one where you get chummy with a Douglas fir.)

- No matter how good your favorite sports team is, there's always a chance they lose, [a fact made painfully obvious to the number-one-ranked 2018 Virginia men's basketball team during March Madness](https://en.wikipedia.org/wiki/2018_UMBC_vs._Virginia_men%27s_basketball_game).

  <aside><p>Preparing for worse case scenarios deserves a dedicated analysis. Sometimes an extremely rare worst-case scenario deserves outsized attention because of how catastrophic it might be if it did happen, especially since our limited knowledge of it&mdash;it is extremely rare, after all&mdash;might cause us to underestimate how likely it really is. Some people call these rare but upending events <a href="https://en.wikipedia.org/wiki/Black_swan_theory"><em>black swans</em></a>.</p></aside>

- Baseball player Shohei Ohtani reached base 247 times out of 599 plate appearances in 2023 (41.2% of the time). If we take these past results to be predictive of his future performance, we might project that he will reach base with a probability of 0.412. Put another way, if we projected 250 possible outcomes for his next plate appearance, 103 of those would involve him reaching base in some way.

  <aside><p>This hinges on a critical and often inaccurate assumption: past observations contain everything we need to predict future performance. This is always a bad assumption, but less bad in some instances versus others. For Ohtani, using past data to project future performance doesn't take into account aging, varied playing time, injuries, whether 2023 was a fluke, etc.</p></aside>

- Your chicken dinner doesn't always cook to 165°F in precisely 14 minutes.

- The number of text messages you receive in a day varies even if you know the average number per day.

- Your flight is scheduled to leave at 6:10 PM but could be delayed for any number of reasons ([maybe the plane is broken and the tool needed to fix it is in Madagascar](https://www.youtube.com/watch?v=xy1vHYIdUNA)). So maybe 4 out of 5 possible futures have the flight leaving within 20 minutes of the scheduled time.

- The weather forecast gives a 40% chance of rain. This *doesn't* mean that it will rain for 40% of the day. It's giving us the chance that today will involve *any* amount of rain. If we had ten days like this one, four would include some rain and six would have no rain. The forecast says that 40% of possible futures involve rain, but there are still 60% of those futures with none at all.

## Describing a Stochastic World

We describe a stochastic world in terms of "events."
We'll start with "discrete" events that take on one of a fixed set of values or "outcomes."
To gauge the overall likelihood that an event occurs,
we can project possible futures and see how many would include each possible outcome of the event. 
For example, let's consider possible worlds describing the outcome of a baseball batter's plate appearance.
We might start with a set of 50 possible worlds and project the batter reaches base in 17 of them:

<script type="application/json" class="possible-worlds">
{
   "events": [
      {"id": "out", "label": "Out", "color": "#eee"},
      {"id": "reach-base", "label": "Reaches Base", "color": "palegreen"}
   ],
   "grid": {"width": 10, "height": 5},
   "worlds": [
      {"event": "out", "num": 33},
      {"event": "reach-base", "num": 17}
   ]
}
</script>

Each circle represents one possible future.
Gray circles mean the batter was out.
Green circles mean the batter reached base.
We compute the probability as the number of projected occurences out of the total,
making the probability of reaching base 17 / 50 = 0.34.

For convienence, let's use this notation `n(event)` to refer to the number of worlds where `event` occurs.
We'll use `n(any)` to represent the total number of worlds where any event happened.
That would mean that `n(Out) = 17`, `n(Reaches Base) = 33`, and `n(any) = 50` for the batter example.

We could have more than two options,
like if looking at what fruit I had for lunch:

<script type="application/json" class="possible-worlds">
{
   "events": [
      {"id": "apple", "label": "Apples", "color": "red"},
      {"id": "orange", "label": "Oranges", "color": "orange"},
      {"id": "grape", "label": "Grapes", "color": "violet"}
   ],
   "grid": {"width": 10, "height": 5},
   "worlds": [
      {"event": "apple", "num": 10},
      {"event": "orange", "num": 25},
      {"event": "grape", "num": 15}
   ]
}
</script>

When making these diagrams,
we can't have a world without *some* outcome,
so if we project 50 worlds then
the sum of the number of worlds for each outcome must also be 50.
For the fruit, we have `n(Apples) = 10`, `n(Oranges) = 25`, and `n(Grapes) = 15` for 50 total:
```plaintext
n(Apples) + n(Oranges) + n(Grapes) = n(any)
```
Notice that if we divide both sides by `#(any)`,
we see that the probabilities must add up to one:

```plaintext
n(Apples)   n(Oranges)   n(Grapes)
--------- + ---------- + --------- = 1
 n(any)       n(any)      n(any)
```

Here we'd have 10 / 50 = 0.2, 25 / 50 = 0.5, and 15 / 50 = 0.3,
which sums to 0.2 + 0.5 + 0.3 = 1.0.


## Working with  Multiple Events

Returning to the example of the batter, we have this diagram for out vs. reach base:

<script type="application/json" class="possible-worlds">
{
   "events": [
      {"id": "out", "label": "Out", "color": "#eee"},
      {"id": "reach-base", "label": "Reaches Base", "color": "palegreen"}
   ],
   "grid": {"width": 10, "height": 5},
   "worlds": [
      {"event": "out", "num": 33},
      {"event": "reach-base", "num": 17}
   ]
}
</script>

In addition to out/reach base, we might also be interested in the type of pitch thrown:

<script type="application/json" class="possible-worlds">
{
   "events": [
      {"id": "fastball", "label": "Fastball", "color": "dodgerblue"},
      {"id": "not-fastball", "label": "Not Fastball", "color": "#f88"}
   ],
   "grid": {"width": 10, "height": 5},
   "worlds": [
      {"event": "fastball", "num": 27},
      {"event": "not-fastball", "num": 23}
   ]
}
</script>

The first diagram is for the "Out vs. Reach Base" event.
The second is for the "Fastball vs. Not Fastball" event.
To combine these two diagrams, we create a new "joint distribution"
(we are considering the events jointly together).
Now, each projected future has a "joint" state with the outcome of both events in that world.
We could have joint states of "Out & Fastball," "Out & Not Fastball," "Reached Base & Fastball," and "Reached Base & Not Fastball."
Looking at actual MLB data, we see that out of 50 futures, we'd expect to see 17, 16, 10, and 7 of each, respectively.
Note that the total still adds up to 50.

| Event | Occurences | Notation |
|-|-|-|
| Out & Fastball | 17 | `n(Out, Fastball)`|
| Out & Not Fastball | 16 | `n(Out, Not Fastball)`|
| Reaches Base & Fastball | 10 | `n(Reaches Base, Fastball)`|
| Reaches Base & Not Fastball | 7 | `n(Reaches Base, Not Fastball)`|

The combined diagram might look like this:

<script type="application/json" class="possible-worlds">
{
   "events": [
      {"id": "out", "label": "is_out=true", "color": "#eee"},
      {"id": "reach-base", "label": "is_out=false", "color": "palegreen"},
      {"id": "fastball", "label": "Fastball", "color": "dodgerblue"},
      {"id": "not-fastball", "label": "Not Fastball", "color": "#f88"}
   ],
   "grid": {"width": 10, "height": 5},
   "worlds": [
      {"event": "out", "num": 33},
      {"event": "reach-base", "num": 17},
      {"event": "fastball", "offset": 0, "num": 17},
      {"event": "not-fastball", "num": 16},
      {"event": "fastball", "num": 10},
      {"event": "not-fastball", "num": 7}
   ]
}
</script>

Now each circle has two colors, one for each of the two events.
Notice how `n(is_out=true)`, `n(is_out=False)`, `n(Fastball)`, and `n(Not Fastball)`
are still the same as before&mdash;there are still 23 worlds with the Out color,
so `n(Out)` is still 23.


- Joint distributions as probability of both events happening
  - Assign worlds to every possible outcome
- Marginalizing distributions
  - Count up all the worlds involving an event
  - Have to count up across worlds with all possible values of other events

- Factoring distributions
  - Pick an "ordering"&mdash;NOT CAUSAL or CHRONOLOGICAL!
- Conditional distributions


<!--
Fastball for out: 35%
Other for out: 32%
Fastball for reach base: 20%
Other for reach base: 13% -->


## Incorporating Known Information

## Probability Notation