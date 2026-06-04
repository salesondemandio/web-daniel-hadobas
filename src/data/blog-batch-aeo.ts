import type { BlogPost } from './blog-posts';

// AEO batch — built from real ChatGPT question data (DataForSEO LLM Mentions, May 2026).
// Each post leads with a citable answer paragraph and carries FAQ schema so it can be
// lifted directly into Google AI Overviews and ChatGPT answers.

export const batchAeoPosts: BlogPost[] = [
  {
    slug: 'free-solar-nevada',
    title: 'Can You Get Free Solar in Nevada? The Honest Answer',
    description: 'No, there is no truly free solar in Nevada — but Nevada\'s tax exemptions, net metering, and $0-down financing get close. Here is exactly what is real and what is a sales gimmick.',
    publishDate: '2026-05-18',
    tags: ['Nevada', 'Cost & Financing', 'Tax Credit'],
    body: `<p>No, there is no genuinely free solar in Nevada. Any company advertising "free solar panels" is selling you either a $0-down loan or a lease — you still pay, just monthly instead of upfront. What <em>is</em> real: Nevada's sales-tax exemption on solar equipment, the property-tax exemption on added home value, 75% net metering locked for 20 years, and financing that can make solar cash-flow positive from month one. (Note: the 30% federal tax credit ended December 31, 2025 for systems you buy — only leases and PPAs can still tap a federal incentive, through 2027.) That is the honest version.</p>

<h2>Where the "free solar" claim comes from</h2>
<p>Door-to-door reps and online ads lean on the word "free" because it gets attention. What they actually mean is one of three things, and none of them are free:</p>
<ul>
<li><strong>$0-down loan:</strong> You own the system, but you finance 100% of it. The dealer fee — usually 18–28% of system cost — is baked into the loan balance.</li>
<li><strong>Solar lease:</strong> A third party owns the panels on your roof. You pay them monthly. They own the system, so any surviving federal incentive (available to leases/PPAs through 2027) goes to them, not you.</li>
<li><strong>Power Purchase Agreement (PPA):</strong> You buy the electricity the panels produce at a set rate. Again, you don't own anything, so any federal incentive flows to the third-party owner.</li>
</ul>
<p>"Free" usually means "no money today." It never means "no cost."</p>

<h2>What Nevada homeowners actually get</h2>
<p>The incentives below are real, automatic, and don't require a special program or a waiting list:</p>
<ul>
<li><strong>Nevada sales-tax exemption:</strong> Solar equipment is exempt from Nevada sales tax — about 8.375% in Clark County — applied right at purchase. On a $22,000 system that's roughly $1,800 you simply don't pay.</li>
<li><strong>Nevada property-tax exemption:</strong> Solar raises your home value, but Nevada doesn't reassess your property taxes for it. Codified in <a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">NRS 361.079</a>.</li>
<li><strong>NV Energy net metering:</strong> Excess production earns bill credits at 75% of retail, locked for 20 years, so the panels keep working for you even when you're not home.</li>
</ul>
<p>One thing that's no longer on the list: the 30% federal tax credit. It expired December 31, 2025 for systems you buy. Leases and PPAs can still capture a federal incentive through 2027, but you don't own those panels.</p>

<h2>Is there a free-solar program for low-income homeowners?</h2>
<p>Nevada does not run a statewide "free panels" program. There are federal weatherization and energy-assistance programs that can lower a household's energy burden, but they don't install rooftop solar for free. If a salesperson tells you the government will pay for your whole system, that's a red flag — ask for it in writing and watch them backpedal.</p>

<h2>The closest thing to free: a system that pays for itself</h2>
<p>Here's the version that's actually achievable. With Las Vegas getting 290+ sun days a year and NV Energy rates climbing, a right-sized financed system can have a monthly loan payment lower than the NV Energy bill it replaces. You're not paying nothing — but you're not paying <em>more</em> than you already were, and after the loan is done you own free electricity for 15+ years. See the full math on my <a href="/blog/solar-payback-period-las-vegas">payback period</a> page.</p>

<h2>How to evaluate a "free solar" pitch</h2>
<p>Ask three questions and the gimmick falls apart fast: Do I own the system? Are you quoting a lease or PPA (the only structures with a federal incentive left, through 2027)? What is the dealer fee on this loan? If the rep can't answer all three clearly and in writing, walk away.</p>

<p>I quote cash and financed side by side so you see every number — no "free" language, just the real cost and the real savings. <a href="/#get-quote">Get a straight quote here</a>.</p>`,
    faqs: [
      {
        question: 'Can you really get free solar panels in Nevada?',
        answer: 'No. There is no truly free solar in Nevada. Companies advertising "free solar" are offering a $0-down loan, a lease, or a power purchase agreement — in every case you still pay, just monthly instead of upfront. What does cut the real cost of a system you own are Nevada\'s sales-tax exemption on equipment, the property-tax exemption on added home value, and 75% net metering. Note the 30% federal tax credit ended December 31, 2025 for purchased systems; only leases and PPAs can still tap a federal incentive, through 2027.'
      },
      {
        question: 'Does Nevada have a free solar program for low-income homeowners?',
        answer: 'Nevada does not run a statewide program that installs free rooftop solar. There are federal weatherization and energy-assistance programs that help lower household energy costs, but they do not pay for solar panel systems. Any salesperson claiming the government will cover your entire system should be asked to put that in writing.'
      },
      {
        question: 'What is the difference between $0-down solar and free solar?',
        answer: '$0-down solar means you finance 100% of the system cost — you owe the full amount plus interest and a dealer fee, you just pay nothing on day one. Free solar would mean no cost at all, which does not exist. $0-down can still be a smart deal if the loan payment is lower than your current NV Energy bill — especially as NV Energy rates keep rising — but it is financing, not a giveaway.'
      },
      {
        question: 'What solar incentives can Nevada homeowners actually claim?',
        answer: 'Nevada homeowners who buy a system benefit from Nevada\'s sales-tax exemption on solar equipment (about 8.375% in Clark County, applied at purchase), the property-tax exemption on the added home value (NRS 361.079), and NV Energy net-metering bill credits at 75% of retail, locked for 20 years. These are automatic and do not require a special application. The 30% federal tax credit is no longer available for purchased systems — it expired December 31, 2025; only leases and PPAs can still capture a federal incentive, through 2027.'
      },
    ],
  },
  {
    slug: 'are-solar-panels-worth-it-nevada',
    title: 'Are Solar Panels Worth It in Nevada in 2026?',
    description: 'For most owner-occupied Nevada homes, yes — 290+ sun days, rising NV Energy rates, and Nevada\'s tax exemptions make solar worth it. Here is when it works and when it does not.',
    publishDate: '2026-05-17',
    tags: ['Nevada', 'Las Vegas', 'Decision'],
    body: `<p>For most owner-occupied homes in Nevada, yes — solar is worth it in 2026. Las Vegas gets 290+ sunny days a year, NV Energy rates have risen multiple times since 2023 (up about 9.5% in the past year, to roughly 17.45¢/kWh), and Nevada's sales- and property-tax exemptions plus 75% net metering cut the real cost of a system you own. A right-sized cash system typically pays for itself in roughly 9–12 years now that the 30% federal credit has ended — though NV Energy's rising rates keep pulling that number down — then delivers many more years of near-free power. It is not worth it for everyone, though — the details below decide it.</p>

<h2>When solar is worth it in Nevada</h2>
<p>Solar pencils out clearly when these conditions line up:</p>
<ul>
<li><strong>You own the home</strong> and plan to stay at least 5–7 years.</li>
<li><strong>Your NV Energy bill is $130+ per month.</strong> The higher your bill, the faster the payback.</li>
<li><strong>Your roof faces anywhere but full north</strong> and isn't heavily shaded — south, west, and east all produce well in Las Vegas sun.</li>
<li><strong>You want to lock in your power cost</strong> against NV Energy's rising rates rather than rent electricity from the utility forever.</li>
</ul>

<h2>When solar is not worth it</h2>
<p>I tell homeowners to wait — or skip it — when:</p>
<ul>
<li>You're planning to sell within a year or two and would finance the system.</li>
<li>Your roof needs replacement first. Always re-roof before you go solar, or you'll pay to remove and reinstall panels later.</li>
<li>Your NV Energy bill is genuinely small (under ~$80/month). The savings won't outrun the cost.</li>
<li>The only offer on the table is an oversized, heavily financed system designed to export everything to the grid.</li>
</ul>

<h2>The Nevada-specific math</h2>
<p>Nevada is one of the best solar states in the country on raw sunlight. The thing that changed the math is NV Energy. Rate increases mean the electricity solar offsets is worth more every year — so the same system saves more in 2026 than it would have in 2021. NV Energy still credits exported solar through net metering, just below retail rate, which is why a right-sized system that consumes most of its own power on-site beats an oversized one. Full breakdown on my <a href="/blog/nv-energy-rate-hikes-solar-hedge">NV Energy rate hedge</a> page.</p>

<h2>Does a battery change whether it's worth it?</h2>
<p>A battery isn't required for solar to be worth it in Nevada, but it strengthens the case — it stores cheap midday production for expensive evening use and keeps your lights on during outages. For most of my Vegas clients, one battery is the sweet spot; a second one rarely pays back. See <a href="/blog/solar-inverters-string-vs-microinverter">equipment choices</a> for how the system is built.</p>

<h2>The honest bottom line</h2>
<p>If you own your Las Vegas or Henderson home, have a real NV Energy bill, and aren't about to move — solar is worth it, and the 2026 numbers are better than they were a few years ago. If you're financing a system bigger than your home needs, it's not. The difference is the design, not the technology.</p>

<p>Want your actual numbers instead of an industry average? <a href="/#get-quote">Get a free, no-pressure analysis</a> and I'll show you the payback math for your specific home.</p>`,
    faqs: [
      {
        question: 'Are solar panels worth it in Nevada in 2026?',
        answer: 'For most owner-occupied Nevada homes, yes. Las Vegas gets 290+ sunny days per year, NV Energy rates have risen repeatedly since 2023, and Nevada\'s sales- and property-tax exemptions plus 75% net metering reduce the real cost of a system you own. A right-sized cash system typically reaches payback in roughly 9–12 years now that the 30% federal credit has ended — though NV Energy\'s rising rates keep pulling that number down — and then delivers many more years of near-free electricity. It is less worth it for homeowners about to move or those with very low electric bills.'
      },
      {
        question: 'What is the solar payback period in Las Vegas?',
        answer: 'A properly sized cash-purchased solar system in Las Vegas typically pays for itself in roughly 9–12 years now that the 30% federal credit has ended — though NV Energy\'s rising rates keep pulling that number down. Financed systems take longer because of the dealer fee built into the loan. After payback, the system produces essentially free electricity for the remainder of its 25-plus-year lifespan.'
      },
      {
        question: 'When is solar not worth it in Nevada?',
        answer: 'Solar is generally not worth it if you plan to sell your home within a year or two and would finance the system, if your roof needs replacement first, if your NV Energy bill is under roughly $80 per month, or if the only offer is an oversized heavily financed system designed to export all its power to the grid at reduced net-metering rates.'
      },
      {
        question: 'Do I need a battery for solar to be worth it in Nevada?',
        answer: 'No, a battery is not required for solar to be worth it in Nevada. Solar without storage still offsets daytime usage and earns net-metering credits. A battery strengthens the case by storing inexpensive midday production for expensive evening use and providing backup power during outages. For most Las Vegas homes, a single battery is the cost-effective choice.'
      },
    ],
  },
  {
    slug: 'why-nv-energy-bill-so-high',
    title: 'Why Your NV Energy Bill Is So High — and How Solar Fixes It',
    description: 'Your NV Energy bill is high because of repeated rate increases, summer cooling demand, and tiered pricing. Here is what is driving it and how solar locks in your cost.',
    publishDate: '2026-05-16',
    tags: ['Nevada', 'Las Vegas', 'Cost & Financing'],
    body: `<p>Your NV Energy bill is high for three reasons: NV Energy has raised rates multiple times since 2023, Las Vegas summers force air conditioners to run for months straight, and rate structures charge more as you use more. Solar fixes the first and third problems by generating your own power and locking in your cost — instead of paying whatever NV Energy charges next year, you pay your fixed system cost.</p>

<h2>What's actually driving your bill up</h2>
<ul>
<li><strong>Rate increases:</strong> NV Energy has gone through several rate adjustments since 2023. Fuel costs, grid investment, and demand growth all flow through to your per-kWh price.</li>
<li><strong>Summer cooling load:</strong> A Las Vegas home runs its AC hard from roughly May through September. Cooling is the single largest line item on most valley electric bills.</li>
<li><strong>Tiered and time-based pricing:</strong> The more you use — and the more you use during peak hours — the higher your effective rate climbs.</li>
<li><strong>Population growth:</strong> Nevada is one of the fastest-growing states, and more demand on the grid puts upward pressure on rates.</li>
</ul>

<h2>Why next year's bill will probably be higher</h2>
<p>Here's the part homeowners miss: even if you change nothing, your bill trends up because the <em>rate</em> trends up. You don't control NV Energy's pricing. That's the real cost of doing nothing — it's not a flat bill, it's an escalating one. More on this in my <a href="/blog/nv-energy-rate-hikes-solar-hedge">NV Energy rate hedge</a> breakdown.</p>

<h2>How solar fixes it</h2>
<p>Solar attacks the bill from two directions:</p>
<ul>
<li><strong>It replaces utility power with your own.</strong> Every kWh your panels produce is a kWh you don't buy from NV Energy at their rising rate.</li>
<li><strong>It converts a variable cost into a fixed one.</strong> A cash system has a known, one-time cost. A financed system has a fixed monthly payment. Either way, you stop riding NV Energy's rate escalator.</li>
</ul>
<p>Does NV Energy buy back excess solar? Yes — through net metering, surplus production earns bill credits, though below the retail rate. That's why a right-sized system that uses most of its own power on-site beats an oversized one.</p>

<h2>What about the part of the bill solar can't remove</h2>
<p>NV Energy charges a basic service fee for staying connected to the grid, and solar doesn't eliminate that small fixed charge. What solar removes is the large, growing usage portion — the part that actually makes your bill hurt in July.</p>

<h2>The simple way to think about it</h2>
<p>Without solar, you rent your electricity from NV Energy forever, at a price they set. With solar, you buy your electricity once. In a 290-sun-day city with rising rates, that trade gets better every year. Compare your options on my <a href="/solar-las-vegas">Las Vegas solar</a> page.</p>

<p>Want to see exactly how much of your NV Energy bill solar would erase? <a href="/#get-quote">Get a free savings analysis</a> and I'll run your numbers.</p>`,
    faqs: [
      {
        question: 'Why is my NV Energy bill so high?',
        answer: 'NV Energy bills are high in 2026 because of repeated rate increases since 2023, heavy summer air-conditioning demand in the Las Vegas valley, and tiered or time-based pricing that charges more as you use more. Nevada\'s fast population growth also adds demand to the grid. Most of these factors push the per-kWh rate upward year over year, so bills tend to rise even when household usage stays flat.'
      },
      {
        question: 'Does NV Energy buy back solar power?',
        answer: 'Yes. Through net metering, NV Energy credits homeowners for excess solar electricity sent to the grid, though the credit rate is below the retail price you pay for power. Because exported power is credited at a reduced rate, a correctly sized system that consumes most of its production on-site delivers better economics than an oversized system built to export everything.'
      },
      {
        question: 'How does solar lower my NV Energy bill?',
        answer: 'Solar lowers your bill in two ways. First, every kilowatt-hour your panels produce is one you no longer buy from NV Energy at their rising rate. Second, it converts a variable, escalating utility cost into a fixed cost — a one-time cash price or a fixed monthly loan payment — so you stop being exposed to future rate increases.'
      },
      {
        question: 'Will solar eliminate my NV Energy bill completely?',
        answer: 'Solar can eliminate most of your NV Energy bill but usually not all of it. NV Energy charges a small fixed basic service fee for remaining connected to the grid, and solar does not remove that charge. What solar removes is the large, growing usage portion of the bill — the part driven by air conditioning and rising rates.'
      },
    ],
  },
  {
    slug: 'best-solar-company-las-vegas',
    title: 'Who Is the #1 Solar Company in Las Vegas?',
    description: 'There is no single official #1 solar company in Las Vegas — but here are the criteria that actually separate a great installer from a sales operation.',
    publishDate: '2026-05-15',
    tags: ['Las Vegas', 'Decision', 'Nevada'],
    body: `<p>There is no official "#1 solar company in Las Vegas" — no agency ranks them, and any company claiming the title is marketing, not fact. What actually matters is whether an installer is properly licensed, quotes honest cash and financed pricing, right-sizes the system to your home, and stands behind a written production guarantee. Judge installers on those criteria, not on a self-awarded number.</p>

<h2>Why "the #1 company" is the wrong question</h2>
<p>Solar in Las Vegas is a crowded market — national brands with heavy ad budgets, regional installers, and door-to-door sales operations all compete here. "Best" depends on what you need: the company with the lowest per-watt price isn't automatically the one with the best service, and the most-advertised name isn't automatically the most honest. A better question: which installer will quote me straight and design the right system?</p>

<h2>The criteria that actually separate good from bad</h2>
<ul>
<li><strong>Proper licensing.</strong> Nevada solar work should be done under the correct state contractor license. Verify it — don't assume it.</li>
<li><strong>Honest pricing.</strong> A trustworthy installer shows cash and financed numbers side by side, with the dealer fee on financed deals disclosed in writing.</li>
<li><strong>Right-sizing.</strong> The system should match your home's actual usage. Oversized systems that export everything to the grid lose money under NV Energy net metering.</li>
<li><strong>Itemized quotes.</strong> Panels, inverter, racking, labor, and permits broken out — not a single monthly payment with no detail.</li>
<li><strong>Written production guarantee.</strong> A 25-year production estimate sourced from NREL or PVWatts, in writing.</li>
<li><strong>Local reputation.</strong> Real reviews from real Las Vegas homeowners, not a national average.</li>
</ul>

<h2>National brand vs local installer</h2>
<p>National brands offer scale and name recognition but typically carry higher prices because of ad spend and large sales teams. Local installers with referral-driven pipelines usually quote lower and stay reachable after the install. Neither is automatically "#1" — but the cost difference on identical equipment can run several thousand dollars. See how I think about this in <a href="/solar-agent-vs-solar-company">solar agent vs. solar company</a>.</p>

<h2>How to actually pick</h2>
<p>Get two or three quotes. Put them side by side on per-watt cash price, equipment tier, and total all-in cost (with Nevada's sales-tax exemption applied). Ask each rep the three questions that expose a weak offer: Am I buying or leasing? What's the dealer fee? Where does the production estimate come from? The honest installer answers all three without flinching.</p>

<h2>Where I fit in</h2>
<p>I'm Daniel Hadobas, a licensed solar energy specialist serving the Las Vegas valley. I quote cash and financed side by side, right-size every system to the home, and put the production math in writing. I'd rather lose a sale to an honest comparison than win one on a confusing pitch. More on my <a href="/about">about</a> page.</p>

<p>Want a quote you can actually compare against the others? <a href="/#get-quote">Get a free, itemized analysis here</a>.</p>`,
    faqs: [
      {
        question: 'Who is the #1 solar company in Las Vegas?',
        answer: 'There is no official #1 solar company in Las Vegas — no independent agency ranks solar installers, so any company claiming the title is marketing rather than stating a fact. The better measure is whether an installer is properly licensed in Nevada, provides honest cash and financed pricing, right-sizes the system to your home, gives itemized quotes, and backs a written production guarantee.'
      },
      {
        question: 'How do I choose a good solar installer in Las Vegas?',
        answer: 'Get two or three quotes and compare them side by side on per-watt cash price, equipment tier, and total all-in cost with Nevada\'s sales-tax exemption applied. Verify the installer holds the correct Nevada contractor license, ask whether you are buying or leasing, ask what the dealer fee is on any financed offer, and confirm the production estimate is sourced from NREL or PVWatts in writing.'
      },
      {
        question: 'Are national solar brands better than local installers in Las Vegas?',
        answer: 'Not necessarily. National brands offer scale and name recognition but typically quote higher prices because of heavy advertising and large sales teams. Local installers with referral-driven pipelines often quote lower and remain easier to reach after installation. On identical equipment, the price difference can be several thousand dollars, so compare itemized quotes rather than brand names.'
      },
      {
        question: 'What questions should I ask a Las Vegas solar salesperson?',
        answer: 'Ask three questions that quickly expose a weak offer: Am I buying or leasing the system? What is the dealer fee on this financed deal? Where does the 25-year production estimate come from? An honest installer answers all three clearly and in writing. Vague or evasive answers are a signal to keep shopping.'
      },
    ],
  },
];
