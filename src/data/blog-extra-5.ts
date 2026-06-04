import type { BlogPost } from './blog-posts';

export const extraPosts5: BlogPost[] = [
  {
    slug: 'solar-warranty-what-is-covered',
    title: 'Solar Panel Warranty: What Does It Actually Cover?',
    description: 'Solar warranty explained — the 3 separate warranties (product, performance, workmanship), what they cover, the installer trap, and what to demand in writing.',
    publishDate: '2026-05-20',
    tags: ['Buying Guide', 'Nevada', 'Las Vegas'],
    body: `<p>Your solar system has three separate warranties, not one. The <strong>product (equipment) warranty</strong> covers the panels themselves against defects for 12–25 years. The <strong>performance (production) warranty</strong> guarantees the panels still make roughly 85–92% of their rated power at year 25. The <strong>workmanship (labor) warranty</strong> covers the installer\'s work — wiring, mounting, roof penetrations — for anywhere from 5 to 25 years. They come from different companies, and the weakest one is usually the one that matters most.</p>

<h2>Warranty 1: The product warranty (the panels)</h2>
<p>This comes from the panel manufacturer — companies like REC, Qcells, Maxeon, or Silfab. It covers manufacturing defects: delamination, cell failure, junction-box problems, busted glass from a factory flaw. Good Tier-1 panels carry 25-year product warranties now. Cheaper panels still ship with 12-year coverage. Always check the actual number on the spec sheet, not the brochure.</p>
<p>Here\'s the catch I tell every client. A product warranty only protects you if the manufacturer is still in business. Solar panel makers go bankrupt regularly. Buy a panel from a name that\'ll exist in 2046, not a no-name brand that shaves $1,200 off the quote.</p>

<h2>Warranty 2: The performance warranty (production)</h2>
<p>Panels degrade a little every year. The performance warranty promises they won\'t degrade too fast. A typical guarantee says you\'ll get at least 85–92% of rated output at year 25. Premium panels guarantee 92%; budget panels closer to 80–85%.</p>
<p>The problem is enforcement. A real performance warranty pays you a cash settlement if output drops below the line. A weak one makes you prove it with notarized paperwork, then ships you a replacement panel you have to install yourself. Read what actually happens when you file. The number on the line matters less than the process behind it.</p>

<h2>Warranty 3: The workmanship warranty (the big trap)</h2>
<p>This is the one that bites people. The workmanship warranty covers the installer\'s labor — bad wiring, loose racking, a roof penetration that wasn\'t flashed right. It ranges from 5 to 25 years depending on the company.</p>
<p>But it\'s only worth anything if the installer is still around to honor it. Solar companies fold constantly — door-to-door outfits especially. When they vanish, your 25-year workmanship warranty is worthless paper. The panels might be fine; the bracket that\'s leaking into your attic is your problem now. This is why I push local, established installers over national high-pressure crews. A 10-year warranty from a company that\'ll exist beats a 25-year warranty from one that won\'t.</p>

<h2>Who owns a roof leak?</h2>
<p>Roof penetration leaks are the messiest warranty fight in solar. Drilling into your roof to mount panels creates dozens of holes. If one leaks, the workmanship warranty should cover it — but only if it covers roof penetrations specifically, and only if the installer still exists. Get it in writing that roof penetrations are included, with a stated coverage period. Many warranties quietly exclude "roof or structural damage." Don\'t assume.</p>

<h2>Inverter warranties are separate too</h2>
<p>Your inverter is the most likely component to fail first. Microinverters (Enphase) carry 25-year warranties. String inverters (SolarEdge, others) usually carry 12 years, sometimes extendable to 25 for a fee. Plan on the inverter being the part you replace mid-life. Confirm the warranty length before you sign — a 12-year inverter under 25-year panels means a real cost around year 13.</p>

<h2>Battery warranties</h2>
<p>If you add a battery, it gets its own warranty — usually 10 years, measured by either total energy throughput or a retained-capacity percentage (often 70% at year 10). A Tesla Powerwall or Enphase battery warranty guarantees it still holds a set fraction of its capacity. Read whether the clock is years, cycles, or throughput, because heavy daily cycling can hit the throughput cap before 10 years.</p>

<h2>What\'s NOT covered</h2>
<ul>
<li>Damage from storms, hail, or falling branches — that\'s your homeowners insurance, not the warranty</li>
<li>Normal production loss from dirty panels or shading</li>
<li>Damage you cause cleaning or walking on panels</li>
<li>Roof replacement when your shingles age out under the array</li>
<li>Labor to remove and reinstall panels for a re-roof (unless your contract says otherwise)</li>
<li>Anything once the warranty company is out of business</li>
</ul>

<h2>How to actually file a claim</h2>
<p>Equipment claims go to the manufacturer; workmanship claims go to your installer. That split is exactly why keeping your paperwork matters. To file, you\'ll need your final invoice, panel and inverter serial numbers, the spec sheets, and your monitoring data showing the problem. Most claims start in the installer\'s portal or a manufacturer support line. Document everything in writing and keep copies — verbal promises don\'t survive a bankruptcy.</p>

<h2>What I tell clients to demand in writing</h2>
<p>The warranty I tell clients to demand before signing has five things spelled out on paper, not promised verbally:</p>
<ul>
<li><strong>Product warranty length</strong> on the panels (push for 25 years, Tier-1 brand)</li>
<li><strong>Performance guarantee</strong> with a cash remedy, not just a replacement-panel remedy</li>
<li><strong>Workmanship warranty</strong> that explicitly names roof penetrations and leaks</li>
<li><strong>Inverter and battery</strong> coverage terms, in years</li>
<li><strong>A clear claim process</strong> — who you call, what you submit, how fast they respond</li>
</ul>
<p>If a rep can\'t hand you all five in writing, that\'s your answer. A solid warranty is a sign of a company that plans to stick around. Want help reading the fine print on a quote you already have? Grab a <a href="/#get-quote">free consultation</a> and I\'ll go through it line by line. If you\'re still choosing an installer, start with my guide to the <a href="/blog/best-solar-companies-las-vegas-2026">best solar companies in Las Vegas</a>.</p>`,
    faqs: [
      {
        question: 'What does a solar panel warranty cover?',
        answer: 'A solar system actually has three separate warranties. The product warranty covers the panels against manufacturing defects for 12–25 years. The performance warranty guarantees the panels still produce roughly 85–92% of their rated output at year 25. The workmanship warranty covers the installer\'s labor — wiring, mounting, and roof penetrations — for 5–25 years. They come from different companies, so read all three before you sign.'
      },
      {
        question: 'What is the difference between a product and performance warranty?',
        answer: 'The product warranty covers physical defects in the panels — cracked cells, delamination, failed junction boxes — and comes from the manufacturer. The performance warranty is about output: it guarantees the panels won\'t degrade faster than a set rate, usually promising 85–92% of rated power at year 25. A panel can pass the product warranty (no defects) but still fail the performance warranty if it\'s making too little power. You want both, in writing.'
      },
      {
        question: 'Is a solar warranty still valid if the installer goes out of business?',
        answer: 'Your equipment warranties stay valid — those come from the panel and inverter manufacturers, not the installer. But your workmanship warranty dies with the installer. If they fold, nobody honors the labor coverage, so a leaking roof penetration or loose racking becomes your problem and your cost. This is the biggest trap in solar. Choose an established local company over a national door-to-door crew, even if the paper warranty is shorter.'
      },
      {
        question: 'Who pays if my roof leaks after solar panels are installed?',
        answer: 'A roof leak from a panel mount should fall under the installer\'s workmanship warranty — but only if the warranty specifically names roof penetrations and the installer is still in business. Many warranties quietly exclude roof or structural damage, so confirm coverage in writing with a stated period before signing. Storm or hail damage is different; that goes to your homeowners insurance, not the solar warranty.'
      }
    ]
  },
];
