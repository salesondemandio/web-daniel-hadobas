import { batchMoneyPosts } from './blog-batch-money';
import { batchTechPosts } from './blog-batch-tech';
import { batchLocalPosts } from './blog-batch-local';
import { batchComparePosts } from './blog-batch-compare';
import { batchDecisionPosts } from './blog-batch-decision';
import { batchCasesPosts } from './blog-batch-cases';
import { batchAeoPosts } from './blog-batch-aeo';
import { extraPosts1 } from './blog-extra-1';
import { extraPosts2 } from './blog-extra-2';
import { extraPosts3 } from './blog-extra-3';
import { extraPosts4 } from './blog-extra-4';
import { extraPosts5 } from './blog-extra-5';
import { extraPosts6 } from './blog-extra-6';
import { batchGridPosts } from './blog-batch-grid';
import { newsTahoePosts } from './blog-news-tahoe';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  body: string;
  faqs?: { question: string; answer: string }[];
}

const originalPosts: BlogPost[] = [
  {
    slug: 'solar-panel-cleaning-las-vegas',
    title: 'Do You Need to Clean Your Solar Panels in Las Vegas? (An Honest Answer)',
    description: 'Desert dust can quietly cut your solar output by 10–25%. Here is when Las Vegas panels actually need cleaning, when you can skip it, and why hard water is the real enemy.',
    publishDate: '2026-05-20',
    tags: ['Nevada', 'Maintenance', 'Las Vegas'],
    body: `
<p>Las Vegas sits in one of the dustiest, driest climates in the country. So it's a fair question: are your solar panels quietly losing money under a layer of desert grime? Here's the honest answer — as a solar advisor, not a cleaning company trying to sell you a recurring plan.</p>

<h2>The Short Answer</h2>
<p>Yes, dirty panels lose output. In the Las Vegas desert, dust buildup typically cuts production by <strong>10–25%</strong> if panels go uncleaned for long stretches. That's real money. On a $200/month solar offset, a 20% loss is roughly $40 a month vanishing into a layer of dust.</p>
<p>But here's what most cleaning companies won't tell you: <strong>most Las Vegas homeowners only need cleaning two to four times a year</strong> — and many can do it themselves.</p>

<h2>Why Vegas Is Different From Everywhere Else</h2>
<p>In rainy climates, rain does the cleaning for free. Las Vegas gets under 4 inches of rain a year. That changes everything.</p>
<ul>
  <li><strong>Dust never gets rinsed off.</strong> Fine desert dust settles and stays, especially during windy spring months.</li>
  <li><strong>Summer heat bakes it on.</strong> 110°F surface temps turn light dust into a stubborn film that's harder to remove later.</li>
  <li><strong>Our rain makes it worse, not better.</strong> Las Vegas has notoriously hard water. When a light rain evaporates, it leaves mineral spots behind — so panels can look dirtier after a sprinkle than before.</li>
</ul>

<h2>How to Tell If Your Panels Actually Need Cleaning</h2>
<p>Don't guess — measure. You have two easy checks:</p>
<ul>
  <li><strong>Check your monitoring app.</strong> If your daily production has drifted down 10%+ on clear, sunny days compared to a few months ago, dust is the likely culprit.</li>
  <li><strong>Look at them.</strong> A visible, even coat of dust is normal and barely matters. Bird droppings, hard-water streaks, or caked-on grime in the corners are what actually kill output.</li>
</ul>
<p>A light dusting only costs you a percent or two. It's the heavy, uneven buildup that's worth acting on.</p>

<h2>DIY vs. Hiring a Pro</h2>
<p><strong>You can DIY if</strong> your panels are reachable from the ground or a stable spot, and you use the right method:</p>
<ul>
  <li>Clean early morning or evening — never on hot panels (thermal shock can crack glass).</li>
  <li>Use a soft brush or squeegee on a pole, plain water, and a drop of mild dish soap.</li>
  <li>Skip pressure washers and abrasive pads — they damage the anti-reflective coating.</li>
  <li>Use distilled or filtered water for the final rinse to avoid hard-water spotting.</li>
</ul>
<p><strong>Hire a pro if</strong> your roof is steep, high, or tile, or if you're not comfortable on a ladder. In Las Vegas, expect roughly <strong>$150–$300</strong> for a typical residential cleaning. Walking a tile roof you don't know is the fastest way to crack tiles or get hurt — that's worth paying to avoid.</p>

<h2>What I Tell My Own Clients</h2>
<p>Don't sign up for an aggressive monthly cleaning subscription. It's overkill for almost every Vegas home. A reasonable rhythm:</p>
<ul>
  <li><strong>Twice a year</strong> for most homes — once after spring winds, once before peak summer production.</li>
  <li><strong>Quarterly</strong> if you're near open desert, construction, or a lot of trees.</li>
  <li><strong>As needed</strong> after dust storms or when your app shows a real dip.</li>
</ul>
<p>The goal is protecting your production, not paying for cleanings you don't need.</p>

<h2>The Bottom Line</h2>
<p>Desert dust is real and it does cost you — but the fix is simple and cheap. Watch your production, clean two to four times a year, mind the hard water, and stay off roofs you shouldn't be on. That's it.</p>
<p>If your system isn't producing what it should and you're not sure whether it's dust, shading, or an equipment issue, <a href="/#get-quote">book a free system review</a> and I'll help you figure out where the lost output is going — no sales pitch required.</p>
    `,
    faqs: [
      {
        question: 'How often should I clean solar panels in Las Vegas?',
        answer: 'Most Las Vegas homes only need cleaning two to four times a year — typically once after the windy spring season and once before peak summer production. Homes near open desert, construction, or heavy tree cover may want quarterly cleaning. The best signal is your monitoring app: if clear-day production drops 10% or more, it is time.'
      },
      {
        question: 'Does cleaning solar panels really increase output?',
        answer: 'Yes. In the dry Las Vegas desert, uncleaned panels can lose 10–25% of their production to dust buildup, since there is almost no rain to rinse them. Removing heavy or uneven grime restores that lost output. A light, even coat of dust only costs a percent or two, so you do not need to obsess over it.'
      },
      {
        question: 'Can I clean my own solar panels or should I hire someone?',
        answer: 'You can DIY safely if the panels are reachable from the ground or a stable position — use a soft brush on a pole, plain water with a little mild soap, and clean in the cool morning or evening, never on hot panels. Hire a pro (about $150–$300 in Las Vegas) if your roof is steep, high, or tile, where the risk of cracking tiles or falling outweighs the cost.'
      },
      {
        question: 'Why do my solar panels look dirty after it rains in Las Vegas?',
        answer: 'Las Vegas has very hard water. When a light rain evaporates off your panels, it leaves mineral deposits and spotting behind — so panels can actually look worse after a sprinkle. That is why a final rinse with distilled or filtered water matters when you clean them.'
      },
    ],
  },
  {
    slug: 'solar-cost-las-vegas-2025',
    title: 'How Much Do Solar Panels Cost in Las Vegas in 2025?',
    description: 'A straight answer on Las Vegas solar costs in 2025 — before and after incentives, monthly savings, payback timeline, and what to watch out for.',
    publishDate: '2025-01-15',
    tags: ['Nevada', 'Cost & Financing', 'Las Vegas'],
    body: `
<p>If you're shopping for solar in Las Vegas, you've probably gotten a range of quotes that feel confusing — and maybe a few sales pitches that didn't quite add up. Here's a straight answer on what solar actually costs in Las Vegas in 2025, what you'll save, and how to evaluate whether the investment makes sense for your home.</p>

<h2>The Raw Numbers: What Solar Costs Before Incentives</h2>
<p>The industry benchmark for residential solar in Las Vegas is approximately <strong>$2.85 per watt</strong> for a fully installed system — panels, inverter, racking, electrical work, permits, and installation. That number varies based on the installer, equipment brand, and roof complexity, but $2.80–$3.00/watt is the realistic range for quality systems.</p>
<p>For a typical Las Vegas home:</p>
<ul>
  <li><strong>5 kW system:</strong> $14,250 before incentives</li>
  <li><strong>6 kW system:</strong> $17,100 before incentives</li>
  <li><strong>7 kW system:</strong> $19,950 before incentives</li>
  <li><strong>8 kW system:</strong> $22,800 before incentives</li>
</ul>
<p>Most Las Vegas homes land in the 6–7 kW range based on their electricity usage and roof size.</p>

<h2>What You Actually Pay: The Federal Credit Has Ended</h2>
<p>Here's the big 2026 change: the 30% federal Investment Tax Credit (ITC) <strong>expired December 31, 2025</strong> under the One Big Beautiful Bill Act. If you buy your system with cash or a loan, there's no longer a 30% federal reduction. So your cash price is essentially the sticker price — with Nevada's sales-tax exemption already baked in.</p>
<p>What you pay today, cash:</p>
<ul>
  <li><strong>6 kW system:</strong> $17,100 (cash, after Nevada's sales-tax exemption)</li>
  <li><strong>7 kW system:</strong> $19,950</li>
</ul>
<p>One exception: lease and PPA (third-party-owned) systems can still capture a federal incentive through the end of 2027, since that credit flows to the system owner, not you. For an owned system, lean on Nevada's surviving incentives instead — the sales-tax exemption already saves you roughly $1,400–$1,900 at purchase, and net metering plus the property-tax exemption do the rest.</p>

<h2>Nevada's Additional Incentives</h2>
<p>With the federal credit gone for purchases, Nevada's two automatic incentives carry more weight than ever:</p>
<p><strong>Nevada Property Tax Exemption:</strong> The added value your solar system brings to your home is fully exempt from property tax assessment. Your home's market value goes up, but your tax bill doesn't increase because of solar.</p>
<p><strong>Nevada Sales Tax Exemption:</strong> Solar equipment purchased in Nevada is exempt from the 8.375% state and county sales tax. That's an additional $1,200–$1,900 in savings on a typical system — applied automatically at purchase.</p>
<p>With the federal credit gone for owned systems, these Nevada exemptions are now the core of your savings — and they require no extra paperwork beyond your normal tax filing.</p>

<h2>Monthly Savings: What to Expect</h2>
<p>The average Las Vegas household spends about <strong>$160 per month on electricity</strong> from NV Energy. Current NV Energy rates are approximately $0.125 per kilowatt-hour. With 290+ sunny days per year, a properly sized system can eliminate most or all of that bill.</p>
<p>Realistic monthly savings ranges:</p>
<ul>
  <li><strong>Small home / low usage:</strong> $100–$150/month</li>
  <li><strong>Average home / average usage:</strong> $150–$250/month</li>
  <li><strong>Larger home / pool / EV:</strong> $250–$400/month</li>
</ul>
<p>NV Energy's net metering program credits you at 75% of the retail rate for excess power your panels produce. Those credits roll forward and offset future bills — especially useful in spring and fall when your panels overproduce relative to your usage.</p>

<h2>Payback Period</h2>
<p>Expect roughly <strong>9–12 years for a cash purchase now that the 30% federal credit has ended</strong> — though NV Energy's rising rates keep pulling that number down. Cash purchases pay back faster than financed systems; a $0-down loan can still show positive monthly cash flow from day one if your payment beats your current bill.</p>
<p>After payback, you have well over a decade of essentially free electricity — most panels carry 25-year production warranties. Over that period, the typical Las Vegas homeowner accumulates <strong>$51,532 in lifetime energy savings</strong> on their utility bills.</p>

<h2>Financing Options</h2>
<ul>
  <li><strong>Cash purchase:</strong> Best long-term ROI, shortest payback</li>
  <li><strong>$0 down solar loan:</strong> Monthly payment often less than current utility bill; you own the system and keep Nevada's exemptions and net-metering value</li>
  <li><strong>Lease/PPA:</strong> Lower upfront risk and you don't own the system — but it's the one path that can still capture a federal incentive through the end of 2027, since that credit goes to the system owner</li>
</ul>

<h2>What to Watch Out For</h2>
<p><strong>Oversized systems:</strong> Some installers push larger systems to increase their revenue. A properly sized system covers your needs — not 40% more than your needs.</p>
<p><strong>Long-term leases:</strong> A 25-year lease can complicate your home sale and the terms often favor the installer, not you.</p>
<p><strong>Door-to-door pressure:</strong> If someone is pressuring you to sign today, walk away. The real urgency isn't a credit deadline — it's NV Energy's rising rates. Locking in your own generation cost is the hedge, and you have time to compare proposals.</p>

<h2>The Bottom Line</h2>
<p>For most Las Vegas homeowners who own their home, have adequate roof space, and a reasonable credit score, solar makes financial sense. The combination of 290+ annual sunny days, rising NV Energy rates, and Nevada's tax incentives puts Las Vegas near the top of the national solar opportunity list.</p>
<p>If you want to see the actual numbers for your home — based on your real utility bill, your roof's sun exposure, and current financing options — <a href="/#get-quote">book a free consultation</a>. No pressure, no obligation, just honest math.</p>
    `,
    faqs: [
      {
        question: 'Is $0 down solar real or a gimmick?',
        answer: '$0 down solar loans are real financing products offered by solar-specific lenders like Mosaic, Goodleap, and Service Finance. You borrow the full system cost and repay it monthly. The key is that your monthly loan payment is typically lower than your current electric bill, so you save money immediately while building equity in a home improvement.'
      },
      {
        question: 'What is the best time of year to go solar in Las Vegas?',
        answer: 'Any time is a good time — Las Vegas averages 294 sunny days per year, so seasonality barely matters. However, permit processing times are shortest in fall and winter. If you want to be generating by summer (when NV Energy bills peak), sign your contract by February or March.'
      },
    ],
  },
  {
    slug: 'nv-energy-net-metering-explained',
    title: 'NV Energy Net Metering: What Las Vegas Solar Owners Need to Know',
    description: "How NV Energy net metering works in Nevada — credits, billing cycles, the 75% retail rate, rollover rules, and what it means for your solar savings.",
    publishDate: '2025-02-03',
    tags: ['Nevada', 'Net Metering', 'NV Energy'],
    body: `
<p>If you're going solar in Las Vegas, Henderson, or anywhere else in NV Energy's service territory, you need to understand net metering — it's the mechanism that determines what happens to the electricity your solar panels produce when you can't use it all in real time.</p>

<h2>What Is Net Metering?</h2>
<p>Net metering is a billing arrangement where your utility measures the difference between the electricity you draw from the grid and the electricity you push back to it. When your solar panels are producing more than your home is using — typically midday on sunny days — the surplus flows to the grid and NV Energy credits your account. When your panels aren't producing enough (evenings, cloudy days, peak demand periods), you draw from the grid and use those credits to offset the cost.</p>
<p>The "net" in net metering refers to that difference — you're billed for net consumption, not gross consumption.</p>

<h2>Nevada's Net Metering Rate: 75% of Retail</h2>
<p>Here's the important detail most homeowners don't hear upfront: Nevada's net metering program credits your exported power at <strong>75% of the retail rate</strong>, not the full retail rate.</p>
<p>In practice, that means:</p>
<ul>
  <li>If NV Energy charges you $0.125/kWh to buy electricity</li>
  <li>Your excess solar exports are credited at approximately <strong>$0.094/kWh</strong></li>
  <li>That's a 25% haircut on the value of power you send to the grid</li>
</ul>
<p>This is different from some other states that offer full retail-rate net metering. The 75% rate was established by the Nevada Public Utilities Commission following a contentious policy battle in 2016. It's the law for new solar customers in Nevada today.</p>
<p><strong>What this means practically:</strong> Right-sizing your system is important. A system that produces exactly what your home uses over the course of a year is more valuable than an oversized system that exports a lot of excess at a discounted rate.</p>

<h2>How NV Energy Net Metering Credits Work</h2>
<p>Your solar production and grid consumption are tracked on the same meter. Here's how the billing cycle works:</p>
<ol>
  <li><strong>Monthly billing:</strong> Each month, NV Energy calculates your net usage. If you consumed more than you produced, you pay the difference. If you produced more than you consumed, you receive a credit on your account.</li>
  <li><strong>Credit rollover:</strong> Excess credits roll forward from month to month. They don't expire on a monthly basis — they accumulate in your account.</li>
  <li><strong>Annual true-up:</strong> Each year, NV Energy does a reconciliation. Any excess credits in your account at the end of the 12-month period are paid out to you at a lower rate (the "excess generation" rate, which is lower than the 75% net metering rate). This is why it's better to size your system to roughly match your annual consumption rather than dramatically exceed it.</li>
  <li><strong>Tiered rates:</strong> NV Energy uses a tiered rate structure. The net metering credit rate varies slightly depending on which rate tier applies to the excess generation. Your solar advisor can walk you through the specific numbers for your usage level.</li>
</ol>

<h2>System Size Requirements</h2>
<p>To qualify for NV Energy's net metering program, your system must:</p>
<ul>
  <li>Be <strong>25 kW or smaller</strong> (covers all standard residential installations)</li>
  <li>Be installed by a licensed Nevada contractor</li>
  <li>Pass NV Energy's interconnection application process</li>
</ul>
<p>Virtually all residential solar systems qualify. The 25 kW cap only becomes relevant for very large homes or small commercial properties.</p>

<h2>The Interconnection Process</h2>
<p>Before your solar panels can connect to the grid and begin receiving net metering credits, your installer must complete NV Energy's interconnection application. The timeline typically runs 2 to 6 weeks after installation is complete. During that window, your system is fully installed but not yet feeding excess power to the grid.</p>
<p>Your installer handles the application — this is not something you do yourself. A good installer will have established relationships with NV Energy's interconnection team and manage the timeline efficiently.</p>

<h2>Solar-Only vs. Battery + Solar in Nevada</h2>
<p>Nevada's net metering program makes solar-only systems viable in ways that California's NEM 3.0 does not. Because Nevada still credits exports at 75% of retail (not the 6–8 cents/kWh California uses), the economics of a solar-only system in Las Vegas are strong.</p>
<p>Battery storage is still worth considering if you want backup power during outages or if you have significant evening usage. But unlike California homeowners, Nevada solar owners aren't financially penalized for exporting — they're just not maximally rewarded for it.</p>

<h2>What To Do With This Information</h2>
<p>The key takeaway for Las Vegas solar buyers is: <strong>don't size your system to maximize exports, size it to minimize your net annual bill</strong>. A system that covers 95–100% of your annual consumption at the 75% net metering rate is more valuable than one that overproduces by 30% and sends the excess to NV Energy at a discount.</p>
<p>When reviewing proposals, ask your solar advisor to show you the projected annual net metering credit vs. grid consumption balance. If they're recommending an oversized system without a clear reason, push back.</p>
<p>Have questions about how net metering would work for your specific home? <a href="/#get-quote">Book a free consultation</a> — I'll run the actual numbers based on your NV Energy bill.</p>
    `,
    faqs: [
      {
        question: 'Does NV Energy pay cash for excess solar?',
        answer: 'Not directly. NV Energy issues bill credits, not checks. At the end of your 12-month true-up period, any remaining credit balance is paid out — but typically at a lower rate than the credits accumulated during the year. This is why right-sizing your system to match your annual usage is important.'
      },
      {
        question: 'What happens to net metering if I sell my house?',
        answer: 'Your net metering account transfers to the new homeowner. They simply notify NV Energy of the ownership change and the account continues under their name at the same rate terms.'
      },
    ],
  },
  {
    slug: 'nevada-solar-tax-credit-2025',
    title: 'Nevada Solar Incentives & Tax Credits in 2025',
    description: 'Every solar incentive available to Nevada homeowners in 2025 — federal ITC, property tax exemption, sales tax exemption, and the new Nevada state program.',
    publishDate: '2025-03-10',
    tags: ['Nevada', 'Tax Credits', 'Incentives'],
    body: `
<p>Nevada is still one of the better states in the country for solar — but the incentive picture changed in 2026. Between two Nevada-specific tax exemptions, NV Energy's net metering program, and a new state incentive introduced in late 2025, there's real money on the table for homeowners who go solar this year. The big shift: the 30% federal credit is gone for systems you buy. Here's a complete breakdown.</p>

<h2>1. Federal Investment Tax Credit (ITC) — Expired December 31, 2025</h2>
<p>The federal solar tax credit — officially the Investment Tax Credit — was the biggest financial incentive for solar homeowners for years. Under the One Big Beautiful Bill Act, it <strong>expired December 31, 2025 for systems a homeowner buys</strong>, whether with cash or a loan. If you purchase your system in 2026, there's no 30% federal credit anymore.</p>
<p><strong>What's left:</strong></p>
<ul>
  <li>The credit is gone for owned (purchased) residential systems as of 2026</li>
  <li>Lease and PPA (third-party-owned) systems can still capture a federal incentive through the end of 2027 — but that credit flows to the system owner, not to you</li>
  <li>For a system you own, your savings now come from Nevada's exemptions and net metering, covered below</li>
</ul>
<p>If you bought and installed your system on or before December 31, 2025, you can still claim the 30% credit on that tax year's return. For everyone buying now, treat the federal credit as closed and build your math around the Nevada incentives instead.</p>

<h2>2. Nevada Property Tax Exemption</h2>
<p>Nevada law (NRS 361.079) exempts the value of a solar energy system from property tax assessment. That means:</p>
<ul>
  <li>Your solar installation increases your home's market value (studies show 3–4% increases)</li>
  <li>But your assessed value for property tax purposes does NOT increase because of solar</li>
  <li>No paperwork required — the exemption is automatic</li>
</ul>
<p>For a Las Vegas home where solar adds $15,000–$25,000 in market value, this exemption saves homeowners <strong>$150–$250 per year</strong> in property taxes they'd otherwise owe — indefinitely, for as long as the system is on the home.</p>

<h2>3. Nevada Sales Tax Exemption</h2>
<p>Solar energy systems in Nevada are exempt from the state sales and use tax under NRS 374.357. Nevada's combined state and county sales tax rate ranges from 6.85% to 8.375% depending on your county. Clark County (Las Vegas/Henderson) is at 8.375%.</p>
<p>On a $18,000 solar system, that exemption saves <strong>$1,508</strong> in sales tax that you simply don't pay. The exemption applies automatically at the point of sale — your installer doesn't charge you sales tax on the equipment. Unlike some other states where you need to file for a rebate or exemption certificate, Nevada's solar sales tax exemption is applied by the installer as a matter of law.</p>

<h2>4. NV Energy Net Metering</h2>
<p>Technically not a tax incentive, but it has real cash value: NV Energy's net metering program credits your account at <strong>75% of the retail rate</strong> for every kilowatt-hour your solar panels produce beyond what your home uses in real time. At current NV Energy rates of ~$0.125/kWh, that's a credit of ~$0.094/kWh. Over a year, a properly sized system can generate $600–$1,200 in net metering credits that offset your utility bills.</p>
<p>See our full <a href="/blog/nv-energy-net-metering-explained">NV Energy Net Metering explainer</a> for details on how the billing cycle works.</p>

<h2>5. New Nevada State Solar Incentive Program (Late 2025)</h2>
<p>In late 2025, Nevada introduced an additional state-level solar incentive program targeting low-to-moderate income homeowners. The program provides <strong>direct rebates of $500–$2,500</strong> depending on household income and system size. Eligibility details and the application process are still being finalized. This is worth asking about if your household income is below 200% of the area median income for Clark County — ask Daniel directly for the most current eligibility and application information.</p>

<h2>How Incentives Stack</h2>
<table>
  <thead><tr><th>Incentive</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td>System cost (6.5 kW), sticker</td><td>$18,525</td></tr>
    <tr><td>Nevada sales tax exemption</td><td>−$1,552</td></tr>
    <tr><td>Cash cost (federal credit no longer available)</td><td><strong>$18,525</strong></td></tr>
    <tr><td>Annual property tax savings</td><td>~$200/yr</td></tr>
    <tr><td>Annual NV Energy savings</td><td>~$1,800–$2,400/yr</td></tr>
  </tbody>
</table>
<p>Over a 25-year system life, the total value of those savings exceeds $51,000 for most Las Vegas homeowners.</p>

<h2>Important: The Federal Credit No Longer Applies to Purchases</h2>
<p>For years the ITC was the headline number on every solar quote. As of 2026 it's gone for systems you buy, so don't let anyone fold a 30% federal credit into your purchase math — that money isn't there anymore. If a lease or PPA is on the table, the system owner may still claim a federal incentive through 2027, which can shape the lease pricing they offer you. Talk to a tax professional about your specific situation.</p>

<h2>Bottom Line</h2>
<p>Even without the federal credit, Nevada's property and sales tax exemptions plus NV Energy net metering keep the state a strong place to go solar. With NV Energy rates up about 9.5% in the past year to roughly 17.45¢/kWh, the real win is locking in your own generation cost as a hedge against rising rates — not chasing a credit that's expired.</p>
<p>Want to see exactly what your incentives are worth based on your specific situation? <a href="/#get-quote">Book a free consultation</a> and I'll run the full analysis for you.</p>
    `,
    faqs: [
      {
        question: 'Can I still get the 30% federal solar tax credit in Nevada?',
        answer: "Not for a system you buy. The 30% federal ITC expired December 31, 2025 under the One Big Beautiful Bill Act and is no longer available for purchased residential systems. The only exception is a lease or PPA, where the third-party owner may still claim a federal incentive through the end of 2027. If you owned and installed your system on or before December 31, 2025, you can still claim it on that tax year's return."
      },
      {
        question: 'Does Nevada have a state solar tax credit?',
        answer: "Nevada doesn't have a state income tax credit for solar. With the 30% federal ITC now expired for purchased systems, your savings come from Nevada's sales tax exemption, property tax exemption, and NV Energy net metering — which together still make Nevada a strong solar state, especially as utility rates keep climbing."
      },
    ],
  },
  {
    slug: 'california-solar-incentives-2025',
    title: 'California Solar Incentives in 2025: NEM 3.0, SGIP, and the Federal Tax Credit',
    description: 'A complete guide to California solar incentives in 2025 — NEM 3.0 export rates, SGIP battery rebates, the federal ITC, and what\'s different for LA, San Diego, and Riverside.',
    publishDate: '2025-04-15',
    tags: ['California', 'Incentives', 'NEM 3.0'],
    body: `
<p>California solar has a reputation as the gold standard — and it mostly deserves it, though the rules changed significantly in 2023. If you're considering solar in Los Angeles, San Diego, or Riverside, here's everything you need to know about the current incentive landscape.</p>

<h2>The Big Picture: What Changed in April 2023</h2>
<p>Until April 2023, California operated under <strong>NEM 2.0</strong> — a net metering framework that compensated solar homeowners at or near the full retail rate for every kilowatt-hour they exported to the grid. With SDG&amp;E charging $0.40/kWh and SCE charging $0.30–$0.35/kWh, that was an extremely generous deal.</p>
<p><strong>NEM 3.0 changed that.</strong> The California Public Utilities Commission (CPUC) replaced retail-rate export compensation with "Avoided Cost Calculator" (ACC) rates, which currently average <strong>$0.06 to $0.08 per kWh</strong> — a reduction of roughly 75% in the value of exported solar power.</p>
<p><strong>The solution:</strong> design for self-consumption, not export. Solar plus battery storage is now the recommended approach for California homeowners, and the incentive structure has evolved to support it.</p>

<h2>Federal Investment Tax Credit (ITC) — Expired December 31, 2025</h2>
<p>The 30% federal ITC <strong>expired December 31, 2025</strong> under the One Big Beautiful Bill Act — in California exactly as everywhere else. For a system you buy with cash or a loan, there's no longer a 30% federal credit on your panels, battery, inverter, or installation. If you bought and installed on or before December 31, 2025, you can still claim it on that return.</p>
<p>One path survives: lease and PPA (third-party-owned) systems can still capture a federal incentive through the end of 2027, since that credit goes to the system owner. For owned systems, California's own programs below — SGIP and NEM 3.0 — are now the heart of the math, and they're unchanged.</p>
<table>
  <thead><tr><th>System type</th><th>Installed cost (sticker)</th></tr></thead>
  <tbody>
    <tr><td>7 kW solar only (LA)</td><td>$22,400</td></tr>
    <tr><td>7 kW solar + 13.5 kWh battery</td><td>$33,000</td></tr>
    <tr><td>8 kW solar + 13.5 kWh battery (SD)</td><td>$36,000</td></tr>
  </tbody>
</table>
<p>These are pre-incentive sticker prices. The federal credit no longer reduces them for a purchase, so for owned systems your savings come from SGIP, self-consumption under NEM 3.0, and the property tax exclusion.</p>

<h2>SGIP: California's Battery Storage Rebate</h2>
<p>The <strong>Self-Generation Incentive Program (SGIP)</strong> is California's battery storage incentive. The program is administered by the state's major utilities (SCE, SDG&amp;E, PG&amp;E, SoCalGas) and provides upfront rebates for qualifying battery storage installations.</p>
<p><strong>Standard budget rebates:</strong> $200–$400 per kWh of usable battery capacity. For a 13.5 kWh Powerwall, that's $2,700–$5,400.</p>
<p><strong>Equity budget rebates:</strong> For income-qualified households (under 80% of area median income) and residents in Tier 2 or Tier 3 high fire hazard severity zones, the rebate increases to <strong>$850–$1,000 per kWh</strong>. For a 13.5 kWh Powerwall under the equity budget, that's <strong>$11,475–$13,500 in rebates</strong> — and with the federal ITC now expired for purchases, SGIP is the largest incentive most California buyers will see.</p>
<p>SGIP availability varies by utility territory and budget cycle. SCE and SDG&amp;E equity budgets are currently available; standard budget waitlists exist in some areas.</p>

<h2>California Property Tax Exclusion</h2>
<p>California provides a property tax exclusion for active solar energy systems under Revenue and Taxation Code Section 73. The exclusion prevents solar from triggering a Prop 13 reassessment — meaning your home's assessed value for property tax purposes doesn't increase because you added solar. As of 2025, it remains in effect through at least 2027. For California homeowners where a solar-plus-battery system can add $20,000–$40,000 in market value, this exclusion saves $200–$500 per year in property taxes.</p>

<h2>NEM 3.0 by Utility</h2>
<p><strong>SCE (serving most of Riverside, parts of LA):</strong> NEM 3.0 ACC export rates average $0.06–$0.08/kWh. Time-of-use rates apply — the smartest solar design optimizes around the peak/off-peak rate differential.</p>
<p><strong>SDG&amp;E (serving San Diego):</strong> Same NEM 3.0 framework, same ACC export rates. But SDG&amp;E's retail rates are the highest in the continental US at $0.40+/kWh, which means the electricity you self-consume is worth twice as much as in other markets. NEM 3.0 actually hurts less in San Diego — the self-consumption savings are so high.</p>
<p><strong>LADWP (serving City of LA):</strong> LADWP operates under its own net metering program, separate from the CPUC's NEM 3.0 framework. LADWP customers may be on different export rates — confirm with your installer.</p>

<h2>NEM 2.0 Grandfathering</h2>
<p>If you already have solar in California under NEM 2.0 (interconnected before April 14, 2023), you are <strong>grandfathered at NEM 2.0 rates for 20 years from your interconnection date</strong>. Your system continues earning retail-rate export credits. Adding battery storage generally doesn't affect your NEM 2.0 status. If you're on NEM 2.0, don't touch your interconnection agreement — it's extremely valuable.</p>

<h2>Should You Still Go Solar in California?</h2>
<p>Yes — the economics still work, especially with battery storage. California has the highest electricity rates in the continental US in most metro areas, and those rates are rising every year. Even with the federal ITC expired for purchases, SGIP alone can offset a large share of a solar-plus-battery system cost for qualifying households, and the value of self-consumption under NEM 3.0 keeps climbing as rates rise.</p>
<p>The key is designing the system correctly for NEM 3.0: right-sized solar array, adequate battery capacity, and a system tuned for self-consumption rather than export.</p>
<p><a href="/#get-quote">Book a free consultation</a> and I'll show you exactly how the numbers work for your specific home, utility, and situation in California.</p>
    `,
    faqs: [
      {
        question: 'Is solar still worth it in California under NEM 3.0?',
        answer: "Yes — but the math is different. Under NEM 2.0, oversized systems with high export made sense. Under NEM 3.0, the winning strategy is self-consumption + battery storage. A well-designed system with a battery can still deliver 70–85% reduction in utility bills, especially for SDG&E customers paying $0.40+/kWh."
      },
      {
        question: 'Should I get battery storage with my California solar system?',
        answer: "Under NEM 3.0, battery storage shifts from optional to highly recommended. Without a battery, midday excess production earns only $0.02–0.08/kWh. With a battery, that same energy offsets $0.35–0.50/kWh of evening usage. The payback on battery addition in California is typically 5–7 years under NEM 3.0."
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  ...originalPosts,
  ...batchMoneyPosts,
  ...batchTechPosts,
  ...batchLocalPosts,
  ...batchComparePosts,
  ...batchDecisionPosts,
  ...batchCasesPosts,
  ...batchAeoPosts,
  ...extraPosts1,
  ...extraPosts2,
  ...extraPosts3,
  ...extraPosts4,
  ...extraPosts5,
  ...extraPosts6,
  ...batchGridPosts,
  ...newsTahoePosts,
].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
