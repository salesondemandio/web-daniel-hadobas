import type { BlogPost } from './blog-posts';

export const extraPosts3: BlogPost[] = [
  {
    slug: 'do-solar-panels-work-during-power-outage',
    title: 'Do Solar Panels Work During a Power Outage?',
    description: 'Do solar panels work during a power outage? By default no — grid-tied solar shuts off for safety. Here\'s what a battery changes.',
    publishDate: '2026-05-20',
    tags: ['Battery & Backup', 'Las Vegas', 'Nevada'],
    body: `<p>By default, no — your solar panels shut off during a power outage, even at high noon. Grid-tied systems are required to stop producing the instant the grid goes down, for safety. The only way to keep your lights on during an outage is to add a battery. Without one, your roof full of panels goes dark right along with the rest of the block.</p>

<p>I know that surprises people. You spent $20,000 on panels and they don't work when you need them most? Let me explain why, and exactly what fixes it.</p>

<h2>Why grid-tied solar shuts off (anti-islanding)</h2>
<p>It's called anti-islanding, and it protects line workers. When the grid goes down, crews climb the poles to fix it. If your panels kept pushing power onto those lines, you'd be electrocuting someone trying to restore your service.</p>
<p>So every grid-tied inverter is built to detect an outage and shut down within milliseconds. This isn't optional and it isn't a defect. It's federal safety code (IEEE 1547), and your installer can't turn it off. Standard solar is designed to feed the grid — when the grid disappears, the system has nowhere to send power and nothing to anchor to, so it stops.</p>

<h2>What a battery changes</h2>
<p>A home battery breaks that dependency. It creates its own stable mini-grid inside your house, so your panels have something to sync to even when NV Energy is down. The battery, your panels, and your loads keep running in an isolated loop — safely walled off from the utility lines.</p>
<p>The three names you'll see most in Las Vegas are <strong>Tesla Powerwall 3</strong>, <strong>Enphase IQ Battery</strong>, and <strong>Franklin aPower</strong>. All three do the same core job: store daytime solar and deliver backup power when the grid fails. I cover the differences in detail on my <a href="/solar-battery-storage">battery storage page</a>.</p>
<p>Here's the part most people miss: with a battery, your panels keep charging it during a daytime outage. So a sunny Vegas blackout can actually refill your battery while you use it. That extends your backup far past the battery's rated capacity.</p>

<h2>Partial vs whole-home backup</h2>
<p>You don't have to back up your entire house, and most people shouldn't. There are two approaches:</p>
<ul>
<li><strong>Partial (critical loads) backup:</strong> The battery powers a smaller panel with your essentials — fridge, internet, a few outlets, some lights, maybe one AC zone. Cheaper, and the battery lasts much longer per charge.</li>
<li><strong>Whole-home backup:</strong> Everything stays on, including central AC. Costs more and usually needs two batteries in our climate, because Vegas AC is a power hog.</li>
</ul>
<p>For most homes I quote, partial backup is the smart play. You keep what matters running and you don't pay for capacity you'll rarely use.</p>

<h2>How long does a battery last in an outage?</h2>
<p>It depends entirely on what you're running. A single 13.5 kWh battery, used carefully on critical loads, typically lasts <strong>8 to 24 hours</strong>. Run your central AC nonstop in July and that drops to a few hours.</p>
<p>But remember the recharge factor. In Las Vegas, an outage during daylight means your panels are topping the battery back up while you use it. A short afternoon blackout might never even dent your reserve. A multi-day outage with smart load management and daily solar recharge can stretch a single battery surprisingly far.</p>

<h2>NV Energy reliability — do Vegas homes need this?</h2>
<p>Here's my honest take. NV Energy is fairly reliable, and most Vegas neighborhoods don't see frequent long outages. So I won't tell you a battery is mandatory.</p>
<p>But our summer heat strains the grid hard. Peak demand on a 115-degree afternoon is when failures cluster, and that's exactly when losing AC isn't just annoying — it's a health risk for kids, seniors, and pets. A few hours without power in January is fine. A few hours without AC in July is a different story.</p>
<p>The grid is also getting strained as the valley grows. Battery backup is cheap insurance against the days that actually matter.</p>

<h2>What does adding backup cost?</h2>
<p>A single battery installed in Las Vegas runs <strong>$11,000–$15,000 cash</strong>. The 30% federal credit that used to cover batteries ended December 31, 2025 for systems you buy, so that's the real price now — there's no federal reduction knocking it down anymore. (A lease or PPA setup can still capture a federal incentive through end of 2027, but not an owned battery.)</p>
<p>Adding a battery to an existing solar system (a retrofit) costs $1,500–$2,500 more in labor than installing it alongside new panels. If you're putting in solar now, it's cheaper to add the battery at the same time.</p>

<h2>So should you get a battery?</h2>
<p>My straight answer: get one if backup power genuinely matters to you — medical equipment, a home office you can't lose, young kids, or you just hate sweating through a summer outage. Skip it if you're purely chasing the lowest payback, since a battery adds cost without dramatically shortening payback.</p>
<p>Most of my Vegas clients add one battery on partial backup. It covers the scenarios that actually keep you up at night without overspending on whole-home capacity you'll use twice a decade.</p>

<p>Want to know exactly what a battery would back up in your home and what it'd cost? <a href="/#get-quote">Grab a free consultation</a> and I'll size it to your actual needs — no pressure, just the real math.</p>`,
    faqs: [
      {
        question: 'Will my solar work if the power goes out?',
        answer: 'Not by default. Standard grid-tied solar shuts off the instant the power goes out, even in full sun. It\'s a federal safety rule called anti-islanding that protects line workers fixing the grid. Your inverter detects the outage and stops within milliseconds. The only way to keep power flowing during an outage is to add a home battery, which creates its own safe mini-grid so your panels and essential appliances keep running.'
      },
      {
        question: 'Why do solar panels turn off during a blackout?',
        answer: 'Safety. When the grid goes down, utility crews work on the lines to restore it. If your panels kept pushing power onto those lines, you could electrocute a worker. So every grid-tied inverter is built to shut down automatically during an outage — it\'s required by federal safety code (IEEE 1547) and your installer can\'t disable it. A battery solves this by isolating your home from the grid so your solar can run safely.'
      },
      {
        question: 'How long will a solar battery power my house during an outage?',
        answer: 'A single 13.5 kWh battery on critical loads — fridge, internet, lights, some outlets — typically lasts 8 to 24 hours. Running central AC drains it in a few hours. But in Las Vegas, a daytime outage lets your panels recharge the battery while you use it, so a short blackout may never dent your reserve and a longer one can stretch much further with smart load management. Whole-home backup usually needs two batteries here because of our AC load.'
      },
      {
        question: 'Do most Las Vegas homeowners need a solar battery?',
        answer: 'Not strictly — NV Energy is fairly reliable and most neighborhoods don\'t see frequent long outages. But our summer heat strains the grid hardest in July, and that\'s when losing AC becomes a real health risk for kids, seniors, and pets. I recommend a battery if backup matters to you: medical equipment, a home office, or peace of mind in extreme heat. If you\'re only chasing the lowest payback, you can skip it. Most of my clients add one battery on partial backup.'
      }
    ]
  },
];
