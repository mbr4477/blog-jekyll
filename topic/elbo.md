---
layout: wiki
exclude: true
learn: true
title: The Evidence Lower Bound
tags: ["Machine Learning"]
requires:
    - topic/maximum-likelihood-model-fit.md
---

The goal is to maximize the log likelihood over the data, matching the modeled distribution to the real data distribution.

$$
\text{maximize}\quad \mathbb E_{p_\mathcal{D}(x)}
[\log p_\theta (x)]
$$

$$
 \mathbb E_{p_\mathcal{D}(x)}
\left[\log \int p_\theta(x, z) dz\right] 
$$

$$
\mathbb E_{p_\mathcal{D}(x)}
\left[\log \int \frac{p_\theta(x ,  z) q_\phi(z \mid x)}{q_\phi(z \mid x)} dz\right]
$$

$$
 \mathbb E_{p_\mathcal{D}(x)}
\left[\log \mathbb E_{q_\phi(z \mid x)}\left[ \frac{p_\theta(x , z)}{q_\phi(z \mid x)}\right]\right]
$$

Thanks to Jensen's Inequality this evidence is greater than:

$$
\mathbb E_{p_\mathcal{D}(x)}
\left[\mathbb E_{q_\phi(z \mid x)}\left[\log \frac{p_\theta(x , z)}{q_\phi(z \mid x)}\right]\right]
$$

making it the "evidence lower bound."

$$
\mathbb E_{p_\mathcal{D}(x)}
\left[\mathbb E_{q_\phi(z \mid x)}\left[\log \frac{p_\theta(x | z)p(z)}{q_\phi(z \mid x)}\right]\right]
$$

$$
\mathbb E_{p_\mathcal{D}(x)}
\left[\mathbb E_{q_\phi(z \mid x)}[ \log p_\theta(x | z)]
- \mathbb E_{q_\phi(z \mid x)}\left[\log \frac{q_\phi(z \mid x)}{p(z)}\right]\right]
$$

$$
\mathbb E_{p_\mathcal{D}(x)}
\left[\mathbb E_{q_\phi(z \mid x)} [\log p_\theta(x | z)]
- D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z))\right]
$$

