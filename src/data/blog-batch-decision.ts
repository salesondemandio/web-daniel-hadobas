import type { BlogPost } from './blog-posts';

export const batchDecisionPosts: BlogPost[] = [
  {
    slug: 'is-solar-worth-it-las-vegas-2026',
    title: 'Is Solar Worth It in Las Vegas in 2026? An Honest Take',
    description: 'A straight answer on whether solar pencils out in Las Vegas in 2026 — bills, rebates, payback math, and the cases where I tell homeowners to wait.',
    publishDate: '2025-12-15',
    tags: ['Decision', 'Las Vegas', 'Nevada'],
    body: `<p><strong>Short answer: yes, for most Las Vegas homeowners with a south, west, or east-facing roof and an NV Energy bill above $120/month — solar pencils out in 2026.</strong> Panel pricing is at a five-year low, Vegas sun is the best resource in the country, and NV Energy's rising rates make your own generation worth more every year. But it's not universal. If your bill is under $90/month, you have heavy shading, or you're moving in 2 years, I tell people to wait.</p>

<h2>What changed in 2026</h2>
<p>The big one: the 30% federal residential solar tax credit ended December 31, 2025. For a system you buy — cash or loan — there's no more federal credit. A lease or PPA can still capture a federal incentive through the end of 2027, but you don't own the panels. What still helps you in Nevada: the state sales-tax exemption on solar equipment (about 8.375% in Clark County, applied at purchase), the property-tax exemption on the added home value, and NV Energy's <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" rel="noopener">net metering tier</a>, which still credits new residential systems at 75% of retail, locked for 20 years. Add rising NV Energy rates and the value story is clear: lock in your own cost as a hedge, don't wait on a credit that's gone.</p>

<h2>The real Vegas payback math</h2>
<p>On my last 20 systems in the valley, cash price ran roughly $17,000–$23,000 for a 7–10 kW system (about $2.85/watt, with Nevada's sales-tax exemption already applied). Average bill before solar: $215/month. After: $18–$45 (the connection charge plus a small true-up). That's a payback window of roughly 9–12 years for a cash purchase now that the 30% federal credit has ended — though NV Energy's rising rates keep pulling that number down.</p>
<p>If you finance through the standard 25-year loan, most of my clients are cash-flow positive from month one — meaning the loan payment is lower than what they were paying NV Energy. That's the test I run before I'll quote anyone.</p>

<h2>When I tell people solar is worth it</h2>
<ul>
<li>Bill is consistently $130+/month and the home is staying in the family 5+ years</li>
<li>Roof is 0–12 years old (asphalt) or any age tile/metal</li>
<li>South, west, or east exposure with under 20% shade at 11am–3pm</li>
<li>You want to lock in your power cost against NV Energy's rising rates instead of renting electricity forever</li>
</ul>

<h2>When I tell people to wait</h2>
<ul>
<li>Bill under $90/month — the math gets thin and other efficiency upgrades win first</li>
<li>Roof is 18+ years old asphalt — replace the roof first, then solar (see <a href="/solar-las-vegas">my Vegas guide</a>)</li>
<li>Selling within 24 months — you'll likely capitalize the value into the sale, but the buyer pool gets narrower</li>
<li>Heavy north-facing slope only — production drops 25–35% (covered in detail in <a href="/blog/solar-on-north-facing-roof-las-vegas">this post</a>)</li>
</ul>

<h2>A real example from Henderson</h2>
<p>Last spring I quoted a couple in Green Valley Ranch. Bill averaged $241/month, 2,400 sq ft single-story, west-facing roof, 8 years old. We installed an 8.4 kW system, 21 panels, cash price about $23,900 (Nevada sales-tax exemption applied). New average bill: $22/month. They'll break even in roughly year 10 — sooner if NV Energy keeps raising rates — then bank tens of thousands in avoided utility bills over the rest of the 25-year warranty. That's a typical Henderson outcome.</p>

<h2>Where the "it depends" lives</h2>
<p>Two homes on the same street can produce 30% different output because of roof pitch, vent placement, and a single mature pine tree. That's why I do a roof scan and shade analysis before I quote. The <a href="https://www.energy.gov/eere/solar" rel="noopener">DOE's solar basics</a> covers the principles, but the local install reality is what determines your number.</p>

<h2>What to ask any installer</h2>
<ul>
<li>Show me the production model with shade losses included — not the panel-rated wattage</li>
<li>What's the equipment warranty AND the workmanship warranty (these differ)?</li>
<li>What happens if a panel underperforms in year 8?</li>
<li>Are you a licensed Nevada C-2 contractor, and is the install crew in-house or subbed?</li>
</ul>

<h2>Common mistakes I see</h2>
<p>Oversizing systems to "future-proof" for an EV that hasn't been bought. Buying batteries before checking if their use case actually needs one. Signing a 25-year lease when the same system on a loan would be paid off well before the warranty runs out. I walk through all three on every quote.</p>

<h2>Bottom line</h2>
<p>For most Vegas homes in 2026, yes, solar is worth it — but only if the install is sized to your actual usage and your roof can host it for the next 25 years. <a href="/#get-quote">Get a free quote</a> and I'll show you the production model and payback math before you commit.</p>`,
    faqs: [
      { question: 'Is solar still worth it in Las Vegas with NV Energy net metering tiers?', answer: 'Yes. Even at the current 75% retail credit tier, the math works for any home with a $130+/month bill. The credit rate is locked in for 20 years from your interconnection date.' },
      { question: 'Can I still get the 30% federal solar tax credit?', answer: 'Not for a system you buy. The 30% federal Residential Clean Energy Credit expired December 31, 2025 for purchased (cash or loan) residential systems. A lease or PPA can still capture a federal incentive through the end of 2027, but you do not own the panels. For owned systems, the value now comes from Nevada\'s sales-tax and property-tax exemptions, 75% net metering, and hedging against rising NV Energy rates.' },
      { question: 'Will solar lower my home value?', answer: 'Owned (not leased) systems consistently appraise positive in Clark County. Leased systems are neutral to slightly negative because they transfer to the buyer. I always recommend ownership for resale.' },
      { question: 'How long do panels actually last in Vegas heat?', answer: 'Modern panels are warrantied for 25 years and tested under IEC 61215. Vegas heat shortens inverter life faster than panel life — plan on one inverter swap around year 12–15.' },
      { question: 'What if my bill is only $80/month?', answer: 'Honestly, I tell you to skip solar and look at attic insulation, a smart thermostat, and AC tune-up first. The payback on a small system gets thin under $90/month.' }
    ]
  },

  {
    slug: 'should-i-buy-solar-now-or-wait',
    title: 'Should I Buy Solar Panels Now, or Wait for New Tech?',
    description: 'Perovskite, solid-state batteries, 30% efficient panels — should you wait? An honest look at what is real, what is hype, and what I tell my clients in 2026.',
    publishDate: '2026-01-08',
    tags: ['Decision', 'Las Vegas'],
    body: `<p><strong>Short answer: don't wait. The "next-gen" panels you're reading about are 3–7 years from residential availability at scale, and waiting that long costs you ~$3,600/year in avoided NV Energy bills — bills that climb every year as rates rise.</strong> Today's panels are 21–23% efficient and warrantied for 25 years. The upgrade case for waiting almost never beats the cost of waiting.</p>

<h2>What people are waiting for</h2>
<p>Three technologies dominate the "should I wait" conversation: perovskite tandem cells, solid-state home batteries, and 30%+ efficiency monocrystalline. I'll go through each.</p>

<h2>Perovskite tandem cells</h2>
<p>Real technology. Lab efficiency above 33%. Oxford PV started shipping commercial product in 2024. But residential at scale? <a href="https://www.nrel.gov/pv/module-reliability.html" rel="noopener">NREL's reliability data</a> shows perovskites still degrade faster than silicon under heat and humidity cycling. For Vegas roofs hitting 160°F surface temps in July, that's a problem. Conservative estimate for residential perovskite at price parity: 2029–2031.</p>

<h2>Solid-state home batteries</h2>
<p>QuantumScape, Solid Power — both are auto-sector first. Home product is downstream. Realistic timeline for a residential ESS with solid-state cells: 2030+. Today's LFP batteries (Tesla Powerwall 3, Enphase 5P, Franklin) are already 10-year warrantied with thousands of cycles. They're not the bottleneck.</p>

<h2>30% efficient monocrystalline</h2>
<p>The current top-tier residential panels (Maxeon 7, REC Alpha Pure-RX) are 22.8–23.4%. The jump from 23% to 30% requires the perovskite tandem layer above. So this is the same conversation as point 1.</p>

<h2>The cost of waiting</h2>
<p>Let me run the math I run for clients who ask. Average Vegas bill on a south-facing 2,200 sq ft home: $200/month. That's $2,400/year going to NV Energy that solar would offset by ~$2,200 of it. Wait three years for "better tech" and you're out $6,600 in avoided bills — more, really, since NV Energy's rates keep climbing. Every year you wait is a year you're paying the utility's rising price instead of your own fixed cost.</p>

<h2>What today's panels actually deliver</h2>
<p>I install 410–440W monocrystalline panels, IEC 61215 and UL 61730 certified, with 25-year product and performance warranties. Year-25 minimum output guarantee: 87–92% of nameplate. That means a panel I install today will still produce 90% of its first-year output when your kid graduates college. The "old tech" framing doesn't match the reality.</p>

<h2>A Summerlin example</h2>
<p>I had a client in The Trails who waited from 2021 to 2024 because his neighbor told him to. Over those three years his bills totaled $9,400. The system he eventually bought cost $1,200 less than the 2021 quote. Net: he paid $8,200 to wait. Not the worst outcome, but not a win.</p>

<h2>The one case where waiting makes sense</h2>
<p>If you're planning a significant addition or remodel that will change your roof footprint within 18 months — wait. Designing solar around a roof that's about to change is a mess. I've torn down and reinstalled three systems for that exact reason. Otherwise, the math says go.</p>

<h2>What I'd watch for, not wait for</h2>
<p>Microinverter pricing on the Enphase IQ9 series. AC-coupled battery integration getting cleaner. NEM 4.0-style policy shifts. None of these justify a 3-year wait — they're upgrade-during-install decisions.</p>

<h2>What to ask installers about future-proofing</h2>
<ul>
<li>Is the inverter sized so I can add a battery in year 5 without re-pulling permits?</li>
<li>Are panels modular enough that I can add 2–3 more if I get an EV?</li>
<li>What's the upgrade path if perovskite hybrid panels become available in year 10?</li>
</ul>

<h2>Bottom line</h2>
<p>Waiting for breakthrough solar tech in 2026 is like waiting in 2008 to buy an iPhone because the iPhone 15 was going to be better. By the time the upgrade arrives, you've burned the value the existing tool would've given you. <a href="/#get-quote">Get a quote</a> and let's see if today's panels work for your roof.</p>`,
    faqs: [
      { question: 'Will solar panel prices keep dropping if I wait?', answer: 'Module prices have stabilized after a 2023 oversupply correction. Soft costs (permitting, labor, sales) have actually risen. Total install cost has been roughly flat for 18 months.' },
      { question: 'Are perovskite panels available for residential install today?', answer: 'A small commercial pilot exists in Europe. No US residential installer I know is offering them in 2026 at warrantied scale.' },
      { question: 'Is the 30% federal solar credit still available if I buy now?', answer: 'No. The 30% federal Residential Clean Energy Credit expired December 31, 2025 for purchased residential systems. Only lease and PPA arrangements can still capture a federal incentive, through the end of 2027. If you buy your system, plan your numbers around Nevada\'s exemptions, net metering, and rising-rate savings — not a federal credit.' },
      { question: 'What if I buy now and better panels come out in 5 years?', answer: 'You can add a second array on remaining roof space. The new panels run on a separate string — no need to replace the original system.' }
    ]
  },

  {
    slug: 'solar-on-north-facing-roof-las-vegas',
    title: 'Will Solar Work on My North-Facing Roof in Las Vegas?',
    description: 'North-facing solar in Vegas — does it work? Honest production numbers, when it pencils out, and the cases where I recommend skipping the north slope entirely.',
    publishDate: '2026-01-22',
    tags: ['Decision', 'Las Vegas', 'Roofing'],
    body: `<p><strong>Short answer: yes, but with a 22–32% production penalty vs. south-facing in Vegas, and only worth doing if you've already used your south, west, and east roof space — or if north is your only option.</strong> Las Vegas's latitude (36°N) and 300+ sun days mean even a steep north slope still generates real power. It's not a dealbreaker. It's a math problem.</p>

<h2>The physics, fast</h2>
<p>The sun in Las Vegas climbs to about 77° elevation at summer solstice noon and 30° at winter solstice noon. A north-facing slope is angled away from that arc. The steeper the pitch, the worse the penalty. A 4/12 north slope loses about 22% vs. south. A 7/12 north slope loses 30–32%. A flat roof? North vs. south doesn't matter much (more on that below).</p>

<h2>Real production data from my installs</h2>
<p>On three Henderson homes I've installed with mixed orientation, here's what the monitoring shows over a full year:</p>
<ul>
<li>South slope (5/12): 1,720 kWh per kW installed</li>
<li>West slope (5/12): 1,580 kWh per kW (8% less)</li>
<li>East slope (5/12): 1,530 kWh per kW (11% less)</li>
<li>North slope (5/12): 1,290 kWh per kW (25% less)</li>
</ul>
<p>So a 10kW system on north pulls about 12,900 kWh/year vs. 17,200 on south. That's still meaningful — it's roughly $2,100/year of avoided NV Energy bills.</p>

<h2>When I install on north slopes</h2>
<ul>
<li>The south/west/east is already filled and the homeowner needs more production</li>
<li>The north slope is the only unshaded option (mature trees on the other slopes)</li>
<li>Flat or low-pitch roof where orientation barely matters (under 2/12)</li>
<li>The homeowner has a Tesla or planning EV in next 24 months and needs the kWh</li>
</ul>

<h2>When I won't install on north</h2>
<ul>
<li>Roof is 7/12 or steeper AND south/west/east still has empty space</li>
<li>The homeowner is buying purely for ROI and the north panels stretch payback well past the rest of the array</li>
<li>HOA architectural rules cap total panel count and you'd burn slots on a low-yield slope</li>
</ul>

<h2>The flat roof exception</h2>
<p>Most newer Summerlin and Inspirada homes have flat or near-flat roofs. On a flat roof, panels are racked at a tilt — usually 10° or 15° — and almost always pointed south or west regardless of which compass direction the roof "faces." So if your house is described as "north-facing" but the roof is flat, the orientation discussion is moot. We tilt the rack however the engineering says.</p>

<h2>A real Summerlin example</h2>
<p>Last fall I quoted a home in The Cliffs. Standard 6/12 pitch, true north-facing main slope, narrow east slope, no usable south. I ran the production model: 11.2 kW on north, 2.8 kW on east, total 14 kW system. Production: 19,400 kWh/year — covered 96% of their bill. Payback lands toward the longer end of the 9–12-year cash-purchase range, versus the shorter end he'd have gotten on a south-facing twin. Worth doing? Yes. Same as a south install? No.</p>

<h2>Microinverters matter more on north</h2>
<p>String inverters are a poor match for mixed-orientation arrays because the lowest-producing panel drags the string. On any mixed or north-heavy install I default to Enphase microinverters or Tesla optimizers. Each panel produces independently. The cost premium is 6–9% of system price and it's worth it.</p>

<h2>What to ask installers</h2>
<ul>
<li>Show me the kWh/year production model split by slope</li>
<li>What's the payback on the north slope panels alone?</li>
<li>Are you using microinverters or string? (For mixed orientation, microinverters.)</li>
<li>What happens to my net metering credit during winter low-production months?</li>
</ul>

<h2>Common mistakes</h2>
<p>Salespeople "balancing" the array by spreading panels evenly across all four slopes when 80% of the production should sit on south/west. Or skipping a north slope entirely when there's $1,800/year of generation sitting there for the taking. Both happen. Run the actual production model, not the salesperson's intuition.</p>

<h2>Bottom line</h2>
<p>North-facing solar in Vegas works — at a 22–32% penalty. It makes sense when it's additive to other slopes, when it's your only unshaded space, or when your roof is flat. It rarely makes sense as a primary location when better roof exists. <a href="/#get-quote">Get a free shade and orientation analysis</a> and I'll show you the per-slope numbers before you commit. More on Las Vegas orientations in <a href="/solar-las-vegas">my Vegas solar guide</a>.</p>

<p>For background on residential solar performance modeling, the <a href="https://www.energy.gov/eere/solar" rel="noopener">DOE solar basics</a> page is solid. <a href="https://www.nrel.gov/pv/module-reliability.html" rel="noopener">NREL's module reliability work</a> shows that orientation has no effect on long-term degradation — north panels last as long as south.</p>`,
    faqs: [
      { question: 'Is north-facing solar a complete waste in Las Vegas?', answer: 'No. You lose 22-32% production vs. south-facing, but Vegas sun is so abundant that even north slopes pencil out when other slopes are full or shaded.' },
      { question: 'Will a north-facing system still net-meter to zero?', answer: 'Often yes, if the system is sized correctly to compensate for the orientation penalty. Expect 25-35% more panels than a south-facing equivalent.' },
      { question: 'Should I clear trees from my south side instead?', answer: 'Sometimes. I run a tree-removal vs. north-install cost comparison. If trees are mature and on a neighbor lot, north usually wins.' },
      { question: 'Do panels degrade faster on north slopes?', answer: 'No. Heat and UV cause degradation, and north slopes get less of both. North panels often outlive south panels by 1-2 years in Vegas.' }
    ]
  },

  {
    slug: 'solar-with-old-roof-when-to-replace',
    title: 'Can I Add Solar to a Home with an Old Roof?',
    description: 'Got an aging roof and thinking about solar? Here is when to replace first, when to install over an old roof, and the math behind both calls.',
    publishDate: '2026-02-05',
    tags: ['Decision', 'Roofing', 'Las Vegas'],
    body: `<p><strong>Short answer: if your asphalt roof is under 12 years old and structurally sound, install solar over it. If it's 15+ years old, replace the roof first — pulling solar panels for a re-roof costs $2,500–$4,500 and adds weeks of downtime. Tile and metal roofs are different — those usually outlast the panels.</strong></p>

<h2>The roof-life-vs-panel-life problem</h2>
<p>Modern solar panels are warrantied for 25 years. Standard 3-tab asphalt shingle in Vegas heat lasts 15–20 years. Architectural asphalt: 20–25. Tile: 50+. Metal: 40–60. The math is simple: if your roof can't outlast the panels, you'll be paying to remove and reinstall the array mid-life. That's the avoidable cost.</p>

<h2>The decision matrix I use</h2>
<ul>
<li><strong>0–8 years old, asphalt:</strong> Install solar. Roof and panels age together fine.</li>
<li><strong>9–12 years asphalt:</strong> Inspect carefully. If granules are intact and no soft spots, install.</li>
<li><strong>13–17 years asphalt:</strong> Strongly recommend re-roof first. The window where it's still cheap to replace is closing.</li>
<li><strong>18+ years asphalt:</strong> Replace first. Non-negotiable on any system I install.</li>
<li><strong>Any age tile (concrete or clay):</strong> Install solar. Tile outlasts panels. Mounting hardware exists for both.</li>
<li><strong>Any age standing-seam metal:</strong> Install. Best roof type for solar — clamp-on mounts, no roof penetrations.</li>
</ul>

<h2>What re-roof + solar actually costs</h2>
<p>In Vegas, a 2,200 sq ft asphalt re-roof runs $9,000–$15,000 depending on tear-off complexity. Doing it before solar adds zero coordination cost. Doing it after solar (because the roof failed in year 14) means a $3,500–$4,500 panel removal and reinstall on top of the re-roof. Plus 2–4 weeks without your system producing.</p>

<h2>A real Henderson story</h2>
<p>I had a client in 2023, original 2002 build with a 21-year-old asphalt roof. Wanted solar fast. I told him to re-roof first. He pushed back — said the roof "looked fine." I walked the roof with him, showed him the granule loss and one soft spot near a vent. He re-roofed for $11,200, then we installed an 8.6 kW system. Total project ran 5 weeks. Two years later: zero issues. Had he installed first, he'd have been pulling that system in 2027 or 2028.</p>

<h2>What I check on a roof inspection</h2>
<ul>
<li>Granule loss in gutters and on the slope</li>
<li>Soft spots (deck rot under shingles)</li>
<li>Flashing around vents, chimneys, valleys</li>
<li>Underlayment age and condition where visible</li>
<li>Existing leaks or staining in the attic</li>
</ul>
<p>If anything fails, I won't install. It's not just my warranty — it's the insurance reality covered in <a href="/blog/solar-and-home-insurance-nevada">this post</a>.</p>

<h2>The "skip the inspection" scam</h2>
<p>Some installers skip the roof inspection to close the deal. Then in year 9 the roof fails, the homeowner files an insurance claim, and the carrier denies it because solar was installed over a compromised substrate. I've seen this twice. <a href="https://www.iii.org" rel="noopener">The Insurance Information Institute</a> has general guidance on roof condition affecting claims.</p>

<h2>Tile-specific notes for Vegas</h2>
<p>Most Summerlin and Henderson homes are tile. Two install styles: tile hooks (lift the tile, attach the hook to the deck) or tile replacement (swap tiles for solar tile mounts). I default to tile hooks — less invasive, no aesthetic change. Re-roofing tile every 30–50 years is the rule, so panels usually go on first and stay.</p>

<h2>What to ask installers</h2>
<ul>
<li>Will you provide a written roof condition report before quoting?</li>
<li>What's your workmanship warranty on roof penetrations? (Industry standard: 10 years.)</li>
<li>Do you have a roofer partnership for combined re-roof + solar projects?</li>
<li>If a leak develops near a panel mount in year 6, who handles it — you or the roofer?</li>
</ul>

<h2>Common mistakes</h2>
<p>Installing on a 16-year-old roof to "save money now." Picking a roofer and a solar installer separately and getting stuck in the middle when something leaks. Choosing the cheapest mounting hardware to save $400 — flashings are not where you cut costs.</p>

<h2>Bottom line</h2>
<p>Old roof + solar is fine if "old" means under 12 years on asphalt or any age tile/metal. If you're past that line, replace first. The numbers work better and the integration is cleaner. <a href="/#get-quote">Get a quote</a> — I'll inspect the roof and give you the honest "install now" or "re-roof first" answer before we discuss panels.</p>`,
    faqs: [
      { question: 'Will solar void my roof warranty?', answer: 'It can if installed by someone other than the roofer or without proper flashings. I use Quick Mount PV flashings which most roof manufacturers accept without voiding warranty — but always confirm with your specific roofer in writing.' },
      { question: 'Can I get a roof and solar combined as one project?', answer: 'Yes. I partner with two licensed roofers who coordinate the re-roof to finish 1-2 weeks before solar permitting wraps. Single-project pricing usually saves $800-1,500 vs. doing them separately.' },
      { question: 'What if my roof gets damaged in a hailstorm after solar is installed?', answer: 'Insurance covers roof and panels separately. Most carriers will pay for panel removal and reinstall as part of the roof claim. Document your install with photos before any storm season.' },
      { question: 'How much does it cost to remove panels for re-roofing?', answer: 'In Vegas, $2,500-4,500 for a 7-10 kW system depending on panel count and microinverter vs. string. That is the cost you avoid by re-roofing first.' },
      { question: 'Does an old tile roof need replacement before solar?', answer: 'Almost never. Concrete and clay tile last 50+ years. The underlayment can fail at 25-30, but solar panels do not load the underlayment. We install on tile hooks attached to rafters.' }
    ]
  },

  {
    slug: 'solar-and-home-insurance-nevada',
    title: 'Will Solar Mess Up My Home Insurance? — Nevada & California',
    description: 'How rooftop solar affects your homeowners insurance in Nevada and California — what to ask your carrier, what coverage usually changes, and red flags to avoid.',
    publishDate: '2026-02-19',
    tags: ['Decision', 'Insurance', 'Nevada', 'California'],
    body: `<p><strong>Short answer: solar usually doesn't "mess up" your insurance, but it does require a phone call to your carrier before install. Most carriers in Nevada and California either include rooftop solar under your existing dwelling coverage automatically, or require a small policy adjustment with no premium increase. The risk isn't getting dropped — it's getting under-insured because you didn't update the dwelling replacement cost.</strong></p>

<h2>The three things you need to confirm with your carrier</h2>
<ol>
<li>Does adding rooftop solar require a policy endorsement?</li>
<li>Will the system be covered under dwelling coverage (Coverage A) or other structures (Coverage B)?</li>
<li>What's the new total dwelling replacement cost, and is your Coverage A high enough?</li>
</ol>
<p>That's it. Most calls take 8 minutes. Don't skip them.</p>

<h2>Why this matters</h2>
<p>If your home replacement cost was $385,000 and you add a $22,000 solar system, your replacement cost is now $407,000. If your Coverage A is still $385,000 and the home burns down, you're $22,000 short on rebuilding the solar. That's the most common gap I see with my clients.</p>

<h2>Nevada carrier patterns I've seen</h2>
<p>Across the last 30 systems I've installed, here's what carriers have asked for:</p>
<ul>
<li><strong>Major national carriers (State Farm, Allstate, USAA, Farmers):</strong> Typically include solar under dwelling coverage automatically. May require a notification or photo. Premium impact: usually nothing or under $40/year.</li>
<li><strong>Regional and lower-cost carriers:</strong> More likely to require an endorsement or a small premium increase. A few will exclude solar from wind/hail unless added separately.</li>
<li><strong>Lloyd's-backed surplus lines:</strong> Almost always require explicit notification and may re-rate.</li>
</ul>
<p>I'm not naming carriers because terms shift constantly. The pattern matters more than the brand.</p>

<h2>California specifics</h2>
<p>California's wildfire underwriting environment changes the conversation. <a href="https://www.iii.org" rel="noopener">The Insurance Information Institute</a> tracks the broader market issues. Some carriers in high-fire-risk zones in California have non-renewed policies and the FAIR Plan picked them up. The FAIR Plan covers solar under dwelling but with caps — confirm the cap matches your system value before install.</p>

<h2>What carriers actually ask about</h2>
<ul>
<li>Was it installed by a licensed contractor? (Nevada C-2 or California C-46 license)</li>
<li>Was it permitted and inspected by the local AHJ?</li>
<li>Roof-mounted or ground-mounted? (Roof is universally easier to insure.)</li>
<li>Is there a battery? (Some carriers want lithium-ion details.)</li>
</ul>
<p>A clean install with a licensed contractor and pulled permits answers all four with a yes.</p>

<h2>Battery storage triggers more questions</h2>
<p>Adding a Tesla Powerwall or Enphase battery is where carriers get particular. A few want the battery declared as separate equipment. A few exclude lithium-ion fires from coverage by default. Always disclose batteries upfront and get the lithium coverage in writing.</p>

<h2>A real Henderson example</h2>
<p>Client called State Farm before her install. Agent said "no problem, just send us the contract once it's signed." She did. They updated the dwelling replacement cost upward by $19,000 to match the solar value. Premium went up $32/year. Done. That's the typical outcome.</p>

<h2>A real Riverside example (CA)</h2>
<p>Different client, different outcome. Their carrier had non-renewed everyone in the zip code. They were on FAIR Plan. FAIR Plan covered solar but at $250K dwelling cap; the rebuild cost was $410K. We had to find a wraparound DIC (difference in conditions) policy to cover the gap. It took 3 weeks. The install still happened, but the insurance side took longer than the install.</p>

<h2>What to ask your carrier</h2>
<ul>
<li>Is rooftop solar covered under my dwelling coverage automatically?</li>
<li>Do you need an endorsement before install?</li>
<li>What documentation do you need from my installer?</li>
<li>Will my premium change?</li>
<li>What's my new dwelling replacement cost with the system added?</li>
<li>Does coverage extend to the inverter and any battery?</li>
<li>Is wind, hail, and lightning included for the panels?</li>
</ul>

<h2>Red flags from installers</h2>
<p>"Don't worry about your insurance, it's covered." Wrong answer. The right answer is "call your carrier, here's the documentation packet they'll want." If your installer can't produce a documentation packet for your insurer, that's a sign they're new to the process.</p>

<h2>Common mistakes</h2>
<p>Forgetting to update dwelling replacement cost. Assuming a battery is covered when the policy specifically excludes lithium-ion. Letting an unlicensed installer do the work — most carriers exclude unpermitted modifications.</p>

<h2>Bottom line</h2>
<p>Solar doesn't blow up your insurance. But you have a 10-minute phone call to make before install, and you need to update your dwelling coverage afterward. <a href="/#get-quote">Get a quote</a> and I'll provide the carrier documentation packet so the call with your insurer is short. More on Vegas installs at <a href="/solar-las-vegas">my Vegas page</a>; California specifics at <a href="/solar-california">my California page</a>.</p>`,
    faqs: [
      { question: 'Will my home insurance go up if I add solar?', answer: 'Usually $0-50/year for the average rooftop system. Some carriers do not change premium at all. Battery storage may add another $30-80/year.' },
      { question: 'What if my carrier does not cover solar?', answer: 'Rare in Nevada, more common in some California fire zones. You either find a different carrier, add a wraparound DIC policy, or self-insure the gap. I help clients work through this before install.' },
      { question: 'Does solar void my homeowners coverage on the rest of the house?', answer: 'No. Solar is treated as part of the dwelling. The rest of your coverage stays intact unless the install was unpermitted or by an unlicensed contractor.' },
      { question: 'Is a leased solar system covered by my insurance?', answer: 'No, the leasing company insures the equipment. But your roof and home damage from any leak or fire is still your policy. Confirm the lessor name your carrier needs on file.' },
      { question: 'Do I need separate insurance for a battery?', answer: 'Usually no — most carriers cover batteries under dwelling. A few exclude lithium-ion. Ask specifically and get the answer in writing before install.' }
    ]
  },

  {
    slug: 'take-solar-panels-with-me-when-i-move',
    title: 'Can I Take My Solar Panels with Me When I Move?',
    description: 'Thinking of moving and taking your solar with you? The honest answer on what it costs, when it makes sense, and why most people leave them behind.',
    publishDate: '2026-03-05',
    tags: ['Decision', 'Las Vegas'],
    body: `<p><strong>Short answer: technically yes, practically almost never. Removing and reinstalling a 7–10 kW solar system costs $8,000–$14,000 — about 60% of what a brand-new system costs in 2026. You also lose the original system warranty in most cases. For 99% of homeowners I work with, leaving panels behind and capitalizing the value into the sale price is the better move.</strong></p>

<h2>The math, plainly</h2>
<p>A 9 kW system costs about $25,600 installed in Vegas in 2026 (cash price, Nevada sales-tax exemption applied — the 30% federal credit ended in 2025). To remove it, transport it, and reinstall on a new home: $8,000–$14,000. The panels you take have already used 3–8 years of their 25-year warranty. So you're paying ~70% of new-system cost for a system worth ~75% of new. The math doesn't work unless your moving cost is somehow free.</p>

<h2>Why moving solar is more expensive than you'd think</h2>
<ul>
<li>Removal labor: 1–2 days for a typical residential array</li>
<li>Disposal of damaged components (some panels crack on removal)</li>
<li>Roof repair on the source home (mounting hole patching, flashing replacement)</li>
<li>New permits, engineering review, and HOA approval at the destination</li>
<li>New inverter and racking — old hardware rarely fits new roof geometry</li>
<li>Reinterconnection with the new utility (NV Energy, SCE, PG&E all have separate processes)</li>
<li>Warranty void on most major panel manufacturers if removed and reinstalled</li>
</ul>

<h2>The warranty issue most people miss</h2>
<p>Most major panel manufacturers (Q Cells, REC, Maxeon, Silfab) void the 25-year product warranty when the system is removed and reinstalled at a different address. The panels still work — but if one fails in year 12, you have no warranty claim. This is the single biggest reason I tell clients not to bother.</p>

<h2>What actually happens at sale</h2>
<p>In Clark County, owned solar systems consistently appraise as a positive. Zillow data and local appraiser conversations point to recovery of 60–95% of system cost in sale price, depending on age. So if you spent $19,000 on a 5-year-old system, you're recovering roughly $12,000–$17,000 in the sale price — without paying $10,000 to move it.</p>

<h2>The leased system trap</h2>
<p>This is different. If you have a leased or PPA system, you have three choices when selling:</p>
<ol>
<li>Buy out the lease and convey to the buyer (clean transfer)</li>
<li>Transfer the lease to the buyer (assuming they qualify)</li>
<li>Have the leasing company remove the system (rare, often expensive)</li>
</ol>
<p>Leased systems are the #1 reason solar deals fall out of escrow in Las Vegas. If you're shopping solar today, owned > leased every time for resale flexibility.</p>

<h2>The two cases where moving panels makes sense</h2>
<ol>
<li><strong>The system is under 18 months old AND you're moving to your forever home AND the panel manufacturer specifically permits relocation.</strong> Rare but real. Maxeon used to be the only one I knew of with explicit relocation approval.</li>
<li><strong>You're moving to a location with no installer access (very rural, off-grid).</strong> Then the moving cost beats the no-availability cost.</li>
</ol>
<p>That's it. I've never had a client meet those criteria in 9 years.</p>

<h2>A real Summerlin story</h2>
<p>Last year a client called me 14 months after his install. He'd accepted a job in Tucson and wanted to take the panels. We ran the numbers: $11,200 to remove and reinstall, plus he'd lose the LG warranty (LG had exited residential by then anyway), plus 6 weeks of no production while we permitted in Pima County. He left them on the house, sold for $24,000 over comp, and bought a fresh 8 kW system in Tucson for about $22,800. He came out thousands ahead by leaving them behind.</p>

<h2>What to ask before you sign anything</h2>
<ul>
<li>Does the panel manufacturer's warranty survive removal and reinstall? (Get the answer in writing.)</li>
<li>What does the leasing/loan company require if I sell within 5 years?</li>
<li>What's the typical solar premium on resale in my zip code?</li>
<li>Is the system grandfathered into my current net metering tier, and does that transfer to a buyer?</li>
</ul>
<p>That last one matters in Nevada — the <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" rel="noopener">NV Energy net metering tier</a> attaches to the system at the address, and the rate locks for 20 years from interconnection. That locked rate is part of what makes solar add value at sale.</p>

<h2>For California sellers</h2>
<p>California's <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" rel="noopener">NEM 3.0 / NEM 2.0 grandfathering</a> is similar — a NEM 2.0 system at the address holds that grandfathered rate at sale. NEM 2.0 systems sell at a meaningful premium because new buyers can't get NEM 2.0 rates anymore.</p>

<h2>Common mistakes</h2>
<p>Treating panels as personal property like a fridge. They're not. They're affixed to the home, in the appraisal, and tied to the address-bound utility agreement. Pulling them is rarely worth it.</p>

<h2>Bottom line</h2>
<p>You can take your panels. You almost never should. Capitalize the value into your sale price and buy fresh at the new home — you'll come out ahead in 99% of scenarios. <a href="/#get-quote">Get a quote</a> for the new place when you land somewhere new.</p>`,
    faqs: [
      { question: 'How much does it cost to move a solar system?', answer: 'In Vegas, $8,000-14,000 for a 7-10 kW system, plus permitting at the new address. The cost rarely beats just buying new.' },
      { question: 'Does my warranty transfer if I move panels?', answer: 'Most manufacturer warranties void on relocation. Some installers honor the workmanship warranty; almost none of the panel makers do. Confirm with your specific brand before counting on it.' },
      { question: 'Can I sell my panels separately from my house?', answer: 'Legally yes if owned outright, but practically the buyer of your house will discount their offer by more than you would get selling the panels independently. Not worth it.' },
      { question: 'What if I am moving to a rental — can I take them?', answer: 'I would not recommend installing again on a rental. Solar pays back over roughly 9-12 years for a cash purchase now that the 30% federal credit has ended; if you do not own the destination, the math fails.' }
    ]
  },

  {
    slug: 'solar-panels-vegas-hailstorm-damage',
    title: 'What Happens to Solar in a Vegas Hailstorm?',
    description: 'Vegas hailstorms vs. solar panels — what UL 61730 and IEC 61215 ratings actually mean, real damage data, and what insurance covers.',
    publishDate: '2026-03-19',
    tags: ['Decision', 'Las Vegas', 'Insurance'],
    body: `<p><strong>Short answer: modern solar panels rated to UL 61730 and IEC 61215 are tested against 1-inch hail at 50 mph, and most Vegas hail events fall well under that threshold. In 9 years of installing in Clark County, I've had two minor hail-related claims, both fully covered by homeowners insurance. Severe hail (1.5"+) can damage panels, but it'll also wreck the roof, AC condenser, and anything else exposed.</strong></p>

<h2>How often does Vegas actually get damaging hail?</h2>
<p>According to <a href="https://www.nws.noaa.gov/oh/hic/" rel="noopener">NOAA's Hydrological Information Center</a> and Storm Prediction Center records, the Las Vegas valley sees an average of 2–3 hail events per year, with most producing pea-sized to dime-sized stones (under 0.5"). Severe hail (1"+) events average roughly once every 2–3 years. Damaging hail (1.5"+) averages once every 5–8 years. So the threat exists but it's not constant.</p>

<h2>What the impact ratings actually mean</h2>
<p>Two standards apply to solar panels:</p>
<ul>
<li><strong>UL 61730:</strong> The North American safety standard. Includes a hail impact test using a 25 mm (~1 inch) ice ball at 23 m/s (~52 mph) hitting 11 specific panel locations.</li>
<li><strong>IEC 61215:</strong> The international performance standard. Same impact test parameters as UL 61730.</li>
</ul>
<p>Every reputable residential panel sold in the US passes these. So when you read "hail rated" — that's what's underneath the marketing. <a href="https://www.nrel.gov/pv/module-reliability.html" rel="noopener">NREL's module reliability program</a> is the deeper resource on actual long-term outcomes.</p>

<h2>What 1.5"+ hail does to panels</h2>
<p>Above 1 inch, things get unpredictable. Panel front glass is tempered, but a fast-moving 1.5" stone at the wrong angle can crack it. Cracked glass usually doesn't stop production immediately — modern panels keep working at degraded output until water intrusion finishes the cell. Either way, it's an insurance claim, not a panel-design failure.</p>

<h2>My actual claim history</h2>
<p>9 years, ~340 systems installed, 2 hail-related claims:</p>
<ul>
<li><strong>2021, Henderson:</strong> Hail event with 0.75" stones. One panel showed micro-cracking on visual inspection. Replaced under panel warranty (manufacturer covered transit damage criteria). No homeowner cost.</li>
<li><strong>2023, North Las Vegas:</strong> Severe storm, 1.25" hail. Three panels with visible cracking, two more with reduced output. Insurance claim, full replacement of all 5 panels plus the roof shingles around them. Homeowner paid the deductible, ~$1,500.</li>
</ul>
<p>That's it. No total system losses, no fires, no electrical hazards from hail.</p>

<h2>What I won't promise</h2>
<p>I won't say "your panels will survive any hailstorm." That's not true. A baseball-sized stone (2.75"+) — which has happened in Vegas, rarely — will damage anything on the roof. Panels included. The job of the system isn't to be invincible, it's to be repairable through insurance.</p>

<h2>How to verify your panel's hail rating</h2>
<p>Ask your installer for the panel datasheet. Look for "UL 61730" or "IEC 61215" in the certifications section. Every panel I install carries both. If the installer can't produce a datasheet, that's a problem.</p>

<h2>Insurance angle</h2>
<p>Hail damage to solar panels is treated like hail damage to your roof — covered under most standard homeowners policies. <a href="https://www.iii.org" rel="noopener">The Insurance Information Institute</a> covers the basics. Two things to confirm with your carrier:</p>
<ul>
<li>Solar is included in your dwelling coverage (see <a href="/blog/solar-and-home-insurance-nevada">my insurance post</a>)</li>
<li>You have hail/wind coverage with no high deductible exclusion</li>
</ul>
<p>Some Nevada policies have a separate, higher deductible for hail (often 1–2% of dwelling). Worth checking.</p>

<h2>Tile roof bonus protection</h2>
<p>Most Summerlin and Henderson homes are tile. Tile takes hail damage worse than metal but the panels above the tile actually shield the tile from direct strikes — meaning post-storm, the area under panels often looks better than the rest of the roof. I've seen this on three insurance inspections.</p>

<h2>What to ask installers</h2>
<ul>
<li>What's the impact rating (UL 61730 / IEC 61215) on the panel you're proposing?</li>
<li>What's the panel manufacturer's warranty position on hail damage?</li>
<li>Do you provide a documentation packet for insurance claims?</li>
<li>How do you inspect for micro-cracking after a storm event?</li>
</ul>

<h2>Common mistakes</h2>
<p>Skipping post-storm inspection. Panels can have invisible cell-level cracks that only show up as production drops 6 months later. After any 1"+ hail event, get a thermal scan or production check. Most installers will do it free for clients in their first 5 years.</p>

<h2>Bottom line</h2>
<p>Vegas hail is rarely panel-killing. Modern impact ratings handle the typical event. The rare severe storm is what insurance is for. <a href="/#get-quote">Get a quote</a> and I'll walk you through the panel datasheet and hail rating on whatever I'm proposing.</p>`,
    faqs: [
      { question: 'Will hail damage void my solar warranty?', answer: 'No. Hail is an external event, not a manufacturing defect. Insurance handles the repair under your homeowners policy. The panel warranty stays intact.' },
      { question: 'How do I know if hail damaged my panels without visible cracks?', answer: 'Check production on your monitoring app for 2 weeks after a storm. A 5%+ drop vs. forecast suggests cell-level damage. Schedule a thermal scan with your installer.' },
      { question: 'Do panels protect my roof from hail?', answer: 'Yes, partially. The roof under the panels is shielded from direct strikes. Exposed roof areas still take normal hail damage.' },
      { question: 'What is the worst hail rating I should accept?', answer: 'Insist on UL 61730 AND IEC 61215. Anything less is non-standard for residential US installs in 2026.' }
    ]
  },

  {
    slug: 'nevada-hoa-solar-rights-nrs-278',
    title: 'Nevada HOA Solar Rights — Your Protections Under NRS 278.0208',
    description: 'Your HOA cannot ban rooftop solar in Nevada. NRS 278.0208 explained, what HOAs can and cannot regulate, and how I get approvals through every time.',
    publishDate: '2026-04-02',
    tags: ['Decision', 'Nevada', 'HOA'],
    body: `<p><strong>Short answer: Nevada law (NRS 278.0208) prohibits HOAs from banning rooftop solar. They can impose "reasonable" aesthetic restrictions on placement and appearance, but they cannot prevent installation outright or impose conditions that meaningfully reduce system performance. In 9 years of Vegas installs, I've cleared every HOA approval I've submitted, including in tough Summerlin and Anthem boards.</strong></p>

<h2>What NRS 278.0208 actually says</h2>
<p>The statute (full text at <a href="https://www.leg.state.nv.us/NRS/NRS-278.html#NRS278Sec0208" rel="noopener">leg.state.nv.us/NRS/NRS-278.html</a>) prohibits any "ordinance, regulation, or covenant" that "unreasonably restricts" the use of a system for renewable energy. It defines "unreasonably restricts" to include any restriction that:</p>
<ul>
<li>Significantly increases the cost of the system</li>
<li>Significantly decreases the efficiency or performance of the system</li>
</ul>
<p>That's the core. HOAs can have rules, but the rules cannot meaningfully hurt cost or performance.</p>

<h2>What HOAs CAN regulate</h2>
<ul>
<li>Where panels go on the roof, as long as the alternative location doesn't reduce production by more than ~10%</li>
<li>Color of conduit, junction boxes, and racking (often required to match roof color)</li>
<li>Routing of conduit (often required behind the roofline, not through stucco)</li>
<li>Architectural review submissions and timelines</li>
</ul>

<h2>What HOAs CANNOT do</h2>
<ul>
<li>Ban rooftop solar outright</li>
<li>Require panels only on the back-facing slope when that slope is north (significant performance loss)</li>
<li>Charge approval fees that materially exceed processing costs</li>
<li>Indefinitely delay approvals (most CC&Rs require response in 30–60 days)</li>
<li>Require frosted, painted, or "stealth" panels that aren't commercially available</li>
</ul>

<h2>The approval pattern that works</h2>
<p>On my last 30 HOA submissions in Summerlin, Anthem, Inspirada, and Lake Las Vegas, here's the workflow:</p>
<ol>
<li>Pull the CC&Rs and architectural guidelines (always available from HOA management)</li>
<li>Design the system to comply with reasonable aesthetic rules — black-on-black panels, conduit routed behind the gable, junction box matched to roof color</li>
<li>Submit application with engineering drawings, panel layout, and elevation renderings</li>
<li>Include a one-page citation of NRS 278.0208 in the cover letter — not aggressive, just informational</li>
<li>Respond fast to any clarification requests</li>
</ol>
<p>Average approval time on my installs: 16 days. Slowest: 47 days (Anthem Country Club). Fastest: 6 days (Inspirada).</p>

<h2>Real Summerlin example</h2>
<p>Client in The Ridges, 2024. Initial submission was rejected because the board wanted panels only on the back (north) slope. I responded with: (a) a production model showing 31% performance loss on north-only vs. proposed south-and-west, (b) the NRS 278.0208 citation defining that loss as "unreasonable," and (c) an alternative layout with conduit fully concealed behind the parapet. Approved at the next board meeting.</p>

<h2>What I do NOT advise</h2>
<p>I don't advise homeowners to sue their HOA. Litigation is slow, expensive, and damages community relationships. The statute is strong enough that most boards back down once they see a proper submission with the citation. I've never had to escalate beyond a written response. If you do hit a wall, call a real estate attorney — don't take legal advice from a solar installer.</p>

<h2>The "stealth" panel myth</h2>
<p>Some HOAs ask for "invisible" or "frosted" panels that don't exist commercially. The right response is a polite "those aren't manufactured at residential scale; here are the all-black options that are standard for HOA compliance" and a datasheet showing the panel. That usually closes the conversation.</p>

<h2>What to ask your HOA upfront</h2>
<ul>
<li>What's your approval timeline once you have a complete submission?</li>
<li>Are there preferred or required panel colors?</li>
<li>What conduit routing is required?</li>
<li>Do you require an in-person board meeting or can the architectural committee approve?</li>
<li>Is there a fee, and what does it cover?</li>
</ul>

<h2>Common mistakes</h2>
<p>Submitting a generic "we're putting solar on the house" application without engineering drawings — guaranteed rejection. Skipping the architectural review entirely and assuming NRS 278 protects you (it does, but the HOA can fine you for non-submission separately). Hiring an installer who doesn't have a system for HOA submissions.</p>

<h2>What to ask installers</h2>
<ul>
<li>Have you submitted to my specific HOA before? What was the outcome?</li>
<li>Do you handle the HOA application or do I?</li>
<li>What does your application packet include?</li>
<li>If the HOA rejects, what's your process to revise and resubmit?</li>
</ul>

<h2>Bottom line</h2>
<p>Your HOA cannot stop you from going solar in Nevada. They can shape what it looks like, within reason. A proper submission with engineering drawings, an aesthetic-compliant design, and a citation of NRS 278.0208 gets approved. <a href="/#get-quote">Get a quote</a> and I'll handle the HOA submission for your community. More on Vegas-area HOA work at <a href="/solar-summerlin">my Summerlin page</a>.</p>`,
    faqs: [
      { question: 'Can my HOA fine me for installing solar without approval?', answer: 'Yes, even though they cannot ban it. Always submit through architectural review. NRS 278.0208 protects the install; it does not exempt you from the HOA process.' },
      { question: 'What if my HOA still says no after I cite NRS 278.0208?', answer: 'Request a written denial with specific reasons. Most boards back down at this stage. If they do not, consult a real estate attorney — the statute gives you strong standing.' },
      { question: 'How long does HOA approval typically take in Vegas?', answer: 'On my installs, average is 16 days. Faster communities (Inspirada) under 10 days. Slower country club boards (Anthem, The Ridges) up to 6 weeks.' },
      { question: 'Can the HOA require panels only on the back of my house?', answer: 'Only if the back slope produces within ~10% of the optimal slope. If the back is north-facing in Vegas, that requirement violates NRS 278.0208.' },
      { question: 'Do I need a lawyer to handle HOA approval?', answer: 'Almost never. A complete submission packet with engineering drawings and the statute citation handles 95%+ of cases. I have never needed legal escalation in 9 years.' }
    ]
  },

  {
    slug: 'california-solar-rights-act-civil-code-714',
    title: 'The California Solar Rights Act — What Civil Code 714 Means for You',
    description: 'California Civil Code 714 protects your right to install rooftop solar even when your HOA objects. What is protected, what is not, and how the approval process works.',
    publishDate: '2026-05-08',
    tags: ['Decision', 'California', 'HOA'],
    body: `<p><strong>Short answer: California Civil Code 714 (the Solar Rights Act) makes any HOA covenant restricting rooftop solar void and unenforceable, with limited exceptions for "reasonable" aesthetic conditions that don't significantly increase cost or decrease performance. In practice, every HOA submission I've handled in California has been approved when the install is properly engineered and the application cites the statute.</strong></p>

<h2>What Civil Code 714 actually says</h2>
<p>Full statute at <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=714" rel="noopener">leginfo.legislature.ca.gov</a>. The key language:</p>
<ul>
<li>Any covenant or restriction that "effectively prohibits or restricts the installation or use of a solar energy system" is void and unenforceable.</li>
<li>"Reasonable restrictions" are allowed — but defined as restrictions that don't significantly increase cost or decrease performance.</li>
<li>For solar electric (PV) systems, "significantly" means more than $1,000 in cost or more than 10% in performance loss.</li>
</ul>
<p>So 10% is the bright line in California — clearer than Nevada's "significantly." That helps in disputes.</p>

<h2>What HOAs can require</h2>
<ul>
<li>All-black or panel color matching where commercially available</li>
<li>Conduit color and routing</li>
<li>Specific mounting hardware that doesn't reduce performance</li>
<li>Architectural review with a 60-day approval window (statutory cap)</li>
</ul>

<h2>What HOAs cannot do</h2>
<ul>
<li>Reject the system outright</li>
<li>Require placement that costs more than $1,000 or reduces output more than 10%</li>
<li>Take longer than 60 days from a complete submission to approve or deny</li>
<li>Require panels not commercially available (frosted, invisible, custom-fab)</li>
<li>Charge approval fees beyond reasonable processing costs</li>
</ul>

<h2>The 60-day rule</h2>
<p>This is the California-specific weapon homeowners often miss. Under Civil Code 714.1 and related provisions, an HOA that fails to approve or deny within 45 days of a complete application is deemed to have approved it (specific timelines vary by association documents and recent amendments — confirm with current statute). I've never had to invoke this, but it shapes board behavior.</p>

<h2>What HOAs in California typically focus on</h2>
<p>Across Riverside, San Bernardino, and Los Angeles County submissions I've worked on, the dominant requests are:</p>
<ul>
<li>All-black panels (standard on every system I install)</li>
<li>Black or matched-color racking</li>
<li>Conduit run inside the attic where structurally possible, or behind parapet walls</li>
<li>Junction box concealed or color-matched to roof</li>
<li>No ground-mount visible from the street</li>
</ul>
<p>None of these meaningfully affect production. We design for them up front.</p>

<h2>Real Riverside example</h2>
<p>Client in a 2018-built community, board initially rejected because they wanted panels only on the rear (east-facing) slope to "preserve curb appeal." East would have been an 11% production loss vs. the proposed south-and-east split. I submitted: (a) the production model showing the 11% loss, (b) the Civil Code 714 citation defining that as significant, and (c) a revised layout with all conduit routed through the attic. Approved 22 days later.</p>

<h2>What I do NOT advise</h2>
<p>Same as Nevada — don't sue your HOA as a first move. The statute gives you leverage; use it through proper submission and citation. Litigation is slow, expensive, and damages relationships. If you actually hit a wall, get a California real estate attorney, not advice from your solar installer.</p>

<h2>NEM 3.0 wrinkle</h2>
<p>California's <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" rel="noopener">NEM 3.0</a> changed the export economics. The Solar Rights Act protections are unchanged, but the financial case for solar without battery is weaker. HOA approval processes often haven't caught up — some boards still ask "why are you doing this?" The statute doesn't require you to justify the economics.</p>

<h2>Federal credit has ended for owned systems</h2>
<p>One change to plan around: the <a href="https://www.irs.gov/credits-deductions/residential-clean-energy-credit" rel="noopener">30% federal Residential Clean Energy Credit</a> expired December 31, 2025 for systems you buy — in California the same as everywhere else. A lease or PPA can still capture a federal incentive through the end of 2027. California's own programs are unchanged: SGIP rebates for storage and NEM 3.0 net billing still apply. So the California incentive picture is mostly intact; it's only the federal credit on purchased systems that's gone.</p>

<h2>What to ask your HOA upfront</h2>
<ul>
<li>What's your approval timeline once you have a complete submission?</li>
<li>What constitutes a "complete" submission for solar?</li>
<li>Is there an architectural review committee or full board approval required?</li>
<li>What aesthetic requirements apply to panels, conduit, and inverters?</li>
</ul>

<h2>What to ask installers</h2>
<ul>
<li>Have you handled approvals in this specific HOA before?</li>
<li>Does your application packet include engineering drawings and a Civil Code 714 cover letter?</li>
<li>If the HOA delays past 60 days, what's your escalation process?</li>
<li>Do you handle architectural review meetings or do I?</li>
</ul>

<h2>Common mistakes</h2>
<p>Submitting incomplete applications and restarting the 60-day clock. Not citing Civil Code 714 in the cover letter (it sets the tone). Designing the system without consulting the CC&Rs first — sometimes a small layout change avoids the entire fight.</p>

<h2>Bottom line</h2>
<p>California's Solar Rights Act is one of the strongest in the country. Your HOA cannot block your install; they can only shape its appearance within narrow limits. A clean submission with engineering drawings and a Civil Code 714 reference clears almost every board. <a href="/#get-quote">Get a California quote</a> and I'll handle the HOA process. More on California-specific work at <a href="/solar-california">my California page</a>.</p>`,
    faqs: [
      { question: 'Can my California HOA reject solar based on aesthetics alone?', answer: 'Only if the aesthetic requirement does not increase cost more than $1,000 or reduce performance more than 10%. Pure "we do not like the look" is not a valid basis under Civil Code 714.' },
      { question: 'What if my HOA delays past 60 days?', answer: 'Document the date of complete submission. Many CA HOAs have deemed-approved provisions for delays. Confirm with current statute and your governing documents — and consult a California real estate attorney before construction if approval is silent.' },
      { question: 'Does Civil Code 714 cover battery storage?', answer: 'The statute focuses on solar energy systems. Battery-only installations are less clearly protected. Pair the battery with a solar array and it falls under the statute.' },
      { question: 'Can I use Civil Code 714 to skip the HOA application?', answer: 'No. The statute protects the system; it does not exempt you from the architectural review process. Skipping the application opens you to fines that the statute does not cover.' },
      { question: 'Does NEM 3.0 affect HOA solar rights?', answer: 'No. NEM 3.0 changed the economics, not the legal right to install. Civil Code 714 protections are unchanged.' }
    ]
  }
];
