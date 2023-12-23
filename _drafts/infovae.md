---
layout: wiki
exclude: true
learn: true
title: InfoVAE
tags: ["Machine Learning"]
---

$$
\begin{aligned}
&\implies
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z) - D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z))\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z) - 
\mathbb E_{q_\phi(z \mid x)}\left[\log \frac{q_\phi(z \mid x)}{p(z)}\right]
\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
\mathbb E_{q_\phi(x, z)}\left[\log \frac{q_\phi(z \mid x)}{p(z)}\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
\mathbb E_{q_\phi(x, z)}\left[\log \frac{q_\phi(z \mid x)q_\phi(z)}{q_\phi(z)p(z)}\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
\mathbb E_{q_\phi(x, z)}
\left[\log \frac{q_\phi(z \mid x)}{q_\phi(z)} + \log \frac{q_\phi(z)}{p(z)}\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
\mathbb E_{q_\phi(x, z)}
\left[\log \frac{q_\phi(z \mid x)}{q_\phi(z)}\right]
- \mathbb E_{q_\phi(x, z)}\left[\log \frac{q_\phi(z)}{p(z)}\right]
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
\mathbb E_{q_\phi(x, z)}
\left[\log \frac{q_\phi(z \mid x)p_\mathcal{D}(x)}{q_\phi(z)p_\mathcal{D}(x)}\right]
- D_\text{KL}(q_\phi(z) \mid\mid p(z))
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
D_\text{KL} ( q_\phi(x, z) \mid\mid q_\phi(z)p_\mathcal{D}(x))
- D_\text{KL}(q_\phi(z) \mid\mid p(z))
\\
&=
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] - 
I_{q_\phi(x, z)} (x, z)
- D_\text{KL}(q_\phi(z) \mid\mid p(z))
\end{aligned}
$$

$$
\begin{aligned}
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] &- 
I_{q_\phi(x, z)} (x, z)
- \lambda D_\text{KL}(q_\phi(z) \mid\mid p(z))
\\ &+ \alpha I_{q_\phi(x, z)} (x, z)
\end{aligned}
$$

$$
\begin{aligned}
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] 
&- I_{q_\phi(x, z)} (x, z)
- D_\text{KL}(q_\phi(z) \mid\mid p(z)) \\
&- (\lambda - 1) D_\text{KL}(q_\phi(z) \mid\mid p(z)) \\
&+ \alpha I_{q_\phi(x, z)} (x, z)
\end{aligned}
$$

$$
\begin{aligned}
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] &- 
D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z)) \\
&- (\lambda - 1) D_\text{KL}(q_\phi(z) \mid\mid p(z)) \\
&+ \alpha (D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z)) - 
D_\text{KL}(q_\phi(z) \mid\mid p(z)))
\end{aligned}
$$

$$
\begin{aligned}
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] &- 
D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z)) \\
&- (\lambda - 1) D_\text{KL}(q_\phi(z) \mid\mid p(z)) \\
&+ \alpha D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z)) - \alpha 
D_\text{KL}(q_\phi(z) \mid\mid p(z))
\end{aligned}
$$

$$
\begin{aligned}
\mathbb E_{p_\mathcal{D}(x)}
\left[\log p_\theta(x | z)\right] &- 
(1 - \alpha)D_\text{KL}(q_\phi(z \mid x) \mid\mid p(z)) \\
&- (\alpha + \lambda - 1) D_\text{KL}(q_\phi(z) \mid\mid p(z))
\end{aligned}
$$

```

```