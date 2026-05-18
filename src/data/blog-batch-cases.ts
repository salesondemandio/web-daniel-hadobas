import type { BlogPost } from './blog-posts';

export const batchCasesPosts: BlogPost[] = [
  {
    slug: 'case-summerlin-3000-sqft-saved-287-month',
    title: 'A Summerlin Family Saved $287/Month — Here\'s the Math',
    description: 'A 3,000 sqft Summerlin home cut their NV Energy bill from $310 to $23 per month with an 8 kW system. Full numbers, HOA timeline, and what we\'d do differently.',
    publishDate: '2026-01-12',
    tags: ['Case Study', 'Nevada', 'Summerlin', 'Las Vegas'],
    body: `
<p>A family in Summerlin (3,000 sqft, two adults, two kids, no pool) cut their NV Energy bill from <strong>$310/month down to $23/month</strong> with an 8 kW rooftop system after the 30% federal tax credit. The HOA approval took 18 days. Payback hits at year 6.4. They keep saving for the remaining 19 years of the panel warranty. Below is the full breakdown — what I saw at the site visit, what I designed, what surprised them, and what I'd do differently next time.</p>

<h2>The Starting Point</h2>
<p>I drove out to the home on a Tuesday morning. Asphalt-shingle roof, about seven years old, south and west exposures both clean of shade. The family had been in the house six years and watched their summer NV Energy bills creep from $240 in 2020 to $310 in 2025 — and that's not unusual. NV Energy's general residential rate has stepped up in three approved tariffs since 2021, and the Summerlin substation feeds a chunk of the 89135 ZIP that pulls hard during peak summer afternoons.</p>
<p>Their last 12 months of usage averaged 1,140 kWh/month. July hit 2,310 kWh. February dropped to 480 kWh. That spread is what I design for — not the average, but the peak month and the off-season together. If you size to the average, you’ll underbuild the summer and leave the family writing $200 checks in July. If you size to the peak, you’ll overbuild the rest of the year and waste money on production that doesn’t earn its keep under net metering rules. The right answer is to look at all 12 months together and target a sweet spot somewhere around the 80th-percentile month.</p>
<p>The home faced south-southwest, which is essentially ideal for Las Vegas. The roof had a single 5/12 pitch on the production side, no dormers, no skylights, no plumbing vents in the way. From a design standpoint this was a clean canvas — the kind of roof that lets you build the system you actually want, not the compromise the obstructions force on you.</p>

<h2>What We Designed</h2>
<p>An 8 kW system: 20 panels at 400W each, Tier 1 monocrystalline, paired with a string inverter (not microinverters — the roof had no shading issues that justified the cost). No battery. Under <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy's net metering program</a>, excess production credits forward at 75% of retail, which made battery storage a poor financial trade for this household. Their consumption pattern — heavy daytime AC in summer, low evening load — already aligned with solar production.</p>
<p>I considered a 9 kW system briefly. It would have cost about $2,800 more gross and pushed annual production from 13,200 kWh to roughly 14,800 kWh. But the family’s annual consumption was 13,680 kWh, so the larger system would have exported a meaningful chunk at the 75% rate while the smaller system kept almost everything behind the meter. Build to consumption, not to roof real estate. That’s the rule on a clean Summerlin roof.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly NV Energy bill</td><td>$310</td><td>$23</td></tr>
    <tr><td>Annual electric cost</td><td>$3,720</td><td>$276</td></tr>
    <tr><td>Year-1 savings</td><td colspan="2">$3,444</td></tr>
    <tr><td>System cost (gross)</td><td colspan="2">$22,800</td></tr>
    <tr><td>Federal tax credit (30%)</td><td colspan="2">−$6,840</td></tr>
    <tr><td>Net cost after ITC</td><td colspan="2">$15,960</td></tr>
    <tr><td>Simple payback</td><td colspan="2">6.4 years</td></tr>
    <tr><td>25-year lifetime savings (est.)</td><td colspan="2">$92,000+</td></tr>
  </tbody>
</table>
<p>The $23 residual is the NV Energy basic service charge plus a sliver of evening grid usage in winter when production drops. In months with high export credits banked from spring, the bill rounds down further. In peak summer it bumps up to about $40 because evening AC bleeds past the production curve. The family has effectively flattened their bill — the variance month-to-month is now $20, where before it was $250.</p>

<h2>The HOA Part</h2>
<p>Summerlin sub-associations vary, but this one (one of the older Howard Hughes-era plats) requires architectural review for any roof-visible modification. We submitted the standard packet: site plan, elevation drawings, panel layout, datasheet, and proof of contractor licensing. <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a> protects the homeowner's right to install solar — an HOA can regulate placement to a reasonable degree but cannot prohibit it or impose requirements that increase cost or decrease output by more than the statutory threshold.</p>
<p>The committee asked for a setback adjustment from the front edge of the roof. We obliged — it cost us one panel of front-facing real estate, which we made up on the back-facing slope. Eighteen days from submission to approval. That’s on the faster end of typical Summerlin timelines, mostly because the submission was complete and the committee had a meeting on the calendar within the window. If you submit a packet and miss the next meeting by a day, you can lose two weeks waiting for the following one.</p>

<h2>What Surprised the Homeowner</h2>
<p>The mom told me the thing she didn't expect was how quiet the install was. Two days on the roof, mostly cordless tools, no ground disruption. The bigger surprise was the first NV Energy bill in July — they'd braced for a high one because the panels weren't producing yet for the first half of the cycle. It came in at $44. They'd already underestimated how much the system was offsetting.</p>
<p>The other surprise was the production app. They’d expected solar to be a "set it and forget it" purchase. Instead they ended up checking the app daily for the first month — partly novelty, partly because watching kilowatt-hours stack up on a hot afternoon is genuinely satisfying. By month three they’d settled into a once-a-week glance, which is about right.</p>

<h2>What We'd Do Differently</h2>
<p>Honestly, not much on this one. If I were redesigning, I'd push them to consider a battery — not for ROI, which doesn't pencil out under current NV Energy rules, but for resilience. They have two kids and Summerlin loses power maybe once a year in a summer storm. A 10 kWh battery would have added about $9,500 net and given them a bridge through outages. They passed. That's a reasonable call given the cost-benefit, but I make sure every Summerlin family hears the resilience pitch before they decide.</p>
<p>I’d also have routed the conduit on the inside of the gable rather than the outside. The outside route was easier and shorter, but the inside route looks cleaner from the curb. Small thing. Doesn’t affect production. Just aesthetics.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (20 × 400W): $7,200</li>
  <li>Inverter, racking, BOS: $4,400</li>
  <li>Electrical work + main panel inspection: $1,800</li>
  <li>Permits + interconnection fees: $650</li>
  <li>Labor: $7,200</li>
  <li>Margin + overhead: $1,550</li>
  <li><strong>Gross: $22,800</strong></li>
  <li><strong>After 30% federal ITC: $15,960</strong></li>
</ul>
<p>The 30% credit is a dollar-for-dollar reduction on federal tax owed — not a deduction. Details and eligibility are on the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS Residential Clean Energy Credit page</a>. If your federal tax liability in the install year is less than $6,840, the unused portion rolls forward. It doesn’t expire and doesn’t require a refund mechanism — your tax software handles it on Form 5695.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>This is a fairly typical Summerlin result for a 3,000 sqft home with adequate south/west roof and no major shade. Your numbers will be different. If your bill is $180, your savings will be smaller. If your roof is older or has dormers and obstructions, your design and price will be different. The federal credit math is the same for everyone, but the savings side depends entirely on your usage and roof.</p>
<p>What makes this case unusually clean: a south-southwest orientation, no shade, a recent roof, a household with daytime-heavy consumption, and an HOA that processed the packet on schedule. Take any of those away and the timeline or numbers shift. If you’ve got two of them, this case is probably 80% representative for you. If you’ve got all four, you’re looking at something close to this.</p>

<p>If you're in the 89135 / 89144 / 89113 area and want me to run your numbers, <a href="/#get-quote">request a quote here</a> and I'll come look at your roof. More Summerlin context on the <a href="/solar-summerlin">Summerlin solar page</a>, or see <a href="/solar-las-vegas">Las Vegas solar overview</a>. Background on me at <a href="/about">About Daniel</a>.</p>
`,
    faqs: [
      { question: 'How long does HOA approval take in Summerlin?', answer: 'Most Summerlin sub-associations approve solar in 14–30 days. This case took 18 days with one revision request about front-roof setback. NRS 278.0208 prevents an HOA from outright denying solar, but they can ask for placement adjustments that don\'t materially reduce output.' },
      { question: 'What size solar system does a 3,000 sqft Las Vegas home need?', answer: 'Most 3,000 sqft homes in Las Vegas use 1,000–1,400 kWh/month and need a 7–9 kW system. The right size depends on your last 12 months of NV Energy bills, not square footage alone. A pool or EV pushes this up; a smaller household pushes it down.' },
      { question: 'Why didn\'t you recommend a battery for this Summerlin home?', answer: 'Under current NV Energy net metering, excess production credits forward at 75% of retail rate. That\'s decent — not great, but workable. A battery only earns its keep if you have time-of-use rates, frequent outages, or NEM 3.0-style export penalties. Nevada doesn\'t have those yet.' },
      { question: 'Will my NV Energy bill really drop to $23?', answer: 'The basic service charge is fixed and the residual depends on how often you draw from the grid in low-production months. $20–$45 is typical for a well-sized system. Going to literal $0 requires either a battery or oversizing — both add cost without much added benefit at NV Energy rates.' }
    ]
  },

  {
    slug: 'case-henderson-89052-pool-home-401-savings',
    title: 'A Henderson Pool Home Cut $401/Month from Their NV Energy Bill',
    description: 'A 4,200 sqft Henderson pool home in 89052 went from a $478 bill to $77 with an 11 kW system. Pool pump load, system sizing, and the math.',
    publishDate: '2026-01-26',
    tags: ['Case Study', 'Nevada', 'Henderson', 'Las Vegas'],
    body: `
<p>A homeowner in Henderson's 89052 ZIP — 4,200 sqft, variable-speed pool pump, three-zone AC — cut their NV Energy bill from <strong>$478/month to $77/month</strong> with an 11 kW system. Net cost after the 30% federal credit: $21,945. Annual savings: $4,812. Payback: 4.6 years. This was one of the cleaner pool-home installs I’ve done, and the math is worth walking through because pool homes have a few sizing wrinkles that ordinary residential cases don’t.</p>

<h2>The Starting Point</h2>
<p>This was a referral from a previous Henderson install. The pool pump alone was running 8 hours a day in summer and adding roughly 240 kWh/month to the bill. The home pulls from the Black Mountain substation area, and the family had been seeing summer bills above $500 for two consecutive years. They'd already done the easy stuff — LED retrofit, smart thermostat, pool pump on a schedule — and the bill kept climbing because NV Energy rates kept climbing.</p>
<p>Twelve-month average usage: 1,840 kWh/month. July: 3,140 kWh. The pool runs year-round at reduced cycles, which actually helps with solar sizing because it flattens the load curve. A pool you only use in summer creates a lopsided load that’s harder to size for. A pool that runs year-round at variable cycles spreads the kWh out more evenly month-to-month, which lines up better with the production curve.</p>
<p>Their roof was a 2014 asphalt-shingle in good condition. The main slope faced south, but there was also a west-facing slope over the garage that was viable for additional panels. The west slope produces about 12% less annually than south but kicks in stronger in the late afternoon — exactly when this household’s evening AC and pool pump usage peaked. So the west slope wasn’t just extra space; it was tuned production.</p>

<h2>What We Designed</h2>
<p>An 11 kW system: 28 panels at 400W, microinverters this time because the back-roof slope had partial shade from a mature mesquite for about 90 minutes in the late afternoon. Microinverters cost more but they let each panel produce independently, and on this roof they recovered enough lost production to justify the upgrade. No battery — same logic as the Summerlin case under <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy net metering</a>.</p>
<p>The 11 kW number wasn’t arbitrary. Annual consumption was 22,080 kWh. A 10 kW system in this orientation produces about 17,500 kWh/year — short of consumption. An 11 kW system produces about 19,300 kWh/year. The remaining ~2,800 kWh comes from the grid in low-production months, offset by net-metering credits banked in high-production months. Net annual: roughly zero grid pull beyond the basic service charge.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly NV Energy bill</td><td>$478</td><td>$77</td></tr>
    <tr><td>Annual electric cost</td><td>$5,736</td><td>$924</td></tr>
    <tr><td>Year-1 savings</td><td colspan="2">$4,812</td></tr>
    <tr><td>System cost (gross)</td><td colspan="2">$31,350</td></tr>
    <tr><td>Federal tax credit (30%)</td><td colspan="2">−$9,405</td></tr>
    <tr><td>Net cost after ITC</td><td colspan="2">$21,945</td></tr>
    <tr><td>Simple payback</td><td colspan="2">4.6 years</td></tr>
    <tr><td>25-year lifetime savings (est.)</td><td colspan="2">$135,000+</td></tr>
  </tbody>
</table>

<h2>Did the Pool Pump Change the Sizing?</h2>
<p>Yes, materially. A variable-speed pump at 1.5 kW running 8 hours/day in summer is roughly 360 kWh/month at peak. That's the equivalent load of a small bedroom apartment, just sitting in the equipment pad. I sized the system to cover that load directly during daylight hours rather than oversizing to bank credits, because daytime self-consumption is worth full retail and net-metered exports aren't.</p>
<p>The pump was already on a schedule — 9am to 5pm. That happens to fall right inside the peak production window, so the panels feed the pump directly during operation. Almost zero of the pump load comes from the grid in summer. That’s a $90/month savings line item all by itself just from alignment, separate from any AC or appliance offset.</p>

<h2>The HOA / Permit Part</h2>
<p>Anthem Highlands sub-association — they have a published solar policy that's straightforward. We submitted, they approved in 11 days. City of Henderson permit took 9 business days. NV Energy interconnection took 14 days from PTO request. Total project from contract signature to PTO: 47 days. That’s slightly faster than the typical 50–60 day Henderson timeline, mostly because we caught a clean week with no agency backlogs.</p>

<h2>What Surprised the Homeowner</h2>
<p>The dad expected the savings. What he didn't expect was the production app. He sends me a screenshot every couple of weeks showing real-time output. He's gamified his own electricity use — running the dishwasher and pool pump at 1pm instead of 7pm because he can see the production curve on his phone. Behavior change adds maybe $15–$25/month on top of the structural savings, which is small in absolute terms but feels good and adds up to a few hundred dollars a year.</p>
<p>The other surprise: the panels physically reduced the temperature of the rooms directly under the largest array. The shading effect on the roof (panels block direct sun from hitting the shingles) lowered attic temperature by 6–8°F in summer. The upstairs AC ran less. We didn’t price that in. It’s a real but unmeasured benefit.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have run the conduit on the south side of the equipment closet rather than the north. It worked fine, but the south path would have been a cleaner penetration. Small thing. Also: we should have warned the family that the new bidirectional NV Energy meter takes a full billing cycle to show up correctly — their first post-install bill looked weird and we got a worried phone call. Now I tell every customer to expect a wonky first bill and not to panic.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (28 × 400W): $10,080</li>
  <li>Microinverters: $4,200</li>
  <li>Racking, BOS, conduit: $3,100</li>
  <li>Electrical (main panel, breaker, disconnect): $2,400</li>
  <li>Permits + interconnection: $720</li>
  <li>Labor: $9,200</li>
  <li>Margin + overhead: $1,650</li>
  <li><strong>Gross: $31,350</strong></li>
  <li><strong>After 30% federal ITC: $21,945</strong></li>
</ul>
<p>See the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS Residential Clean Energy Credit guidance</a> for ITC eligibility. The credit applies to all of the line items above — including labor, permits, and electrical work directly required for the solar install.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>Pool homes in Henderson with summer bills over $400 are common. The 4.6-year payback here is faster than typical because the starting bill was high and we sized aggressively. Your home's payback depends on your actual usage and rates. Don't anchor on this number — anchor on your last 12 months of bills. A home with a $250 bill and the same system would see closer to 7–8 year payback. The bill size is the lever.</p>
<p>One more dynamic worth flagging: NV Energy has stepped up residential rates in three approved tariffs since 2021, with another rate case pending. If rates climb another 8–12% over the next three years (which the utility’s filings suggest is plausible), the payback on this system compresses further and the lifetime savings number goes up. Solar acts as a hedge against rate increases — the installed cost is fixed, but the avoided cost grows.</p>
<p>For homes in this size and bill range across 89052, 89074, and 89012, the design pattern repeats: 10–12 kW system, microinverters if there’s shade, no battery, sized to consumption rather than to roof area, with the west-slope production tuned to evening AC and pool-pump load. The specifics vary; the playbook is consistent.</p>

<p>If you're in 89052, 89074, or 89012 and want me to look at your roof, <a href="/#get-quote">request a quote here</a>. More Henderson detail at <a href="/solar-henderson-nv">Henderson solar</a>. Or see the <a href="/solar-las-vegas">Las Vegas solar overview</a>.</p>
`,
    faqs: [
      { question: 'Does a pool pump change my solar system size?', answer: 'A variable-speed pump at 1.5 kW × 8 hours/day adds about 360 kWh/month in summer. That moves system sizing up by roughly 1.5–2 kW. The right answer is to look at your actual NV Energy bills, not estimate the pump load — bills already include it.' },
      { question: 'What happens the month I use more than my panels produce?', answer: 'You pull from the grid for the gap and pay normal NV Energy rates for it. If you have banked net-metering credits from earlier months, they apply automatically. December and January typically draw from credits banked in March–May.' },
      { question: 'Are microinverters worth the extra cost in Henderson?', answer: 'Only if your roof has shading, multiple slopes with different orientations, or panel-level monitoring matters to you. On a clean south-facing roof, a string inverter is cheaper and equally effective. On a shaded roof, microinverters often pay for themselves in recovered production.' },
      { question: 'How long does Henderson permit + NV Energy interconnection take?', answer: 'Typical timeline: City of Henderson permit 7–14 business days, install 1–2 days, NV Energy inspection and PTO 10–20 days. Total from contract to PTO is usually 35–55 days. Anthem Highlands and other published-policy HOAs add minimal delay.' }
    ]
  },

  {
    slug: 'case-north-las-vegas-rental-home-roi-7-2-yr',
    title: 'A North Las Vegas Rental Property — Solar at 7.2-Year Payback',
    description: 'A North Las Vegas investor put a 6 kW system on a tenant-occupied rental. How the 30% credit works for landlords and why ROI still made sense.',
    publishDate: '2026-02-09',
    tags: ['Case Study', 'Nevada', 'Las Vegas'],
    body: `
<p>An investor in North Las Vegas (single-family rental, 1,950 sqft, long-term tenant on a lease where utilities are tenant-paid) installed a 6 kW system to lower the property's vacancy risk and add to the building basis. Net cost: $11,970. The 30% federal credit was captured by the owner, not the tenant. Payback: 7.2 years on the rental cash-flow improvement. This is a different math than primary-residence solar, and the rules trip people up. Here’s the full picture.</p>

<h2>The Starting Point</h2>
<p>The investor owns three rentals in 89031 and 89032 and was getting tenant pushback on summer bills. Their tenant on this property was paying $260–$340/month to NV Energy in July and August and renegotiating rent every year because of it. The landlord's calculation was simple: a tenant who can keep their utility bill flat is a tenant who renews. Turnover on this property historically cost about $2,400 in vacancy + cleaning + leasing fees per cycle. Stabilizing the tenant for an extra year was worth real money.</p>
<p>Twelve-month tenant usage averaged 980 kWh/month — modest, because it's a smaller home with no pool. Roof was a 2018 asphalt shingle in good condition, south-facing. The home itself was a 1990s build with original electrical service that needed a small upgrade to handle the solar interconnection — we caught that on the site visit, and the cost was already baked into the quote.</p>

<h2>How the Tax Credit Works on a Rental</h2>
<p>This is where it gets interesting and where people get it wrong. The <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">Residential Clean Energy Credit (Section 25D)</a> is for the owner's primary or secondary residence, not for property held purely for rental. For a rental, you instead use the <strong>commercial Investment Tax Credit (Section 48)</strong> which is also 30% but operates differently — it's depreciable, the property gets a basis adjustment, and it's claimed on Form 3468 not Form 5695.</p>
<p>For this investor: 30% credit on Form 3468, plus they get to depreciate 85% of the system basis over 5 years (MACRS), plus a one-time bonus depreciation depending on tax year. The combined first-year tax benefit was meaningfully more than 30% — but it requires actual passive income or active material participation to use. We pointed the investor to their CPA for the final structure. I am not a CPA. I’ve seen enough rental solar deals to flag the major levers, but the actual tax filing belongs to a tax professional.</p>
<p>One thing investors often miss: if you ever convert the rental to a primary residence (or vice versa), the credit treatment retroactively shifts. There are recapture rules. If you’re likely to flip the property within five years, your CPA needs to model that scenario before you commit. We didn’t need to here — the investor’s plan is hold-for-cash-flow, not flip.</p>

<h2>What We Designed</h2>
<p>A 6 kW system: 15 panels at 400W, string inverter, no battery. Cost-optimized — this is a rental, not a forever home, and the goal was to land the lowest possible installed cost per watt while still using Tier 1 panels with transferable warranties. $2.85/W gross. The warranty transferability was important to the investor in case they sell. A non-transferable warranty would knock 15–20% off the system’s contribution to property value at sale time.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Tenant’s NV Energy bill (avg)</td><td>$190</td><td>$58</td></tr>
    <tr><td>Annual tenant savings</td><td colspan="2">$1,584</td></tr>
    <tr><td>Rent increase agreed</td><td colspan="2">+$110/month</td></tr>
    <tr><td>Landlord cash flow gain</td><td colspan="2">$1,320/year</td></tr>
    <tr><td>System cost (gross)</td><td colspan="2">$17,100</td></tr>
    <tr><td>Federal ITC (30%)</td><td colspan="2">−$5,130</td></tr>
    <tr><td>Net cost</td><td colspan="2">$11,970</td></tr>
    <tr><td>Simple payback (cash-flow only)</td><td colspan="2">7.2 years</td></tr>
  </tbody>
</table>
<p>The investor's actual after-tax payback is faster once you layer in MACRS depreciation, but I'm showing the conservative cash-flow-only number. The tenant came out ahead on net (saving more than the rent bump), and the landlord stabilized the lease.</p>

<h2>The Permit and HOA Part</h2>
<p>No HOA on this property. North Las Vegas permit took 8 business days. NV Energy interconnection at <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">net metering rates</a> took 12 days. The tenant was inconvenienced for one day during install — we coordinated through the property manager to schedule on a weekday morning when the tenant was at work. They came home to a finished install and a panel-by-panel sticker pack on the kitchen counter explaining what we’d done.</p>
<p>One nuance specific to rentals: NV Energy puts the net-metering account in the name of whoever pays the bill. On this property that was the tenant. So the credits flow to the tenant’s account, not the landlord’s — which is fine because the tenant is the one consuming the power, but it means the landlord can’t directly capture the value. The capture mechanism is the rent renegotiation, not the utility credit.</p>

<h2>What Surprised the Investor</h2>
<p>That the tenant didn't push back on the small rent increase. We'd actually pre-built the math sheet for the investor to share — showing the tenant their projected NV Energy savings vs. the rent bump — and the tenant signed a 24-month renewal the same week. Solar turned a one-year tenant into a two-year tenant, which on a rental is worth real money in turnover-cost avoidance.</p>
<p>The other surprise: the investor’s appraiser, when refinancing the property a few months later, valued the solar system at roughly $9,000 of added home value. That’s less than the gross install cost but more than the after-credit cost — so on paper, the investor netted out positive on equity from day one, before counting any cash flow improvement.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have suggested a slightly larger system — maybe 7 kW — to leave some headroom if a future tenant has higher usage (an EV charger, a home office). The marginal cost per kW drops as you scale up, and oversizing slightly on a rental is cheap insurance against the next tenant having different needs. The current tenant doesn’t fully use the 6 kW system; the next tenant might over-use it.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (15 × 400W): $5,400</li>
  <li>Inverter, racking, BOS: $3,400</li>
  <li>Electrical: $1,500</li>
  <li>Permits + interconnection: $600</li>
  <li>Labor: $5,400</li>
  <li>Margin + overhead: $800</li>
  <li><strong>Gross: $17,100</strong></li>
  <li><strong>After 30% ITC: $11,970</strong></li>
</ul>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>Rental solar math is not the same as primary-residence math. The credit code section is different, the depreciation rules matter, and the rent renegotiation is the actual mechanism that makes the deal work. Don't apply this case to your own primary home — different rules. And don't apply it to a rental without your CPA modeling the depreciation. Talk to the IRS guidance and your accountant.</p>
<p>If you have multiple rentals, the math compounds. The investor on this case is now considering systems on the other two properties. Each one would replicate the cash-flow logic, and the depreciation stacks across the portfolio.</p>

<p>If you own rentals in 89031 / 89032 / 89030 and want to talk through the math, <a href="/#get-quote">request a quote</a>. Or read the broader <a href="/solar-las-vegas">Las Vegas solar guide</a>. Background on me at <a href="/about">about Daniel</a>.</p>
`,
    faqs: [
      { question: 'Can I claim the 30% solar tax credit on a rental property?', answer: 'Not under Section 25D (Residential Clean Energy Credit) — that\'s for your own residence. But you can claim a 30% credit under Section 48 (commercial ITC) and also depreciate the system under MACRS. Net first-year tax benefit on a rental is typically larger than for a primary home, if you have passive income to absorb it. Talk to a CPA.' },
      { question: 'Does the tenant or the landlord get the solar savings on a rental?', answer: 'Whoever pays the NV Energy bill captures the direct utility savings. Most landlords pair solar with a small rent increase that\'s less than the tenant\'s utility savings — the tenant nets ahead, the landlord captures part of the value, and turnover risk drops.' },
      { question: 'How does NV Energy net metering work if the home is rented?', answer: 'The NV Energy account is in whoever\'s name pays the utility — usually the tenant on a residential rental. The net-metering credits go to that account. If the tenant moves out, credits do not transfer to a new tenant\'s account.' },
      { question: 'Should I install solar on a rental I might sell in 5 years?', answer: 'It depends on the local market. In Las Vegas, owned solar (not leased) typically increases sale price by roughly the system\'s remaining value. Leased systems often complicate sales. If you might sell within the depreciation recapture window, your CPA needs to model the recapture before you commit.' }
    ]
  },

  {
    slug: 'case-green-valley-ranch-old-roof-replaced-first',
    title: 'A Green Valley Ranch Home with a 17-Year-Old Roof — What We Did First',
    description: 'A Green Valley Ranch homeowner wanted solar fast. Their roof was 17 years old. Here\'s why we made them replace it first and how the math still worked.',
    publishDate: '2026-02-23',
    tags: ['Case Study', 'Nevada', 'Henderson', 'Las Vegas'],
    body: `
<p>A homeowner in Green Valley Ranch wanted solar installed in two weeks. Their asphalt-shingle roof was 17 years old, original to the build. I told them to replace the roof first or I wouldn't do the install. Total stack — new roof plus 7 kW solar — came to $27,365 net after the 30% federal credit. They saved $208/month. Payback on solar alone: 5.4 years. Combined payback including the roof: 12 years. This case is about saying no to a customer in the short term to give them a better outcome over the next 25 years.</p>

<h2>The Starting Point</h2>
<p>Two-story home, 2,650 sqft, original 2008 build. The roof was the original 25-year-rated architectural shingle. In Las Vegas heat, that "25-year" rating realistically lasts 17–22 years before granule loss and underlayment fatigue make a re-roof necessary. I climbed it. Granules in the gutters. South-facing slope was visibly faded. Underlayment showing through in two spots near the ridge. The roof was four to six years from a forced replacement no matter what.</p>
<p>The homeowner had three other solar quotes, all of which proposed installing on the existing roof. None of them mentioned the roof age. That's a common failure mode — you cover the roof with panels, then when the roof fails in 4 years, you pay $4,000–$6,000 to remove and reinstall the panels in addition to the new roof cost. The customer ends up out about $9,000 more than they would have been if the contractor had been honest about the roof up front.</p>
<p>Their NV Energy bill averaged $254/month, peaking at $390 in summer. The household was three adults — two parents, one adult son working from home — so daytime load was high. Their roof had a clean south slope and a smaller west slope, both viable for production.</p>

<h2>Why You Replace the Roof First</h2>
<p>Panels are warrantied for 25 years. If your roof has 4 years of useful life left, you're going to pay to detach, store, and reinstall the panels mid-warranty. That's typically $3,500–$6,000 depending on system size. It's also a roof penetration risk — every removal and reinstall increases the chance of a leak. And insurance companies have started flagging older roofs under panel arrays as a risk factor for premium increases.</p>
<p>The right move on any roof older than ~15 years (in Las Vegas heat) is to replace before solar. New roof, then solar, then 25 years of stable performance. The new roof carries its own warranty (typically 30+ years on architectural shingle), the panels carry theirs, and the two life cycles align cleanly.</p>

<h2>The Roof Replacement</h2>
<p>I don't do roofs. I referred them to a licensed roofer who'd done two prior projects of mine. Tear-off, new underlayment, new architectural shingles rated for hail and high heat, ridge vent retrofit. $13,400 installed. That's a full reroof — not a patch. The roofer pulled the permit and finished in three days. They coordinated with my schedule so we could start the solar install the day after the roof passed inspection.</p>

<h2>What We Designed (Solar Side)</h2>
<p>A 7 kW system: 18 panels at 400W on the new roof. The roof being new and clean made the layout easier — we got better tilt and better string layout than we would have on the patched-up old roof. String inverter, no battery. Standard install. The new roof also gave us more flexibility on penetration locations, so we routed conduit cleaner and used fewer roof penetrations than we would have had to on the old roof.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Cost / Savings</th></tr></thead>
  <tbody>
    <tr><td>New roof</td><td>$13,400</td></tr>
    <tr><td>7 kW solar (gross)</td><td>$19,950</td></tr>
    <tr><td>Total project</td><td>$33,350</td></tr>
    <tr><td>30% federal ITC (solar only)</td><td>−$5,985</td></tr>
    <tr><td>Roof — does NOT qualify for ITC</td><td>$0 credit</td></tr>
    <tr><td><strong>Net combined cost</strong></td><td><strong>$27,365</strong></td></tr>
    <tr><td>Old NV Energy bill</td><td>$254/month</td></tr>
    <tr><td>New NV Energy bill</td><td>$46/month</td></tr>
    <tr><td>Annual savings</td><td>$2,496</td></tr>
  </tbody>
</table>
<p>Note: structural roofing materials don't qualify for the federal ITC even when paired with solar. Only the solar system itself does. See the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS guidance</a>. Some homeowners think they can roll a reroof into the credit. They can't. There’s a narrow exception for "solar shingles" and other integrated solar roof products, but a standard reroof under a panel array does not count.</p>

<h2>What Surprised the Homeowner</h2>
<p>How much cooler the upstairs got after the new roof. The old shingles had been radiating heat into the attic; the new ones, plus the ridge vent retrofit, dropped the upstairs by about 4°F in summer. The AC ran less. They saw the savings before the panels were even producing. The new ridge vent alone was probably responsible for a meaningful chunk of the AC reduction — the original construction had inadequate attic ventilation, which is common in 2008-era Las Vegas tract builds.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have introduced the roofer earlier. We lost two weeks because the homeowner shopped roofers after I told them to replace. If I'd had a referral ready in the first conversation, the timeline would have compressed by ten days. Now I keep a one-pager with my preferred roofer’s contact info that I hand over at any site visit where the roof is on the bubble.</p>

<h2>The HOA / Permit Stack</h2>
<p>Green Valley Ranch HOA approved the panels without issue — they have a published solar policy that mirrors most modern Henderson HOAs. The roof replacement also went through HOA architectural review (they require approval on roof color and material), but that ran in parallel with the solar review and didn’t add timeline. <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a> applies to the solar component; the roof has its own (lighter) HOA process.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>This is typical for any home built before ~2010 in Las Vegas. The original roof has a finite life and the heat shortens it. If your roof is under 10 years old, ignore this case. If it's over 15, this case is exactly your situation. Get a roofer's evaluation before you commit to solar. The 12-year combined payback isn’t great in isolation, but compared to "pay $9,000 in 4 years to detach panels for an emergency reroof," it’s the right move.</p>

<p>One more thing about the order of operations. The new roof was installed first. Inspection passed. Then we started the solar permitting in parallel with HOA approval. That sequencing matters — a few installers will try to do solar and roof simultaneously, which complicates inspections and creates finger-pointing if something goes wrong with either trade. Roof first, fully complete, fully inspected, then solar on top. Two clean handoffs beats one tangled timeline.</p>

<p>If your roof is 12+ years old and you're getting solar pitches that don't mention it, that's a red flag. <a href="/#get-quote">Talk to me first</a>. Background on the company at <a href="/about">about Daniel</a>, and the broader market at <a href="/solar-las-vegas">Las Vegas solar</a>. See also our <a href="/blog/case-summerlin-3000-sqft-saved-287-month">Summerlin case study</a> for a comparison on a newer roof.</p>
`,
    faqs: [
      { question: 'Should I replace my roof before installing solar?', answer: 'If your roof has more than 12 years of remaining life, install solar now. If it has less than 7 years, replace first. The middle ground (7–12 years) depends on your roof material, condition, and your tolerance for paying $4K–$6K mid-life to remove and reinstall panels for the eventual reroof.' },
      { question: 'Does a new roof qualify for the federal solar tax credit?', answer: 'Generally no. Structural roofing — shingles, underlayment, decking — does not qualify for the Residential Clean Energy Credit. Only the solar equipment and its directly-related installation costs qualify. There\'s a narrow exception for roof materials that also function as solar (like solar shingles), but standard reroofing does not count.' },
      { question: 'How long does an asphalt-shingle roof last in Las Vegas?', answer: 'A 25-year-rated architectural shingle in Las Vegas heat realistically lasts 17–22 years before granule loss and underlayment fatigue justify replacement. Tile roofs last 40+ years; the underlayment under tile lasts 20–25.' },
      { question: 'How much does it cost to remove and reinstall solar panels for a reroof?', answer: 'Typically $3,500–$6,000 for a 6–8 kW system, depending on installer and complexity. That\'s why replacing an aging roof before solar usually saves money in the long run.' }
    ]
  },

  {
    slug: 'case-anthem-high-elevation-tile-roof-install',
    title: 'An Anthem Tile-Roof Install at High Elevation — What Made It Different',
    description: 'A Sun City Anthem tile-roof install at 4,500 feet elevation. Tile brackets, HOA cycle, climate effects on production, and a $19,200 final cost.',
    publishDate: '2026-03-09',
    tags: ['Case Study', 'Nevada', 'Henderson'],
    body: `
<p>A Sun City Anthem homeowner with a concrete S-tile roof at roughly 4,500 ft elevation installed a 7 kW system. Final cost after the 30% federal credit: <strong>$19,200</strong>. Monthly savings: $182. The HOA cycle ran three weeks. The tile and the elevation both made a real difference in the project — neither in the way the homeowner expected. Tile installs are different beasts from asphalt shingle, and Anthem’s elevation gives a small but measurable production bonus that most installers don’t even mention.</p>

<h2>The Starting Point</h2>
<p>2,800 sqft single-story, 2006 build, original concrete S-tile roof in good shape. Two retired homeowners, modest electric usage (~860 kWh/month average) but high summer peaks because of medical equipment that ran 24/7. NV Energy bill averaged $185/month, peaking at $290 in August. The medical equipment created a load floor that didn’t exist in most homes — they couldn’t turn it off, couldn’t time-shift it, couldn’t schedule around it. So the system had to cover that constant draw plus normal household load.</p>
<p>The home is in Sun City Anthem, an age-restricted HOA with a published solar policy. Elevation matters here — Anthem sits noticeably higher than the Las Vegas valley floor, and the cooler air actually <em>increases</em> panel production by 1–3% versus an identical install in the basin. Panels lose efficiency as they heat up; thinner air at elevation means slightly cooler operating temps. That’s a real effect, calibrated against <a href="https://www.nrel.gov/gis/solar-resource-maps.html" target="_blank" rel="noopener">NREL’s solar resource modeling</a>.</p>

<h2>Why Tile Roofs Are Different</h2>
<p>You don't drill through tile. You either lift and re-set tiles around standoffs (the right way) or use specialized hook brackets that go under the tiles into the underlayment and rafter (the more common way for S-tile). Both add labor and parts cost over an asphalt-shingle install. On this roof we used tilt-optimized hook brackets and lifted ~40 tiles total during the install.</p>
<p>Tile install premium: roughly $0.20–$0.35/W over asphalt. On a 7 kW system that's $1,400–$2,450 of extra cost. We came in at the lower end. Why? The tile was concrete S-tile in good condition, the roof had a single dominant slope (no complex valleys or hips), and we’d done two prior installs in the same neighborhood so the crew knew the layout pattern.</p>
<p>One thing to watch on tile: the underlayment. Concrete tile lasts 40+ years, but the felt or synthetic underlayment beneath it lasts 20–25. On a 2006 build, the underlayment was approaching the back end of its life. We flagged it for the homeowner and recommended a partial underlayment refresh under the panel footprint while we had the tiles up. They opted to skip it. That’s a defensible call — it added $2,200 to the project and the underlayment was visibly fine — but I document it so we’re both clear on the decision.</p>

<h2>What We Designed</h2>
<p>A 7 kW system: 18 panels at 400W, string inverter with optimizers (because one corner of the roof gets shaded by a chimney for 90 minutes). No battery. Tile-specific roof attachments rated for the panel weight plus snow load (yes, even at this elevation we spec for occasional snow — Anthem has had 2-inch dustings in the last decade and the structural code requires a snow allowance).</p>

<h2>The HOA Part</h2>
<p>Sun City Anthem's architectural review meets bi-weekly. Our submission caught the wrong week of the cycle — we missed the meeting by two days. That added about 12 days to the timeline. Once it was on the agenda, approval was straightforward — the HOA has a clear written policy aligned with <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a>. Net HOA cycle time: 3 weeks.</p>
<p>If you're in an HOA with a fixed meeting schedule, time your submission to land 5–7 days before a meeting. That single piece of timing can save you two weeks. The committee also appreciates a complete packet — site plan, panel datasheet, contractor license, layout drawing, manufacturer certs. Submitting incomplete paperwork bumps you to the next meeting cycle while the gap gets filled.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly NV Energy bill</td><td>$185</td><td>$3</td></tr>
    <tr><td>Annual electric cost</td><td>$2,220</td><td>$36</td></tr>
    <tr><td>Year-1 savings</td><td colspan="2">$2,184</td></tr>
    <tr><td>System cost (gross)</td><td colspan="2">$27,430</td></tr>
    <tr><td>Tile premium included</td><td colspan="2">~$1,500</td></tr>
    <tr><td>Federal ITC (30%)</td><td colspan="2">−$8,229</td></tr>
    <tr><td>Net cost</td><td colspan="2">$19,200</td></tr>
    <tr><td>Simple payback</td><td colspan="2">8.8 years</td></tr>
  </tbody>
</table>
<p>The bill dropped to nearly nothing because their consumption pattern (modest, daytime-heavy from the medical equipment) aligned perfectly with production. They’re net-positive on credits in spring and fall, which carries them through the lower-production winter months.</p>

<h2>What Surprised the Homeowner</h2>
<p>The production was about 4% higher than my model predicted. I'd used standard <a href="https://www.eia.gov/state/?sid=NV" target="_blank" rel="noopener">Nevada irradiance data</a>, which is calibrated to the basin. At Anthem's elevation, the cooler operating temps and slightly thinner atmosphere both bumped the panels above model. Pleasant surprise. I’ve since recalibrated my Anthem-specific quotes to add a 2–3% elevation adjustment up front, so I’m not under-promising production for that ZIP.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have submitted the HOA paperwork the day after our site visit instead of waiting for the contract countersign. We had everything we needed. Holding the submission for the contract cost us a meeting cycle — 12 unnecessary days. That’s now standard practice — submit HOA the day after the site visit, in parallel with the contract process, so the two timelines run alongside each other instead of in sequence.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (18 × 400W): $6,480</li>
  <li>String inverter + optimizers: $2,800</li>
  <li>Tile-spec racking and hooks: $2,300</li>
  <li>Electrical work: $1,800</li>
  <li>Permits + HOA + interconnection: $850</li>
  <li>Labor (tile premium): $11,400</li>
  <li>Margin + overhead: $1,800</li>
  <li><strong>Gross: $27,430</strong></li>
  <li><strong>After 30% ITC: $19,200</strong></li>
</ul>
<p>ITC eligibility is detailed on the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS Residential Clean Energy Credit page</a>.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>If you have a tile roof, expect $0.20–$0.35/W more than the asphalt-shingle benchmark. If you're at elevation (Anthem, parts of Boulder City), expect a small production bonus. If you're in an HOA with a fixed meeting schedule, time your submission. Your bill drop will depend on your consumption profile, which differs from this household. The near-zero residual bill here was a function of modest, daytime-heavy consumption — not the system size.</p>

<p>A separate factor worth mentioning: Sun City Anthem’s population skews older, and many residents I’ve worked with are on fixed retirement incomes. The decision math for them isn’t just about lifetime savings; it’s about whether the system pays back inside the years they expect to be in the home. For an active 65-year-old, an 8.8-year payback works fine. For an active 78-year-old, the math tips toward whether the system adds resale value when the home eventually transfers — which it does in Anthem, where buyers increasingly look for owned solar as a feature. I run that calculation explicitly for every retired Anthem customer rather than assuming the standard payback timeline matches their planning horizon.</p>

<p>If you're in Sun City Anthem, Anthem Highlands, or anywhere south of Henderson proper, <a href="/#get-quote">request a quote</a>. See <a href="/solar-henderson-nv">Henderson solar</a> for the wider Henderson-area picture. Or check <a href="/solar-las-vegas">Las Vegas solar</a> for the broader regional context.</p>
`,
    faqs: [
      { question: 'How much more does a solar install on a tile roof cost?', answer: 'Roughly $0.20–$0.35 per watt more than asphalt shingle. On a 7 kW system that\'s $1,400–$2,450 of extra cost. The premium covers specialized tile hooks or tile lift-and-set work, plus longer install labor.' },
      { question: 'Does elevation actually affect solar panel production?', answer: 'Yes, marginally. At higher elevation panels run cooler and lose less efficiency to heat. Anthem at ~4,500 ft typically produces 1–4% more annually than an identical install in the Las Vegas basin. It\'s real but small.' },
      { question: 'How long does Sun City Anthem HOA solar approval take?', answer: 'The architectural review committee meets bi-weekly. If you submit a clean packet 5–7 days before a meeting, approval typically lands 7–14 days later. Miss the meeting cycle and you add another 14 days.' },
      { question: 'Will solar damage my tile roof?', answer: 'Not if installed correctly. Lift-and-reset or proper tile-hook brackets preserve the roof\'s waterproofing. The risk comes from shortcuts — drilling through tiles or using non-tile-rated hardware. Get a contractor who has done dozens of tile installs and ask for photos of prior work.' }
    ]
  },

  {
    slug: 'case-los-angeles-ladwp-nem-3-battery-first',
    title: 'A Los Angeles LADWP Customer Under NEM 3.0 — Battery-First Design',
    description: 'An LADWP customer under NEM 3.0 installed 8 kW of solar plus a 13.5 kWh battery. Why battery-first design beats panels-only under California\'s new rules.',
    publishDate: '2026-03-23',
    tags: ['Case Study', 'California', 'NEM 3.0', 'Battery Storage'],
    body: `
<p>A Los Angeles homeowner served by LADWP installed an 8 kW solar system paired with a 13.5 kWh battery. Net cost after the 30% federal credit: <strong>$28,420</strong>. Monthly savings: $234 (versus $389 before solar). Under <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" target="_blank" rel="noopener">CPUC NEM 3.0</a>, panels-only would have been the wrong choice. Battery-first is the right one. This case is about making California solar work in 2026 — which requires unlearning everything you knew about California solar from 2020.</p>

<h2>Why California Is Different</h2>
<p>California has stripped most of the value out of exporting solar back to the grid. Under NEM 2.0 (the old rules), exports paid roughly retail rate. Under NEM 3.0, exports pay an "Avoided Cost Calculator" rate that's typically 75–80% lower than retail. So the old play — oversize the panels and bank credits — doesn't pencil anymore. The right play under NEM 3.0 is: size the panels to your daytime consumption, and store the rest in a battery for evening use.</p>
<p>Note: LADWP is a municipal utility and runs its own program separate from the investor-owned utilities (PG&E, SCE, SDG&E). LADWP's net metering rules are different from CPUC's NEM 3.0 — generally more favorable. But the battery-first logic still applies because of LADWP’s time-of-use rates and the way evening peak pricing works. Details on <a href="https://www.ladwp.com/residential/cost-saving-programs/solar-incentive-programs" target="_blank" rel="noopener">LADWP’s solar program page</a>.</p>

<h2>The Starting Point</h2>
<p>Single-family home in the LADWP service area, 2,400 sqft, two adults, one teenager, no EV (yet). Twelve-month average: 1,140 kWh/month. The bill ran $389/month average, peaking at $520 in August because of evening AC usage during heat waves. The roof was clean, south and west exposures, no shade. The household ran most of their high-load activities (laundry, cooking, dishwasher) in the evening — which is exactly when LADWP rates are highest and solar production is lowest.</p>
<p>That mismatch is the central design problem in California. The grid is short on power in the evening, the utility prices that hour aggressively, and rooftop solar produces almost nothing in that window. A battery bridges the gap.</p>

<h2>What We Designed</h2>
<p>An 8 kW solar system + a 13.5 kWh battery. The panels cover daytime load and charge the battery during peak production hours (10am–2pm). The battery discharges in the late afternoon and evening (4pm–9pm) when LADWP’s time-of-use rates are highest. The home almost never exports to the grid — which is exactly the design goal under any NEM 3.0-style tariff.</p>
<p>This is what "battery-first" means: design to keep your generation behind the meter, where it offsets retail-priced consumption, rather than exporting it for compensated-but-low export rates. Some California installers still pitch panels-only systems with the old "you’ll save $300/month and bank credits" pitch. That pitch is years out of date and the customer ends up disappointed when the credits don’t materialize.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly LADWP bill</td><td>$389</td><td>$155</td></tr>
    <tr><td>Annual electric cost</td><td>$4,668</td><td>$1,860</td></tr>
    <tr><td>Year-1 savings</td><td colspan="2">$2,808</td></tr>
    <tr><td>Solar (8 kW) gross</td><td colspan="2">$24,000</td></tr>
    <tr><td>Battery (13.5 kWh) gross</td><td colspan="2">$16,600</td></tr>
    <tr><td>Combined gross</td><td colspan="2">$40,600</td></tr>
    <tr><td>Federal ITC (30%, both qualify)</td><td colspan="2">−$12,180</td></tr>
    <tr><td>Net cost</td><td colspan="2">$28,420</td></tr>
    <tr><td>Simple payback</td><td colspan="2">10.1 years</td></tr>
  </tbody>
</table>
<p>The 30% federal credit applies to both solar and storage, including standalone storage as of 2023. See the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS guidance</a> for the storage rules. Storage of 3 kWh or more is eligible whether or not it’s paired with solar.</p>

<h2>What Surprised the Homeowner</h2>
<p>That the bill didn't drop to near zero. Coming from Las Vegas-style messaging ("eliminate your bill!"), they expected to see $20-something on the LADWP statement. California rate structures don't work that way — the basic service charge is higher, the time-of-use rates make evening usage expensive even with a battery, and a 13.5 kWh battery doesn't always cover a full evening of summer AC. They went from $389 to $155, which is a 60% reduction. That’s the realistic California outcome under current rules.</p>
<p>The other surprise: the battery as a backup. They didn’t buy it for outage protection, but Los Angeles has had two PSPS-style outages in their neighborhood in the last three years. The battery carried them through both — about 6 hours each — without anyone in the house noticing the grid was down. They told me afterward that the resilience benefit alone justified the upgrade, separate from the time-of-use math.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have considered a second battery. The 13.5 kWh runs out around 9–10pm on the hottest summer evenings, and the home pulls grid power for the last few hours before solar kicks back in. A second 13.5 kWh battery would have added ~$11,500 net but eliminated almost all evening grid pull. The breakeven on the second battery is longer — maybe 14 years — so it's a comfort call, not an ROI call. We may add it later if rates climb further.</p>

<h2>Permitting</h2>
<p>LADWP interconnection took 28 days, which is on the slow side but not unusual for the larger municipal utilities. LADBS permit (City of LA building/safety) took 19 business days. No HOA on this property. The total project from contract signature to PTO ran 58 days, which is normal for the LA basin. SDG&E and SCE territories generally process faster than LADWP because of LADWP’s municipal structure.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (20 × 400W): $7,200</li>
  <li>Hybrid inverter (solar + battery): $4,400</li>
  <li>Battery (13.5 kWh): $11,500</li>
  <li>Racking, BOS, conduit: $2,900</li>
  <li>Electrical (main panel, automatic transfer switch): $4,200</li>
  <li>Permits + interconnection: $1,100</li>
  <li>Labor: $7,800</li>
  <li>Margin + overhead: $1,500</li>
  <li><strong>Gross: $40,600</strong></li>
  <li><strong>After 30% ITC: $28,420</strong></li>
</ul>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>This is typical California-under-NEM-3.0 math, with the LADWP twist. If you're in PG&E, SCE, or SDG&E territory, NEM 3.0 applies more directly and your export rates are even lower than LADWP. The battery-first principle is the same. Don't let an installer sell you a panels-only system in California in 2026 — the math is broken without storage.</p>

<p>A point I make to every California customer: the rules will keep changing. NEM 1.0 was replaced by NEM 2.0 was replaced by NEM 3.0. There will be NEM 4.0 or whatever the CPUC names the next tariff, and it is unlikely to be more generous to solar exporters. The hedge against that uncertainty is to design for self-consumption — a system whose value doesn’t depend heavily on export rates is more robust to future rule changes. Battery-first design isn’t just optimal under current rules; it’s also defensive against future ones.</p>
<p>And one more practical note. The federal 30% credit is currently scheduled to begin stepping down in 2033, but legislative changes have pulled forward and pushed back ITC schedules in the past. Don’t plan around a future credit that might not exist. The credit math here is based on current law and assumes the customer files for the credit in the install year.</p>

<p>If you're in LADWP, SCE, or anywhere in California, see the <a href="/solar-california">California solar overview</a> or the <a href="/solar-los-angeles">Los Angeles page</a>. Or <a href="/#get-quote">request a quote</a>. Compare with our <a href="/blog/case-san-diego-sdge-77-percent-bill-reduction">San Diego SDG&E case</a> for a different California utility’s math.</p>
`,
    faqs: [
      { question: 'Does NEM 3.0 apply to LADWP customers?', answer: 'No, technically. NEM 3.0 is the CPUC-mandated tariff for the investor-owned utilities (PG&E, SCE, SDG&E). LADWP is a municipal utility and runs its own net-metering program. But LADWP\'s time-of-use rates still make battery-first design the right approach for most customers.' },
      { question: 'Why is panels-only solar a bad idea in California in 2026?', answer: 'Under NEM 3.0, exporting power back to the grid pays roughly 25% of retail rate. Without a battery, your daytime overproduction is sold at the low export rate, while your evening usage is bought at the high retail rate. The arbitrage cuts your savings dramatically. A battery captures daytime production for evening use at full retail offset.' },
      { question: 'How big a battery do I need for an 8 kW solar system?', answer: 'There\'s no fixed ratio. Size the battery to your evening consumption (4pm–9pm) plus a reserve for outages. Most California homes with 8 kW of panels pair with one or two 13.5 kWh batteries. Heavy AC use or a hot tub pushes you to two.' },
      { question: 'Does the 30% federal tax credit cover battery storage?', answer: 'Yes. As of 2023, the Residential Clean Energy Credit covers standalone battery storage of 3 kWh or more — you don\'t even need to install solar with it. Pairing solar and battery, both qualify for the 30% credit.' }
    ]
  },

  {
    slug: 'case-san-diego-sdge-77-percent-bill-reduction',
    title: 'A San Diego SDG&E Customer Cut Their Bill 77% — Here\'s How',
    description: 'An SDG&E customer on EV-TOU-5 with $0.42/kWh peak rates installed 7 kW + battery. The bill dropped 77%. Full math under NEM 3.0.',
    publishDate: '2026-04-06',
    tags: ['Case Study', 'California', 'NEM 3.0', 'Battery Storage'],
    body: `
<p>An SDG&E customer in San Diego on the EV-TOU-5 rate (peak rate around <strong>$0.42/kWh</strong>) installed 7 kW of solar plus a 13.5 kWh battery. Their bill dropped from <strong>$340/month to $79/month</strong> — a 77% reduction. Net cost after the 30% federal credit: $25,830. Payback: 8.2 years. Under NEM 3.0, battery storage is what makes this math work. SDG&E has the steepest peak/off-peak spread of any major California utility, which makes the battery arbitrage especially valuable here.</p>

<h2>The Starting Point</h2>
<p>Single-family home, 2,200 sqft, two adults, one EV charged at home overnight. Pre-solar SDG&E bill averaged $340/month, with summer peaks around $480. They were on EV-TOU-5 because of the EV — peak hours 4pm–9pm at roughly $0.42/kWh, off-peak overnight at roughly $0.16/kWh, super-off-peak weekday midday at about $0.13/kWh.</p>
<p>The EV-TOU-5 rate is brutal during peak hours but generous during super-off-peak. That spread is what we designed around. If you’re on a flat rate (no TOU), the math is meaningfully different — battery arbitrage is worth less because there’s no peak/off-peak spread to capture. Most San Diego solar candidates are on TOU now whether they wanted to be or not, because SDG&E defaults new connections to TOU.</p>

<h2>What We Designed</h2>
<p>A 7 kW solar system + a 13.5 kWh battery. The panels run during super-off-peak hours, so they're displacing $0.13 power from a self-consumption standpoint — but they're also charging the battery, which discharges during the $0.42 peak hours. So every kWh that flows panels → battery → evening consumption is an arbitrage of roughly $0.29/kWh saved on the evening bill versus what they’d have paid SDG&E.</p>
<p>The EV charges overnight on the cheapest tariff, drawing from the grid, not the battery. Designing the battery to cover the EV would have required two batteries and didn't pencil out. Overnight grid power at $0.16/kWh is already cheap; using a battery to displace that is a poor use of stored kWh that could otherwise displace $0.42 peak power.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly SDG&E bill</td><td>$340</td><td>$79</td></tr>
    <tr><td>Annual electric cost</td><td>$4,080</td><td>$948</td></tr>
    <tr><td>Year-1 savings</td><td>$3,132</td><td></td></tr>
    <tr><td>Solar (7 kW) gross</td><td>$21,000</td><td></td></tr>
    <tr><td>Battery (13.5 kWh) gross</td><td>$15,900</td><td></td></tr>
    <tr><td>Combined gross</td><td>$36,900</td><td></td></tr>
    <tr><td>Federal ITC (30%)</td><td>−$11,070</td><td></td></tr>
    <tr><td>Net cost</td><td>$25,830</td><td></td></tr>
    <tr><td>Simple payback</td><td>8.2 years</td><td></td></tr>
  </tbody>
</table>

<h2>How NEM 3.0 Math Actually Works Here</h2>
<p>Under <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" target="_blank" rel="noopener">NEM 3.0</a>, exports are credited at the Avoided Cost Calculator rate — roughly $0.05–$0.08/kWh for most hours, occasionally higher during system peak. Compared to the $0.42 peak retail rate, exporting is worth about 1/8th of self-consumption. So the design priority is: <strong>self-consume first, store the rest, only export what's left.</strong></p>
<p>For this customer, less than 8% of annual production gets exported. The rest is consumed directly or through the battery. That self-consumption ratio is what makes the math work. SDG&E publishes its NEM-related rates on its <a href="https://www.sdge.com/residential/savings-center/solar" target="_blank" rel="noopener">solar page</a>. The Avoided Cost Calculator updates monthly and varies by time-of-day, which adds complexity but doesn’t fundamentally change the design priority.</p>

<h2>What Surprised the Homeowner</h2>
<p>How active they had to be. The system mostly self-manages, but optimizing requires paying attention — running the dishwasher and laundry midday instead of evening, keeping the AC pre-cooled before peak, etc. The savings show up faster when you adjust your behavior. They're competitive about it. The husband checks the production app every morning. Behavior change is responsible for maybe $30–$50/month of the savings on top of the structural design — small in percentage terms but real.</p>

<h2>What We'd Do Differently</h2>
<p>I'd have explored a smart EV charger that schedules charging based on solar production, not just time-of-use. There are chargers that talk to the inverter and only pull power when solar is producing surplus. That would have allowed some of the EV charging to come from solar directly, displacing more grid pull. The marginal benefit is small ($15–$25/month) but it's a refinement we passed on initially. Now I default to recommending solar-aware EV chargers on any EV-TOU customer.</p>

<h2>Permitting and Interconnection</h2>
<p>SDG&E interconnection took 18 days from PTO request to approval. City of San Diego permit took 11 business days. Total from contract signature to PTO: 41 days. SDG&E has gotten faster in the last two years; older case studies showing 60+ day timelines aren't representative anymore. The inspection process is mostly digital now, which compresses the back-and-forth that used to drag projects out.</p>

<h2>The Total Cost Stack</h2>
<ul>
  <li>Panels (18 × 400W): $6,480</li>
  <li>Hybrid inverter (solar + battery): $4,200</li>
  <li>Battery (13.5 kWh): $11,500</li>
  <li>Racking, BOS, conduit: $2,800</li>
  <li>Electrical (main panel, automatic transfer switch): $3,500</li>
  <li>Permits + interconnection: $920</li>
  <li>Labor: $6,200</li>
  <li>Margin + overhead: $1,300</li>
  <li><strong>Gross: $36,900</strong></li>
  <li><strong>After 30% ITC: $25,830</strong></li>
</ul>
<p>ITC eligibility for both solar and storage: <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS Residential Clean Energy Credit</a>.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>This is typical for an EV-owning San Diego household on EV-TOU-5 under NEM 3.0. If you're on a flat rate or a different TOU schedule, the math shifts. If you don't have an EV, the rate spread is smaller and the battery payoff is slower. Don't anchor on the 77% number — anchor on your last 12 months of SDG&E bills and your actual rate plan. A SDG&E customer on a non-EV TOU plan with the same system would likely see closer to 65% bill reduction, not 77%.</p>

<p>One more San Diego-specific note. SDG&E’s service area covers a wide range of microclimates — coastal homes in La Jolla, inland homes in Poway, desert-edge homes near Ramona. Production varies meaningfully across the territory. A coastal home with morning marine layer produces 4–7% less annually than an inland home at the same panel orientation, which compresses the savings curve and stretches the payback by a year or more. We always ask about microclimate at the site visit and adjust the production model rather than using a single SDG&E-territory-wide assumption.</p>
<p>And on the EV side: if you don’t have an EV today but are planning one in the next 2–3 years, factor that into the system size now. Adding panels later costs more per watt than building right the first time, and an EV adds 250–400 kWh/month of overnight load that the original design might not anticipate.</p>

<p>Worth adding: SDG&E’s permit-to-operate process used to be one of the slowest in California. It’s improved meaningfully since 2023 — the digital inspection workflow rolled out, and the interconnection queue is shorter than it was. If you read older case studies online with 60–90 day SDG&E timelines, those don’t reflect 2026 reality. Plan on 35–50 days from contract to PTO for a standard residential install in San Diego.</p>

<p>More California-specific guidance at <a href="/solar-california">solar-california</a> and <a href="/solar-san-diego">solar-san-diego</a>. Or <a href="/#get-quote">request a quote</a>. See also our <a href="/blog/case-los-angeles-ladwp-nem-3-battery-first">LADWP case study</a> for a different California utility comparison.</p>
`,
    faqs: [
      { question: 'What is the EV-TOU-5 rate plan from SDG&E?', answer: 'EV-TOU-5 is SDG&E\'s time-of-use rate for households with electric vehicles. Peak hours (4pm–9pm) run roughly $0.42/kWh; off-peak overnight runs around $0.16/kWh; super-off-peak weekday midday is about $0.13/kWh. The huge spread between peak and off-peak makes battery arbitrage valuable.' },
      { question: 'How much does a 7 kW solar + 13.5 kWh battery system cost in San Diego?', answer: 'Roughly $36,000–$40,000 gross before the federal credit, depending on installer, equipment brand, and roof complexity. After the 30% ITC, net cost is $25,000–$28,000. SDG&E doesn\'t offer additional solar incentives beyond NEM 3.0 itself.' },
      { question: 'Should I get a battery if I\'m on NEM 3.0?', answer: 'Almost always yes if you\'re on a TOU rate with a steep peak premium. Without a battery under NEM 3.0, you\'re selling daytime production for ~$0.06 and buying evening power at $0.40+. A battery captures the spread. The exception: very low evening usage, where the battery rarely discharges enough to pay back.' },
      { question: 'Will an SDG&E customer\'s bill ever go to zero?', answer: 'Almost never. The basic service charge is fixed, and even an oversized system tends to leave residual evening or winter draw. Most well-designed San Diego solar+battery installs land between 60% and 80% bill reduction. Anyone promising zero is either oversizing or not telling you about non-bypassable charges.' }
    ]
  },

  {
    slug: 'case-summerlin-hoa-pushback-resolved-week-3',
    title: 'A Summerlin HOA Said No — How We Got to Yes in Three Weeks',
    description: 'A Summerlin HOA initially denied a solar install over street-visibility concerns. The legal lever, the design tweak, and how we got to approval in three weeks.',
    publishDate: '2026-05-09',
    tags: ['Case Study', 'Nevada', 'Summerlin', 'HOA', 'Las Vegas'],
    body: `
<p>A Summerlin homeowner submitted a solar application to their sub-association. The HOA denied it, citing panel visibility from the street. Three weeks later, they had unconditional approval. The lever was <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a>. The fix was a design tweak. No lawyers needed. This case is about how to handle an HOA pushback the right way — civil, written, with the statute and the math, not adversarial.</p>

<h2>The Starting Point</h2>
<p>A 2,400 sqft single-story home in a Summerlin sub-association built in 2003. The roof has three slopes — a small front-facing slope that’s clearly visible from the street, a south-side slope partially visible, and a large back-roof slope that’s essentially invisible from public view. South was the best production orientation, which meant putting some panels on the visible front slope.</p>
<p>The homeowner had submitted our standard packet — site plan, panel layout, datasheet, contractor licensing — proposing 18 panels split between the front-facing slope (6 panels) and the back-roof slope (12 panels). The HOA architectural committee responded in 9 days with a denial: "Panels visible from street view are not approved. Please resubmit with a layout that places all panels out of public view."</p>

<h2>The Legal Lever</h2>
<p>Nevada’s solar access statute (NRS 278.0208) prevents an HOA from prohibiting a solar energy system. It also prevents an HOA from imposing requirements that would <em>significantly increase</em> system cost or <em>significantly decrease</em> system efficiency. The statute uses specific thresholds — generally a "more than 10% efficiency loss" or a "more than $1,000 cost increase" benchmark, though the exact wording matters and shifts with case law.</p>
<p>"All panels out of public view" was a request that, on this roof, would have forced us to put all 18 panels on the back slope only. The back slope didn’t have room for 18 panels at proper spacing. The forced redesign would have required dropping to 14 panels — a roughly 22% reduction in system size and a corresponding output reduction. That’s significantly more than the statutory 10% threshold.</p>
<p>The statute matters because most HOAs respect it once they see it. They’re not trying to violate state law; they’re mostly trying to control aesthetics, and they don’t always realize their preferred outcome would conflict with statutory protection. Quoting the statute back to them — civilly, in writing — usually moves the conversation from "no" to "what can we negotiate."</p>

<h2>The Approach</h2>
<p>I drafted a written response to the HOA. Not adversarial, not legalistic — informational. The letter laid out three things:</p>
<ol>
  <li>The statutory cite to NRS 278.0208 and the relevant subsections.</li>
  <li>A production model showing the proposed layout vs. the back-only layout, with the percentage difference. (22% production loss.)</li>
  <li>A revised compromise layout that addressed the visibility concern more narrowly than "all panels invisible."</li>
</ol>
<p>The compromise was the actual unlock. We moved the front-slope panels from the front-facing edge to the inner portion of that slope, behind the gable line — visible from the curb only at an angle, and not silhouetted against the sky. We also specified all-black panels with black frames and black flashing, eliminating the silver-frame contrast that draws the eye.</p>

<h2>What the HOA Actually Cared About</h2>
<p>Once we made the visual case (with mocked-up street-view images) and pointed to the statute, the committee's actual concern came out: they didn’t like the look of silver-framed panels with white spaces between them. They had no objection to solar in principle. They had an aesthetic objection to a specific look.</p>
<p>That’s solvable. All-black panels with skirting on the visible edge addressed the aesthetic. The placement tweak addressed the silhouette. The committee approved at the next meeting — three weeks total from initial denial to final approval. The chair told me afterward they’d wished more contractors approached pushback this way; most just escalate, and the committee ends up in a defensive crouch.</p>

<h2>What We Designed (Final)</h2>
<p>An 8 kW system: 20 panels at 400W, all-black monocrystalline with black frames, black skirting on the front-slope edge, string inverter with optimizers, no battery. Production drop versus the original layout: less than 2%. Cost increase for the all-black panels: about $400.</p>

<h2>The Numbers</h2>
<table>
  <thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
  <tbody>
    <tr><td>Monthly NV Energy bill</td><td>$248</td><td>$31</td></tr>
    <tr><td>Annual savings</td><td colspan="2">$2,604</td></tr>
    <tr><td>System cost (gross)</td><td colspan="2">$23,200</td></tr>
    <tr><td>Federal ITC (30%)</td><td colspan="2">−$6,960</td></tr>
    <tr><td>Net cost</td><td colspan="2">$16,240</td></tr>
    <tr><td>Simple payback</td><td colspan="2">6.2 years</td></tr>
    <tr><td>HOA timeline (denial → approval)</td><td colspan="2">21 days</td></tr>
  </tbody>
</table>

<h2>What Surprised the Homeowner</h2>
<p>That the HOA ended up being reasonable. They’d come in expecting a fight. The committee chair told us afterward that nobody had ever sent them a written response with a statute and a production model — most homeowners either gave up or escalated to a lawyer. A clear, civil letter with the math saved the homeowner $4,000 in legal fees and three months of timeline. The other surprise: their neighbor, who’d been waiting to see how it played out, signed up with us the following month and used the same template.</p>

<h2>What We'd Do Differently</h2>
<p>I should have submitted with all-black panels from the start. The original submission used the cheaper silver-frame panel, which probably triggered the aesthetic objection in the first place. On any sub-association built before 2010 in Summerlin, default to all-black for the first submission. The $400 premium beats a three-week delay. Now that’s standard practice in our Summerlin proposals.</p>

<h2>The HOA / Permit Stack</h2>
<ul>
  <li>Initial submission: day 0</li>
  <li>HOA denial: day 9</li>
  <li>Written response with statute + revised layout: day 12</li>
  <li>Committee meeting + approval: day 21</li>
  <li>Clark County permit: 8 business days after HOA</li>
  <li>NV Energy interconnection: 14 days after install</li>
</ul>
<p>NV Energy net-metering specifics live on their <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">net metering page</a>. ITC details on the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" target="_blank" rel="noopener">IRS page</a>.</p>

<h2>Why This Isn't Typical (or Why It Is)</h2>
<p>About 10–15% of Summerlin sub-association submissions get an initial pushback. Almost all of them resolve once the homeowner provides a clean written response with the statute and an aesthetic compromise. If your HOA denies you and the design genuinely loses more than 10% production or costs more than $1,000 to comply, you have a strong statutory position. If the loss is smaller than that, the law doesn’t protect you and you’ll need to compromise. Either way, don’t lawyer up first — write the letter first.</p>

<p>One last note on tone. A lot of homeowners come into HOA disputes with their hackles up — they’ve already heard war stories from neighbors, and they expect the committee to be hostile. The committee almost never is. They’re volunteers. They’re trying to follow the rules they have. They don’t love getting handed a fight. A short, civil letter that names the statute, shows the math, and proposes a compromise gives them a path out of the corner they painted themselves into. That’s the entire mechanism. It works almost every time.</p>

<p>If your HOA is giving you trouble in 89135, 89144, 89117, or anywhere in Summerlin, <a href="/#get-quote">request a quote</a> and I’ll help you write the response. More context at <a href="/solar-summerlin">Summerlin solar</a>. Related case: <a href="/blog/case-summerlin-3000-sqft-saved-287-month">Summerlin family $287/month savings</a>.</p>
`,
    faqs: [
      { question: 'Can a Nevada HOA legally deny my solar installation?', answer: 'Not outright. NRS 278.0208 prevents an HOA from prohibiting a solar energy system. They can regulate placement to a reasonable degree, but they cannot impose requirements that significantly reduce production or significantly increase cost. "Significantly" is generally interpreted as more than ~10% production loss or more than ~$1,000 cost increase.' },
      { question: 'What should I do if my Summerlin HOA denies my solar application?', answer: 'Don\'t escalate to a lawyer first. Write a clear, civil response that cites NRS 278.0208, includes a production model showing the cost or efficiency impact of their requested change, and proposes a narrower compromise that addresses their actual concern. Most denials resolve within 2–4 weeks this way.' },
      { question: 'Are all-black solar panels worth the extra cost in an HOA neighborhood?', answer: 'Usually yes. The premium is roughly $300–$500 on a typical residential system. The aesthetic improvement (no silver frames, no white backsheet visible) often eliminates HOA objections before they start. Default to all-black on any Summerlin sub-association built before 2010.' },
      { question: 'How long does the average Summerlin HOA solar approval take?', answer: 'Most clean submissions approve in 14–25 days. Denials with a clean revision and statutory response typically resolve in 21–35 days total. If you\'re past 60 days with no movement, you have a stronger statutory case and it\'s worth escalating in writing.' }
    ]
  }
];
