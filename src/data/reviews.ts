export interface Review {
  author: string
  rating: number
  text: string
  time: string
  relative_time: string
}

// Real Google reviews for "Daniel at Sunsolar Solutions | Solar Installation in Las Vegas, Nevada"
// GBP: 5.0 stars · 115 reviews (as of April 2026)
export const googleReviews: Review[] = [
  {
    author: 'Cowboy Nav',
    rating: 5,
    text: 'Daniel is very good at his job. Makes you feel as a valued customer. He was very helpful through our nearly 3 month solar panel install project. He was proactive throughout the project always letting us know what to expect in the next step and was quick to respond to our questions. The SunSolar Solutions crew that we dealt with from the installers, their inspector, and Angel, the last tech who came through to finish up the project were all very polite, informative, and professional. Would recommend them when considering solar panels.',
    time: '2025-09-01',
    relative_time: '7 months ago',
  },
  {
    author: 'Hardie DeGuzman',
    rating: 5,
    text: "What a great experience with Daniel at Sunder Energy. We were actually going to go with another solar company, but when Daniel showed up, he pitched us his services. He walked us through the different products and which solar company would be installing our equipment. Daniel was with us every step of the way. Even when we had some issues with the installation of the equipment, Daniel made the calls to have the technicians come back and fix everything. Even when he was out of country, Daniel always returned our calls and text messages in a timely manner. Truly responsive! A few days after the installation, he even stopped by and had us load solar apps on our devices and walked us through what to expect. Although we were nervous in the beginning, Daniel made the whole experience worthwhile. Totally awesome customer service! If you're looking into solar, look no further. Give Daniel a call — you won't regret it!",
    time: '2023-04-01',
    relative_time: '2 years ago',
  },
  {
    author: 'Christine Rodriguez',
    rating: 5,
    text: "This review is long overdue but I am glad we are finally getting to rave about how amazing our experience with Daniel and Sunsolar has been. I was EXTREMELY skeptical about the whole solar idea since my husband and I had such a horrible interaction with another solar company. A few weeks later Daniel knocked on our door. He politely asked if he could return the next day with a more in-depth proposal and if we were still not interested, he would 'kick rocks'. The following day he showed up on time, fully explained every detail, and even I, the self-proclaimed queen of skepticism, couldn't turn down the offer. A HUGE plus is that he didn't try to over-sell us more equipment than we needed. From start to finish the project took less than a month — not at all what we expected. From our interactions with Daniel down to every employee we spoke with, we were 100% impressed. We are now extremely happy solar owners and would highly recommend them to anyone on the fence about solar.",
    time: '2025-08-01',
    relative_time: '8 months ago',
  },
  {
    author: 'Toni Aceves',
    rating: 5,
    text: 'Daniel at Sunsolar Solutions is great. He is friendly, knowledgeable and helpful. He made sure I understood everything from start to finish. I highly recommend him to anyone looking to go solar.',
    time: '2024-06-01',
    relative_time: '1 year ago',
  },
  {
    author: 'Nao DiBello',
    rating: 5,
    text: 'Daniel was a pleasure to work with from the very first day he came to our house. He thoroughly explained the complete process step by step. He was always available when we had questions.',
    time: '2024-04-01',
    relative_time: '2 years ago',
  },
  {
    author: 'Doug P',
    rating: 5,
    text: 'We highly recommend Sunsolar Solutions, especially our rep, Daniel Hadobas, who made the whole experience super easy and smooth. Our system is performing great and our bills are down dramatically.',
    time: '2024-01-01',
    relative_time: '2 years ago',
  },
]
