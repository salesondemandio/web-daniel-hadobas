export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  body: string;
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
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

<h2>After the 30% Federal Tax Credit</h2>
<p>The federal Investment Tax Credit (ITC) gives you <strong>30% of your total system cost as a direct credit against your federal income tax</strong>. This is not a deduction — it's a dollar-for-dollar reduction in your tax bill. It applies to all system components and installation costs.</p>
<p>After the ITC:</p>
<ul>
  <li><strong>6 kW system:</strong> $17,100 → <strong>$11,970</strong></li>
  <li><strong>7 kW system:</strong> $19,950 → <strong>$13,965</strong></li>
</ul>
<p>For most homeowners, that works out to <strong>$5,000–$6,000 back</strong> from the federal government. The credit is available through 2032 with no income cap for most taxpayers. You do need to have federal tax liability to use it — if your tax bill is lower than the credit amount, the remainder rolls forward to the following year.</p>

<h2>Nevada's Additional Incentives</h2>
<p>On top of the federal ITC, Nevada homeowners benefit from two automatic incentives:</p>
<p><strong>Nevada Property Tax Exemption:</strong> The added value your solar system brings to your home is fully exempt from property tax assessment. Your home's market value goes up, but your tax bill doesn't increase because of solar.</p>
<p><strong>Nevada Sales Tax Exemption:</strong> Solar equipment purchased in Nevada is exempt from the 8.375% state and county sales tax. That's an additional $1,200–$1,900 in savings on a typical system — applied automatically at purchase.</p>
<p>These incentives stack on top of the federal ITC and don't require any additional paperwork beyond your normal tax filing.</p>

<h2>Monthly Savings: What to Expect</h2>
<p>The average Las Vegas household spends about <strong>$160 per month on electricity</strong> from NV Energy. Current NV Energy rates are approximately $0.125 per kilowatt-hour. With 290+ sunny days per year, a properly sized system can eliminate most or all of that bill.</p>
<p>Realistic monthly savings ranges:</p>
<ul>
  <li><strong>Small home / low usage:</strong> $100–$150/month</li>
  <li><strong>Average home / average usage:</strong> $150–$250/month</li>
  <li><strong>Larger home / pool / EV:</strong> $250–$400/month</li>
</ul>
<p>NV Energy's net metering program credits you at 75% of the retail rate for excess power your panels produce. Those credits roll forward and offset future bills — especially useful in spring and fall when your panels overproduce relative to your usage.</p>

<h2>Payback Period: 6–9 Years</h2>
<p>With an average after-incentive cost of $12,000–$14,000 and average monthly savings of $150–$250, most Las Vegas homeowners see a payback period of <strong>6 to 9 years</strong>. Cash purchases pay back faster; financed systems may show immediate monthly positive cash flow even before accounting for the tax credit.</p>
<p>After payback, you have 16 to 19 years of essentially free electricity — most panels carry 25-year production warranties. Over that period, the typical Las Vegas homeowner accumulates <strong>$51,532 in lifetime energy savings</strong>.</p>

<h2>Financing Options</h2>
<ul>
  <li><strong>Cash purchase:</strong> Best long-term ROI, shortest payback</li>
  <li><strong>$0 down solar loan:</strong> Monthly payment often less than current utility bill; you own the system and keep all incentives</li>
  <li><strong>Lease/PPA:</strong> Lower upfront risk but you don't own the system and don't get the tax credit — not recommended for most homeowners</li>
</ul>

<h2>What to Watch Out For</h2>
<p><strong>Oversized systems:</strong> Some installers push larger systems to increase their revenue. A properly sized system covers your needs — not 40% more than your needs.</p>
<p><strong>Long-term leases:</strong> A 25-year lease can complicate your home sale and the terms often favor the installer, not you.</p>
<p><strong>Door-to-door pressure:</strong> If someone is pressuring you to sign today, walk away. The incentives don't expire tomorrow. Take time to compare proposals.</p>

<h2>The Bottom Line</h2>
<p>For most Las Vegas homeowners who own their home, have adequate roof space, and a reasonable credit score, solar makes financial sense. The combination of 290+ annual sunny days, rising NV Energy rates, and Nevada's tax incentives puts Las Vegas near the top of the national solar opportunity list.</p>
<p>If you want to see the actual numbers for your home — based on your real utility bill, your roof's sun exposure, and current financing options — <a href="/sodsolarsavings">book a free consultation</a>. No pressure, no obligation, just honest math.</p>
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
<p>Have questions about how net metering would work for your specific home? <a href="/sodsolarsavings">Book a free consultation</a> — I'll run the actual numbers based on your NV Energy bill.</p>
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
<p>Nevada is one of the better states in the country for solar incentives. Between the federal Investment Tax Credit, two Nevada-specific tax exemptions, NV Energy's net metering program, and a new state incentive introduced in late 2025, there's real money on the table for homeowners who go solar this year. Here's a complete breakdown.</p>

<h2>1. Federal Investment Tax Credit (ITC) — 30% Through 2032</h2>
<p>The federal solar tax credit — officially the Investment Tax Credit — is the biggest financial incentive for solar homeowners anywhere in the US. It gives you a <strong>30% credit against your federal income tax</strong> equal to your total solar system cost, including panels, inverter, racking, wiring, permits, and installation labor.</p>
<p><strong>Key details:</strong></p>
<ul>
  <li>Available through December 31, 2032 at 30%</li>
  <li>Drops to 26% in 2033, then 22% in 2034, then expires for residential</li>
  <li>No income cap for most homeowners</li>
  <li>Applies to battery storage if it's charged primarily by solar</li>
  <li>If your credit exceeds your tax liability in year one, the remainder rolls forward to the following year</li>
</ul>
<p><strong>Example:</strong> A $18,000 solar system in Las Vegas generates a <strong>$5,400 federal tax credit</strong>. If you owe $4,000 in federal taxes that year, you use $4,000 now and carry $1,400 forward to the next filing year.</p>
<p>This is not a deduction — it's a direct reduction in your tax bill. The distinction matters: a $5,400 deduction reduces your taxable income by $5,400 (saving you maybe $1,000–$1,500 depending on your bracket). A $5,400 credit reduces your actual tax liability by $5,400.</p>

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
    <tr><td>System cost (6.5 kW)</td><td>$18,525</td></tr>
    <tr><td>Federal ITC (30%)</td><td>−$5,558</td></tr>
    <tr><td>Nevada sales tax exemption</td><td>−$1,552</td></tr>
    <tr><td>Net cost</td><td><strong>$11,415</strong></td></tr>
    <tr><td>Annual property tax savings</td><td>~$200/yr</td></tr>
    <tr><td>Annual NV Energy savings</td><td>~$1,800–$2,400/yr</td></tr>
  </tbody>
</table>
<p>Over a 25-year system life, the total value of those savings exceeds $51,000 for most Las Vegas homeowners.</p>

<h2>Important: The ITC Requires Tax Liability</h2>
<p>The federal ITC is only useful if you have federal tax liability. If you're retired with a low income, or if deductions already reduce your tax bill to near zero, you may not be able to fully use the credit. In that case, the remaining credit carries forward year to year — and a cash purchase may still make strong financial sense. Talk to a tax professional about your specific situation before assuming you'll get the full credit.</p>

<h2>Bottom Line</h2>
<p>The combination of Nevada's property and sales tax exemptions, the 30% federal ITC, and NV Energy net metering makes Nevada one of the stronger incentive environments in the country. For most Las Vegas and Henderson homeowners, these incentives cut the effective cost of solar by 40–50% compared to the sticker price.</p>
<p>Want to see exactly what your incentives are worth based on your specific situation? <a href="/sodsolarsavings">Book a free consultation</a> and I'll run the full analysis for you.</p>
    `,
    faqs: [
      {
        question: 'Is the 30% federal tax credit refundable?',
        answer: "No — the ITC is non-refundable. It reduces your federal tax liability dollar-for-dollar, but if the credit is larger than what you owe in taxes, you won't receive the difference as a refund. However, any unused portion rolls forward to the following tax year. Most homeowners with a typical income tax burden can use the full credit within 1–2 years."
      },
      {
        question: 'Does Nevada have a state solar tax credit?',
        answer: "Nevada doesn't have a state income tax credit for solar. However, the combination of federal ITC (30%), sales tax exemption, and property tax exemption makes Nevada one of the most incentive-rich solar states in the country even without a state income tax credit."
      },
    ],
  },
  {
    slug: 'best-solar-companies-las-vegas',
    title: 'How to Choose a Solar Company in Las Vegas (What to Actually Look For)',
    description: 'A no-BS guide to choosing a solar installer in Las Vegas — what certifications matter, installer vs. broker, how to read reviews, financing red flags, and what questions to ask.',
    publishDate: '2025-04-01',
    tags: ['Las Vegas', 'Buying Guide', 'Nevada'],
    body: `
<p>Las Vegas has no shortage of solar companies competing for your business — national brands, regional players, one-truck operations, and independent advisors like me. Some are excellent. Some will leave you with an oversized system, a bad financing deal, or a warranty that's hard to actually use. Here's how to tell the difference.</p>

<h2>The Installer vs. Independent Advisor Distinction</h2>
<p>The first thing to understand is that not everyone selling solar in Las Vegas actually installs it. The industry broadly breaks down into:</p>
<p><strong>Direct installers:</strong> Companies that employ their own installation crews. They do the whole job — sales, design, permitting, installation, inspection, and interconnection.</p>
<p><strong>Dealers/Brokers/Independent advisors:</strong> Representatives who aren't tied to one installer. They design and sell the system, then subcontract installation to one or more vetted installers.</p>
<p>Neither is automatically better. What matters is whether the person designing your system is actually optimizing for your outcome — not their margin. An independent advisor who works with multiple top-rated installers can often get you a better combination of equipment, warranty, and price than a captive sales rep locked into one company's catalog. What you want to avoid is a high-pressure sales rep whose only goal is to close the deal today, regardless of whether the system is right for your home.</p>

<h2>NABCEP Certification: What It Means and Why It Matters</h2>
<p>The North American Board of Certified Energy Practitioners (NABCEP) runs the professional certification program for solar installers. NABCEP Photovoltaic Installation Professional (PVIP) certification requires significant field experience, passing a rigorous exam, and ongoing continuing education.</p>
<p>Not every technician on an installation crew needs to be NABCEP certified — but the company's design and project management team should be, or should work with NABCEP-certified engineers for system design.</p>
<p><strong>What to ask:</strong> "Are your system designs reviewed by a NABCEP-certified engineer?" A reputable installer will say yes without hesitation.</p>

<h2>Checking Reviews — and How to Read Them</h2>
<p><strong>Look for:</strong> Specific mentions of the experience — the process, the timeline, whether the system performed as promised, how the company handled issues that came up.</p>
<p><strong>Be skeptical of:</strong> A sudden burst of reviews all in the same month (can be fake), reviews that are vague or sound templated, companies with hundreds of reviews but no responses from the business.</p>
<p><strong>Check the dates:</strong> A company with 150 great reviews but none in the last 18 months may have changed ownership, lost key staff, or changed business practices.</p>
<p><strong>Look for negative reviews too</strong> — and how the company responds. Every solar company has some. The response to a complaint tells you more than the complaint itself.</p>

<h2>Equipment: Panels, Inverters, and Warranties</h2>
<p><strong>Tier 1 panels</strong> (bankable, high-quality manufacturers): REC, Panasonic, Q CELLS, Canadian Solar, Jinko Solar. These come with 25-year product and performance warranties from manufacturers with the financial stability to honor them.</p>
<p><strong>Inverters:</strong> String inverters (one central unit) are the most common and most economical. Microinverters (one per panel, Enphase is the dominant brand) cost more but provide panel-level monitoring and better performance in partial shading. Power optimizers (SolarEdge) are a middle option. For most Las Vegas homes with unshaded roofs, string inverters are a perfectly good choice.</p>
<p><strong>What to watch:</strong> "We use the best panels" is meaningless without a brand name and model number. Ask for the spec sheet.</p>

<h2>Financing: What to Actually Look For</h2>
<p><strong>Cash purchase:</strong> Best ROI, shortest payback, you own the system and keep all incentives. If you have the capital, this is usually the right call.</p>
<p><strong>Solar loan ($0 down):</strong> You own the system and keep the 30% federal ITC. Monthly payments are often less than your current utility bill. Watch the interest rate (3–7% is normal) and term (10–25 years). Avoid dealers who bury a "dealer fee" in the loan amount — this inflates your financed cost by 20–40% above the system's true price.</p>
<p><strong>Solar lease / PPA:</strong> You don't own the system — you're paying to use it. The installer keeps the federal tax credit, not you. You may have escalator clauses that increase your payment by 2–3% per year. Leases can complicate a home sale. For most homeowners who qualify for a loan, a lease is not the better choice.</p>
<p><strong>Red flag:</strong> Any sales rep who won't explain the dealer fee built into the loan amount, or who pivots away from the question.</p>

<h2>Permitting, Interconnection, and Timeline</h2>
<p>A professional solar installation in Las Vegas involves: design and engineering, permit application with Clark County, installation (typically 1 day), county inspection, NV Energy interconnection application and approval, and Permission to Operate (PTO).</p>
<p>The full process from contract to PTO typically takes <strong>6 to 12 weeks</strong>. An installer who promises you'll be live in 3 weeks is either very optimistic or not being straight with you.</p>

<h2>Questions to Ask Before You Sign</h2>
<ol>
  <li>What brand and model are the panels, and what's the product warranty?</li>
  <li>Is the system designed by a NABCEP-certified engineer?</li>
  <li>What's the total project cost, and is there a dealer fee built into the financing?</li>
  <li>Who handles permitting and interconnection?</li>
  <li>What's your production guarantee, and what happens if the system underperforms?</li>
  <li>Who do I call if something goes wrong in year 7?</li>
  <li>Are you the installer, or are you subcontracting installation?</li>
</ol>

<h2>Why Working With an Independent Advisor Makes Sense</h2>
<p>My approach is simple: I analyze your actual utility usage, design a system that fits your home and your budget, and work with multiple top-rated NABCEP-certified installers to get you the best combination of equipment, warranty, and financing. I don't push one product or one installer — I push the right outcome for you.</p>
<p>174 five-star Google reviews is the proof. <a href="/sodsolarsavings">Book a free, no-pressure consultation</a> and I'll show you exactly what I'd recommend for your home — and why.</p>
    `,
    faqs: [
      {
        question: 'Should I get multiple solar quotes in Las Vegas?',
        answer: "Yes — always get at least 2–3 quotes. System design and pricing vary significantly between companies. A good independent agent can provide comparison quotes from multiple installers without you having to manage separate sales conversations."
      },
      {
        question: 'What is the difference between a solar lease and a solar loan?',
        answer: "With a lease, a solar company owns the panels and you pay them monthly for the electricity. You get no tax credits, no home equity, and the panels must be transferred or removed if you sell. With a loan, you own the panels, claim the 30% federal tax credit, and the system increases your home's value. Loans are almost always better for homeowners who own their home."
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

<h2>Federal Investment Tax Credit (ITC) — 30%</h2>
<p>The 30% federal ITC applies in California exactly as it does everywhere else in the US. It's a dollar-for-dollar credit against your federal income tax equal to 30% of your total system cost — panels, battery, inverter, installation, and permits. Because California solar-plus-battery systems tend to be more expensive than Nevada systems, the absolute value of the ITC is often higher for California homeowners.</p>
<table>
  <thead><tr><th>System type</th><th>Installed cost</th><th>Federal ITC (30%)</th></tr></thead>
  <tbody>
    <tr><td>7 kW solar only (LA)</td><td>$22,400</td><td>$6,720</td></tr>
    <tr><td>7 kW solar + 13.5 kWh battery</td><td>$33,000</td><td>$9,900</td></tr>
    <tr><td>8 kW solar + 13.5 kWh battery (SD)</td><td>$36,000</td><td>$10,800</td></tr>
  </tbody>
</table>
<p>The ITC applies to battery storage if the battery is <strong>charged primarily by the co-located solar system</strong> (&gt;75% solar-charged). Confirm with your tax advisor.</p>

<h2>SGIP: California's Battery Storage Rebate</h2>
<p>The <strong>Self-Generation Incentive Program (SGIP)</strong> is California's battery storage incentive. The program is administered by the state's major utilities (SCE, SDG&amp;E, PG&amp;E, SoCalGas) and provides upfront rebates for qualifying battery storage installations.</p>
<p><strong>Standard budget rebates:</strong> $200–$400 per kWh of usable battery capacity. For a 13.5 kWh Powerwall, that's $2,700–$5,400.</p>
<p><strong>Equity budget rebates:</strong> For income-qualified households (under 80% of area median income) and residents in Tier 2 or Tier 3 high fire hazard severity zones, the rebate increases to <strong>$850–$1,000 per kWh</strong>. For a 13.5 kWh Powerwall under the equity budget, that's <strong>$11,475–$13,500 in rebates</strong> — on top of the federal ITC.</p>
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
<p>Yes — the economics still work, especially with battery storage. California has the highest electricity rates in the continental US in most metro areas, and those rates are rising every year. The federal ITC and SGIP together can offset 40–60% of a solar-plus-battery system cost for qualifying homeowners.</p>
<p>The key is designing the system correctly for NEM 3.0: right-sized solar array, adequate battery capacity, and a system tuned for self-consumption rather than export.</p>
<p><a href="/sodsolarsavings">Book a free consultation</a> and I'll show you exactly how the numbers work for your specific home, utility, and situation in California.</p>
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
