---
layout: wiki
learn: true
title: Autoregressive Flows & Invertible Neural Networks
tags:
  - Machine Learning
---

Both MCMC and ABC want estimate the posterior: $p(\theta \mid x) \propto p(x \mid \theta)p(\theta)$​.

MCMC requires that we can calculate the value of the likelihood $p(x \mid \theta)$. If we can, it will converge to samples from the true posterior. For example, we might use $\theta$ as inputs to a complex simulation. Then we assume that the observations are normally distributed around the simulation output. This gives us something like:
$$
\begin{aligned}
\theta &\sim p(\theta) && \leftarrow \text{sample  the prior} \\
z & \sim p(z \mid \theta) && \leftarrow \text{run the simulation} \\
p(x \mid \theta) :&= \mathcal N(z, \sigma^2) && \leftarrow \text{use the simulation output as the mean}
\end{aligned}
$$
Then MCMC can evaluate the likelihood function at the observation points: $\mathcal L_{\mathcal N(z, \sigma^2)}(\hat x)$.



## Resources

- [2017] [Masked Autoregressive Flow for Density Estimation](https://arxiv.org/pdf/1705.07057.pdf)
  - Motivations: learning data prior for Bayesian inference
    - Likelihood-Free Approximate Bayesian Inference
      - Fan 2012
        - The posterior is too complex to calculate, so we do so via simulations (somewhat like MCMC, only with a kernel and no "walking", so no sample correlation)
        - Simulation results are replaced with summary stats to simplify the final kernel comparison
        - Likelihood approximation can be simpler or more efficient (reused for different priors) 
        - Once likelihood is approximated, we can sample the posterior with MCMC
      - ABC can be more efficient than MCMC when MCMC has low acceptance rate. MCMC gives exact approximation as  samples go to infinity. ABC gives exact approximation as acceptance criteria goes to delta function.
- [2016] [Improved Variational Inference with Inverse Autoregressive Flow](https://arxiv.org/pdf/1606.04934.pdf)
- [2014] [NICE: Non-Linear Independent Components Estimation](https://arxiv.org/pdf/1410.8516.pdf)

