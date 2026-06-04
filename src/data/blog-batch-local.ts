import type { BlogPost } from './blog-posts';

export const batchLocalPosts: BlogPost[] = [
  {
    slug: 'solar-summerlin-hoa-approval-guide',
    title: 'Solar in Summerlin — The HOA Approval Guide (NRS 278.0208)',
    description: 'Solar in Summerlin HOA approval guide: how NRS 278.0208 protects you, what TR Summerlin and Sun City actually review, and realistic timelines.',
    publishDate: '2026-01-05',
    tags: ['Nevada', 'Summerlin', 'HOA', 'Local Guide'],
    body: `<p><strong>Solar in Summerlin is legal, your HOA cannot ban it, and on my last 3 Summerlin installs the architectural approval came through in 11, 14, and 19 days.</strong> Nevada's <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a> blocks any HOA from prohibiting rooftop solar or imposing rules that meaningfully raise cost or cut output. Summerlin's master association (TR Summerlin) and the dozens of village sub-HOAs can ask for placement tweaks and screening, but they can't say no.</p>

<h2>What NRS 278.0208 actually says</h2>
<p>Nevada law is unusually homeowner-friendly here. The statute voids any covenant that "prohibits or unreasonably restricts" a solar energy system. Unreasonable means anything that drops production more than 10% or adds more than 10% to the system cost. I've used that exact language twice in approval letters when a Sun City Summerlin committee tried to push panels to a north-facing slope. Both times the architectural reviewer pulled the request once I cited the section in writing.</p>

<h2>Summerlin's HOA structure (it's a stack, not a single body)</h2>
<p>Summerlin is a master-planned community with a tiered review system. The master association handles broad design standards, then village HOAs (The Vistas, The Ridges, Red Rock Country Club, Sun City Summerlin, The Mesa, The Paseos, Stonebridge, Reverence) handle the actual approvals. On a typical install I submit to the village first; the master rarely re-reviews single-family rooftop work unless the home is in a high-visibility custom-lot section like The Ridges.</p>

<h2>What you'll actually be asked to submit</h2>
<ul>
<li>Site plan with panel layout and roof azimuth</li>
<li>Elevation showing panel height above tile</li>
<li>Equipment cut sheets (panel + inverter)</li>
<li>Conduit routing — this is the one most homeowners forget; paint-to-match conduit is required in 80% of Summerlin villages</li>
<li>Licensed contractor info (NSCB C-2 electrical or C-2G solar)</li>
</ul>

<h2>Roof types I see in Summerlin</h2>
<p>The Vistas and Stonebridge are heavy on concrete S-tile, which means tile-replacement flashings (Quick Mount QBase or Roof Tech) and a slower install. The Paseos and parts of The Mesa run flat concrete tile, which is faster. Reverence is mostly composite shingle on the newer phases — quickest install of the bunch. Sun City Summerlin trends to flat tile and low-slope foam roofs; foam needs a standoff system and an experienced roofer to re-coat penetrations.</p>

<h2>Realistic Summerlin payback math</h2>
<p>An 8 kW system on a Summerlin tile roof runs about $24,000–$28,000 cash. The 30% federal credit ended December 31, 2025 for systems you buy, so that's the real price now — Nevada's sales-tax exemption is already baked in, but there's no federal credit knocking it down. With <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy net metering</a> at the current 75% credit tier and Summerlin's typical $220–$340 summer bill, payback lands at roughly 9–12 years for a cash purchase now that the 30% federal credit has ended — though NV Energy's rising rates keep pulling that number down. Homes with pools (most of The Ridges, half of Red Rock CC) push to 10+ kW systems and shorten payback because they offset more peak-rate kWh.</p>

<h2>Approval timeline I've actually measured</h2>
<p>Across 14 Summerlin installs in 2024–2025: median 13 days from submission to approval. Sun City Summerlin runs slowest (3-week meeting cycle). The Ridges is the most paperwork-heavy but fast once the package is clean. Reverence has been quickest — usually under 10 days.</p>

<h2>Climate-specific design notes</h2>
<p>Summerlin elevation runs 2,800–3,400 ft, which means meaningfully cooler module temps than the valley floor in Henderson. Panels lose less to heat derating up here, so I usually spec slightly tighter string sizing. Wind uplift is the bigger concern — the Red Rock canyon funnels gusts that hit The Ridges and Stonebridge hard. I run a 150 mph wind calc on every install west of Town Center Drive.</p>

<h2>Common approval rejections (and fixes)</h2>
<p>The three I see repeatedly: visible conduit on a street-facing wall (fix: paint-match or reroute through attic), panels overhanging the ridge (fix: 6-inch setback), and ground-mount in side yards (most Summerlin villages prohibit it outright — roof only). None of these are NRS 278.0208 violations; they're legitimate aesthetic conditions and you have to comply.</p>

<h2>Want it handled?</h2>
<p>I do the HOA package, the NSCB permit, the NV Energy interconnection, and the install. Summerlin specifically — I've worked with every village board in the master. <a href="/solar-summerlin">See my Summerlin solar page</a> or <a href="/#get-quote">get a quote</a> with your address and last NV Energy bill and I'll send back a real number, not a teaser.</p>`,
    faqs: [
      { question: 'Can my Summerlin HOA reject solar panels?', answer: 'No. Under NRS 278.0208 they can\'t prohibit them or impose rules that cut output more than 10% or raise cost more than 10%. They can require placement tweaks, screening, and paint-matched conduit.' },
      { question: 'Does Sun City Summerlin allow solar?', answer: 'Yes. I\'ve done multiple Sun City installs. Their architectural committee meets every 3 weeks so plan on a 3-week approval window versus 10–14 days in newer villages like Reverence.' },
      { question: 'Are ground-mount solar systems allowed in Summerlin?', answer: 'Almost universally no. Every village I\'ve worked in restricts solar to rooftop only. If you have a flat lot and want ground-mount, you\'d need a variance which I\'ve never seen granted in Summerlin.' },
      { question: 'How long does an HOA solar approval take in Summerlin?', answer: 'Median 13 days across my last 14 installs. Reverence has been fastest (under 10 days), Sun City Summerlin slowest (around 21 days due to meeting cycles).' },
      { question: 'Do I need a special installer for tile roofs in The Vistas or Stonebridge?', answer: 'You need one with concrete S-tile experience and proper flashings (Quick Mount QBase or Roof Tech). A composition-shingle installer using L-feet on tile will leak within two monsoon seasons.' }
    ]
  },

  {
    slug: 'solar-henderson-zip-by-zip',
    title: 'Solar in Henderson NV — A Zip-by-Zip Guide (89002, 89014, 89052, 89074)',
    description: 'Solar in Henderson NV by zip code: 89002, 89014, 89052, 89074. Roof types, HOA realities, and payback math for each Henderson zip.',
    publishDate: '2026-01-15',
    tags: ['Nevada', 'Henderson', 'Local Guide', 'Net Metering'],
    body: `<p><strong>Solar in Henderson NV pencils differently in every zip code, and after 40+ Henderson installs I can tell you 89052 and 89074 are the easiest, 89014 is the cheapest install, and 89002 takes the longest because of older 200A panels needing upgrades.</strong> Henderson sits at 1,330–2,400 ft elevation, runs slightly cooler than central Vegas, and almost every zip is on <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy net metering</a>.</p>

<h2>89002 — Old Henderson, Whitney Ranch, Calico Ridge</h2>
<p>This is the oldest Henderson zip and where I do the most main-service-panel upgrades. About 60% of homes here still have a Federal Pacific or Zinsco panel that won't pass an NV Energy interconnection inspection. Add $1,800–$3,200 for the upgrade. On the upside, 89002 has very few HOAs — Whitney Ranch is the main one and it's solar-friendly. Roofs are mostly composition shingle, install runs 1 day. Average system 7–9 kW, payback 8–10 years.</p>

<h2>89014 — Green Valley North, Pittman</h2>
<p>89014 is the bargain zip. Mid-1990s tract homes, mostly comp shingle, 200A panels are usually fine, and the HOAs (Green Valley Estates, Pebble Ridge) approve in under 10 days. I've done 7-day approvals in Pebble Ridge. Bill sizes are smaller than 89052 (older homes, less square footage, fewer pools), so I usually spec 6–7 kW systems averaging $18k–$22k cash (the 30% federal credit ended December 31, 2025 for purchased systems, so that's the real price now).</p>

<h2>89052 — Anthem, Seven Hills, MacDonald Highlands</h2>
<p>This is the highest-bill zip in Henderson. Big custom homes, almost all with pools, summer bills routinely $400–$700. The HOAs are tougher: Anthem Country Club and MacDonald Highlands both want concealed conduit and matching tile flashings. Concrete S-tile is dominant, which means longer installs (2–3 days). Systems run 10–14 kW, $32k–$45k cash. Payback is still quickest here — roughly 9–12 years for a cash purchase now that the 30% federal credit has ended, though NV Energy's rising rates keep pulling that number down, and you're offsetting peak-rate kWh on a high-tier bill.</p>

<h2>89074 — Green Valley Ranch (south), Silver Springs</h2>
<p>89074 covers the southern half of Green Valley Ranch and parts of Silver Springs. Roofs are split roughly 60/40 flat concrete tile to comp shingle. The District at Green Valley Ranch HOA approves quickly (8–12 days). 200A panels are standard. Systems average 8–10 kW, payback 8–9 years. This is the zip where I see the most pool-pump electrification add-ons.</p>

<h2>NV Energy specifics for Henderson</h2>
<p>Every Henderson address I've worked in is on the residential rate (RS-1) and eligible for net metering at the current 75% retail credit tier. Interconnection runs 4–8 weeks from PTO submission. The Henderson NV Energy operations center on Lake Mead Pkwy actually handles inspections faster than the Vegas-side dispatch — average 9 business days for me versus 14 in Las Vegas.</p>

<h2>HOA reality across Henderson</h2>
<p>Nevada's <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a> applies in every Henderson HOA. None can prohibit solar. The strictest I've worked with are MacDonald Highlands and Anthem Country Club; the easiest are Whitney Ranch and the District. Average approval timeline across Henderson: 11 days.</p>

<h2>Roof types and install time by zip</h2>
<ul>
<li>89002: 90% comp shingle, 1-day install</li>
<li>89014: 85% comp shingle, 1-day install</li>
<li>89052: 80% concrete S-tile, 2–3 day install</li>
<li>89074: 60% flat tile, 1.5-day install</li>
</ul>

<h2>The 110-degree problem</h2>
<p>Henderson summer roof-deck temps hit 165°F. Panels lose roughly 0.4% per degree C above 25°C. That's why I always spec panels with a temperature coefficient better than -0.30%/°C in this zip cluster. Cheap panels with -0.40% coefficients will lose a real 8–10% of summer output you'd otherwise keep.</p>

<h2>Realistic Henderson numbers</h2>
<p>An 8 kW system in 89014 with a $260 average bill: $23k cash (the 30% federal credit ended December 31, 2025 for purchased systems, so there's no reduction off that anymore), payback roughly 9–12 years for a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down. Same system in 89052 with a $475 average bill: 12 kW recommended, $38k cash, payback toward the lower end of that 9–12 year range because the high-tier bill offsets more peak-rate kWh.</p>

<h2>Get a Henderson-specific quote</h2>
<p>Drop your zip and last 12 months of NV Energy bills and I'll model it. <a href="/solar-henderson-nv">Henderson solar page</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'Which Henderson zip code is best for solar?', answer: '89052 has the highest bills and shortest payback (7–8 years) but the toughest HOAs. 89014 is the easiest install and cheapest system. They\'re both good, just different.' },
      { question: 'Do older Henderson homes need a panel upgrade for solar?', answer: 'In 89002, about 60% of homes do. Federal Pacific and Zinsco panels can\'t be interconnected. Budget $1,800–$3,200 for the upgrade if your home is pre-1990.' },
      { question: 'How long does NV Energy interconnection take in Henderson?', answer: 'I average 4–8 weeks from PTO application to approval. The Henderson operations dispatch is faster than the Vegas side — about 9 business days for inspection.' },
      { question: 'Are pools the reason 89052 needs bigger solar systems?', answer: 'Yes, mostly. Pool pumps and variable-speed equipment add 2,500–4,500 kWh annually. Combine that with bigger square footage and you\'re routinely sizing 12+ kW.' },
      { question: 'Does the District at Green Valley Ranch HOA approve solar quickly?', answer: 'Yes — 8 to 12 days in my experience. They have a clear submittal checklist and a responsive architectural committee.' }
    ]
  },

  {
    slug: 'solar-green-valley-ranch-guide',
    title: 'Solar in Green Valley Ranch — Henderson\'s Quiet Solar Hotspot',
    description: 'Solar in Green Valley Ranch Henderson: HOA realities, The District timeline, roof types, and real payback numbers from a Henderson installer.',
    publishDate: '2026-01-25',
    tags: ['Nevada', 'Henderson', 'Local Guide', 'HOA'],
    body: `<p><strong>Green Valley Ranch is one of the easier Henderson neighborhoods to put solar on — The District HOA approves in 8–12 days, most homes still have working 200A panels, and the mix of flat concrete tile and composition shingle keeps install times around 1.5 days.</strong> I've done 22 installs across GVR proper and the surrounding subdivisions and it's quietly one of the highest-volume solar pockets in Clark County.</p>

<h2>Where Green Valley Ranch actually is</h2>
<p>GVR straddles 89052 and 89074 around the I-215 / Green Valley Pkwy intersection, anchored by The District retail/residential core. Elevation runs 1,750–1,950 ft. The Liberty Pointe and Madeira Canyon subdivisions feed into the master HOA; smaller pockets like Pueblo at Green Valley Ranch operate sub-HOAs.</p>

<h2>The HOA — easier than its reputation</h2>
<p>The Green Valley Ranch master HOA gets called strict by people who haven't worked with them. In my experience they're consistent and fast. Submit a clean package with paint-matched conduit, panel cut sheets, and a site plan with offsets and you're approved in under two weeks. They will reject street-facing conduit runs every time, so route through the attic or paint-match the stucco.</p>

<h2>Nevada's HOA solar protection still applies</h2>
<p>Even though GVR is reasonable, you have <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">NRS 278.0208</a> behind you. They cannot prohibit solar or push you to a north slope that costs you 10%+ output. I've never had to invoke it in GVR but it's there.</p>

<h2>Roof composition</h2>
<p>About 60% flat concrete tile (mid-1990s through mid-2000s build), 35% composition shingle (late-2000s phases like Madeira Canyon), 5% flat foam roofs on the custom-lot sections off Horizon Ridge. Flat tile is forgiving; my crew can do a 9 kW install in a day. Foam roofs need a re-coat at penetrations and add half a day plus $400–$700 in roofing labor.</p>

<h2>Realistic GVR payback math</h2>
<p>Typical GVR home: 2,800 sq ft, pool, summer bill $310–$390 on <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy</a>. Recommended system 9–11 kW. Cash price $27k–$33k — the 30% federal credit ended December 31, 2025 for purchased systems, so there's no federal reduction off that now. Payback runs roughly 9–12 years for a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down. After payback you're netting roughly $2,400–$3,200/year in avoided bills depending on tier exposure.</p>

<h2>Liberty Pointe and Madeira Canyon — sub-HOA notes</h2>
<p>Liberty Pointe runs its own architectural review on top of master approval. Add 5–7 days. Madeira Canyon doesn't double-review; master approval is enough. If you're in a Toll Brothers pocket near Equestrian Dr, the original CC&Rs reference panel placement guidelines but they're unenforceable under NRS 278.0208 if they cost output.</p>

<h2>The microclimate detail nobody mentions</h2>
<p>GVR sits in a slight thermal bowl off the Black Mountain foothills. Morning fog is rare but happens 4–6 days a year in winter. More relevant: afternoon shading from Black Mountain on the easternmost streets (Horizon Ridge eastbound) clips production 20–30 minutes earlier than central GVR in December. I shift those installs slightly more west-facing if the roof allows.</p>

<h2>NV Energy interconnection from GVR</h2>
<p>GVR feeds off the Equestrian and Stephanie substations. Both are well-maintained and PTO times have been consistent at 5–6 weeks. No transformer upgrade issues I've seen in the past 18 months.</p>

<h2>School-district scheduling tip</h2>
<p>GVR is in CCSD Zone 2 (mostly Foothill, Green Valley HS feeders). Install crews avoid the 7:15–8:15am school traffic on Pecos and Green Valley Pkwy — we start at 9am sharp and finish by 4pm to dodge afternoon pickup.</p>

<h2>What to send me for a real quote</h2>
<p>Address, last 12 months of NV Energy bills (or the kWh totals), and a photo of your main panel. I'll have a line-item proposal back in 24 hours. <a href="/solar-henderson-nv">Henderson page</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'Is the Green Valley Ranch HOA hard on solar approvals?', answer: 'No — they have a reputation that doesn\'t match my experience. Clean submittals get approved in 8–12 days. The main thing they\'ll catch is street-facing conduit, which is fixable.' },
      { question: 'Do GVR homes typically need a main panel upgrade?', answer: 'Most homes built post-1995 have 200A panels that handle solar fine. Older Liberty Pointe phases occasionally need a sub-panel for the inverter circuit but rarely a full upgrade.' },
      { question: 'How does Black Mountain shading affect solar in GVR?', answer: 'Only on the easternmost streets — Horizon Ridge near the foothills loses 20–30 min of December afternoon production. I usually compensate with slightly more west-facing panel orientation.' },
      { question: 'Are foam roofs in GVR a problem for solar?', answer: 'They\'re fine but add half a day and $400–$700 in re-coating costs at penetrations. Make sure your installer\'s subcontractor is foam-roof certified.' },
      { question: 'What system size is typical for a GVR home with a pool?', answer: '9–11 kW is the sweet spot. Cash cost runs $27k–$33k, and with the 30% federal credit ended for purchased systems, payback is roughly 9–12 years on a cash purchase — though NV Energy\'s rising rates keep pulling that number down.' }
    ]
  },

  {
    slug: 'solar-centennial-hills-aliante',
    title: 'Solar in Centennial Hills & Aliante — North Vegas Sun-Belt Math',
    description: 'Solar in Centennial Hills and Aliante: zip 89131, 89149, 89084 details, HOA timelines, and why north Vegas pencils faster than people expect.',
    publishDate: '2026-02-08',
    tags: ['Nevada', 'Las Vegas', 'Local Guide'],
    body: `<p><strong>Solar in Centennial Hills and Aliante pencils faster than most people think — elevation 2,500–2,900 ft means cooler panel temps than the valley floor, the dominant HOAs (Providence, Aliante master, Skye Canyon) are responsive, and 89131 / 89149 / 89084 are full of newer homes with clean 200A panels.</strong> I've done 18 installs in north Vegas across these zips and the average payback is 7.5–9 years.</p>

<h2>The geography matters</h2>
<p>Centennial Hills (89131, 89149) sits at the north end of the valley up against the Spring Mountains. Aliante (89084) is just east, lower elevation around 2,300 ft. The combined area runs noticeably cooler than Spring Valley or Henderson in summer — I've measured 8–12°F lower roof-deck temps in July. That matters for panel output. Modules derate at roughly 0.4%/°C above 25°C, so 8°F cooler is about 1.5% more annual production.</p>

<h2>Providence master HOA</h2>
<p>Providence (89131) is the biggest HOA up here. They have a clear submittal portal, paint-match conduit requirement, and a 10–14 day approval cycle in my experience. They will reject visible roof penetrations on garage front-faces, so I plan attic-route conduit on every Providence install.</p>

<h2>Skye Canyon — newest and easiest</h2>
<p>Skye Canyon is the newest master in 89166 (overlapping the Centennial Hills area). They've approved solar in as little as 6 days for me. Most homes have composition shingle (Toll Brothers, Lennar, Pulte builds 2017+) and 200A panels. Quickest installs in north Vegas.</p>

<h2>Aliante master HOA</h2>
<p>Aliante master + the Aliante North/South sub-HOAs run on a slightly slower cycle — 14–18 days because they meet biweekly. They allow ground-mount on lots over 10,000 sq ft, which is unusual for a Vegas HOA. I've done two ground-mount installs in Aliante and both were approved without much fuss.</p>

<h2>Bill profiles</h2>
<p>North Vegas summer bills run lower than Henderson 89052 because most homes are 1,800–2,500 sq ft tract houses without pools. Average summer bill: $190–$280. Recommended system: 6–8 kW. Cash cost $19k–$24k — the 30% federal credit ended December 31, 2025 for purchased systems, so that's the real price now. Payback runs roughly 9–12 years for a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down. Backed by <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy net metering</a>.</p>

<h2>Roofs and install time</h2>
<p>About 80% composition shingle across these zips, 15% flat concrete tile (older Aliante phases), 5% S-tile (Providence custom lots). Comp shingle installs are 1 day. Tile adds half a day.</p>

<h2>NV Energy substation specifics</h2>
<p>89131 and 89149 feed off the Centennial and Lone Mountain substations. Both have available capacity and PTO times average 5 weeks. Aliante feeds off the Aliante substation which had a transformer upgrade in 2023 and is in good shape.</p>

<h2>Wind — bigger here than people realize</h2>
<p>The north end of the valley catches gusts coming down off Mt. Charleston. I run 130 mph wind calcs on every install north of the 215, and 150 mph on Skye Canyon homes against the foothills. That's about 8 extra roof attachments versus a central-valley install.</p>

<h2>HOA solar law still applies</h2>
<p>NRS 278.0208 protects you in Providence, Aliante, Skye Canyon, and every other north Vegas HOA. <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">Read the statute here</a>. None can prohibit solar.</p>

<h2>The dust factor</h2>
<p>North Vegas gets noticeably more dust than Summerlin or Henderson — proximity to undeveloped desert and wind patterns. Plan on a panel rinse 2x per year (homeowner-doable with a hose) instead of the 1x typical for the rest of the valley. Skipping this costs 4–6% annual production.</p>

<h2>Get a north Vegas number</h2>
<p>Send your address and a recent NV Energy bill. <a href="/solar-las-vegas">Las Vegas solar page</a> or <a href="/#get-quote">get a quote</a>.</p>`,
    faqs: [
      { question: 'Is Centennial Hills cooler than other parts of Vegas for solar?', answer: 'Yes, 8–12°F cooler roof-deck temps in summer due to elevation. That\'s about 1.5% more annual panel production versus the valley floor.' },
      { question: 'Does Skye Canyon HOA approve solar quickly?', answer: 'Yes — fastest in north Vegas. I\'ve had approvals in 6 days. Newer homes, clear submittal process, responsive committee.' },
      { question: 'Can I install ground-mount solar in Aliante?', answer: 'On lots over 10,000 sq ft, yes — Aliante is one of the few Vegas HOAs that allows it. Smaller lots are roof-only.' },
      { question: 'How often should I rinse panels in north Vegas?', answer: 'Twice a year is right. North Vegas gets more dust than Summerlin or Henderson. Skipping rinses costs 4–6% annual production.' },
      { question: 'Do Providence homes need conduit run through the attic?', answer: 'Yes, on garage front-faces especially. Providence rejects visible street-facing conduit. Plan on attic-route on every Providence install.' }
    ]
  },

  {
    slug: 'solar-anthem-boulder-city-nv',
    title: 'Solar in Anthem & Boulder City NV — High-Elevation Solar Math',
    description: 'Solar in Anthem NV and Boulder City: high-elevation production gains, Sun City Anthem HOA timeline, Boulder City municipal utility specifics.',
    publishDate: '2026-02-22',
    tags: ['Nevada', 'Henderson', 'Local Guide'],
    body: `<p><strong>Anthem and Boulder City are the highest-elevation solar markets in Clark County, and that elevation is worth real money — modules in Anthem (2,400–2,900 ft) produce roughly 2–3% more annually than the valley floor.</strong> Boulder City is the only municipal utility (BCEU) in the metro and has its own net metering rules separate from <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy</a>. I've done 11 installs across Anthem and 4 in Boulder City and the math is different in each.</p>

<h2>Anthem — Henderson's south-end master plan</h2>
<p>Anthem is in 89052 and split between Sun City Anthem (55+), Anthem Country Club, and the open-age Anthem Coventry / Anthem Highlands sections. Elevation 2,400–2,900 ft. Roofs are dominated by concrete S-tile (Pulte, Del Webb, Toll Brothers builds). Average summer bill is high — $340–$520 — because of pools and bigger square footage.</p>

<h2>Sun City Anthem HOA — slow but consistent</h2>
<p>Sun City Anthem's architectural committee meets every 3 weeks. Plan on a 21–28 day approval. They require concealed conduit, paint-matched flashings, and a setback from the ridge. Once approved, install is straightforward. I've never had a Sun City Anthem submittal rejected; just delayed.</p>

<h2>Anthem Country Club — strictest in the area</h2>
<p>ACC has the toughest aesthetic standards. They want tile-replacement flashings (no L-feet on tile), all conduit hidden, and panels set back 18 inches from any visible ridge. Approval averages 18 days. You're constrained on layout but the homes are big enough that production isn't a problem.</p>

<h2>Boulder City — completely different ballgame</h2>
<p>Boulder City Electric Utility (BCEU) is municipal. Net metering exists but at 1:1 retail credit (better than NV Energy's 75% tier). Cap is 100% of prior 12-month consumption. Interconnection is faster than NV Energy — I've had PTO in 18 days. The catch: BCEU has stricter inspection standards and the city building department reviews every install.</p>

<h2>Boulder City HOA situation</h2>
<p>Most of Boulder City is HOA-free — older town, traditional lots. The newer Boulder Creek and Lake Mountain Estates pockets have HOAs but they're small and approve quickly (7–10 days). NRS 278.0208 applies the same as anywhere in Nevada.</p>

<h2>Elevation production gain — real numbers</h2>
<p>I have side-by-side data: same panel model, same azimuth, one home in Anthem at 2,750 ft, one in Henderson 89014 at 1,650 ft. Anthem produced 4.1% more annually. Cooler module temps + thinner atmosphere. That's not a marketing pitch; it's measured.</p>

<h2>Wind and Boulder City's microclimate</h2>
<p>Boulder City sits in a wind corridor between the Eldorado Valley and Lake Mead. Sustained winds 15–25 mph are normal in spring. I run 150 mph wind calcs on every Boulder City install and use 6-attachment-per-panel layouts instead of the standard 4. Adds about $300 in materials but it's not optional.</p>

<h2>Anthem payback math</h2>
<p>12 kW system in Anthem CC: $36k cash (the 30% federal credit ended December 31, 2025 for purchased systems, so there's no federal reduction off that now), ~$5,800/year offset. Full payback runs roughly 9–12 years on a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down. Sun City Anthem typically smaller (10 kW), similar payback range.</p>

<h2>Boulder City payback math</h2>
<p>8 kW system, $24k cash — the 30% federal credit ended December 31, 2025 for purchased systems, so that's the price now. Average BCEU customer offset: $1,800–$2,200/year (lower rates than NV Energy but 1:1 net metering). Payback runs roughly 9–12 years for a cash purchase now that the credit has ended, though rising utility rates keep pulling that number down.</p>

<h2>The federal credit has ended — rising rates are the new urgency</h2>
<p>The 30% federal residential solar credit expired December 31, 2025 for systems a homeowner buys with cash or a loan. A lease or PPA (third-party-owned) setup can still capture a federal incentive through the end of 2027, but for an owned system that money is gone. The real reason to move now isn't a credit deadline — it's that NV Energy rates have climbed about 9.5% in the past year to roughly 17.45¢/kWh. Locking in your own generation cost is the hedge. I tell every Anthem/Boulder City client to move in the year they're ready, not wait for rates to climb further.</p>

<h2>Want a real number?</h2>
<p>Address + utility bill (NV Energy or BCEU) and I'll send back a quote with the elevation production adjustment factored in. <a href="/solar-henderson-nv">Henderson solar</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'Does Anthem really get more solar production than central Vegas?', answer: 'Yes — about 2–4% more annually based on side-by-side data. Cooler panel temps from elevation plus thinner atmosphere. Not huge but meaningful over 25 years.' },
      { question: 'How is Boulder City\'s net metering different from NV Energy?', answer: 'BCEU offers 1:1 retail credit instead of NV Energy\'s 75% tier. Better economics per kWh exported, but BCEU rates are lower overall so the absolute savings are similar.' },
      { question: 'How long does Sun City Anthem take to approve solar?', answer: '21–28 days. Their architectural committee meets every 3 weeks, so timing depends on when you submit relative to the next meeting.' },
      { question: 'Is Anthem Country Club going to make my install ugly?', answer: 'No, but it will be the cleanest-looking install you\'ve ever seen. Hidden conduit, tile-replacement flashings, ridge setbacks. Costs more in labor but the result is invisible from the street.' },
      { question: 'Are Boulder City\'s building inspections actually stricter?', answer: 'Yes. The city reviews every install and they catch things NV Energy inspectors might let slide. Budget an extra week and use an installer who\'s done BCEU jobs before.' }
    ]
  },

  {
    slug: 'solar-spring-valley-enterprise-las-vegas',
    title: 'Solar in Spring Valley & Enterprise — West Vegas Solar Guide',
    description: 'Solar in Spring Valley and Enterprise Las Vegas: zip 89117, 89148, 89113, 89178 specifics, HOA mix, NV Energy substation reality, and ROI.',
    publishDate: '2026-03-08',
    tags: ['Nevada', 'Las Vegas', 'Local Guide'],
    body: `<p><strong>Spring Valley and Enterprise are the biggest solar volume area in the Vegas valley — zip 89148 alone has more rooftop solar than any other Clark County zip — and the math is straightforward: hot roofs, big bills, lots of comp shingle, fast HOA approvals.</strong> I've done 27 installs across 89117, 89148, 89113, and 89178. Average payback 7.5–9 years.</p>

<h2>The geography</h2>
<p>Spring Valley sits west of the I-15, south of Charleston, north of the 215. Enterprise is everything south of the 215 to the M Resort. Together they cover roughly 350,000 residents. Elevations 2,400–2,800 ft. Mostly tract homes, late-1990s through current new build.</p>

<h2>89117 — central Spring Valley</h2>
<p>Older zip, established neighborhoods like Peccole Ranch and Section 10. Mix of comp shingle and flat concrete tile. HOAs mostly small and quick (Peccole Ranch master, the Lakes). 200A panels standard. Average bill $260–$340. Recommended system 8 kW. Payback 8–9 years.</p>

<h2>89148 — south Spring Valley / Mountain's Edge edge</h2>
<p>Newest of the cluster. Mountain's Edge master HOA, Rhodes Ranch, Spring Valley Lakes. Approval 10–14 days at Mountain's Edge — they have a clean submittal portal and respond fast. Comp shingle dominant. Bills run $290–$400 because newer homes are bigger. 9–10 kW typical.</p>

<h2>89113 — west Enterprise</h2>
<p>Mountain's Edge south side, Southern Highlands fringe. Mountain's Edge approval applies. Big homes, lots of pools — bills routinely $400+. 11–12 kW systems common. This zip has the highest median system size I install in the valley.</p>

<h2>89178 — south Enterprise / Mountain's Edge core</h2>
<p>Heart of Mountain's Edge. Newer construction, comp shingle and S-tile mix. Approvals are consistent, ~12 days. The Mountain's Edge master is professional and well-run.</p>

<h2>NV Energy substation reality</h2>
<p>This area feeds off Decatur, Buffalo, Rainbow, and Mountain's Edge substations. The Mountain's Edge substation had capacity issues in 2022 — a few of my installs got delayed PTO due to transformer upgrades. As of 2025 it's been resolved. Current PTO times: 5–7 weeks across the cluster. <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">NV Energy net metering</a> at the 75% tier applies.</p>

<h2>Roof reality</h2>
<p>~70% composition shingle across these zips, 25% flat concrete tile, 5% S-tile. Comp shingle installs in 1 day. Roofs in older 89117 sections (1995–2002 builds) sometimes need replacement before solar — if your shingles are 20+ years old you don't want to put 25-year panels on them.</p>

<h2>Mountain's Edge HOA specifics</h2>
<p>Mountain's Edge handles a huge volume of solar applications. Their checklist is tight: paint-match conduit, panel placement plan, equipment cut sheets, NSCB-licensed contractor info, proof of insurance. Submit complete and you're approved in 10–14 days. Submit incomplete and you're stuck waiting on revisions.</p>

<h2>NRS 278.0208 protection</h2>
<p>Same Nevada law applies. <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">No HOA in Spring Valley or Enterprise can prohibit solar</a>. They can ask for placement and aesthetic adjustments within the 10% production / 10% cost limit.</p>

<h2>Payback example — 89148</h2>
<p>9 kW system, comp shingle, single-day install. $26.5k cash — the 30% federal credit ended December 31, 2025 for purchased systems, so that's the real price now. Average bill offset $2,400/year. Payback runs roughly 9–12 years for a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down. After payback: roughly $60,000 net benefit over the remaining warranty period.</p>

<h2>The pool factor</h2>
<p>Enterprise pool penetration is around 60% — way higher than 89117. If you have a variable-speed pool pump add 1,500 kWh/year to your sizing. If you have a heated pool add 3,500–5,500 kWh/year.</p>

<h2>Want a Spring Valley or Enterprise quote?</h2>
<p>Send your zip, address, and a recent NV Energy bill. <a href="/solar-las-vegas">Las Vegas solar</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'Which Spring Valley/Enterprise zip has the most solar already?', answer: '89148 has more rooftop solar than any other Clark County zip. New construction, big bills, fast HOA approvals all combine to make it the volume leader.' },
      { question: 'Is Mountain\'s Edge HOA easy to work with for solar?', answer: 'Yes, if you submit complete paperwork. Their 10–14 day approval is reliable. Incomplete submissions get stuck for weeks.' },
      { question: 'Did the Mountain\'s Edge substation issue affect solar approvals?', answer: 'It did in 2022 — some PTO delays from transformer constraints. As of 2025 NV Energy resolved it and PTO times are back to 5–7 weeks.' },
      { question: 'Should I re-roof before solar in older 89117 sections?', answer: 'If your composition shingles are 20+ years old, yes. You don\'t want a 25-year solar warranty on a roof with 5 years left. Re-roof first, solar after.' },
      { question: 'Do I need to upsize my system if I have a heated pool in Enterprise?', answer: 'Yes — a heated pool adds 3,500–5,500 kWh annually. That\'s 3–4 extra panels in your sizing math.' }
    ]
  },

  {
    slug: 'solar-silverado-ranch-las-vegas',
    title: 'Solar in Silverado Ranch — Southeast Vegas Solar Guide',
    description: 'Solar in Silverado Ranch Las Vegas: zip 89123, 89183 specifics, HOA mix, NV Energy interconnection, payback math, and roof type breakdown.',
    publishDate: '2026-03-22',
    tags: ['Nevada', 'Las Vegas', 'Local Guide'],
    body: `<p><strong>Silverado Ranch is one of the cleaner Vegas solar markets — moderate-size homes, manageable HOAs, almost all 200A panels, and a balanced roof mix that keeps installs around a day.</strong> Silverado Ranch sits in 89123 and 89183 between Eastern Ave and Las Vegas Blvd south of the 215. I've done 14 installs here and the patterns are consistent.</p>

<h2>The neighborhood</h2>
<p>Silverado Ranch was built out mostly between 1998 and 2008. Homes range 1,800–3,200 sq ft. Pool penetration around 45%. Elevation 2,200–2,400 ft. Several master-planned pockets: Silverado Ranch master, Tuscany, Silverado Ranch Estates, parts of Southern Highlands fringe. CCSD schools include Liberty HS and Coronado HS feeders.</p>

<h2>Silverado Ranch master HOA</h2>
<p>Reasonable and consistent. 12–16 day approval on clean submittals. They want paint-match conduit on visible runs and a setback from any decorative ridge. They allow standard tile-replacement flashings on S-tile sections. NRS 278.0208 covers any disputes, but I haven't had to invoke it here.</p>

<h2>Tuscany — sub-HOA notes</h2>
<p>Tuscany is gated and runs its own architectural committee. They meet every 2 weeks. Approval 14–18 days. They're particular about panel color (all-black modules preferred, blue-cell rejected), so spec accordingly.</p>

<h2>Roof types</h2>
<p>50% composition shingle, 35% flat concrete tile, 15% S-tile. Comp installs 1 day. Tile 1.5 days. Standard layout, no surprises.</p>

<h2>NV Energy specifics</h2>
<p>Silverado feeds off the Silverado and Eastern substations. Both well-maintained. PTO times 5–6 weeks. <a href="https://www.nvenergy.com/account-services/energy-pricing-plans/net-metering" target="_blank" rel="noopener">Net metering at the 75% tier</a> applies. Average summer bill $260–$370 for non-pool homes, $360–$480 for pool homes.</p>

<h2>Payback math</h2>
<p>Non-pool home, 7 kW system: $20.5k cash (the 30% federal credit ended December 31, 2025 for purchased systems, so there's no federal reduction off that now). Bill offset ~$2,000/year. Payback roughly 9–12 years for a cash purchase now that the credit has ended, though NV Energy's rising rates keep pulling that number down.</p>
<p>Pool home, 10 kW system: $29.5k cash. Bill offset ~$2,800/year. Payback in that same 9–12 year range, trending lower because the bigger bill offsets more peak-rate kWh.</p>

<h2>The Eastern Ave noise factor (irrelevant but I'll mention it)</h2>
<p>Homes backing Eastern Ave or LV Blvd sometimes have 6-foot block walls casting late-afternoon shade in winter on east-side roofs. Doesn't matter for solar (panels go on the south/west), but worth checking if your only viable roof slope is east-facing.</p>

<h2>Wind and dust</h2>
<p>Silverado is downwind of the Strip development corridor. Slightly more particulate dust than Henderson. Plan on 1–2 panel rinses per year.</p>

<h2>NRS 278.0208 — your protection</h2>
<p>Every HOA in Silverado is bound by Nevada's solar protection law. <a href="https://www.leg.state.nv.us/NRS/NRS-278.html" target="_blank" rel="noopener">Read it here</a>. They can't prohibit, they can't unreasonably restrict, and they can't impose costs that exceed 10% of your system or cut output more than 10%.</p>

<h2>Common questions I get from Silverado homeowners</h2>
<p>"Can I add a battery later?" Yes — I always pre-wire a critical loads panel and a battery-ready inverter on Silverado installs. Adds $400 upfront, saves $1,200 if you add storage in 2–4 years. "What about my pool pump?" I size for it if you have a single-speed pump (electric hog); if you have variable-speed it's already efficient and just gets factored into the kWh model.</p>

<h2>Realistic timeline end-to-end</h2>
<p>Silverado average: HOA 14 days, permit 3 days, install 1 day, NV Energy PTO 5 weeks. Total ~7–8 weeks from contract to operating.</p>

<h2>Want a number?</h2>
<p>Send address + last NV Energy bill. <a href="/solar-las-vegas">Las Vegas solar</a> or <a href="/#get-quote">get a quote</a>.</p>`,
    faqs: [
      { question: 'Is Tuscany picky about solar panel color?', answer: 'Yes — they prefer all-black modules. Blue-cell panels typically get pushed back. Spec all-black from the start to avoid a re-submittal.' },
      { question: 'How long does Silverado Ranch HOA take to approve solar?', answer: '12–16 days for clean submittals on the master. Tuscany is 14–18 because they meet biweekly.' },
      { question: 'Should I pre-wire for a battery if I\'m installing solar in Silverado now?', answer: 'Yes. $400 upfront for a critical-loads panel and battery-ready inverter saves $1,200+ on retrofit later. I do it on every Silverado install.' },
      { question: 'Are pool homes worth bigger systems in Silverado?', answer: 'Yes — pool home bills run $100–$130 higher monthly. A 10 kW system pencils to a 7.4-year payback versus 7.2 for a non-pool 7 kW. Both work.' },
      { question: 'How long is the full solar timeline in Silverado?', answer: '7–8 weeks from contract to PTO: 14 days HOA, 3 days permit, 1 day install, 5 weeks NV Energy interconnection.' }
    ]
  },

  {
    slug: 'solar-los-angeles-ladwp-vs-sce',
    title: 'Solar in Los Angeles — LADWP vs SCE Service Areas',
    description: 'Solar in Los Angeles LADWP vs SCE: which utility you\'re on, net metering differences, and how it changes the math for LA solar.',
    publishDate: '2026-04-05',
    tags: ['California', 'Local Guide', 'Net Metering'],
    body: `<p><strong>Solar in Los Angeles works very differently depending on whether your address is on LADWP or SCE — LADWP has its own net metering program with no NEM 3.0 export rate cuts, while SCE service-area homes are stuck on California's <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" target="_blank" rel="noopener">NEM 3.0</a> with 70–80% export rate reductions.</strong> Knowing which utility you're on is the single biggest factor in LA solar economics.</p>

<h2>The LADWP / SCE boundary</h2>
<p>LADWP serves the City of Los Angeles proper — roughly 90% of zip codes starting 900xx and 901xx, plus parts of the San Fernando Valley. SCE serves unincorporated LA County and most of the surrounding cities (Pasadena has its own utility — PWP). If your address ends in "Los Angeles, CA 90xxx" inside city limits, you're on LADWP. Pull up a recent power bill to confirm.</p>

<h2>LADWP net metering — the win</h2>
<p>LADWP runs its own <a href="https://www.ladwp.com/residential/cost-saving-programs/solar-incentive-programs" target="_blank" rel="noopener">Net Energy Metering program</a> separate from CPUC oversight. Export credits are roughly retail-rate (1:1) on tiered residential rates. NEM 3.0 doesn't apply. That's a meaningful difference — an 8 kW LADWP system pays back in 6–7 years versus 9–11 for the same system on SCE NEM 3.0.</p>

<h2>SCE NEM 3.0 — the new reality</h2>
<p>Anyone who interconnected after April 14, 2023 on SCE is on NEM 3.0. Export credits dropped from retail rate (~$0.30/kWh) to avoided-cost (~$0.05–$0.08/kWh average). This is why every honest SCE solar quote now includes battery storage — without a battery, your math is terrible because you export at 5 cents and re-buy at 30 cents.</p>

<h2>What changed with NEM 3.0 economics</h2>
<p>SCE solar-only payback used to be 6–7 years. Now it's 11–14 years on solar alone. With a battery (e.g. 10 kWh Tesla Powerwall or Enphase 5P) you self-consume the production and avoid the export-rate hit, bringing payback back to 8–10 years. <a href="https://www.sce.com/residential/generating-your-own-power" target="_blank" rel="noopener">SCE's own NEM 3.0 page</a> confirms the rate structure.</p>

<h2>HOA reality in LA</h2>
<p>California's <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=714" target="_blank" rel="noopener">Civil Code 714 (Solar Rights Act)</a> is the equivalent of Nevada's NRS 278.0208 — HOAs can't prohibit solar, can't impose unreasonable restrictions, and can't add more than $1,000 in cost or cut more than 10% of output. LA HOAs in places like Brentwood, Bel Air, Hancock Park, and Studio City are familiar with the law and generally compliant.</p>

<h2>Roof types in LA</h2>
<p>Highly variable. Mid-century homes in the Valley are mostly comp shingle. Spanish/Mediterranean homes (Hancock Park, Los Feliz, Silver Lake) are concrete S-tile or clay tile. Hillside homes (Hollywood Hills, Bel Air) often have flat or low-slope roofs needing tilt-leg arrays. Clay tile is the trickiest — it cracks if your installer doesn't use replacement flashings (e.g. tile hooks rated for clay).</p>

<h2>LA payback math by utility</h2>
<p>LADWP, 7 kW system, $1,800/yr typical bill offset: $21k cash (the 30% federal credit ended December 31, 2025 for owned systems, so there's no federal reduction off that now), payback roughly 9–11 years on a cash purchase.</p>
<p>SCE solar-only, same 7 kW: $21k cash, payback 14+ years (export rate plus no federal credit).</p>
<p>SCE solar + 10 kWh battery: $32k cash, payback 11–13 years; California's SGIP battery rebates can shorten that.</p>

<h2>The fire-zone factor</h2>
<p>Hillside LA homes in CalFire-designated very high fire hazard severity zones need Class A roof assemblies and certain panel types. This affects the Hollywood Hills, parts of Brentwood, Pacific Palisades, and Bel Air. It doesn't kill solar but adds materials cost and review time.</p>

<h2>Permitting in LA</h2>
<p>City of LA Building & Safety has SolarAPP+ instant permitting for standard residential systems on LADWP. Permit in days, not weeks. SCE-area unincorporated jurisdictions vary — LA County DPW averages 2–3 weeks.</p>

<h2>Want an LA quote?</h2>
<p>Send your address (so I can confirm utility) and last 12 months of bills. <a href="/solar-los-angeles">LA solar page</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'How do I know if I\'m on LADWP or SCE?', answer: 'Check your power bill. LADWP serves the City of LA proper (most 900xx and 901xx zips inside city limits). SCE serves unincorporated LA County and most surrounding cities.' },
      { question: 'Is solar still worth it on SCE under NEM 3.0?', answer: 'Yes, but only with a battery. Solar-only payback on SCE is now 11–14 years; solar + battery brings it back to 8–10. Without a battery the export rate cuts kill the economics.' },
      { question: 'Does NEM 3.0 apply to LADWP?', answer: 'No. LADWP runs its own net metering program separate from CPUC. Export credits are roughly retail rate, similar to the old NEM 2.0 structure.' },
      { question: 'Can my LA HOA reject solar panels?', answer: 'No. California Civil Code 714 prevents HOAs from prohibiting or unreasonably restricting solar. They can\'t cut output more than 10% or add more than $1,000 in cost.' },
      { question: 'Do hillside LA homes have extra solar requirements?', answer: 'Yes — Class A roof assemblies and specific panel certifications in CalFire very high fire hazard severity zones. Hollywood Hills, Bel Air, Pacific Palisades all qualify.' }
    ]
  },

  {
    slug: 'solar-san-diego-sdge-nem-3',
    title: 'Solar in San Diego — SDG&E and NEM 3.0 in 2026',
    description: 'Solar in San Diego SDG&E NEM 3.0 in 2026: how the export rate cuts changed the math, why batteries are now mandatory, and real payback numbers.',
    publishDate: '2026-05-01',
    tags: ['California', 'NEM 3.0', 'Local Guide'],
    body: `<p><strong>Solar in San Diego on SDG&E in 2026 only makes financial sense paired with a battery — <a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering" target="_blank" rel="noopener">NEM 3.0</a> dropped export credits about 75% and SDG&E has the highest residential rates in the continental US, so self-consuming what you produce is now where the savings live.</strong> Solar + battery in San Diego pays back in 7–9 years. Solar alone pays back in 12–15.</p>

<h2>SDG&E rate context</h2>
<p>SDG&E residential rates are the most expensive in the continental US — peak Time-of-Use rates routinely exceed $0.55–$0.60/kWh in summer afternoons. That's the good news for solar: every kWh you self-consume is enormous savings. The bad news: NEM 3.0 export credits are around $0.05–$0.10/kWh average, so unsaved exports are nearly worthless.</p>

<h2>Why batteries became mandatory</h2>
<p>Pre-NEM 3.0, you'd export midday at retail rate and pull back at night for free (net zero). Now you export at 7 cents and buy back at 50+ cents. The only fix is to store your midday production and discharge it during the 4pm–9pm peak window. A 10–13 kWh battery covers most San Diego households for the peak period.</p>

<h2>SDG&E service area</h2>
<p>SDG&E covers all of San Diego County and southern Orange County. There's no municipal utility option in San Diego proper. <a href="https://www.sdge.com/residential/savings-center/solar" target="_blank" rel="noopener">SDG&E's solar page</a> walks through the rate plans you'll choose between (EV-TOU-5 is most common for solar households).</p>

<h2>HOA reality</h2>
<p>California <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=714" target="_blank" rel="noopener">Civil Code 714</a> protects you. San Diego HOAs in Carmel Valley, La Jolla, Rancho Bernardo, 4S Ranch, and Scripps Ranch generally approve in 2–3 weeks. The strictest I've encountered are some Rancho Santa Fe sub-HOAs that want fully concealed wiring — but they still can't reject the install itself.</p>

<h2>Roof types and microclimates</h2>
<p>San Diego is a roofing patchwork. Coastal zones (La Jolla, Pacific Beach, Encinitas) trend Spanish tile and stucco; inland (Poway, Escondido, Ramona) more comp shingle. The marine layer matters for production modeling — coastal homes lose 8–12% annual production to fog/overcast versus inland. I model coastal and inland systems differently.</p>

<h2>Real payback math</h2>
<p>Carmel Valley home, 8 kW solar + 13 kWh battery, $380/mo summer bill: $44k cash (the 30% federal credit ended December 31, 2025 for owned systems, so there's no federal reduction off that now). Bill offset ~$3,800/yr. Payback roughly 11–12 years on a cash purchase; California's SGIP battery rebate can shorten that.</p>
<p>Same home, solar-only 8 kW: $24k cash. Bill offset ~$1,400/yr (most exports lost to NEM 3.0). Payback 16+ years — which is exactly why the battery makes the math work here.</p>
<p>The battery isn't optional anymore in this math.</p>

<h2>SGIP — California's battery rebate</h2>
<p>The Self-Generation Incentive Program offers $150–$1,000/kWh battery rebates depending on income tier and equity tier. A standard-tier residential rebate is around $150–$200/kWh — meaningful but not transformative. Equity-tier (low-income or in a high-fire-threat district) gets up to $1,000/kWh. Worth checking eligibility on every San Diego quote.</p>

<h2>EV households change the math</h2>
<p>If you have an EV (and 28% of San Diego households do as of 2025), solar + battery + EV charging on EV-TOU-5 is the strongest possible play. You charge the car off solar mid-day or off the battery overnight at super-off-peak rates. Payback drops to 6–7 years.</p>

<h2>Permits and timeline</h2>
<p>San Diego County uses SolarAPP+ for standard residential — permit in 1–3 days. SDG&E PTO averages 4–6 weeks. HOA 14–21 days. Total contract-to-operating: 8–10 weeks.</p>

<h2>Want a real San Diego number?</h2>
<p>Send address + last 12 months SDG&E bills. I'll model with battery and without so you can see the difference. <a href="/solar-san-diego">San Diego solar page</a> or <a href="/#get-quote">request a quote</a>.</p>`,
    faqs: [
      { question: 'Is solar still worth it in San Diego under NEM 3.0?', answer: 'With a battery, yes — payback 7–9 years. Without a battery, 12–15 years. SDG&E\'s high rates make self-consumption the primary savings driver now.' },
      { question: 'How much battery do I need in San Diego?', answer: '10–13 kWh covers most households for the 4pm–9pm peak window. Bigger homes with EVs or pools may want 20+ kWh.' },
      { question: 'Does SGIP cover residential batteries in San Diego?', answer: 'Yes. Standard-tier rebates are $150–$200/kWh. Equity-tier (low-income or high-fire-threat district) up to $1,000/kWh. Always worth checking eligibility.' },
      { question: 'Do coastal San Diego homes produce less solar?', answer: 'Yes, 8–12% less annually due to marine layer and morning overcast. La Jolla, PB, Del Mar, Encinitas all model lower than Poway or Escondido.' },
      { question: 'What\'s the best SDG&E rate plan for solar?', answer: 'EV-TOU-5 is most common for solar households, especially with EVs. Your installer should run the rate analysis on your actual usage before signing.' },
      { question: 'How long is the full solar timeline in San Diego?', answer: '8–10 weeks contract to operating: 14–21 days HOA, 1–3 days permit (SolarAPP+), 1–2 days install, 4–6 weeks SDG&E PTO.' }
    ]
  }
];
