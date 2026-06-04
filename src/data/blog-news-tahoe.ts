import type { BlogPost } from './blog-posts';

// News / timely cluster — built 2026-05-26 off the May 13 2026 NV Energy → Liberty
// Utilities Tahoe supply-cut story. Narrower, news-pegged companion to
// /blog/data-centers-nevada-power-bills-solar. Answer-first + FAQPage schema so
// AI engines lift it for "NV Energy cutting power Tahoe / data centers" queries.
export const newsTahoePosts: BlogPost[] = [
  {
    slug: 'nv-energy-tahoe-power-cut-data-centers',
    title: "NV Energy Is Redirecting Tahoe's Power to Data Centers. Here's What It Means for Your Bill.",
    description:
      "In May 2026, NV Energy told Liberty Utilities it will end the wholesale supply behind ~75% of the power for nearly 50,000 Lake Tahoe residents by 2027 — capacity headed to data centers. Here is what it means for Nevada electricity rates and how solar hedges it.",
    publishDate: '2026-05-26',
    tags: ['Nevada', 'Las Vegas', 'Grid'],
    body: `<p>In mid-<strong>May 2026</strong>, NV Energy notified Liberty Utilities that it will end the wholesale power agreement behind roughly <strong>75% of the electricity</strong> for nearly <strong>50,000 residents on the California side of Lake Tahoe by May 2027</strong>. NV Energy says the contract was always meant to be temporary, and points to northern-Nevada transmission limits and surging demand from data centers — Google, Apple and Microsoft among them — at the Tahoe-Reno Industrial Center east of Reno. Liberty now has to find replacement power, and that's the part that hits bills.</p>

<p>It's the clearest sign yet that Nevada's grid is being reshaped around AI and cloud demand. If you own a home in NV Energy territory — Las Vegas, Henderson, Summerlin, North Las Vegas — the question isn't whether rates climb. It's how much of your bill you can take off the table. The short answer: the only electricity cost you fully control is the power you generate yourself.</p>

<h2>What NV Energy actually announced — and what it doesn't mean</h2>
<p>Let's be precise, because the headlines ran hot. NV Energy is <em>not</em> flipping a switch and going dark on Tahoe homes. It's the wholesale supplier behind Liberty Utilities, and it's ending a "full-requirements" supply deal it calls temporary and transitional. Liberty already self-generates about <strong>25%</strong> of its power from its own Nevada solar facilities; the other ~75% came from NV Energy. Liberty plans to issue a request for proposals in summer 2026 and expects to buy replacement power from outside California, wheeled in over NV Energy's transmission system. Independent reporting from <a href="https://fortune.com/2026/05/12/lake-tahoe-data-center-49000-residents-power-source/">Fortune</a> and a <a href="https://www.snopes.com/fact-check/lake-tahoe-power-data-center/">Snopes fact-check</a> both land on the same nuance: it's a supply transition, not a blackout.</p>

<p>So why does it matter to a Las Vegas homeowner four hours south? Because it exposes the squeeze playing out across the entire state. Replacement power bought on the open market almost always costs more, and Liberty's customers are already feeling it — its 2025 rate case landed an <strong>11.4% revenue increase</strong>, about <strong>$37.51 more per month</strong> for the average home. That same pressure is moving through NV Energy's territory, just under different line items.</p>

<h2>Why Nevada's grid is being squeezed</h2>
<p>Data centers consumed about <strong>22% of Nevada's electricity in 2024</strong>, and the Desert Research Institute projects that share reaches <strong>35% by 2030</strong>. The Tahoe-Reno Industrial Center is now the third-largest data center market in the country, with roughly 13 million square feet under construction. The pipeline behind it is staggering:</p>
<ul>
<li><strong>Twelve data-center projects</strong> in northern Nevada alone could add <strong>5,900 MW</strong> of new demand by 2033, per the Desert Research Institute.</li>
<li>NV Energy is holding interest representing about <strong>22,000 MW</strong> of potential new demand — against a statewide system peak of only <strong>~8,500 MW</strong>. The requests total more than double the grid's current peak.</li>
<li>NV Energy attributes roughly <strong>75% of its major-project load growth</strong> to data centers.</li>
</ul>
<p>When a regulated utility has to build generation, transmission and grid hardening this fast, those costs flow to ratepayers through rate cases and fuel adjustments. Nevada is now projected to miss its clean-energy targets largely because of data-center load. As a homeowner, you can't negotiate any of that. The Nevada Independent's ongoing coverage of <a href="https://thenevadaindependent.com/article/are-data-centers-increasing-demand-for-electricity-in-nevada">data-center demand</a> tracks just how structural the trend is.</p>

<h2>The 2026 bill changes Nevada homeowners need to understand</h2>
<p>Two things are reshaping NV Energy residential bills right now, and the details matter:</p>
<ul>
<li><strong>Rising Nevada electricity rates.</strong> Statewide residential rates reached about <strong>17.45 cents/kWh in early 2026 — up 9.5% in a single year.</strong> In the Tahoe region, costs run closer to <strong>$0.34/kWh</strong>, up roughly <strong>77% since late 2022</strong>.</li>
<li><strong>A new daily demand charge, starting April 2026.</strong> This one is widely misunderstood. It is <em>not</em> a flat add-on. The Public Utilities Commission of Nevada restructured the bill: a new daily demand charge (based on your single highest 15-minute spike of usage each day, billed at a fixed ~14 cents/kWh) is offset by a lower volumetric rate (down ~2 cents/kWh) and a slightly lower basic service charge. For the average Southern Nevada home it's roughly <strong>$15–$20/month</strong> in demand charges, and regulators project most residential bills actually dip about <strong>1.5%</strong>.</li>
</ul>
<p>The catch: the demand charge rewards <em>flat</em> usage and punishes spikes. If you run the AC, oven, EV charger and dryer at the same time on a 110° afternoon, that one peak sets your charge for the day. Homes with peaky summer loads — most Las Vegas homes — can end up worse off under the new structure, even if the "average" bill drops.</p>

<h2>What this means for your bill — and how solar changes the math</h2>
<p>Your utility rate is set by forces you don't control: regulators, fuel markets, and now a wave of corporate data-center demand. The one line on your bill you <em>can</em> cap is the cost of the power you generate yourself. That's the core of using <a href="/blog/nv-energy-rate-hikes-solar-hedge">solar as a rate-hike hedge</a> in Las Vegas:</p>
<ul>
<li><strong>Solar locks your generation cost</strong> at today's pricing for 25+ years while NV Energy rates keep climbing. With 290+ sunny days a year, Las Vegas is one of the strongest solar markets in the country — see the <a href="/blog/solar-cost-las-vegas-2026">2026 cost of solar panels in Las Vegas</a>.</li>
<li><strong>NV Energy net metering credits are locked to retail for 20 years</strong> at 75%, so the value of your exported solar rises every time rates rise — here's exactly <a href="/blog/does-nv-energy-buy-back-solar">how NV Energy buys back solar</a>.</li>
<li><strong>A home battery directly counters the new demand charge.</strong> Because the charge keys off your daily peak, covering that peak from stored solar power instead of the grid is the cleanest way to shave it — and it adds backup as the grid gets tighter. Compare options in our <a href="/blog/battery-storage-powerwall-vs-enphase-vs-lg">home battery guide</a>.</li>
</ul>
<p>That's why the question "<a href="/blog/solar-cost-las-vegas-2026">is solar worth it in Las Vegas</a>" keeps getting a stronger yes every year. The deeper your bill exposure to rising rates and demand charges, the more a system you own works in your favor. For the full demand picture, read our breakdown of <a href="/blog/data-centers-nevada-power-bills-solar">how data centers are driving Nevada power bills</a>.</p>

<h2>The honest take</h2>
<p>Nevada actively recruited these data centers, and they aren't leaving. That makes the upward pressure on residential bills structural, not a passing spike. Solar won't make you immune to every fee or fixed charge — but pairing rooftop solar with a battery is the one lever a Nevada homeowner controls that moves in the opposite direction of the trend.</p>

<p>Want to see what that looks like on your actual NV Energy bill — including how a battery would handle the new demand charge? <a href="/#get-quote">Book a free system review</a> and I'll run the real numbers for your home. No pressure, no sales pitch — just honest math.</p>`,
    faqs: [
      {
        question: 'Is NV Energy cutting power to Lake Tahoe homes for data centers?',
        answer:
          "Not abruptly, but it is ending the supply that powers them. In May 2026, NV Energy notified Liberty Utilities — the company that bills nearly 50,000 residents on the California side of Lake Tahoe — that it will end the wholesale agreement behind about 75% of their power by May 2027. NV Energy calls the contract temporary and cites northern-Nevada transmission limits and data-center demand from Google, Apple and Microsoft at the Tahoe-Reno Industrial Center. Liberty must now buy replacement power, likely from outside California, which typically costs more and flows to customers' bills.",
      },
      {
        question: 'Why are Nevada electricity rates going up in 2026?',
        answer:
          "Data centers are the main driver. They used about 22% of Nevada's electricity in 2024, projected to reach 35% by 2030, and NV Energy attributes roughly 75% of its major-project load growth to them. The utility is holding about 22,000 MW of requested new demand against a statewide peak of only ~8,500 MW. Those costs flow to ratepayers — statewide residential rates rose 9.5% year-over-year to about 17.45 cents/kWh in early 2026, while Liberty Utilities' 2025 Tahoe-area rate case added roughly $37.51 per month for the average home.",
      },
      {
        question: 'What is the new NV Energy demand charge in 2026?',
        answer:
          "Starting April 2026, NV Energy restructured residential bills to include a daily demand charge based on your single highest 15-minute spike of usage each day, billed at a fixed rate of about 14 cents/kWh. It is offset by a lower volumetric rate (down ~2 cents/kWh) and a slightly lower basic service charge, so for the average Southern Nevada home it is roughly $15–$20/month and regulators project most bills dip about 1.5%. The catch: it rewards flat usage and penalizes peaks, so homes with spiky summer AC loads can pay more. A home battery counters it directly by covering your daily peak from stored solar power instead of the grid.",
      },
      {
        question: 'How does solar protect me from data-center-driven rate hikes?',
        answer:
          "Solar caps your generation cost at today's pricing for 25+ years while NV Energy rates keep climbing. Net-metering credits are locked to retail rates for 20 years, so your solar value rises as rates rise. Adding a battery lets you store your own power and cover peak usage — sidestepping both peak retail rates and the new demand charge — while providing backup as the grid tightens. It is the one electricity cost a Nevada homeowner actually controls.",
      },
    ],
  },
];
