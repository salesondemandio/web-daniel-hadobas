import type { BlogPost } from './blog-posts';

export const extraPosts2: BlogPost[] = [
  {
    slug: 'ev-charger-solar-las-vegas',
    title: 'Charging Your EV With Solar in Las Vegas — The Real Math',
    description: 'Charge your EV with solar in Las Vegas: how many extra panels you need, Level 2 charger install cost, tax credits, and why daytime solar wins.',
    publishDate: '2026-05-20',
    tags: ['Las Vegas', 'EV Charging', 'Nevada'],
    body: `<p>Charging your EV with solar in Las Vegas means adding about 2–3 extra panels to your system and a Level 2 charger that runs $500–$2,000 installed. A typical EV burns 3,000–4,000 kWh a year — roughly the same as adding a second refrigerator that never turns off. The good news: Vegas sun is free, and daytime solar charging beats paying NV Energy's afternoon rates every time.</p>

<h2>How much extra solar an EV needs</h2>
<p>I get this question on almost every quote now. The answer is simpler than people expect. A daily commuter EV uses around 3,000–4,000 kWh per year. In Las Vegas sun, one panel produces roughly 600–750 kWh annually. So you're looking at <strong>2–3 extra panels</strong> to fully cover your driving. If you barely drive, maybe one panel. If you're putting 20,000 miles a year on a big truck like a Lightning or a Rivian, plan for 4–5.</p>

<h2>The Level 2 charger and what it costs to install</h2>
<p>You can charge an EV off a regular wall outlet, but it's painfully slow — about 3–4 miles of range per hour. A Level 2 charger (240V, like your dryer plug) gets you 25–40 miles per hour. That's the one you want. In Las Vegas, a Level 2 install runs <strong>$500–$2,000</strong>. The charger hardware is $300–$700. The rest is the electrician's labor — running a 240V circuit from your panel to the garage.</p>
<p>The cost swings on distance and your panel. A garage right next to the main panel is cheap. A detached garage or a panel on the far side of the house costs more. And if your panel is full or only 100 amps, you may need an upgrade first.</p>

<h2>Solar vs NV Energy time-of-use rates</h2>
<p>Here's where it gets interesting. NV Energy pushes EV owners toward time-of-use (TOU) plans. On TOU, power is expensive in the late afternoon and evening, cheaper overnight. The pitch is "charge at night when it's cheap." But overnight charging still means buying every kWh from the grid.</p>
<p>Solar flips that. Your panels make the most power midday, exactly when TOU rates peak. If you charge during the day off your own panels, you're not buying that power at all. You can check current plans on the <a href="https://www.nvenergy.com/account-services/energy-pricing-plans">NV Energy pricing plans page</a>, but the principle holds: self-made daytime power beats any rate the utility offers.</p>

<h2>Why daytime solar charging beats grid charging</h2>
<p>Every kWh you pull from your own panels is a kWh you don't buy and don't export for partial credit. NV Energy's <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering">net metering</a> pays you less for exported solar than you'd pay to buy it back. So the smartest move is to <strong>consume your solar on-site</strong> — and an EV is the perfect daytime load.</p>
<p>If you work from home, plug in midday and let the sun fill the battery. If you commute, a smart charger can schedule charging for peak solar hours on your days off, or you top up on weekends. The car becomes a giant battery that soaks up power you'd otherwise sell back cheap.</p>

<h2>Federal credits — what's left and what's gone</h2>
<p>This is the part most people miss. The 30% Residential Clean Energy Credit that used to cover the extra solar panels you add for EV charging expired December 31, 2025 for systems you buy. So if you purchase your panels, there's no federal credit on them anymore — only a lease or PPA can still capture a federal incentive, through the end of 2027. What does still cut your panel cost in Nevada is the state sales-tax exemption (about 8.375% in Clark County) and the property-tax exemption on added home value. See the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit">IRS Residential Clean Energy Credit page</a> for the federal details.</p>
<p>The EV charger is a separate matter. The Alternative Fuel Vehicle Refueling Property Credit is a different statute from the solar credit, with its own rules, dollar caps, and eligible-census-tract limits — and it has its own sunset timeline. Check your address against the IRS eligibility map and confirm both the current status and your eligibility with your CPA before counting on it.</p>

<h2>Sizing your system for an EV</h2>
<p>If you already have solar and bought an EV later, you can usually add 2–3 panels to your existing array — assuming your inverter and roof have room. If you're buying both at once, build the EV load into the system from day one. That's cheaper than a retrofit, because you pay one mobilization, one permit, one design.</p>
<p>Don't let a rep oversize you, though. I see quotes that add 5,000 kWh of "EV buffer" for a person who drives 8,000 miles a year. Right-size to your actual driving. More on getting the sizing right on my <a href="/solar-las-vegas">Solar in Las Vegas</a> page.</p>

<h2>Should you add a battery?</h2>
<p>For most EV owners in Vegas, the car is the battery. You don't need a home battery just to charge your EV — you need it for backup power and to shift solar into the evening for the rest of your house. If outages worry you, or you want to run your AC off stored solar after sunset, a battery makes sense. If your only goal is cheap EV charging, skip it and let the car soak up daytime sun. I break down the tradeoffs on my <a href="/solar-battery-storage">solar battery storage</a> page.</p>

<h2>The honest bottom line</h2>
<p>Adding EV charging to solar in Las Vegas is one of the best-pencilling upgrades I quote. The marginal cost — 2–3 panels plus a Level 2 charger — is small, Nevada's sales-tax exemption applies to the panels, and you're trading $50–$120 a month in gas for sunlight you already own. If you're buying an EV or already drive one, run the numbers before you sign a TOU plan.</p>

<p>Want me to size the panels and charger for your actual driving and roof? <a href="/#get-quote">Grab a free consultation here</a> and I'll send you the math, no pressure.</p>`,
    faqs: [
      {
        question: 'How much does EV charger installation cost in Las Vegas?',
        answer: 'A Level 2 EV charger installed in Las Vegas runs $500–$2,000 in 2026. The charger hardware itself is $300–$700, and the rest is the electrician\'s labor to run a 240V circuit from your main panel to the garage. Cost depends on the distance to your panel and whether your panel has open capacity. If you have an older 100-amp panel or a detached garage, you may need a panel upgrade or a longer run, which pushes you toward the top of that range.'
      },
      {
        question: 'How many extra solar panels do I need to charge an EV?',
        answer: 'Most EVs use 3,000–4,000 kWh per year, which works out to about 2–3 extra solar panels in Las Vegas sun, where each panel produces roughly 600–750 kWh annually. Light drivers might only need one panel. Heavy drivers with a big truck like a Ford Lightning or Rivian, putting 20,000 miles a year on it, should plan for 4–5. The right number depends on your actual annual mileage, not a generic buffer some reps tack on.'
      },
      {
        question: 'Is it cheaper to charge an EV with solar or NV Energy at night?',
        answer: 'Solar wins. NV Energy pushes EV owners to time-of-use plans and tells them to charge overnight when rates are lower, but you\'re still buying every kWh from the grid. With solar, you charge during the day off your own panels and buy nothing. Because NV Energy pays you less for exported solar than you pay to buy it back, self-consuming your daytime production with an EV is the most valuable use of your panels.'
      },
      {
        question: 'Does a federal tax credit cover solar panels or an EV charger?',
        answer: 'Not for solar panels you buy — the 30% Residential Clean Energy Credit expired December 31, 2025 for purchased residential systems, so only a lease or PPA can still capture a federal incentive (through 2027). What still cuts your panel cost in Nevada is the state sales-tax exemption and the property-tax exemption on added home value. The EV charger is governed by a separate statute, the Alternative Fuel Vehicle Refueling Property Credit, which has its own rules, caps, eligible-census-tract limits, and sunset timeline. Check your address on the IRS eligibility map and confirm both its current status and your eligibility with your CPA before counting on it.'
      }
    ]
  }
];
