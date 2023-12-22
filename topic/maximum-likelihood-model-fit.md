---
layout: wiki
exclude: true
learn: true
title: Maximum Likelihood for Fitting Models
tags:
    - Machine Learning
requires:
    - topic/probability.md
    - topic/bayesrule.md
---

Let's take a very abstract look at what we want to do when we "fit" a machine learning model.

For our purposes, a *model* is a big mathematical equation
with an input and output and a preset number of "knobs" or *parameters* we can twist
to change the equation's behavior in predetermined ways.
A simple model might be a line&mdash;a linear model; the parameters would be the slope and intercept.

In most cases we have a model we want to use for a certain task
but have no idea what the parameter values (knob settings) should be
to get it to actually *do* the task.
Maybe I want to use the number of runs a baseball team scores over a season (the input)
to linearly estimate the number of wins they had in that season (the output).
However, I don't know what slope and intercept values
actually capture this relationship.

Machine learning solves this problem.
**Machine learning refers to the algorithms
we use to figure out how to configure the knobs on our model
based on *observed data*.** That's it. No magic, just math (as we'll see).
These algorithms follow a series of steps designed to estimate the parameter values
required to make the model line up with the observed data.

The dataset describes our problem *emprically*&mdash;implicitly through a set of unstructured observations.
This becomes handy when we struggle to define our task *theoretically*&mdash;explicitly through an equation
or other structured form.
Here's a few examples to illustrate the difference:

| Task | Theoretical/Explicit/Structured | Empirical/Implicit/Unstructured |
|-|-|-|
| Playing tic-tac-toe | The rules of tic-tac-toe | Examples of many tic-tac-toe games |
| Predicting how an object falls | The physics equations that calculate the position of an object as it falls | Many high-speed videos that show objects falling |
| Identifying bears | Words that describe what a bear looks like | A bunch of bear pictures |
| Recognizing a song | Written sheet music | An audio recording |
| Predicting a baseball team's wins using their total runs scored | ???! | The number of runs and wins from many different teams |


# Inferring Parameters from Data

Fitting a model is the process of finding the parameters that make the model match the data.
If we want to fit the model to a single example, we can put in the example input
and then twist the knobs until the output matches the target output.
There might be multiple knob settings that give the correct output.
Of course, we don't have to settle for exact solutions
and mark every knob setting as either pass or fail.
We can give each setting a "score" based on how close it gets the model to the target.
Since this score is dependent (or conditional) on looking at a specific example,
we can write the score as $p(\theta \mid x)$.
This denotes the "goodness" of some knob setting $\theta$
against.

If we design this score so that it sums to one across all possible knob settings,
then the score function $p(\theta \mid x)$ represents a valid probability distribution.
It tells us how likely a knob configuration is given a particular observation.
We can apply Bayes' Rule to breakdown this conditional probability:

$$
\begin{equation}
p(\theta \mid x) = \frac{p(x \mid \theta)p(\theta)}{p(x)}
\end{equation}
$$

Wait, come back, don't run away from the math! Let's reframe this in terms of snowfall and hot cocoa:
 
$$
p(❄️ \mid ☕) = \frac{p(☕ \mid ❄️)p(❄️)}{p(☕)}
$$

The left-hand-side is called the *posterior* which we try to *infer* based on some observation.
In this case, I am trying to infer the likelihood it is snowing
if I observe you drinking hot cocoa.
We break this inference into three factors:

- $p(☕ \mid ❄️)$: The chance that you drink hot cocoa when it really is snowing.
- $p(❄️)$: The overall chance that it snows.
- $p(☕)$: The overall chance you drink hot cocoa whether it is snowing or not.

Let's assume these values are 0.8, 0.2, and 0.3 respectively, and see what the numerator represents.
It snows 20% of the time, and in that 20% you drink cocoa 80% of the time.
Multiplying these together gives the overall chance you drink cocoa *and* it's snowing as 80%&times;20% = 16%
(80% of 20% is 16%).

![All possible cocoa and snowing worlds](/assets/topic/model-fit/all-cocoa-worlds.jpg){:style="max-height:300px;display:block;margin:auto;"}

However, I don't really care about this value, because I am starting from the premise
that I *know* you are drinking hot cocoa.
That shrinks my scope to only the possible worlds that involve you drinking hot cocoa:

![All worlds where you drink hot cocoa](/assets/topic/model-fit/given-cocoa.jpg){:style="max-height:300px;display:block;margin:auto;"}

While the combined chance was just 16% before, I need to jack up this probability
because I've shrunk the possible worlds down.
Now the chance of snowing is much higher&mdash;it takes up more of the remaining possible worlds
that already involve you drinking hot cocoa.
I can get the exact number by dividing by the 30% chance we end up in a world where you drink hot cocoa
to get 16% / 30% = 64% chance it's snowing. 
Before, I took 16% out of the possible 100% of worlds. 
Now I rescale to take that 16% out of the 30% of world's with hot cocoa.
Using the knowledge that you are drinking cocoa, I can *infer* a higher chance that it is snowing.

When fitting our model's parameters, we have an analogous situation.
We want to infer the knob settings $\theta$ using the observed data point $x$.
We first calculate the *joint* probability of $x$ and $\theta$ showing up at the same time (in the numerator)
and then rescale to scope our possible worlds down to just those that actually involve $x$ (in the denominator).
Then we want to find the settings $\theta$ that *maximize* the inferred probability $p(\theta \mid x)$.
That will give us the most likely parameters for the observed $x$.

 . . . except when using our model, we have one huge problem. A massive, crushing, showstopping problem.
We can find $p(x \mid \theta)$ by fixing our parameters to some $\theta$ and then creating a valid probability distribution
that describes the data we'd expected to come from that model.
We can pick a $p(\theta)$ which could be uniform across all possible knob settings.
However, we don't know $p(x)$, the fraction of possible worlds where $x$ occurs.
We just have the raw data points.

# Maximizing the Likelihood

The solution is actually simple.
Recall that we ultimately infer/pick $\theta$ where $p(\theta \mid x)$ is at its maximum value&mdash;the most likely $\theta$ given $x$.
We don't really care about the peak value itself
just the value of $\theta$ where that peak occurs.
As a result, we can add or remove constant scaling factors in equation (1)
since scaling by a constant doesn't change *where* the peaks are,
just how *high* they are! 

Looking at equation (1), we see that $p(\theta)$ is constant if we choose it to be uniform
and $p(x)$ is constant for any given $x$:

$$
\begin{aligned}
p(\theta \mid x) &= \frac{p(x \mid \theta)\cancelto{\text{constant}}{p(\theta)}}{\cancelto{\text{constant}}{p(x)}}
\\
&\propto p(x \mid \theta)
\end{aligned}
$$

Thus, we can find the $\theta$ that maximizes $p(\theta \mid x)$ by finding the $\theta$ that maximizes $p(x \mid \theta)$ for that same $x$. We call $p(x \mid \theta)$ the *likelihood*, so picking $\theta$ this way is called *maximum likelihood estimation*:

$$
\begin{equation}
\hat \theta = \underset{\theta}{\arg\max}\ \ p(x \mid \theta)
\end{equation}
$$

In the baseball example, the likelihood function $p(x \mid \theta)$ might be:

$$
p((x, y) \mid m, b)\ \propto \exp\left(-\frac{(y - (mx + b))^2}{2\sigma^2}\right)
$$

where $\sigma$ is the expected standard deviation around the model's prediction
due to random variaiton between teams.
For example we might expect that for a given number of runs scored,
about 2/3 of teams (one standard deviation) fall within &plusmn;10 wins of each other/

For an observation of (881 runs, 90 wins) from the 2023 Texas Rangers, this equation would look like:

$$
p((881, 90) \mid m, b)\ \propto \exp\left(-\frac{(90 - (881m + b))^2}{2\cdot10^2}\right)
$$

If we plot this with the x axis as the slope parameter $m$ and the y axis as the intercept parameter $b$
we can see the likelihood of each parameter combination (darker is better):

![Likelihood of parameter combinations](/assets/topic/model-fit/881runs_90wins.png)

Notice that there is a band of values that could work for our model.
That means there are actually many different knob settings that would work well
to match this singular data point.

But we don't want to match just *one* data point but *all* the data points.
To find the best overall knob configuration, we need to find the one that gives the
highest *combined* score for *all* the data points simultaneously.
We can get this combined likelihood by multiplying all the individual data point scores
together and finding the parameters that maximize the product:

$$
\begin{equation}
\hat \theta = \underset{\theta}{\arg\max}\ p(x^{(1)} \mid \theta)p(x^{(2)} \mid \theta)\cdots p(x^{(N)} \mid \theta) = \underset{\theta}{\arg\max}\ \prod_{i=1}^{N} p(x^{(i)} \mid \theta)
\end{equation}
$$

Here's a plot that includes the 2023 Rangers fit first, the 2023 Rockies (721 runs, 59 wins) fit second, and the combined (multiplied) fit last:

![Rangers and Rockies](/assets/topic/model-fit/rangers_rockies.png)

Notice how putting both together constrains the range of good combinations.
You can imagine that as we multiply more and more likelihood functions together,
one for each data point, we get a tighter and tighter bound around "good" combinations
of slope and intercept. The parameters we pick at the peak of the final combined likelihood function
are considered the "best" fit. Note that we don't know how *good* of a fit this is,
just that it is the best we can do.

# Maximizing the Log Likelihood

While straight maximizing the combined likelihood is conceptually what we want to do,
it's actually very hard computationally. If we multiple a bunch of factors together,
the result can very quickly get close to zero. Computers can only be so accurate,
so eventually the "close to zero" value gets rounded down to zero. Not good.

We can make this easier by wrapping everything in a logarithm and applying convenient properties.
Like a constant scaling factor, the log function might change the height of the maximum peak,
but it doesn't change the location. Thus, maximizing the likelihood gives us the same knob settings
as maximizing the *log* likelihood:

$$
\begin{equation}
\begin{aligned}
\hat \theta &= \underset{\theta}{\arg\max}\ \log\left(p(x^{(1)} \mid \theta)p(x^{(2)} \mid \theta)\cdots p(x^{(N)} \mid \theta) \right) \\
&= \underset{\theta}{\arg\max}\ \log p(x^{(1)} \mid \theta) + \log p(x^{(2)} \mid \theta) + \cdots + \log p(x^{(N)} \mid \theta) \\
&= \underset{\theta}{\arg\max}\ \sum_{i=1}^N \log p(x^{(i)} \mid \theta)
\end{aligned}
\end{equation}
$$

Of course, we can divide by the number of data points $N$ and make this look like an average,
or an expected value, recasting our problem as maximizing the expected log likelihood across the distribution of observed data points:

$$
\begin{aligned}
\hat \theta &= \underset{\theta}{\arg\max}\ \frac 1 N \sum_{i=1}^N \log p(x^{(i)} \mid \theta)
\\
&= \underset{\theta}{\arg\max}\ \mathbb E_{p_\mathcal{D}(x)} \left[\log p(x \mid \theta)\right]
\end{aligned}
$$

Note that when we convert to an expectation, we have to specify the distribution that
the data points come from (are sampled from).
We use $p_\mathcal{D}(x)$ to represent the "empirical distribution" of observed data points.


# Minimizing the Negative Log Likelihood

Many optimization algorithms are designed to find the *minimum* point of a function.
We can flip our likelihood with a negative sign to work with them since
maximizing the log likelihood is the same as minimizing the the negative log likelihood.

$$
\hat \theta = \underset{\theta}{\arg\min}\ {-\mathbb E}_{p_\mathcal{D}(x)}\left[ \log p(x \mid \theta)\right]
$$

In one final notation switch, we often write $p(x \mid \theta)$ as $p_\theta(x)$,
indicating that the likelihood is "parameterized" by the knobs $\theta$,
distinguishing $\theta$ as parameters and not another input to the model:

$$
\hat \theta = \underset{\theta}{\arg\min}\ {-\mathbb E}_{p_\mathcal{D}(x)}\left[ \log p_\theta(x)\right]
$$
