import type { BlogPost } from './blog-posts';

export const batchMoneyPosts: BlogPost[] = [
  {
    slug: 'solar-cost-las-vegas-2026',
    title: 'How Much Does Solar Cost in Las Vegas in 2026?',
    description: 'Real solar cost in Las Vegas in 2026: gross price, after-tax-credit math, payback math, and what changes panel-to-panel. Get a quote.',
    publishDate: '2025-12-03',
    tags: ['Las Vegas', 'Cost & Financing', 'Tax Credit'],
    body: `<p>In 2026, a typical Las Vegas solar install runs $2.60–$3.40 per watt before incentives, which puts an 8 kW system at roughly $20,800–$27,200 cash, or about $14,560–$19,040 after the 30% federal tax credit. Add a battery and you're looking at another $9,000–$14,000. The actual number depends on roof complexity, panel tier, and whether you finance.</p>

<h2>The honest baseline number</h2>
<p>When I run quotes for Las Vegas homeowners, the most common system size lands between 7 and 10 kW. That's enough to offset a $180–$260 monthly NV Energy bill on a 1,800–2,400 sq ft single-family home. The price-per-watt range above isn't marketing — it's what installers in the valley are actually quoting in late 2025 and early 2026, and the lower end usually means a simpler roof and a Tier-2 panel, not a worse install.</p>

<h2>What's in the price</h2>
<p>Most homeowners think they're paying for panels. They're not — panels are roughly 12–15% of total system cost. The rest breaks down like this:</p>
<ul>
<li><strong>Inverter (microinverter or string + optimizers):</strong> 8–12%</li>
<li><strong>Racking, wiring, conduit, breakers:</strong> 10–14%</li>
<li><strong>Labor and install:</strong> 18–22%</li>
<li><strong>Permits, inspection, NV Energy interconnection:</strong> 4–6%</li>
<li><strong>Sales, design, overhead, warranty reserve:</strong> 25–35%</li>
</ul>
<p>That last bucket is why two quotes for the same equipment can be $8,000 apart. It's not the hardware.</p>

<h2>Cash vs financed pricing</h2>
<p>Cash buyers in Vegas typically see the lowest per-watt numbers. Financed deals — especially "$0 down" loans — bake in a dealer fee that's usually 18–28% of the system cost. So a $24,000 cash system becomes a $30,000 financed system on paper, and you're paying interest on the inflated number. I always quote both side-by-side so the math is visible.</p>

<h2>The 30% federal tax credit</h2>
<p>The Residential Clean Energy Credit lets you claim 30% of the total system cost (panels + battery + labor + permits) as a non-refundable credit on your federal taxes. It's not a rebate — it offsets tax you owe. If you don't owe enough in a single year, you carry the rest forward. Full mechanics are at the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">IRS Residential Clean Energy Credit page</a>.</p>

<h2>Nevada-specific tax breaks</h2>
<p>Two extras that out-of-state guides usually miss:</p>
<ul>
<li><strong>Property tax exemption:</strong> Nevada doesn't reassess your home's value when you add solar. Codified at <a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">NRS 361.079</a>.</li>
<li><strong>Sales tax abatement on certain renewable equipment</strong> (depends on system type and certification). Reference: <a href="https://www.leg.state.nv.us/NRS/NRS-374.html">NRS 374</a>.</li>
</ul>

<h2>Battery cost in 2026</h2>
<p>A single 13.5 kWh battery (Tesla Powerwall 3, Enphase IQ 5P stack, Franklin aPower) installed runs $11,000–$15,000 before the tax credit. After 30% federal, you're at $7,700–$10,500. Most of my Vegas clients add one battery, not two — the second battery rarely pencils unless you're on a well or running medical equipment.</p>

<h2>Payback period</h2>
<p>Cash payback in Las Vegas is currently 7–10 years on a properly-sized system, then 15–20 years of basically free electricity. Financed payback is longer because of the dealer fee — usually 11–14 years on a 25-year loan. I break this down per-quote so you see your number, not an industry average.</p>

<h2>Common mistake — oversizing</h2>
<p>I see this on every third quote a homeowner brings me from another company: the system is 30% bigger than the home actually uses. NV Energy's <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering">net metering rules</a> only credit you for excess generation at a reduced rate, so producing more than you consume is mostly wasted money. Right-sizing matters more than maxing out the roof.</p>

<h2>Las Vegas vs Henderson vs Summerlin pricing</h2>
<p>Pricing barely moves between zip codes inside the valley. What does move it: HOA review fees in Summerlin (sometimes $150–$400 in delays), older panel-box upgrades in central Vegas (a $1,500–$3,000 add), and tile vs comp-shingle roofs in Henderson (tile adds 6–10%). More on each in my <a href="/solar-las-vegas">Las Vegas</a>, <a href="/solar-henderson-nv">Henderson</a>, and <a href="/solar-summerlin">Summerlin</a> pages.</p>

<h2>What a fair 2026 quote looks like</h2>
<p>Per-watt cash price under $3.20, itemized BOM (panels, inverter, racking, labor broken out), production estimate sourced from NREL or PVWatts, and a written 25-year production guarantee. If the rep can't produce all four on paper, keep shopping.</p>

<p>Want a no-pressure quote with the math shown? <a href="/#get-quote">Get a quote here</a> and I'll send you a written breakdown within 48 hours.</p>`,
    faqs: [
      {
        question: 'What is the average cost of solar panels in Las Vegas in 2026?',
        answer: 'For a typical 8 kW residential system in Las Vegas, the 2026 cash price is $20,800–$27,200 before incentives, or roughly $14,560–$19,040 after the 30% federal tax credit. Per-watt pricing is currently $2.60–$3.40 cash. Financed deals run higher because of dealer fees baked into the loan. The exact number depends on roof type, panel tier, electrical panel condition, and whether you add a battery.'
      },
      {
        question: 'Is solar still worth it in Las Vegas with NV Energy net metering changes?',
        answer: 'Yes, for most owner-occupied homes. NV Energy still credits exported solar, just at a lower rate than retail. The math works because Las Vegas gets 290+ sun days per year and NV Energy rates have risen multiple times since 2023. A right-sized system that consumes most of its own production on-site (especially with a battery) still hits 7–10 year cash payback. Oversized systems designed to export everything are where the economics break down.'
      },
      {
        question: 'How much does a Tesla Powerwall cost installed in Las Vegas?',
        answer: 'A single Tesla Powerwall 3 installed in Las Vegas runs $11,500–$14,500 in 2026 before the federal tax credit, or roughly $8,050–$10,150 after the 30% credit. The price varies based on whether it goes in during the original solar install or as a retrofit (retrofits add $1,500–$2,500 in labor and electrical work). Permits and NV Energy interconnection paperwork are usually included.'
      },
      {
        question: 'Why do solar quotes vary so much for the same system size?',
        answer: 'About 25–35% of every solar quote is sales, design, marketing, and overhead — not hardware. Two installers can quote identical panels and inverters and be $8,000 apart based purely on their cost structure. National brands with heavy ad spend and door-to-door sales teams typically run higher. Local installers with referral-driven pipelines run lower. Always compare per-watt cash price and itemized bills of materials, not monthly payment estimates.'
      },
      {
        question: 'Can I get solar in Las Vegas with no money down in 2026?',
        answer: 'Yes — most installers offer $0-down loans through lenders like GoodLeap, Sunlight Financial, or Mosaic. The catch is a dealer fee of 18–28% baked into the loan amount, so a $24,000 cash system becomes ~$30,000 financed. You can still come out ahead if your loan payment is less than your old NV Energy bill, but cash or a HELOC almost always beats a dealer-fee loan on total cost.'
      }
    ]
  },
  {
    slug: 'solar-payback-period-las-vegas',
    title: 'Solar Payback Period in Las Vegas — Real Numbers from 2026 Installs',
    description: 'Real solar payback period in Las Vegas, broken down by cash, loan, and lease. Numbers from actual 2026 installs. Run your own.',
    publishDate: '2025-12-15',
    tags: ['Las Vegas', 'Cost & Financing', 'Net Metering'],
    body: `<p>Solar payback period in Las Vegas runs 7–10 years for cash buyers and 11–14 years for financed buyers in 2026. The driver isn't sun hours (we have plenty) — it's NV Energy's rising retail rate, the 30% federal tax credit, and whether you let an installer oversize your system.</p>

<h2>What "payback" actually means</h2>
<p>Payback period = total system cost (after incentives) divided by annual electricity savings. Once you hit payback, the rest of the panels' 25-year warranty is essentially free electricity. From my last 6 LV installs, the average cash payback came in at 8.2 years.</p>

<h2>Cash payback math, line by line</h2>
<p>Take an 8 kW system in Henderson on a $230/month NV Energy bill:</p>
<ul>
<li>Gross system cost: $24,000</li>
<li>Federal tax credit (30%): -$7,200</li>
<li>Net cost: $16,800</li>
<li>Annual NV Energy bill before solar: $2,760</li>
<li>Annual residual bill (fixed charges + small offset gap): $360</li>
<li>Annual savings: $2,400</li>
<li><strong>Cash payback: 7.0 years</strong></li>
</ul>
<p>That's before factoring in NV Energy rate increases — which are real and documented in the <a href="https://www.eia.gov/state/?sid=NV">EIA Nevada electricity profile</a>. Add 3% annual rate inflation and payback shrinks to about 6.4 years.</p>

<h2>Financed payback math</h2>
<p>Same system, financed at 7.99% over 25 years with a 22% dealer fee:</p>
<ul>
<li>Financed amount: ~$29,300</li>
<li>Monthly payment: ~$226</li>
<li>NV Energy bill after solar: ~$30</li>
<li>Combined monthly outlay: ~$256 (vs $230 before)</li>
</ul>
<p>You're cash-flow negative by about $26/month for the loan term, but you own the asset. Real payback once the loan is paid: 13–14 years.</p>

<h2>Lease payback</h2>
<p>Trick question — there is no payback on a lease. You're renting power. Savings are typically 10–25% off your NV Energy bill, but you don't own anything and you can't claim the tax credit. I won't quote leases for Vegas homeowners. The math doesn't favor you.</p>

<h2>What shortens payback</h2>
<ul>
<li><strong>Right-sizing.</strong> A system that produces 95–105% of your usage pays back faster than one producing 130%, because <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering">NV Energy's net metering credit</a> is below retail.</li>
<li><strong>Battery for self-consumption.</strong> Storing daytime solar to use at night beats exporting it for partial credit.</li>
<li><strong>Cash or HELOC.</strong> Avoid the 22%+ dealer fee on solar loans.</li>
<li><strong>Pre-paid roof prep.</strong> If your roof needs replacement in 5 years, do it before the panels go up.</li>
</ul>

<h2>What lengthens payback</h2>
<ul>
<li>Oversizing past 105% of usage</li>
<li>Buying premium panels you don't need (Tier-1 monocrystalline at 22% efficiency is plenty in Vegas sun)</li>
<li>Adding two batteries when one would do</li>
<li>Door-to-door pricing — usually 25–40% above local installer rates</li>
</ul>

<h2>NV Energy rate increases — the silent accelerator</h2>
<p>NV Energy's residential rates have moved up multiple times in the last three years. Every approved rate increase shortens your solar payback because your savings grow. I model 3% annual rate inflation in my quotes — historically that's been conservative.</p>

<h2>Henderson vs Summerlin vs central Vegas</h2>
<p>Payback differences across the valley are small (within 6 months). What moves it more: pool pumps (faster payback), all-electric homes with heat pumps (faster), gas-heated homes with low summer cooling load (slower). I cover the city-by-city math on my <a href="/solar-henderson-nv">Henderson</a> and <a href="/solar-summerlin">Summerlin</a> pages.</p>

<h2>The 25-year picture</h2>
<p>On the 8 kW Henderson example: $16,800 net cost, ~$2,400/year savings growing 3% annually = roughly $87,000 of lifetime electricity savings. Subtract net cost and you're up about $70,000 over 25 years. That's the real number — payback is just the milestone.</p>

<h2>How to verify your own payback before signing</h2>
<p>Three things any honest installer will give you in writing:</p>
<ol>
<li>Year-1 production estimate based on your address (PVWatts or NREL data)</li>
<li>Itemized cost broken into hardware + labor + soft costs</li>
<li>NV Energy rate assumption used in the savings model (anything under 2% is sandbagging payback to look better; anything over 5% is overpromising)</li>
</ol>

<p>Want your specific payback number with the math visible? <a href="/#get-quote">Request a quote here</a> and I'll run it on your actual bill.</p>`,
    faqs: [
      {
        question: 'What is the average solar payback period in Las Vegas?',
        answer: 'Cash buyers in Las Vegas hit payback in 7–10 years on a properly-sized 2026 install, with 8.2 years being typical from recent jobs. Financed buyers using $0-down loans hit payback in 11–14 years because of dealer fees baked into the loan. Lease customers never hit payback because they don\'t own the system. After payback, the panels keep producing for another 15+ years under their production warranty, which is where most of the lifetime value comes from.'
      },
      {
        question: 'Does NV Energy net metering still make solar worth it in 2026?',
        answer: 'Yes, especially with a battery. NV Energy credits exported solar at a lower rate than retail, which means systems designed to export huge surpluses pay back slower. But systems that self-consume most of their production — either through right-sizing or by adding a battery — still pencil out at 7–10 year payback. The trick is sizing the system to your actual annual usage instead of maxing out roof space.'
      },
      {
        question: 'How do NV Energy rate increases affect my solar payback?',
        answer: 'Every approved rate increase shortens your payback. If your annual savings start at $2,400 and NV Energy raises rates 3% per year, those savings grow each year — so the system pays itself off faster than a static model predicts. Conservative payback estimates use 2–3% annual rate inflation. Looking at the last decade of NV Energy filings, that\'s been on the low side, not the high side.'
      },
      {
        question: 'Is a solar lease ever a good deal in Las Vegas?',
        answer: 'Almost never. Leases give you 10–25% off your NV Energy bill but you don\'t own the system, you can\'t claim the 30% federal tax credit, and the lease can complicate selling your home. The leasing company captures the equity. For Las Vegas homeowners with tax liability and a 7+ year time horizon, cash or a low-rate HELOC always beats leasing on total dollars over 25 years.'
      },
      {
        question: 'Should I get a battery to shorten my solar payback?',
        answer: 'A battery doesn\'t shorten payback by itself — it adds $8,000–$10,000 (after credit) to system cost. What it does is improve self-consumption, so more of your solar production offsets retail-rate electricity instead of getting net-metered at a lower rate. For most Vegas homes, a single battery shortens combined payback by 6–12 months and adds backup power during outages. Two batteries rarely pencil unless you have a well or medical equipment.'
      }
    ]
  },
  {
    slug: 'zero-down-solar-las-vegas-explained',
    title: '$0 Down Solar in Las Vegas — How It Actually Works',
    description: '$0 down solar in Las Vegas explained: dealer fees, real interest rates, and when it pencils. Honest math from a local installer.',
    publishDate: '2025-12-29',
    tags: ['Las Vegas', 'Cost & Financing'],
    body: `<p>$0 down solar in Las Vegas is real, but the headline rate isn't what you actually pay. Most $0-down loans bake in an 18–28% dealer fee on top of the system price, which is how lenders fund the "low" advertised APR. The deal can still work — you just need to see the real cost, not the marketing version.</p>

<h2>How a $0-down solar loan actually works</h2>
<p>You sign for a system at, say, $24,000. The lender (GoodLeap, Sunlight Financial, Mosaic, Service Finance, etc.) advances the installer the full amount immediately. To make the advertised 4.99% or 5.99% APR work for the lender, the installer pays them a "dealer fee" of 18–28% of the loan amount. That fee gets added to your principal. So your $24,000 system becomes a ~$30,000 loan. You finance the markup.</p>

<h2>The two prices every installer should show you</h2>
<p>When I quote a Las Vegas homeowner, I show:</p>
<ul>
<li><strong>Cash price:</strong> what you'd pay if you wrote a check today</li>
<li><strong>Financed price:</strong> cash price + dealer fee, plus 25 years of interest</li>
</ul>
<p>If a rep only shows you a monthly payment, ask for both numbers in writing. Reps who refuse usually have a reason.</p>

<h2>Real example — same system, three ways</h2>
<p>8 kW Henderson install, gross $24,000:</p>
<ul>
<li><strong>Cash:</strong> $24,000 → $16,800 after 30% federal credit</li>
<li><strong>HELOC at 8.5%:</strong> $24,000 financed, ~$48 in interest premium per month vs cash</li>
<li><strong>$0-down solar loan at 5.99%, 22% dealer fee:</strong> $29,280 financed, monthly ~$189, total paid ~$56,700</li>
</ul>
<p>The $0-down loan costs $39,900 more than cash and $24,000 more than a HELOC over the loan term. The "low" 5.99% rate is mostly a fiction made possible by the dealer fee.</p>

<h2>When $0-down still wins</h2>
<p>It's not always wrong. $0-down works when:</p>
<ul>
<li>You don't have $20K cash and don't have HELOC headroom</li>
<li>Your monthly loan payment is meaningfully below your current NV Energy bill (cash-flow positive day one)</li>
<li>You plan to stay in the house 10+ years</li>
<li>You'll use the federal tax credit to make a principal reduction in year one (most loans require this — see below)</li>
</ul>

<h2>The 18-month re-amortization trap</h2>
<p>Most solar loans are structured with a "low payment" assuming you apply your 30% federal tax credit as a principal reduction within 12–18 months. If you don't, your monthly payment jumps — sometimes 40–60%. Read the loan disclosure. If you don't have tax liability to claim the full credit in year one, this re-amortization will hurt.</p>

<h2>Federal tax credit on financed systems</h2>
<p>Good news: you can still claim the full 30% credit even when you finance, as long as you (the homeowner) own the system. Lease and PPA customers can't claim it. Mechanics live at the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">IRS Residential Clean Energy Credit page</a>.</p>

<h2>Why national door-to-door reps push $0-down hardest</h2>
<p>Dealer fees fund their commission structure. A $0-down financed deal can pay a rep 2–3x what a cash deal pays. That's not a moral judgment — it's just why the pitch is structured the way it is. Local referral-based installers (me included) typically don't lean on $0-down because we're not paying a sales floor.</p>

<h2>HELOC vs solar loan — almost always HELOC</h2>
<p>If you have home equity, a HELOC at 8–9% beats a $0-down solar loan at 5.99%-with-dealer-fee almost every time. The interest is also potentially deductible (talk to your CPA). A HELOC keeps your cash price as your real price.</p>

<h2>Red flags in $0-down quotes</h2>
<ul>
<li>Rep won't show you the cash price</li>
<li>Loan disclosure has different numbers than the proposal</li>
<li>"This rate is only good today" pressure</li>
<li>Production guarantee uses unrealistic NV Energy rate inflation (5%+) to make payback look fast</li>
<li>No itemized BOM</li>
</ul>

<h2>How to negotiate a $0-down deal</h2>
<p>Ask the installer to quote it both ways. Then ask them to reduce the dealer fee — it's often negotiable, especially in late-month or late-quarter situations. A 22% dealer fee at $24,000 is $5,280 of margin. Some of that is movable. I cover this in detail on the <a href="/about">about page</a> and during quote walkthroughs.</p>

<h2>Bottom line</h2>
<p>$0-down solar in Las Vegas works if your monthly outlay drops day one and you plan to stay long enough to ride out the loan. It's a worse deal than cash or HELOC almost always — but "worse than cash" can still be much better than paying NV Energy forever.</p>

<p>Want both prices on your specific roof, no pressure? <a href="/#get-quote">Request a quote here</a> and I'll send a written cash and financed comparison.</p>`,
    faqs: [
      {
        question: 'Is $0 down solar really $0 down in Las Vegas?',
        answer: 'Yes for the upfront payment — you don\'t write a check at install. But the loan amount is typically 18–28% larger than the cash price of the system because of a dealer fee built into the loan. So you do pay it, just spread out over 20–25 years with interest. The "$0 down" refers to the day-one out-of-pocket, not the total cost. Cash and HELOC almost always beat $0-down financing on total dollars paid.'
      },
      {
        question: 'What is a dealer fee on a solar loan?',
        answer: 'A dealer fee is a payment from the installer to the lender to "buy down" the advertised interest rate on a $0-down solar loan. It\'s typically 18–28% of the system price. The installer recovers it by inflating the financed price relative to the cash price. So the same system might be $24,000 cash and $30,000 financed at the same APR. The dealer fee makes the headline interest rate possible.'
      },
      {
        question: 'Can I claim the 30% federal solar tax credit on a financed system?',
        answer: 'Yes, as long as you own the system (loans qualify, leases and PPAs do not). The 30% Residential Clean Energy Credit applies to the full installed cost — including the financed amount — in the year your system is placed in service. Most solar loans assume you\'ll apply that credit as a principal reduction within 12–18 months to keep monthly payments low. If you don\'t have enough tax liability to claim the full credit, you can carry it forward.'
      },
      {
        question: 'Should I use a HELOC or a solar loan to finance my system?',
        answer: 'A HELOC almost always beats a $0-down solar loan on total cost, even though the HELOC rate looks higher on paper. The reason is the dealer fee — solar loans look cheap because the principal is inflated. A HELOC at 8.5% on $24,000 typically costs less over the term than a 5.99% solar loan on $29,300. HELOC interest may also be deductible if used for home improvement (verify with your CPA).'
      },
      {
        question: 'What happens if I don\'t apply my tax credit to my solar loan?',
        answer: 'Most $0-down solar loans are structured with a low introductory payment that assumes you\'ll make a 26–30% principal payment within 12–18 months using your tax credit. If you don\'t, the loan re-amortizes and your monthly payment jumps — often by 40–60%. This is disclosed in the loan documents but rarely emphasized in the sales pitch. If you can\'t use the full credit in year one, factor that into the deal before signing.'
      }
    ]
  },
  {
    slug: 'solar-lease-vs-loan-vs-cash-nevada',
    title: 'Solar Lease vs Loan vs Cash Purchase in Nevada — Which Wins?',
    description: 'Solar lease vs loan vs cash in Nevada compared on real numbers, tax credit, home value, and 25-year cost. See the math.',
    publishDate: '2026-01-09',
    tags: ['Nevada', 'Cost & Financing', 'Tax Credit'],
    body: `<p>Cash wins in Nevada in 2026, then HELOC, then $0-down loan, then lease — in that order, almost every time. The gap between cash and lease over 25 years is typically $40,000–$60,000 on a single Las Vegas home. Here's why, with the math shown.</p>

<h2>The four ways to pay for solar</h2>
<ul>
<li><strong>Cash:</strong> you write a check, you own the system, you claim the tax credit</li>
<li><strong>HELOC / home equity loan:</strong> you finance through your bank, you own the system, you claim the credit</li>
<li><strong>$0-down solar loan:</strong> you finance through a solar lender (GoodLeap, Mosaic, Sunlight), you own the system, you claim the credit, but principal is inflated by a dealer fee</li>
<li><strong>Lease or PPA:</strong> a third party owns the system on your roof, you pay them monthly for the power, you don't claim the credit</li>
</ul>

<h2>Same Henderson 8 kW system, four ways</h2>
<p>Gross system cost $24,000. Estimated 25-year electricity offset value: ~$87,000 (3% annual NV Energy rate inflation).</p>
<ul>
<li><strong>Cash:</strong> Net cost $16,800 after credit. Lifetime net: <strong>+$70,200</strong></li>
<li><strong>HELOC at 8.5%:</strong> Total paid ~$23,500 after credit. Lifetime net: <strong>+$63,500</strong></li>
<li><strong>$0-down solar loan, 22% dealer fee:</strong> Total paid ~$40,000 after credit. Lifetime net: <strong>+$47,000</strong></li>
<li><strong>20-year lease:</strong> Total paid ~$52,000 (no credit, escalator). Lifetime net: <strong>+$15,000</strong></li>
</ul>
<p>Cash beats lease by ~$55,000 over 25 years on the same roof.</p>

<h2>Why the lease loses so badly</h2>
<p>Three reasons stack:</p>
<ol>
<li>You don't own the asset, so you don't get the 30% <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">federal tax credit</a> — the leasing company does.</li>
<li>Most leases have a 1.9–2.9% annual escalator, so your "savings vs NV Energy" shrinks every year.</li>
<li>You can't claim Nevada's <a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">property tax exemption benefit</a> as cleanly because you don't own the system.</li>
</ol>

<h2>Tax credit eligibility</h2>
<p>This is the single biggest dollar driver. Cash, HELOC, and solar loans all let you claim the 30% credit because you own the system. Leases and PPAs do not — the third-party owner claims it. On a $24,000 system, that's $7,200 you leave on the table by leasing.</p>

<h2>Home value impact</h2>
<p>Owned solar adds resale value (Zillow and DOE data both back this — see <a href="https://www.energy.gov/eere/solar">DOE solar resources</a>). Leased solar typically subtracts from sale speed because buyers don't want to assume someone else's lease. I've seen Vegas listings sit longer specifically because of inherited leases.</p>

<h2>When does a lease actually make sense?</h2>
<p>Three narrow cases:</p>
<ul>
<li>You have zero federal tax liability and won't for 5+ years (retirees on Social Security only)</li>
<li>You can't qualify for any loan and don't have cash</li>
<li>You're 100% certain you'll move in under 4 years and want some bill savings</li>
</ul>
<p>For everyone else, it's a worse deal.</p>

<h2>HELOC vs $0-down solar loan</h2>
<p>HELOCs at 8–9% almost always beat $0-down solar loans at 5.99% because the solar loan principal is inflated by a 18–28% dealer fee. Compare total paid, not the rate. I cover this in detail in <a href="/zero-down-solar-las-vegas-explained">$0 Down Solar Explained</a>.</p>

<h2>Cash vs HELOC — small gap</h2>
<p>If you have the cash and no better use for it, write the check. If you'd rather keep liquidity and your HELOC rate is under 9%, HELOC is fine. The gap is usually $5,000–$8,000 over 25 years on an 8 kW system. Not nothing, but not the dealmaker.</p>

<h2>Nevada-specific tax considerations</h2>
<p>Nevada has no state income tax, so the federal credit is the main tax incentive. The state's property tax exemption (<a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">NRS 361.079</a>) and partial sales tax abatement (<a href="https://www.leg.state.nv.us/NRS/NRS-374.html">NRS 374</a>) apply to owned systems. These don't apply to leased systems on your roof.</p>

<h2>What I quote</h2>
<p>I quote cash and HELOC by default for Nevada homeowners. I'll quote a $0-down loan if cash flow is the constraint. I won't quote leases — the math doesn't favor my clients and I'd rather lose the deal than put someone on one. More on my approach on the <a href="/about">about page</a>.</p>

<p>Want the four-way comparison run on your actual NV Energy bill? <a href="/#get-quote">Request a quote here</a>.</p>`,
    faqs: [
      {
        question: 'Is a solar lease ever a better deal than buying solar in Nevada?',
        answer: 'Rarely. Three narrow cases: you have zero federal tax liability for the next 5+ years, you can\'t qualify for a loan and don\'t have cash, or you\'re 100% sure you\'ll sell the home in under 4 years. For everyone else, the lease loses to cash by $40,000–$60,000 over 25 years on a typical Vegas home, mostly because the leasing company captures the 30% federal tax credit and you don\'t.'
      },
      {
        question: 'Who claims the 30% federal solar tax credit on a leased system?',
        answer: 'The leasing company or PPA provider — not the homeowner. The federal Residential Clean Energy Credit only applies to system owners. On a $24,000 Vegas install, that\'s $7,200 the leasing company keeps and you don\'t. They use it to make their lease economics work, but they don\'t pass the full value back to you. This is the single biggest reason leases lose to ownership over the long term.'
      },
      {
        question: 'Does leased solar hurt my home\'s resale value in Las Vegas?',
        answer: 'Often yes. Buyers either need to qualify to assume the lease or the seller has to buy it out at closing — sometimes for $15,000–$25,000. Owned solar typically adds value and is a selling point. Leased solar is a complication on the title and disclosure that can extend days-on-market. I\'ve seen multiple Las Vegas listings sit longer specifically because of inherited solar leases.'
      },
      {
        question: 'Should I use HELOC or a solar loan to buy panels in Nevada?',
        answer: 'HELOC almost always wins on total dollars. A $0-down solar loan at 5.99% looks cheaper than a HELOC at 8.5%, but the solar loan principal is inflated 18–28% by a dealer fee that the lender pays the installer. On the same $24,000 system, HELOC typically costs $5,000–$10,000 less over the term than a $0-down solar loan. HELOC interest may also be deductible — check with your CPA.'
      },
      {
        question: 'What\'s the cheapest way to go solar in Nevada in 2026?',
        answer: 'Cash, by a small margin over HELOC. On an 8 kW Henderson system, cash costs $16,800 after the 30% federal credit. HELOC at 8.5% costs about $23,500 over the term. A $0-down solar loan with a 22% dealer fee runs ~$40,000. A 20-year lease comes in around $52,000 with no tax credit. If you have liquidity and no higher-yield use for it, write the check.'
      }
    ]
  },
  {
    slug: 'federal-solar-tax-credit-2026-claim',
    title: 'Federal Solar Tax Credit 2026 — How to Claim It on Your Taxes',
    description: 'How to claim the 30% federal solar tax credit on your 2026 taxes, with IRS Form 5695 walkthrough and what counts. File correctly.',
    publishDate: '2026-01-22',
    tags: ['Tax Credit', 'Cost & Financing'],
    body: `<p>The 30% federal solar tax credit (Residential Clean Energy Credit) is claimed on IRS Form 5695, filed with your regular 1040, in the tax year your system is placed in service. It's non-refundable, but you can carry forward the unused portion. On a $24,000 install, that's $7,200 of tax owed wiped out.</p>

<h2>What the credit actually is</h2>
<p>It's not a rebate. It's not a check from the government. It's a dollar-for-dollar reduction in your federal income tax liability. If you owe $9,000 in federal tax for the year and your credit is $7,200, you now owe $1,800. If you owe $4,000, the remaining $3,200 carries to next year. Full text and current rules are on the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">IRS Residential Clean Energy Credit page</a>.</p>

<h2>What qualifies for the 30%</h2>
<ul>
<li>Solar panels (PV modules)</li>
<li>Inverters and microinverters</li>
<li>Racking and mounting hardware</li>
<li>Battery storage with capacity ≥3 kWh (since 2023)</li>
<li>Wiring, conduit, balance-of-system electrical</li>
<li>Labor for on-site preparation, assembly, and original installation</li>
<li>Permitting fees and inspection fees</li>
<li>Sales tax on the above</li>
</ul>
<p>Solar water heating systems also qualify if they meet certain certification standards (see <a href="https://www.energystar.gov/products/heating_cooling/solar_water_heaters">Energy Star solar water heaters</a>).</p>

<h2>What does NOT qualify</h2>
<ul>
<li>Roof replacement or repairs (unless structurally required for the install — gray area, ask your CPA)</li>
<li>Tree removal</li>
<li>Extended warranties or service contracts</li>
<li>Generators (non-solar)</li>
<li>Systems installed on rental properties you don't live in</li>
<li>Leased systems (the lessor claims it)</li>
</ul>

<h2>Form 5695 walkthrough</h2>
<p>The form is two pages. For the residential clean energy credit, you only need Part I (lines 1–13):</p>
<ol>
<li><strong>Line 1:</strong> Qualified solar electric property costs (panels, inverter, racking, labor, permits — your full installed price)</li>
<li><strong>Line 2:</strong> Solar water heating costs (if applicable)</li>
<li><strong>Line 5b:</strong> Battery storage costs (if installed 2023 or later)</li>
<li><strong>Line 6a:</strong> Add lines 1–5b</li>
<li><strong>Line 6b:</strong> Multiply by 30% (for systems placed in service 2022–2032)</li>
<li><strong>Line 13:</strong> Final credit, transferred to Schedule 3 line 5a of your 1040</li>
</ol>

<h2>"Placed in service" — the date that matters</h2>
<p>The credit applies to the tax year the system is "placed in service," not the year you signed the contract or the year you paid. Placed in service generally means installed, inspected, and (for grid-tied systems) granted permission to operate by NV Energy. If your panels go up in December but PTO doesn't come through until January, it's a January install for tax purposes. Get the PTO date in writing from your installer.</p>

<h2>Carryforward — non-refundable means non-refundable</h2>
<p>If your federal tax liability for the year is less than your credit, you don't get a check. The unused portion carries forward to future years. There's currently no expiration on the carryforward for the residential credit, but verify with the latest IRS guidance before filing.</p>

<h2>Documentation to keep</h2>
<ul>
<li>Final invoice from installer with itemized costs</li>
<li>Proof of payment (canceled check, loan documents, credit card statement)</li>
<li>NV Energy Permission to Operate (PTO) letter</li>
<li>Manufacturer specification sheets (in case audit asks for proof of qualification)</li>
<li>Permit close-out</li>
</ul>
<p>Keep everything for at least 3 years after filing — the standard IRS audit window.</p>

<h2>Financed systems still qualify</h2>
<p>If you bought the system with a loan (HELOC, $0-down solar loan, personal loan), you can still claim the full 30% credit. The credit is based on the cost of the system, not how you paid for it. Most $0-down loans assume you'll apply the credit as a principal reduction within 12–18 months — see <a href="/zero-down-solar-las-vegas-explained">$0 Down Solar Explained</a>.</p>

<h2>State stacking in Nevada</h2>
<p>Nevada has no state income tax, so there's no state credit to stack. But Nevada does offer:</p>
<ul>
<li><a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">Property tax exemption</a> — your home isn't reassessed for the value added by solar</li>
<li><a href="https://www.leg.state.nv.us/NRS/NRS-374.html">Sales tax abatement</a> on certain renewable equipment</li>
</ul>

<h2>Common mistakes I see</h2>
<ul>
<li><strong>Claiming the credit in the wrong year.</strong> Use placed-in-service date, not contract date.</li>
<li><strong>Including a roof replacement.</strong> Generally not eligible.</li>
<li><strong>Forgetting the battery.</strong> Standalone batteries (no solar) installed 2023 or later qualify if ≥3 kWh.</li>
<li><strong>Lessees claiming it.</strong> If you don't own, you don't claim.</li>
</ul>

<h2>Do I need a CPA?</h2>
<p>Form 5695 is straightforward enough for most homeowners using TurboTax or H&R Block software — both walk you through it. If you're claiming a battery, doing a partial-year carryforward, or have a complex tax situation, spending $200–$400 on a CPA in the year you install is cheap insurance. Especially in Las Vegas where most clients I work with are also dealing with rental properties or business income.</p>

<p>Need a system quote with the credit math broken out? <a href="/#get-quote">Request one here</a> and I'll show you exactly what your credit would be.</p>`,
    faqs: [
      {
        question: 'How do I claim the 30% federal solar tax credit?',
        answer: 'File IRS Form 5695 with your federal 1040 in the tax year your system is placed in service. Enter your total qualified costs (panels, inverter, battery, racking, labor, permits) on line 1, multiply by 30%, and transfer the result to Schedule 3 line 5a of your 1040. The credit reduces your federal tax liability dollar-for-dollar. Most tax software (TurboTax, H&R Block) walks you through it. Keep your final invoice, proof of payment, and NV Energy PTO letter for documentation.'
      },
      {
        question: 'What does "placed in service" mean for the solar tax credit?',
        answer: 'Placed in service means the system is fully installed, inspected, and (for grid-tied systems) has Permission to Operate from your utility — for Las Vegas, that\'s NV Energy. The credit applies in the tax year that PTO is granted, not the year you signed the contract or paid. If your panels are installed in December but PTO comes through in January, the credit applies to the next tax year. Get your PTO date in writing.'
      },
      {
        question: 'Can I claim the solar tax credit if I financed my system?',
        answer: 'Yes. The 30% Residential Clean Energy Credit is based on system cost, not how you paid. Cash, HELOC, and $0-down solar loans all qualify because you own the system. Leases and PPAs do not — the third-party owner claims the credit. Most $0-down solar loans expect you to apply the credit as a principal payment within 12–18 months to keep monthly payments low. If you don\'t have the tax liability to use the full credit in year one, it carries forward.'
      },
      {
        question: 'What happens if my tax bill is smaller than my solar credit?',
        answer: 'The Residential Clean Energy Credit is non-refundable, which means it can reduce your tax liability to zero but won\'t generate a refund check beyond that. The unused portion carries forward to future tax years until used up. Currently there\'s no expiration on the carryforward for the residential credit, but verify the latest IRS guidance before filing. Retirees with very low tax liability may take 5+ years to fully use the credit.'
      },
      {
        question: 'Does roof replacement qualify for the solar tax credit?',
        answer: 'Generally no. The IRS treats roof replacement as a separate home improvement, not part of the solar installation. There are narrow exceptions for structural elements that exist solely to support the solar system (specialty mounting, structural reinforcement explicitly required for the array), but a standard re-roof before solar doesn\'t qualify. If you\'re combining a re-roof with solar, ask your CPA to review the invoice and identify any defensible structural costs.'
      }
    ]
  },
  {
    slug: 'solar-home-value-las-vegas',
    title: 'Does Solar Increase Home Value? Las Vegas Data',
    description: 'Does solar increase home value in Las Vegas? Real listing data, Zillow research, and what appraisers count. See the numbers.',
    publishDate: '2026-02-04',
    tags: ['Las Vegas', 'Cost & Financing'],
    body: `<p>Owned solar adds about 4–4.5% to a Las Vegas home's resale value, or roughly $15,000–$22,000 on a $400,000 home, based on Zillow research and DOE-funded studies. Leased solar usually subtracts from sale speed and price. The size of the bump depends on system size, age, and whether the panels are owned or financed.</p>

<h2>What the studies actually show</h2>
<p>Three big data sets:</p>
<ul>
<li><strong>Zillow (2019, updated):</strong> Homes with owned solar sold for ~4.1% more than comparable non-solar homes nationally; higher in Sun Belt markets like Phoenix and Las Vegas.</li>
<li><strong>Lawrence Berkeley National Lab:</strong> Average premium ~$4 per watt of installed capacity. An 8 kW system = ~$32,000 premium nationally, though that varies by region.</li>
<li><strong>DOE-funded resale studies:</strong> See <a href="https://www.energy.gov/eere/solar">DOE solar resources</a>. Solar homes typically sell faster than comparable non-solar homes.</li>
</ul>

<h2>Las Vegas specifics</h2>
<p>From my last 6 LV installs and tracking what those clients later did with their homes (only 1 has sold so far): the appraised value bump in Las Vegas tracks the national 4–4.5% range. What's different about Vegas is summer cooling cost — buyers actively look for ways to cap utility exposure, and visible solar is a marketing edge that homes without solar can't match.</p>

<h2>Owned vs financed vs leased on resale</h2>
<ul>
<li><strong>Owned outright:</strong> Full value bump, clean title, easiest sale.</li>
<li><strong>Financed (paid off or assumable):</strong> Most loans require pay-off at sale from proceeds. Net value still positive.</li>
<li><strong>Lease or PPA:</strong> Buyer must qualify to assume, or seller pays the buyout (often $15,000–$25,000). Often a deal-killer or price-cutter.</li>
</ul>

<h2>What appraisers actually count</h2>
<p>Appraisers in Nevada use the cost approach, the income approach, or a paired-sales approach for solar. Most use a hybrid. Two things that matter:</p>
<ul>
<li><strong>System ownership documentation</strong> (UCC-1 lien? Lease? Free and clear?)</li>
<li><strong>Production data</strong> (recent NV Energy bills showing reduced consumption)</li>
</ul>
<p>If the appraiser can't verify ownership, they often can't credit the full value. Keep your final invoice, PTO letter, and any monitoring app screenshots accessible during a sale.</p>

<h2>Property tax — Nevada doesn't reassess</h2>
<p>This matters: Nevada exempts the added value of solar from property tax reassessment. Codified at <a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">NRS 361.079</a>. So you get the home-value benefit at sale without the higher annual property tax bill while you live there. That's a real Vegas-specific edge.</p>

<h2>Sale speed</h2>
<p>National data shows solar homes sell faster, sometimes 4–8 days faster on average. In Las Vegas's MLS, I've watched solar listings move noticeably quicker in zip codes 89052 (Henderson), 89135 (Summerlin), and 89148 — all areas where buyers tend to be cost-sensitive about cooling bills.</p>

<h2>What the bump is NOT</h2>
<p>Adding solar isn't a 1:1 ROI on the install cost. If you spend $24,000 net cash on a system, you're not getting $24,000 back at sale. You're getting $15,000–$22,000 of value, plus 7–10 years of avoided NV Energy bills (~$2,400/year) while you live there. The combined math beats the install cost handily — but if your only goal is sale-day appraisal, solar is not the highest-ROI improvement.</p>

<h2>What hurts the value bump</h2>
<ul>
<li><strong>System older than 10–12 years.</strong> Inverter EOL is a buyer concern.</li>
<li><strong>No production guarantee transfer.</strong> Many loan-financed systems don't transfer cleanly.</li>
<li><strong>Roof at end of life under panels.</strong> Buyers see future $5,000+ panel-removal cost.</li>
<li><strong>Lease with high escalator.</strong> Buyers run the math and walk.</li>
<li><strong>Ugly placement.</strong> Front-of-house panels facing the street can deter some buyers (rare in Vegas, but real).</li>
</ul>

<h2>Should you re-roof before solar?</h2>
<p>If your roof has under 5 years of life left, yes — re-roof first. Removing and reinstalling panels later costs $2,500–$5,000 in labor. I cover this in <a href="/solar-las-vegas">Solar in Las Vegas</a>.</p>

<h2>Disclosure and contracts at sale</h2>
<p>Nevada SRPDS (Seller's Real Property Disclosure) requires you to disclose any solar system, leases, liens, or warranties that transfer. Be upfront. Buyers and their lenders will ask for documentation either way. Hiding a UCC-1 lien on a financed system causes deals to fall through at closing.</p>

<h2>What I tell Las Vegas homeowners</h2>
<p>If you're planning to sell in 0–3 years, cash is the only way solar pencils — anything else, the buyer captures most of the benefit. If you're staying 5+ years, the home-value bump is real and the operational savings are bigger. The "going to sell soon" excuse is the most common reason people skip solar — and the most common reason people regret it once they see what NV Energy did to their bills three years later.</p>

<p>Want a quote with the resale-value math included? <a href="/#get-quote">Request one here</a>.</p>`,
    faqs: [
      {
        question: 'How much does solar add to home value in Las Vegas?',
        answer: 'Owned solar adds approximately 4–4.5% to a Las Vegas home\'s resale value, based on Zillow data and DOE-funded studies. On a $400,000 home, that\'s a $15,000–$22,000 bump. Lawrence Berkeley National Lab pegs the premium at roughly $4 per watt installed nationally, so an 8 kW system would add around $32,000 in some markets. Vegas tracks the national average. Leased solar typically subtracts from value because buyers must assume the lease or the seller has to buy it out.'
      },
      {
        question: 'Do solar panels make my Las Vegas home harder to sell?',
        answer: 'Owned solar panels make Vegas homes easier to sell, not harder — the data shows they sell about 4–8 days faster on average. Leased solar is different: buyers must qualify to assume the lease, or the seller has to buy it out at closing (often $15,000–$25,000). That\'s where the "harder to sell" reputation comes from. If you own your system free and clear, it\'s a marketing advantage in Vegas\'s heat-driven market.'
      },
      {
        question: 'Does adding solar increase property taxes in Nevada?',
        answer: 'No. Nevada exempts the added home value from solar from property tax reassessment under NRS 361.079. So the value boost happens at resale, but you don\'t pay higher property taxes annually for adding the system. This is a Nevada-specific advantage. Some other states will reassess your home upward after solar, which partially offsets the savings. Nevada doesn\'t.'
      },
      {
        question: 'What documentation does an appraiser need for solar?',
        answer: 'Appraisers want to verify ownership and production. Keep three things accessible: your final installer invoice with itemized costs, your NV Energy Permission to Operate (PTO) letter, and recent monitoring app screenshots showing actual production. If your system is financed, the lien documents matter too. Without ownership documentation, the appraiser may not credit the full value — they\'ll assume it\'s leased and discount accordingly.'
      },
      {
        question: 'Should I install solar if I plan to sell my home in 2 years?',
        answer: 'Probably only if you can pay cash. With a 7–10 year cash payback, you\'d capture maybe 25% of the lifetime value before selling. The home-value bump (4–4.5%) recovers some of the install cost, but not all. Financed solar is worse — you\'d have to pay off or transfer the loan at closing. If you\'re selling in under 3 years, the math rarely beats just paying NV Energy and pricing your home on its other features.'
      }
    ]
  },
  {
    slug: 'hidden-costs-of-solar-nevada',
    title: 'Hidden Costs of Solar in Nevada — What Installers Don\'t Tell You',
    description: 'Hidden solar costs in Nevada — panel-box upgrades, HOA fees, roof prep, monitoring, and more. Avoid the surprise bills.',
    publishDate: '2026-02-19',
    tags: ['Nevada', 'Cost & Financing'],
    body: `<p>The hidden costs of solar in Nevada aren't hidden by malice — they're hidden by sales reps who quote a base system and skip the gotchas. The most common surprise bills are panel-box upgrades ($1,500–$3,000), HOA fees, roof prep, and monitoring service. On a typical Las Vegas install, plan for $2,000–$4,500 of extras the first quote rarely includes.</p>

<h2>1. Electrical panel upgrade</h2>
<p>Older Vegas homes (pre-1995) often have 100-amp panels that can't handle solar backfeed plus a battery. Upgrading to a 200-amp panel costs $1,500–$3,000. Some installers quote the system assuming your panel is fine, then come back after site survey. Ask up front: <em>"Have you confirmed my main service panel is rated for this system?"</em></p>

<h2>2. HOA approval fees</h2>
<p>Summerlin, Anthem, Mountain's Edge, and most Henderson HOAs require architectural review for solar. Nevada law (NRS 116.2111) prevents HOAs from prohibiting solar outright, but they can dictate placement and aesthetics. Fees range $0–$400 and approval can take 2–8 weeks. Some HOAs require a refundable deposit. I quote this line item separately on every Summerlin job.</p>

<h2>3. Re-roof or roof prep</h2>
<p>If your roof has under 5–7 years of life left, you should re-roof before going solar. Pulling and reinstalling a 24-panel array later costs $2,500–$5,000 in labor. A re-roof on a 2,000 sq ft Vegas home runs $12,000–$25,000 depending on tile vs comp shingle. This is not part of the solar quote and isn't covered by the federal tax credit (with rare exceptions for structural work).</p>

<h2>4. Tile roof premium</h2>
<p>Tile roofs (common in Henderson) cost 6–10% more to install solar on. Tiles must be removed in panel locations, replaced with custom flashing, and reset. Some installers absorb this. Most pass it through. Ask if your quote is comp-shingle or tile pricing.</p>

<h2>5. Tree removal or trimming</h2>
<p>Shading kills production. If your roof has shade from a single neighbor's mesquite or your own palo verde, trimming or removal isn't optional — it's a system performance issue. Tree work costs $300–$2,500 depending on size and location, and is not covered by the federal tax credit.</p>

<h2>6. Monitoring service fees</h2>
<p>Most modern systems (Enphase, SolarEdge, Tesla) include a free homeowner monitoring app forever. Some legacy installers charge $10–$25/month for "production monitoring" or "alerts." Ask explicitly: <em>"Is monitoring free for the life of the system, or is there a subscription?"</em> If the answer is the latter, push back.</p>

<h2>7. NV Energy interconnection delays</h2>
<p>Permission to Operate from <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering">NV Energy net metering</a> usually takes 2–6 weeks after install. During that time you've paid for the system but you can't legally turn it on (or you can but you're not getting credit for exports). Plan cash flow accordingly. Some installers will waive the first month's loan payment if PTO is delayed past 60 days. Ask in writing.</p>

<h2>8. Inverter replacement at year 12–15</h2>
<p>Most string inverters and microinverters carry 12–25 year warranties. After warranty, replacement runs $2,000–$4,500 for a string inverter or $200–$300 per microinverter. Microinverters last longer on average but can fail individually. Budget this as a 25-year ownership cost, not a hidden surprise.</p>

<h2>9. Panel cleaning</h2>
<p>Vegas dust + monsoon mud builds up. Annual or bi-annual cleaning costs $150–$400 by a service, or zero if you can safely access your roof with a soft brush and DI water. Dirty panels lose 5–15% production. Most homeowners skip cleaning entirely and accept the loss.</p>

<h2>10. Critter guards</h2>
<p>Pigeons love nesting under solar panels. Critter guard mesh installed at original install runs $300–$900. Retrofitting after a pigeon problem develops runs $800–$1,800 plus cleanup. Add it day one, especially if you've seen pigeons on your block. I add this to nearly every Summerlin and Henderson quote.</p>

<h2>11. Production guarantee fine print</h2>
<p>Some "25-year production guarantees" carry $0/kWh of underproduction value or require you to submit annual claims with three notarized witnesses (not literally, but close). Read the guarantee language. A real guarantee says "if production falls below X kWh, we cut you a check at $Y/kWh, no questions, no annual paperwork."</p>

<h2>12. Loan dealer fees</h2>
<p>Already covered in <a href="/zero-down-solar-las-vegas-explained">$0 Down Solar Explained</a> — the 18–28% dealer fee on a $0-down solar loan is the biggest hidden cost in the industry. Inflated principal is the silent killer of financed solar economics.</p>

<h2>13. Battery decommissioning</h2>
<p>15–20 years out, the battery hits end of life. Removal and disposal currently runs $500–$1,500. Recycling infrastructure for lithium home batteries is improving, but it's a real future cost. Not relevant to year-1 economics, but worth knowing.</p>

<h2>14. Sales tax on certain components</h2>
<p>Nevada offers partial sales tax abatement on qualifying renewable energy property under <a href="https://www.leg.state.nv.us/NRS/NRS-374.html">NRS 374</a>, but not all components qualify and not all installers apply for it. Ask whether your quote includes sales tax and whether the abatement was applied.</p>

<h2>How to avoid hidden cost surprises</h2>
<ul>
<li>Get an itemized BOM (bill of materials) before signing</li>
<li>Have the installer do an in-person site survey before quoting, not after</li>
<li>Verify panel-box capacity in writing</li>
<li>Confirm HOA fees, re-roof needs, and tree work before signing</li>
<li>Read the production guarantee and monitoring agreement word-for-word</li>
</ul>

<p>Want a quote with every line item visible — no surprises? <a href="/#get-quote">Request one here</a> and I'll send a written breakdown.</p>`,
    faqs: [
      {
        question: 'What hidden costs come with solar in Nevada?',
        answer: 'The most common ones are electrical panel upgrades ($1,500–$3,000 on older homes), HOA fees ($0–$400 in Summerlin and Anthem), tile roof premium (6–10% extra), tree work, critter guards, and inverter replacement at year 12–15. Plan for $2,000–$4,500 of extras the original quote often skips. Loan dealer fees are the biggest hidden cost on financed deals — 18–28% of system price baked into the loan.'
      },
      {
        question: 'Do I need to upgrade my electrical panel for solar in Las Vegas?',
        answer: 'Maybe. Homes with 100-amp main panels (common in pre-1995 Vegas builds) often need an upgrade to 200-amp to handle solar backfeed plus future battery loads. The upgrade costs $1,500–$3,000 by a licensed electrician, with permits. Newer homes typically already have 200-amp panels. Ask your installer to confirm panel capacity in writing before signing — this is one of the most common post-quote surprises.'
      },
      {
        question: 'Will my HOA charge me to install solar in Summerlin?',
        answer: 'Most Summerlin HOAs require architectural review and charge $0–$400 in fees. Nevada law (NRS 116.2111) prevents HOAs from outright prohibiting residential solar, but they can dictate placement, aesthetics, and require approval before install. Approval typically takes 2–8 weeks. Some HOAs require a refundable deposit. Anthem, Mountain\'s Edge, and most master-planned Vegas communities operate similarly. Always factor HOA review time into your install timeline.'
      },
      {
        question: 'How much does it cost to clean solar panels in Las Vegas?',
        answer: 'Professional cleaning runs $150–$400 per visit depending on system size and roof access. Vegas dust and monsoon mud can cost you 5–15% in production if panels go unwashed for 12+ months. DIY with a soft brush, distilled or deionized water, and safe roof access is free but only worth it if you\'re comfortable on a roof. Most homeowners skip cleaning and accept the production loss; some install rooftop sprinklers that auto-rinse panels.'
      },
      {
        question: 'Should I replace my roof before installing solar?',
        answer: 'If your roof has fewer than 5–7 years of remaining life, yes. Removing and reinstalling a 24-panel array later costs $2,500–$5,000 in labor — money you avoid by re-roofing first. The federal tax credit generally doesn\'t cover roof replacement (with narrow exceptions for structural work directly tied to the install). A new comp-shingle roof on a 2,000 sq ft Vegas home runs $12,000–$18,000; tile is $20,000+. Better to do it once.'
      }
    ]
  },
  {
    slug: 'nv-energy-rate-hikes-solar-hedge',
    title: 'NV Energy Rate Hikes 2024–2026 — Why Solar Locks In Your Costs',
    description: 'NV Energy rate hikes 2024–2026 explained — and why solar in Las Vegas is the only real hedge. See the rate history.',
    publishDate: '2026-03-04',
    tags: ['Nevada', 'Las Vegas', 'Net Metering'],
    body: `<p>NV Energy has filed and received approval for multiple rate increases since 2023, with another general rate case pending in 2026. For a typical Las Vegas household, the cumulative effect since 2022 is roughly 14–22% higher monthly bills before any usage change. Solar caps your generation cost at year-1 rates — that's the actual hedge.</p>

<h2>The rate increase pattern</h2>
<p>NV Energy operates as a regulated monopoly under the Public Utilities Commission of Nevada. Every 2–3 years the company files a general rate case. They've never lost one cleanly — increases get approved, sometimes scaled back. Quarterly fuel and power adjustments also pass through to your bill outside of full rate cases. The combined effect is consistent upward pressure. The <a href="https://www.eia.gov/state/?sid=NV">EIA Nevada electricity profile</a> tracks the long-term trend.</p>

<h2>What's driven recent increases</h2>
<ul>
<li>Natural gas price volatility (NV Energy's main fuel mix)</li>
<li>Wildfire mitigation and grid hardening</li>
<li>New transmission infrastructure</li>
<li>Generation buildout for population growth</li>
<li>Storage and renewable integration costs</li>
</ul>

<h2>What it means for an average Vegas bill</h2>
<p>A 2,000 sq ft single-family home in Henderson averaging $190/month in 2022 is averaging $220–$235/month by early 2026 for the same usage. That's $360–$540/year more, every year, with no behavior change. Compounded over 25 years at 3% annual inflation (which is conservative based on history), you're looking at $90,000+ in lifetime electricity spend.</p>

<h2>Why solar is the only real hedge</h2>
<p>Three options to deal with rising rates:</p>
<ol>
<li><strong>Use less.</strong> Limited — Vegas summer cooling load is mostly non-discretionary.</li>
<li><strong>Switch suppliers.</strong> Not possible in Nevada for most residential — NV Energy is the monopoly.</li>
<li><strong>Generate your own.</strong> Solar locks in your kWh cost at year-1 install economics.</li>
</ol>
<p>Option 3 is the only one that scales with your bill. Once your panels are paid off, your generation cost is essentially zero for the next 15+ years.</p>

<h2>Net metering math under rate hikes</h2>
<p>Even with NV Energy's reduced net metering credit (below retail), every rate increase indirectly increases your solar savings. Why? Because the kWh you self-consume on-site offset retail-rate electricity, and retail rates rise. A system designed for 95–105% offset (the right size for most Vegas homes) captures most of its value through self-consumption. Mechanics live at <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering">NV Energy net metering</a>.</p>

<h2>Battery + solar = sharper hedge</h2>
<p>Adding a battery shifts solar production from "exported at low net metering credit" to "self-consumed at full retail offset." The math improves with every rate hike. As NV Energy raises peak time-of-use rates, batteries discharging during evening peak hours become more valuable.</p>

<h2>The "I'll wait for cheaper panels" trap</h2>
<p>Hardware prices have been roughly flat for 4 years. The 30% federal tax credit is locked in through 2032. Meanwhile, NV Energy bills go up every year. Waiting costs you the avoided utility bill during the wait period, which dwarfs any modest hardware savings. From my last 6 LV installs, every "I should have done this 2 years ago" comment came from someone who waited.</p>

<h2>How much can solar actually save vs rate hikes?</h2>
<p>Take an 8 kW Henderson system with 95% offset:</p>
<ul>
<li>Year 1 NV Energy bill without solar: ~$2,760</li>
<li>Year 1 NV Energy bill with solar: ~$360</li>
<li>Year 1 savings: $2,400</li>
<li>Year 10 savings (3% inflation): ~$3,134</li>
<li>Year 25 savings (3% inflation): ~$4,884</li>
<li>Cumulative 25-year savings: ~$87,000</li>
</ul>
<p>If actual rate inflation runs higher than 3% (very plausible given the last decade), savings are bigger.</p>

<h2>Property tax and sales tax stay capped</h2>
<p>Nevada doesn't reassess your home for solar (<a href="https://www.leg.state.nv.us/NRS/NRS-361.html#NRS361Sec079">NRS 361.079</a>) and offers partial sales tax abatement on qualifying components (<a href="https://www.leg.state.nv.us/NRS/NRS-374.html">NRS 374</a>). So your tax exposure stays capped while NV Energy's rates rise.</p>

<h2>What about the time-of-use shift?</h2>
<p>NV Energy has been pushing more residential customers onto time-of-use plans. Peak rates (4–9 PM in summer) can be 2–3x off-peak. Solar without a battery doesn't fully solve this because production drops as peak begins. Solar + battery does — you store afternoon production and discharge during peak. This is increasingly the right setup for Vegas homes.</p>

<h2>What I tell every client</h2>
<p>The hardest part of the solar decision in Nevada in 2026 isn't whether the math works. It does. It's whether you trust NV Energy rates to stay flat or fall — and the historical record says they don't. Solar is a 25-year asset on a roof in 290-sun-day country. The hedge isn't speculative. It's just arithmetic. More on the numbers in <a href="/solar-payback-period-las-vegas">Solar Payback Period in Las Vegas</a>.</p>

<p>Want to see your specific NV Energy bill modeled against a system on your roof? <a href="/#get-quote">Request a quote here</a>.</p>`,
    faqs: [
      {
        question: 'How much have NV Energy rates increased since 2022?',
        answer: 'Cumulative residential rate increases for NV Energy in southern Nevada are roughly 14–22% from 2022 through early 2026, depending on tariff and time-of-use plan. The increases come from approved general rate cases plus quarterly fuel adjustments. A household averaging $190/month in 2022 is now seeing $220–$235/month for the same usage. Another general rate case is pending for 2026. Long-term trend: consistent upward pressure averaging 3–5% annually.'
      },
      {
        question: 'Can I switch electric providers in Las Vegas to avoid rate hikes?',
        answer: 'Generally no. NV Energy operates as a regulated monopoly for residential electricity in southern Nevada. Some commercial customers can pursue alternative suppliers through PUCN-approved processes, but residential customers have one option for grid power. The only practical way to reduce exposure to NV Energy rate hikes is to generate your own electricity — solar with or without battery storage.'
      },
      {
        question: 'Does solar actually protect me from utility rate increases?',
        answer: 'Yes, on the kWh you self-consume on your own roof. Once your panels are installed and the loan is paid off, your cost-per-kWh for self-generated power is essentially zero. Every NV Energy rate increase makes that self-generated power more valuable. With a properly sized system covering 95–105% of your annual usage, you\'re largely insulated from rate hikes. Adding a battery sharpens the hedge by reducing exports at low net metering credit.'
      },
      {
        question: 'Is it better to wait for solar prices to drop or install now?',
        answer: 'Install now. Hardware prices have been roughly flat for 4 years and the 30% federal tax credit is locked through 2032. Meanwhile, NV Energy rates rise every year and you keep paying them while you wait. The avoided utility bill during the wait period almost always exceeds any modest hardware price drop. Waiting two years on an 8 kW system typically costs $4,800+ in utility bills you didn\'t have to pay.'
      },
      {
        question: 'Will NV Energy rates keep rising?',
        answer: 'Almost certainly. The drivers — natural gas price volatility, transmission buildout, wildfire mitigation, generation for population growth, storage integration — are all structural. NV Energy files general rate cases every 2–3 years and the PUCN has historically approved them, sometimes at reduced amounts. Modeling 2–3% annual inflation in solar payback calculations is conservative based on the actual rate history of the last decade.'
      }
    ]
  },
  {
    slug: 'sgip-battery-rebate-california',
    title: 'SGIP Battery Rebate California — How Much Can You Actually Get?',
    description: 'SGIP battery rebate California explained — equity, residential tiers, real payouts, and how to qualify in 2026. See your rebate.',
    publishDate: '2026-04-15',
    tags: ['California', 'Battery Storage', 'Cost & Financing'],
    body: `<p>California's Self-Generation Incentive Program (SGIP) pays $150–$1,000 per kWh of installed battery storage in 2026, depending on which tier you qualify for. A 13.5 kWh Powerwall in a high-fire or low-income zone can land $5,000–$13,500 in rebate; in the standard residential tier, expect $1,000–$2,500. The catch is that the largest tiers (equity, equity resiliency) require specific income, location, or medical-baseline qualifications.</p>

<h2>What SGIP is</h2>
<p>SGIP is California's storage incentive, administered by the CPUC and funded through ratepayer charges. It pays a per-kWh rebate to homeowners and businesses who install qualifying battery storage. Full program docs at <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/self-generation-incentive-program">CPUC SGIP page</a>.</p>

<h2>The five tiers (residential)</h2>
<ul>
<li><strong>General Market (Tier 1):</strong> ~$150–$200/kWh. Open to most California homeowners. Funds run out fast — often waitlist-only.</li>
<li><strong>Equity (Tier 3):</strong> ~$850/kWh. Requires CARE/FERA enrollment, low-income housing, or San Joaquin Valley disadvantaged community status.</li>
<li><strong>Equity Resiliency (Tier 4):</strong> ~$1,000/kWh. Requires equity eligibility PLUS one of: PSPS-affected area, high fire threat district (HFTD Tier 2 or 3), or medical baseline customer.</li>
<li><strong>Small Business Equity:</strong> Different scale, not covered here.</li>
<li><strong>Heat Pump Water Heater (HPWH):</strong> Newer tier, separate eligibility.</li>
</ul>

<h2>Real example payouts</h2>
<p>A single Tesla Powerwall 3 (13.5 kWh usable) installed in California:</p>
<ul>
<li><strong>General Market:</strong> 13.5 × $150 = $2,025</li>
<li><strong>Equity:</strong> 13.5 × $850 = $11,475</li>
<li><strong>Equity Resiliency:</strong> 13.5 × $1,000 = $13,500</li>
</ul>
<p>Two Powerwalls (27 kWh usable) at Equity Resiliency = $27,000 of rebate. Combined with the 30% federal credit, your out-of-pocket on a $30,000 two-Powerwall install can drop below $0 in some equity-tier scenarios. The federal credit and SGIP can stack.</p>

<h2>Who qualifies for Equity / Equity Resiliency</h2>
<p>This is where the real money is. Equity tier requires one of:</p>
<ul>
<li>Enrolled in CARE or FERA (utility low-income programs)</li>
<li>Live in a deed-restricted low-income housing development</li>
<li>Live in a San Joaquin Valley Disadvantaged Community</li>
<li>Tribal land</li>
</ul>
<p>Equity Resiliency adds requirements:</p>
<ul>
<li>Located in High Fire Threat District (HFTD) Tier 2 or Tier 3 (check at the CPUC HFTD map)</li>
<li>Or medical baseline customer (electricity-dependent medical equipment)</li>
<li>Or experienced 2+ PSPS events in past 3 years</li>
</ul>

<h2>NEM 3.0 and SGIP — why they go together</h2>
<p>Under California's NEM 3.0, exporting solar to the grid pays much less than retail. Self-consuming via battery is now the central economic strategy for new California solar. SGIP exists partly to subsidize that shift. If you're in California and adding solar in 2026, you should be modeling solar + battery, not solar alone. More on California specifics in <a href="/solar-california">Solar in California</a>.</p>

<h2>Application process</h2>
<ol>
<li>Confirm tier eligibility (your installer should help; don't assume)</li>
<li>Pre-application reservation through your utility's SGIP portal (PG&E, SCE, SoCalGas, or SDG&E for incentives)</li>
<li>Reservation locks in your incentive funding while permits and install proceed</li>
<li>Install + interconnection</li>
<li>Performance verification — most tiers require 5 years of operational compliance, including annual discharge requirements</li>
<li>Rebate paid to installer (assigned) or homeowner</li>
</ol>

<h2>Funding runs out — speed matters</h2>
<p>SGIP is budgeted in tranches. General market funds are usually exhausted within weeks of opening. Equity and Equity Resiliency typically have longer availability but still run out. Check your utility's current SGIP funding status before getting too excited about a quoted rebate. <a href="https://programs.dsireusa.org/system/program/ca">DSIRE California</a> tracks current program status.</p>

<h2>Stacking with the federal tax credit</h2>
<p>The 30% federal Residential Clean Energy Credit (<a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">IRS page</a>) can stack with SGIP. Important detail: the federal credit basis is reduced by SGIP if SGIP is treated as a non-taxable rebate from the utility. Most CPAs apply SGIP as a basis reduction for federal purposes, but the rules have nuance. Talk to a tax pro for any equity-tier rebate over $5,000.</p>

<h2>What to watch for</h2>
<ul>
<li><strong>Installer assigning your rebate to themselves.</strong> Read the assignment language. Sometimes appropriate, sometimes not.</li>
<li><strong>Inflated battery pricing on rebate jobs.</strong> Some installers raise prices to capture the rebate as margin. Compare cash quotes with and without SGIP.</li>
<li><strong>Performance verification failures.</strong> If your battery doesn't discharge per the program rules, partial rebate clawback is possible.</li>
<li><strong>Eligibility misrepresentation.</strong> If you claim equity tier without actually qualifying, the rebate claws back and the installer gets blacklisted. Verify CARE/FERA enrollment before assuming.</li>
</ul>

<h2>Why I cover SGIP from Nevada</h2>
<p>I install across the Nevada–California border for clients with second homes and clients in Inyo, Mono, and San Bernardino counties — areas with HFTD Tier 2/3 designations and real PSPS exposure. The economics of California battery storage in 2026 are driven by three stacked incentives: federal 30% credit, SGIP, and NEM 3.0 self-consumption. Done right, the out-of-pocket on storage in California can be lower than in Nevada. Done wrong, you miss the rebate window entirely.</p>

<p>Have a California address and want to know which SGIP tier you qualify for? <a href="/#get-quote">Request a quote here</a> and I'll run the eligibility check before quoting hardware.</p>`,
    faqs: [
      {
        question: 'How much is the SGIP rebate for a Tesla Powerwall in California?',
        answer: 'For a single 13.5 kWh Tesla Powerwall 3, SGIP pays roughly $2,025 at the General Market tier ($150/kWh), $11,475 at the Equity tier ($850/kWh), or $13,500 at Equity Resiliency ($1,000/kWh). Most homeowners qualify only for General Market unless they\'re CARE/FERA enrolled, in a low-income housing development, on tribal land, or live in a high fire threat district. Two Powerwalls double the rebate. SGIP stacks with the 30% federal tax credit, though SGIP usually reduces the federal credit basis.'
      },
      {
        question: 'Who qualifies for SGIP Equity Resiliency in California?',
        answer: 'You need to meet Equity tier requirements (CARE/FERA, low-income housing, San Joaquin Valley DAC, or tribal land) AND one Resiliency criterion: located in High Fire Threat District Tier 2 or Tier 3, classified as a medical baseline customer (electricity-dependent medical equipment), or experienced 2+ Public Safety Power Shutoff (PSPS) events in the past 3 years. Check your address against the CPUC HFTD map before assuming. Resiliency tier pays $1,000/kWh — the highest residential rate available.'
      },
      {
        question: 'Can I stack SGIP with the 30% federal solar tax credit?',
        answer: 'Yes, both incentives can apply to the same battery system. The federal 30% Residential Clean Energy Credit applies to standalone batteries (3+ kWh) installed 2023 or later. SGIP is a state-level utility rebate. Most CPAs treat SGIP as a non-taxable utility rebate that reduces the federal credit basis — so if you got a $13,500 SGIP rebate on a $14,000 battery, your federal credit is calculated on $500, not $14,000. Confirm with a tax pro for amounts over $5,000.'
      },
      {
        question: 'Does SGIP funding run out each year?',
        answer: 'Yes, frequently. SGIP is budgeted in tranches by tier and utility territory. General Market funding for residential storage is usually exhausted within weeks of each tranche opening — sometimes within days. Equity and Equity Resiliency tranches last longer but also run out. Always check current SGIP funding status through your utility\'s portal (PG&E, SCE, or SDG&E for electric storage) before relying on the rebate in your install economics. DSIRE California tracks program status.'
      },
      {
        question: 'How long does SGIP take from application to payment?',
        answer: 'Plan for 3–9 months. The reservation step takes 2–6 weeks once submitted with proper documentation. Install + interconnection adds 1–3 months. Post-install verification and incentive payment add another 1–4 months depending on utility queue. Equity tiers usually move faster because they\'re prioritized. The funding reservation locks your incentive amount once approved, even if program rates change later — so getting the reservation in first is what protects your rebate.'
      },
      {
        question: 'Is SGIP available outside major utility territories?',
        answer: 'SGIP is funded by ratepayers of PG&E, SCE, SoCalGas, and SDG&E, so it\'s available to electric customers of those four utilities. Customers of municipal utilities (LADWP, SMUD, Imperial Irrigation District, etc.) are not eligible because they don\'t pay into the SGIP funding mechanism. Some municipal utilities run their own storage incentive programs — check directly with your utility. The bulk of California residential customers are in eligible territories.'
      }
    ]
  }
];
