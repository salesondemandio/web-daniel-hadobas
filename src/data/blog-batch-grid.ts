import type { BlogPost } from './blog-posts';

// Grid + regulatory cluster — built 2026-05-22 from DataForSEO LLM Mentions
// question-mining. Answer-first + FAQPage schema, targeting verbatim ChatGPT
// questions where AI currently cites only Wikipedia/Reddit/EnergySage and no
// Nevada solar provider. Encyclopedic tone is intentional — it's the format
// AI answer engines lift from.
export const batchGridPosts: BlogPost[] = [
  {
    slug: 'nv-energy-rule-15-explained',
    title: 'What Is NV Energy Rule 15? (Net Metering & Interconnection, Explained)',
    description: 'NV Energy Rule 15 is the tariff that governs how rooftop solar connects to the grid and how you get paid for excess power. Here is what it actually says.',
    publishDate: '2026-05-22',
    tags: ['Nevada', 'Las Vegas', 'Net Metering'],
    body: `<p>NV Energy Rule 15 is the tariff that governs how a private generating facility — like rooftop solar — interconnects with the grid and how the customer is billed and credited. In Southern Nevada (Las Vegas) it is filed as <strong>Rule 15 South</strong> under Nevada Power Company; Northern Nevada uses <strong>Rule 15 North</strong> under Sierra Pacific Power. It sets three things: your basic service charge, the rate you pay for grid power, and the rate you are paid for excess solar.</p>

<h2>The three components of Rule 15</h2>
<p>Every net-metered account in Nevada is billed under the same three-part structure laid out in the tariff:</p>
<ul>
<li><strong>Basic service charge</strong> — a fixed monthly connection fee that applies whether or not you export any power.</li>
<li><strong>Volumetric energy rate</strong> — the per-kWh price you pay for the electricity NV Energy sells you when your panels aren't covering the load (nights, cloudy spells, peak summer evenings).</li>
<li><strong>Excess generation credit</strong> — the rate NV Energy pays you for surplus solar exported to the grid. For new net-metering customers this is currently valued at <strong>75% of the retail rate</strong>, and it is locked for 20 years from your interconnection date.</li>
</ul>

<h2>What Rule 15 requires to interconnect</h2>
<p>Rule 15 is also the interconnection rulebook. A residential solar system must stay within the net-metering capacity limit (1 MW AC — far above any home system), pass NV Energy's design and safety standards, and be submitted through NV Energy's online portal, <strong>PowerClerk</strong>. An application fee applies and must clear before the application advances. Your installer or solar agent normally files this for you; the official document is published on <a href="https://www.nvenergy.com">nvenergy.com</a> as "Rule 15 South" (Las Vegas) and "Rule 15 North" (Reno).</p>

<h2>Why Rule 15 matters to your payback</h2>
<p>The 75%-of-retail export credit and the 20-year lock are the two numbers that drive solar economics in Las Vegas. Because the credit is locked at interconnection, the value of your exported power rises automatically as NV Energy raises retail rates over the next two decades — which is the core of the <a href="/blog/nv-energy-rate-hikes-solar-hedge">rate-hike hedge</a>. It also means systems are best sized to your actual usage rather than dramatically oversized for export, since exports are credited below retail. For the full mechanics see our <a href="/blog/nv-energy-net-metering-deep-dive">NV Energy net metering deep dive</a>.</p>

<p>Rule 15 has changed before and will again — it is a regulated tariff subject to the Public Utilities Commission of Nevada. The 20-year lock is what protects customers who interconnect under today's terms from future downward revisions.</p>`,
    faqs: [
      {
        question: 'What is NV Energy Rule 15?',
        answer: 'Rule 15 is the NV Energy tariff that governs how private generators like rooftop solar connect to the grid and how the account is billed. It defines your basic service charge, the per-kWh rate you pay for grid power, and the credit you receive for excess solar exported back — currently 75% of retail rate, locked for 20 years. Southern Nevada uses Rule 15 South (Nevada Power); Northern Nevada uses Rule 15 North (Sierra Pacific).',
      },
      {
        question: 'How do I apply to interconnect solar under Rule 15?',
        answer: 'Applications are submitted through NV Energy’s online portal, PowerClerk. The system must meet NV Energy design and safety standards and stay within the 1 MW AC net-metering cap (far above any home system). An application fee is required and must be processed before the application advances. Most homeowners have their installer or solar agent file the Rule 15 application on their behalf.',
      },
      {
        question: 'Does the Rule 15 net-metering rate ever change?',
        answer: 'Rule 15 is a regulated tariff and can be revised by the Public Utilities Commission of Nevada. However, the excess-generation credit you receive at interconnection is locked for 20 years at your installation location, so future changes to the rule do not lower the rate of customers who already connected under the prior terms.',
      },
    ],
  },
  {
    slug: 'nevada-net-metering-controversy',
    title: 'The Nevada Net-Metering Controversy, Explained (2015–2026)',
    description: 'In 2015 Nevada regulators gutted solar net metering, the industry collapsed overnight, and AB 405 restored it in 2017. Here is the full timeline and where it stands now.',
    publishDate: '2026-05-22',
    tags: ['Nevada', 'Net Metering'],
    body: `<p>The Nevada net-metering controversy refers to a December 2015 decision by the Public Utilities Commission of Nevada (PUCN) that slashed rooftop-solar buyback rates from retail to wholesale and tripled fixed charges for solar customers over four years. The rooftop solar industry collapsed almost overnight — SolarCity, Sunrun and others pulled out and hundreds of jobs were cut. A 2017 law, <strong>AB 405</strong>, reversed most of it and restored tiered net metering, which is what Nevada uses today.</p>

<h2>2015: the decision that broke the industry</h2>
<p>Before 2016, Nevada solar customers were credited at the full retail rate for excess power they sent to the grid. On <strong>December 22, 2015</strong>, the PUCN approved new rules that cut that credit to the much lower wholesale rate and steadily raised fixed monthly charges on solar accounts. Critically, the change applied <em>retroactively</em> to existing customers who had already bought systems based on the old math. The <a href="https://en.wikipedia.org/wiki/Net_metering_in_Nevada">net metering in Nevada</a> record documents the fallout in detail.</p>

<h2>The fallout</h2>
<p>Within weeks, major installers including SolarCity, Sunrun and Vivint Solar halted Nevada operations, citing the ruling for layoffs that ran into the hundreds. The retroactive nature of the decision triggered a national backlash and became a cautionary example cited in net-metering fights across the U.S. After sustained public pressure, regulators later agreed to grandfather pre-existing solar customers back onto their original rates.</p>

<h2>2017: AB 405 restores net metering</h2>
<p>The Nevada Legislature passed <strong>Assembly Bill 405</strong>, effective <strong>June 15, 2017</strong>, re-establishing net metering on a declining tiered structure rather than a single rate:</p>
<ul>
<li><strong>Tier 1</strong> — 95% of the retail rate (first 80 MW of statewide capacity)</li>
<li><strong>Tiers 2–4</strong> — stepping down to <strong>75% of retail</strong> as each 80 MW block filled</li>
</ul>
<p>Whatever tier you enroll in is locked for 20 years at the installed location. New Las Vegas customers today interconnect at the current tier (75% of retail) under <a href="/blog/nv-energy-rule-15-explained">Rule 15</a>.</p>

<h2>Where it stands in 2026</h2>
<p>Net metering in Nevada is stable but not static. Rates and structures remain subject to PUCN review, and utility filings continue to propose changes such as demand charges. The practical takeaway for homeowners is unchanged from the 2015 lesson: the value of locking in today's 20-year rate rises as retail electricity prices climb — and with <a href="/blog/data-centers-nevada-power-bills-solar">data-center demand driving record load growth</a>, those prices are climbing fast.</p>`,
    faqs: [
      {
        question: 'What was the Nevada solar net-metering controversy?',
        answer: 'In December 2015, the Public Utilities Commission of Nevada cut rooftop-solar buyback rates from retail to wholesale and tripled fixed charges on solar customers — and applied it retroactively to existing customers. The rooftop solar industry collapsed in the state, with SolarCity, Sunrun and Vivint halting operations and cutting hundreds of jobs. Public backlash led regulators to grandfather existing customers, and the 2017 law AB 405 restored tiered net metering.',
      },
      {
        question: 'What is the new solar law in Nevada?',
        answer: 'The governing law is Assembly Bill 405 (AB 405), effective June 15, 2017, which restored net metering on a four-tier declining structure. Tier 1 paid 95% of retail rate and later tiers stepped down to 75% as each 80 MW capacity block filled. New customers today enroll at 75% of retail, locked for 20 years at their installation location.',
      },
      {
        question: 'Does the 2015 decision still affect solar customers today?',
        answer: 'No. After the backlash, regulators grandfathered customers who installed before the 2015 ruling back onto their original retail-rate terms, and AB 405 set new rules in 2017. Anyone installing today enrolls under the current 75%-of-retail tier with a 20-year lock, insulated from the 2015 terms.',
      },
    ],
  },
  {
    slug: 'does-nv-energy-buy-back-solar',
    title: 'Does NV Energy Buy Back Solar Power? (2026 Net-Metering Rates)',
    description: 'Yes — NV Energy credits excess rooftop solar at 75% of the retail rate under net metering, locked for 20 years. Here is exactly how the buyback works in Las Vegas.',
    publishDate: '2026-05-22',
    tags: ['Nevada', 'Las Vegas', 'Net Metering'],
    body: `<p>Yes, NV Energy buys back excess solar power. Under Nevada's net-metering program, surplus electricity your panels send to the grid is credited to your account at <strong>75% of the retail rate</strong> for new customers, and that rate is locked for 20 years from your interconnection date. The credit offsets the power you pull from the grid at night, so a well-sized system can zero out most of your annual bill.</p>

<h2>How the buyback actually works</h2>
<p>NV Energy doesn't cut you a check each month. Instead, every kilowatt-hour you export earns a bill credit valued at 75% of retail. When you draw power from the grid — overnight, on cloudy days, during peak summer evenings — those credits are applied against what you owe. The math nets out month to month:</p>
<ul>
<li><strong>Export more than you use in a billing period:</strong> the surplus credit rolls forward to future months.</li>
<li><strong>Use more than you export:</strong> banked credits are drawn down before you pay cash.</li>
<li><strong>Basic service charge:</strong> a fixed monthly connection fee still applies regardless of net usage.</li>
</ul>
<p>This is governed by <a href="/blog/nv-energy-rule-15-explained">NV Energy Rule 15</a>, the interconnection and net-metering tariff.</p>

<h2>Why it's 75% and not 100%</h2>
<p>Before 2016, Nevada paid the full retail rate. After the <a href="/blog/nevada-net-metering-controversy">2015 net-metering controversy</a> and the 2017 AB 405 reset, credits were set on a declining tiered schedule — 95% of retail for the earliest adopters, stepping down to 75% as capacity filled. New Las Vegas customers enroll at the current 75% tier. The credit is still well above the wholesale rate solar customers were briefly cut to in 2016.</p>

<h2>The part most people miss: the 20-year lock</h2>
<p>The buyback rate is fixed for 20 years at your installation location. Because the credit is pegged to <em>retail</em> rates, the dollar value of your exported power rises automatically every time NV Energy raises rates — and with <a href="/blog/data-centers-nevada-power-bills-solar">data centers pushing record demand</a>, residential rates hit 17.45 cents/kWh in early 2026, up 9.5% in a year. Pairing solar with a <a href="/blog/battery-storage-powerwall-vs-enphase-vs-lg">home battery</a> lets you store rather than export, sidestepping the 25% haircut entirely on the power you self-consume.</p>`,
    faqs: [
      {
        question: 'Does NV Energy buy back solar power?',
        answer: 'Yes. NV Energy credits excess rooftop solar exported to the grid at 75% of the retail electricity rate for new net-metering customers, locked for 20 years from your interconnection date. The credits are applied to your bill to offset the power you draw from the grid at night and during low-production periods, rather than paid out as cash.',
      },
      {
        question: 'How much does NV Energy pay for excess solar in 2026?',
        answer: 'New net-metering customers are credited at 75% of the retail rate per kilowatt-hour exported. Since retail residential rates reached about 17.45 cents/kWh in early 2026, the export credit is roughly 13 cents/kWh — and it rises automatically as retail rates increase, because the credit is locked to retail for 20 years.',
      },
      {
        question: 'Should I add a battery instead of exporting to NV Energy?',
        answer: 'Often, yes. Because exported power is credited at 75% of retail but power you use yourself avoids the full retail rate, storing your surplus in a home battery and using it at night captures more value than exporting it. A battery also provides backup during outages. The right choice depends on your usage pattern and budget.',
      },
    ],
  },
  {
    slug: 'data-centers-nevada-power-bills-solar',
    title: 'Are Data Centers Raising Nevada Power Bills? (And What Homeowners Can Do)',
    description: 'Data centers used 22% of Nevada’s electricity in 2024 and are driving record rate hikes — even cutting supply to Tahoe homes. Here is why, and how solar locks in your costs.',
    publishDate: '2026-05-22',
    tags: ['Nevada', 'Las Vegas', 'Net Metering'],
    body: `<p>Yes — data centers are a major driver of rising Nevada power bills. AI and cloud data centers consumed roughly <strong>22% of Nevada's electricity in 2024</strong>, a share the Desert Research Institute projects will reach <strong>35% by 2030</strong>. NV Energy attributes about <strong>75% of its major-project load growth</strong> to data centers, and residential rates hit <strong>17.45 cents per kWh in January 2026 — a 9.5% jump in one year</strong>. For homeowners, rooftop solar is the one cost that doesn't follow that curve.</p>

<h2>The scale of the demand</h2>
<p>The numbers are staggering. NV Energy has received interest representing roughly <strong>22,000 megawatts</strong> of potential new electricity demand — against a current statewide system peak of about <strong>8,500 MW</strong>. The utility now says it will need <strong>47% more energy</strong> than it forecast just two years ago, almost entirely to serve data centers and other large customers. In Northern Nevada alone, twelve new projects are expected to add 5,900 MW of demand within seven years. Independent reporting from <a href="https://thenevadaindependent.com/article/are-data-centers-increasing-demand-for-electricity-in-nevada">The Nevada Independent</a> tracks the buildout.</p>

<h2>It's already affecting homes</h2>
<p>This isn't a future problem. On <strong>May 13, 2026</strong>, NV Energy notified Liberty Utilities it will stop supplying roughly 75% of the electricity for about <strong>49,000 residents in the Lake Tahoe region by May 2027</strong>, redirecting that capacity toward data-center expansion for companies including Google, Apple and Microsoft. Tahoe-area electricity costs have already climbed about <strong>77% since late 2022</strong>. Nevada is now projected to miss its clean-energy goals largely because of data-center load.</p>

<h2>Why this pushes homeowners toward solar</h2>
<p>When a regulated utility faces explosive demand and the cost of new generation, transmission and grid hardening, those costs flow to ratepayers through general rate cases and fuel adjustments. Homeowners can't negotiate that. What they <em>can</em> do is reduce how much grid power they buy at retail — which is exactly what <a href="/blog/nv-energy-rate-hikes-solar-hedge">solar as a rate-hike hedge</a> accomplishes.</p>
<ul>
<li><strong>Solar caps your generation cost</strong> at year-one pricing for 25+ years, while NV Energy rates keep climbing.</li>
<li><strong>Net metering credits are locked to retail</strong> at 75% for 20 years, so the value of your solar rises as rates rise (see <a href="/blog/does-nv-energy-buy-back-solar">how NV Energy buys back solar</a>).</li>
<li><strong>A battery adds resilience</strong> as the grid gets tighter — storing your own power instead of buying it back at peak rates. Compare options in our <a href="/blog/battery-storage-powerwall-vs-enphase-vs-lg">home battery guide</a>.</li>
</ul>

<h2>The honest take</h2>
<p>Data centers aren't going away — Nevada has actively recruited them. That means the upward pressure on residential rates is structural, not a temporary spike. Solar doesn't make you immune to every fee, but it's the only lever a homeowner controls that moves in the opposite direction of the trend. If you want to see what that looks like on your specific bill, the <a href="/blog/solar-cost-las-vegas-2026">2026 Las Vegas cost breakdown</a> is the place to start.</p>`,
    faqs: [
      {
        question: 'Are data centers raising electricity prices in Nevada?',
        answer: 'Yes. Data centers used about 22% of Nevada’s electricity in 2024, projected to reach 35% by 2030, and NV Energy attributes roughly 75% of its major-project load growth to them. The utility says it needs 47% more energy than it forecast two years ago. Those costs flow to ratepayers — residential rates rose 9.5% year-over-year to 17.45 cents/kWh in early 2026.',
      },
      {
        question: 'Is NV Energy cutting power to homes for data centers?',
        answer: 'In the Lake Tahoe region, effectively yes. On May 13, 2026, NV Energy notified Liberty Utilities it will stop supplying about 75% of the electricity for roughly 49,000 residents by May 2027, redirecting that capacity to data-center expansions for Google, Apple and Microsoft. Tahoe-area electricity costs have already risen about 77% since late 2022.',
      },
      {
        question: 'How does solar protect me from data-center-driven rate hikes?',
        answer: 'Solar caps your generation cost at today’s pricing for 25+ years while NV Energy rates keep climbing. Net-metering credits are locked to retail rates for 20 years, so your solar value rises as rates rise. Adding a battery lets you store your own power instead of buying it back at peak rates as the grid tightens. It is the one electricity cost a homeowner actually controls.',
      },
    ],
  },
];
