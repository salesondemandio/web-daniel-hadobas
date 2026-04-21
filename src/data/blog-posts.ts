export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  body: string;
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'solar-cost-las-vegas-2025',
    title: 'How Much Does Solar Cost in Las Vegas in 2025?',
    description: 'A complete breakdown of solar panel costs in Las Vegas, NV — before and after the 30% federal tax credit.',
    date: '2025-01-15',
    readTime: '6 min read',
    body: `
<p>Going solar in Las Vegas in 2025 is one of the best financial decisions a homeowner can make — if you understand the numbers. Here's the complete cost picture.</p>

<h2>Average Solar System Cost in Las Vegas</h2>
<p>A typical Las Vegas home (1,500–2,500 sq ft) needs a <strong>6–9 kW solar system</strong> to offset 80–100% of electricity usage. Before incentives, expect to pay:</p>
<ul>
  <li><strong>6 kW system:</strong> $15,000–$18,000</li>
  <li><strong>8 kW system:</strong> $20,000–$24,000</li>
  <li><strong>9 kW system:</strong> $22,500–$27,000</li>
</ul>
<p>Las Vegas solar costs average <strong>$2.50–$3.10 per watt</strong> installed, which includes panels, inverter, mounting hardware, permits, and labor.</p>

<h2>After the 30% Federal Tax Credit</h2>
<p>The Inflation Reduction Act's Investment Tax Credit (ITC) gives you 30% of your total system cost back as a federal tax credit. On an $18,000 system, that's <strong>$5,400 back</strong>. Your actual out-of-pocket cost:</p>
<ul>
  <li><strong>$18,000 system → $12,600 after ITC</strong></li>
  <li><strong>$22,000 system → $15,400 after ITC</strong></li>
</ul>
<p>The ITC is available through at least 2032 and applies to cash purchases and solar loans. It does not apply to leases or PPAs.</p>

<h2>Nevada State Incentives</h2>
<p>Nevada homeowners qualify for additional savings beyond the federal credit:</p>
<ul>
  <li><strong>Sales tax exemption:</strong> No sales tax on solar equipment purchases (saves 8.375% in Clark County)</li>
  <li><strong>Property tax exemption:</strong> Solar panels don't increase your property tax assessment in Nevada</li>
  <li><strong>NV Energy net metering:</strong> Earn credits at ~75% of retail rate for excess energy exported to the grid</li>
</ul>

<h2>Monthly Payment vs. Monthly Savings</h2>
<p>Most Las Vegas homeowners go solar with <strong>$0 down financing</strong>. A typical scenario:</p>
<ul>
  <li>Current NV Energy bill: $280/month</li>
  <li>Solar loan payment: $145/month (25-year, 4.99%)</li>
  <li>Residual utility bill: $15–$30/month</li>
  <li><strong>Net monthly savings: $105–$120 from day one</strong></li>
</ul>
<p>After the loan is paid off (typically 10–12 years with the tax credit applied), your electric costs drop to near zero for the remaining 13–15 years of your system's warranty.</p>

<h2>How Long Until Payback?</h2>
<p>In Las Vegas, the solar payback period is typically <strong>6–8 years</strong> — faster than the national average of 8–10 years, thanks to 290+ sunny days per year and rising NV Energy rates. Over a 25-year system lifetime, most Las Vegas homeowners save <strong>$40,000–$60,000</strong> on electricity.</p>

<h2>Get an Exact Quote for Your Home</h2>
<p>Every home is different. Your savings depend on your roof orientation, shading, current utility usage, and financing terms. Daniel Hadobas offers free, no-obligation savings analyses — he'll analyze your last 12 months of NV Energy bills and design a system sized precisely for your home.</p>
    `,
    faqs: [
      { question: 'Is $0 down solar real or a gimmick?', answer: '$0 down solar loans are real financing products offered by solar-specific lenders like Mosaic, Goodleap, and Service Finance. You borrow the full system cost and repay it monthly. The key is that your monthly loan payment is typically lower than your current electric bill, so you save money immediately while building equity in a home improvement.' },
      { question: 'What is the best time of year to go solar in Las Vegas?', answer: 'Any time is a good time — Las Vegas averages 294 sunny days per year, so seasonality barely matters. However, permit processing times are shortest in fall and winter. If you want to be generating by summer (when NV Energy bills peak), sign your contract by February or March.' },
    ],
  },
  {
    slug: 'nv-energy-net-metering-explained',
    title: 'NV Energy Net Metering Explained',
    description: "How NV Energy's net metering program works, what you get paid for excess solar, and how to maximize your credits.",
    date: '2025-01-20',
    readTime: '5 min read',
    body: `
<p>NV Energy's net metering program is one of the most important factors in your solar savings calculation. Here's exactly how it works — and how to maximize it.</p>

<h2>What Is Net Metering?</h2>
<p>Net metering is a billing arrangement where your solar panels can send excess electricity to the grid, and NV Energy credits your account for that energy. When your panels aren't producing (at night, cloudy days), you draw from the grid — and your credits offset what you owe.</p>

<h2>What Rate Does NV Energy Pay?</h2>
<p>Nevada's net metering rules require NV Energy to credit solar customers at approximately <strong>75% of the retail electricity rate</strong>. If retail electricity costs $0.12/kWh, you earn about <strong>$0.09/kWh</strong> for excess energy exported.</p>
<p>This is better than many states (California's NEM 3.0 dropped to as low as $0.02–$0.05/kWh in 2023), making Nevada one of the more favorable net metering states in the West.</p>

<h2>How Credits Work Month to Month</h2>
<p>Nevada net metering uses a 12-month true-up period:</p>
<ul>
  <li>Each month, credits accumulate if your production exceeds usage</li>
  <li>Summer production peaks often build large credit balances</li>
  <li>Winter months draw down those credits</li>
  <li>At the end of 12 months, any remaining credit balance is paid out (though at a lower rate than the accumulated credit value)</li>
</ul>
<p>The goal of good system design is to size your solar to roughly match your annual consumption — not dramatically over-produce, since end-of-year excess is settled at a lower rate.</p>

<h2>How to Maximize Your Net Metering Benefits</h2>
<ol>
  <li><strong>Right-size your system:</strong> Design for 90–100% of annual kWh usage, not 120%+</li>
  <li><strong>Shift usage to daylight hours:</strong> Run dishwasher, laundry, and EV charging during peak solar production</li>
  <li><strong>Consider adding battery storage:</strong> Store excess midday production to use at night instead of exporting it at 75% credit</li>
  <li><strong>Time your large loads:</strong> Pool pumps, A/C pre-cooling — schedule these for 10am–3pm when panels produce most</li>
</ol>

<h2>Will NV Energy's Net Metering Change?</h2>
<p>Nevada's net metering rules are reviewed periodically by the Public Utilities Commission. The current 75% retail rate has been stable since Nevada reversed its 2015 reduction in 2017. There's no scheduled change, but locking in your system before any potential policy shifts protects your rate under grandfathering provisions.</p>
    `,
    faqs: [
      { question: 'Does NV Energy pay cash for excess solar?', answer: 'Not directly. NV Energy issues bill credits, not checks. At the end of your 12-month true-up period, any remaining credit balance is paid out — but typically at a lower rate than the credits accumulated during the year. This is why right-sizing your system to match your annual usage is important.' },
      { question: 'What happens to net metering if I sell my house?', answer: 'Your net metering account transfers to the new homeowner. They simply notify NV Energy of the ownership change and the account continues under their name at the same rate terms.' },
    ],
  },
  {
    slug: 'nevada-solar-tax-credit-2025',
    title: 'Nevada Solar Tax Credit 2025: What You Need to Know',
    description: 'Every state and federal solar incentive available to Nevada homeowners in 2025 — and how to claim them.',
    date: '2025-02-01',
    readTime: '7 min read',
    body: `
<p>Nevada homeowners in 2025 have access to a stacked set of incentives that make going solar more affordable than ever. Here's the complete picture — federal, state, and utility.</p>

<h2>Federal: 30% Investment Tax Credit (ITC)</h2>
<p>The biggest incentive is federal. The Inflation Reduction Act locked in a <strong>30% ITC through 2032</strong>. On a $20,000 solar system, that's $6,000 directly off your federal income tax bill — not a deduction, a credit.</p>
<p><strong>Key details:</strong></p>
<ul>
  <li>Applies to systems installed January 1, 2022 through December 31, 2032</li>
  <li>Covers panels, inverter, mounting, labor, and battery storage (if charged primarily by solar)</li>
  <li>Non-refundable: reduces taxes owed but doesn't generate a refund</li>
  <li>Unused credit rolls forward to the following tax year</li>
  <li>Only available for purchased systems (cash or loan) — not leases or PPAs</li>
</ul>

<h2>Nevada: Sales Tax Exemption</h2>
<p>Nevada exempts solar equipment from state and local sales tax. In Clark County (Las Vegas), the combined sales tax rate is 8.375%. On a $20,000 system, that's <strong>$1,675 saved</strong> — automatically, with no application required.</p>

<h2>Nevada: Property Tax Exemption</h2>
<p>NRS 361.079 exempts the added value of solar energy systems from property tax assessment. If your solar system adds $18,000 to your home's appraised value (which it often does), you pay <strong>no additional property tax</strong> on that value. In Clark County with a ~1% effective property tax rate, that's roughly $180/year in avoided tax — or $4,500 over 25 years.</p>

<h2>NV Energy: Net Metering Credits</h2>
<p>NV Energy credits excess solar production at ~75% of retail rate. With a properly sized system and average Las Vegas production, most homeowners accumulate $800–$1,200 in annual net metering credits.</p>

<h2>How to Claim the Federal ITC</h2>
<ol>
  <li>Install your solar system and receive a Certificate of Completion</li>
  <li>File IRS Form 5695 (Residential Energy Credits) with your federal tax return</li>
  <li>Report the credit on Schedule 3, Line 5 of Form 1040</li>
  <li>If the credit exceeds your tax liability, it rolls forward to the next year</li>
</ol>
<p>Consult your tax advisor for guidance specific to your situation. Most tax preparation software (TurboTax, H&R Block) handles Form 5695 automatically when you report the solar installation.</p>

<h2>Total Incentive Stack — Example</h2>
<p>On a $22,000 solar system in Las Vegas:</p>
<ul>
  <li>Federal ITC (30%): -$6,600</li>
  <li>Sales tax exemption: -$1,843</li>
  <li>Property tax savings (25 yrs): -$4,500</li>
  <li>Net metering credits (25 yrs, est.): -$22,500</li>
  <li><strong>Total incentive value: ~$35,443</strong></li>
</ul>
    `,
    faqs: [
      { question: 'Is the 30% federal tax credit refundable?', answer: "No — the ITC is non-refundable. It reduces your federal tax liability dollar-for-dollar, but if the credit is larger than what you owe in taxes, you won't receive the difference as a refund. However, any unused portion rolls forward to the following tax year. Most homeowners with a typical income tax burden can use the full credit within 1–2 years." },
      { question: 'Does Nevada have a state solar tax credit?', answer: "Nevada doesn't have a state income tax credit for solar. However, the combination of federal ITC (30%), sales tax exemption, and property tax exemption makes Nevada one of the most incentive-rich solar states in the country even without a state income tax credit." },
    ],
  },
  {
    slug: 'best-solar-companies-las-vegas',
    title: 'Best Solar Companies in Las Vegas — What to Look For',
    description: 'How to evaluate solar companies in Las Vegas, what questions to ask, and red flags to avoid.',
    date: '2025-02-10',
    readTime: '8 min read',
    body: `
<p>Las Vegas has dozens of solar companies competing for your business. Here's how to separate the legitimate installers from the predatory ones — and what to ask before signing anything.</p>

<h2>What Makes a Solar Company "Good"?</h2>
<p>The best Las Vegas solar companies share a few common traits:</p>
<ul>
  <li><strong>Nevada contractor license:</strong> All solar installers in Nevada must hold a C-2 electrical or C-4 solar contractor license. Verify at the Nevada State Contractors Board (nvcontractorsboard.com)</li>
  <li><strong>Manufacturer certifications:</strong> Look for installers certified by the panel brands they sell (SunPower Authorized Dealer, Enphase Installer, etc.)</li>
  <li><strong>Verified reviews:</strong> Check Google, BBB, and the CSLB for complaint history — not just the stars</li>
  <li><strong>Transparent pricing:</strong> A good company provides itemized quotes, not just a monthly payment number</li>
  <li><strong>In-house installation:</strong> Companies that subcontract installations have less quality control</li>
</ul>

<h2>Red Flags to Watch For</h2>
<ul>
  <li><strong>High-pressure "today only" pricing</strong> — legitimate solar savings don't expire overnight</li>
  <li><strong>Lease-only offers</strong> — leases prevent you from claiming the 30% ITC and complicate home sales</li>
  <li><strong>Door-to-door with no physical office</strong> — verify any company has a real Nevada business address</li>
  <li><strong>Promised production guarantees without a shade analysis</strong> — production estimates should be based on satellite shading data, not guesses</li>
  <li><strong>Verbal promises</strong> — anything promised (production, savings, bill amount) must be in the written contract</li>
</ul>

<h2>Questions to Ask Any Solar Company</h2>
<ol>
  <li>What is your Nevada contractor license number?</li>
  <li>Who physically installs my system — your employees or subcontractors?</li>
  <li>What production guarantee do you offer, and is it written into the contract?</li>
  <li>Show me the itemized cost breakdown (not just the monthly payment)</li>
  <li>What monitoring system comes with my install, and how do I access it?</li>
  <li>Who handles warranty claims if something fails in year 10?</li>
</ol>

<h2>Why Working With an Independent Agent Is Different</h2>
<p>Most solar companies you encounter are vertically integrated — they have installers, salespeople, and financiers all in-house. That alignment of interests means they're optimizing for their profit, not your savings.</p>
<p>An independent agent like Daniel Hadobas represents multiple installer relationships and has no inventory to move. His only incentive is putting you in the right system at the right price — because 174 five-star reviews don't survive satisfied customers getting upsold into systems they didn't need.</p>
    `,
    faqs: [
      { question: 'Should I get multiple solar quotes in Las Vegas?', answer: "Yes — always get at least 2–3 quotes. System design and pricing vary significantly between companies. A good independent agent can provide comparison quotes from multiple installers without you having to manage separate sales conversations." },
      { question: 'What is the difference between a solar lease and a solar loan?', answer: "With a lease, a solar company owns the panels and you pay them monthly for the electricity. You get no tax credits, no home equity, and the panels must be transferred or removed if you sell. With a loan, you own the panels, claim the 30% federal tax credit, and the system increases your home's value. Loans are almost always better for homeowners who own their home." },
    ],
  },
  {
    slug: 'california-solar-incentives-2025',
    title: 'California Solar Incentives 2025: Complete Guide',
    description: 'All federal, state, and utility solar incentives for California homeowners in 2025 — including NEM 3.0 and battery rebates.',
    date: '2025-02-20',
    readTime: '9 min read',
    body: `
<p>California solar incentives changed significantly in 2023 with NEM 3.0. Here's everything Southern California homeowners need to know going into 2025.</p>

<h2>Federal: 30% ITC (Same as Every State)</h2>
<p>California homeowners get the same 30% federal Investment Tax Credit as everyone else. On a $25,000 system (California systems run larger than Nevada), that's <strong>$7,500 back</strong> on your federal taxes. The ITC applies to cash, loan, and now also covers battery storage systems charged primarily by solar.</p>

<h2>NEM 3.0 — What Changed in April 2023</h2>
<p>California's Net Energy Metering 3.0 (officially "Net Billing Tariff") launched April 15, 2023 for new solar customers of PG&E, SCE, and SDG&E. The key change:</p>
<ul>
  <li><strong>Old NEM 2.0:</strong> Exported solar credited at retail rate (~$0.25–0.35/kWh)</li>
  <li><strong>New NEM 3.0:</strong> Exported solar credited at "avoided cost" rate (~$0.02–0.08/kWh)</li>
</ul>
<p>This dramatically reduces the value of excess solar sent to the grid. A system designed to export 40% of its production is now much less economical than under NEM 2.0.</p>

<h2>How to Win Under NEM 3.0</h2>
<p>The answer is <strong>self-consumption</strong> — use your solar power as it's being generated, and store what you can't use immediately:</p>
<ul>
  <li><strong>Add battery storage:</strong> A Tesla Powerwall 3 or Enphase IQ Battery stores midday solar for evening use instead of exporting it at low rates</li>
  <li><strong>Shift loads to solar hours:</strong> EV charging, laundry, dishwasher — schedule for 10am–2pm</li>
  <li><strong>Right-size the system:</strong> Under NEM 3.0, bigger is not better. Excess production earns almost nothing; design for 85–90% self-consumption</li>
</ul>

<h2>California Solar Mandate</h2>
<p>Since January 1, 2020, all new single-family homes and low-rise multifamily buildings in California must be built with solar panels. If you're in a new development home, you likely already have solar — but you may be in a lease. Buying out that lease and pairing it with storage is often financially advantageous.</p>

<h2>SGIP — California Battery Storage Rebate</h2>
<p>The Self-Generation Incentive Program (SGIP) offers rebates for battery storage systems in California. In 2025:</p>
<ul>
  <li>Standard residential rebate: $150–200/kWh of storage capacity</li>
  <li>Equity Resiliency rebate (for qualifying low-income homeowners and those in high fire-risk areas): up to $1,000/kWh</li>
  <li>A 10 kWh system at the standard rate earns $1,500–$2,000 in rebates</li>
</ul>
<p>SGIP rebates are administered by the utilities and have waitlists — the earlier you apply, the better your position.</p>

<h2>SDG&E, SCE, and LA-DWP: Which Rate Applies to You?</h2>
<ul>
  <li><strong>SDG&E (San Diego):</strong> NEM 3.0 applies. Battery storage is especially valuable due to SDG&E's high retail rates ($0.38–0.54/kWh in summer)</li>
  <li><strong>SCE (Los Angeles, Riverside, Inland Empire):</strong> NEM 3.0 applies. Time-of-use rates favor self-consumption batteries</li>
  <li><strong>LADWP (City of LA):</strong> Still on NEM 2.0-equivalent rates as of 2025. No NEM 3.0 switch announced. Excellent export rates still apply</li>
</ul>

<h2>Daniel Hadobas Serves Southern California</h2>
<p>Daniel is licensed in California and works with top-rated installers in Los Angeles, San Diego, Riverside, and the Inland Empire. He specializes in NEM 3.0-optimized system designs — the right panel count, right battery size, and right usage strategy for your specific utility and rate plan.</p>
    `,
    faqs: [
      { question: 'Is solar still worth it in California under NEM 3.0?', answer: "Yes — but the math is different. Under NEM 2.0, oversized systems with high export made sense. Under NEM 3.0, the winning strategy is self-consumption + battery storage. A well-designed system with a battery can still deliver 70–85% reduction in utility bills, especially for SDG&E customers paying $0.40+/kWh." },
      { question: 'Should I get battery storage with my California solar system?', answer: "Under NEM 3.0, battery storage shifts from optional to highly recommended. Without a battery, midday excess production earns only $0.02–0.08/kWh. With a battery, that same energy offsets $0.35–0.50/kWh of evening usage. The payback on battery addition in California is typically 5–7 years under NEM 3.0." },
    ],
  },
];
