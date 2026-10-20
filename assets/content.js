/** Edit personal information, links and portfolio projects here. */
export const profile = {
  name: 'Avirup Mazumder',
  role: 'Content & Social Media Specialist',
  location: 'Hyderabad, India',
  email: 'avirupmazumderofficial@gmail.com',
  // Add your own image to public/images/portrait.jpg, then change this to '/images/portrait.jpg'.
  portrait: './assets/images/portrait.jpeg',
  tagline: 'Creating, exploring, and building things that matter.',
  introduction: 'I work at the intersection of content, culture, and strategy — turning observations into stories, and stories into meaningful connections.',
  about: 'With a background in journalism, my work spans influencer marketing, social media, copywriting, and creative storytelling. I’m interested in what makes people stop scrolling, pay attention, and feel something.',
  // Edit these sentences freely to match your preferred personal voice.
  nextChapter: 'Always curious about the next idea worth bringing to life.',
  socials: [
    { name: 'Instagram', handle: '@mazumder_avirup', href: 'https://www.instagram.com/mazumder_avirup' },
    { name: 'LinkedIn', handle: '/in/avirupmazumder', href: 'https://www.linkedin.com/in/avirupmazumder' },
  ],
};

export const projects = [
  {
    id: 'sids-farm',
    number: '01',
    title: 'Stories that move people.',
    client: 'Sid’s Farm',
    category: 'Influencer Marketing / Social Strategy',
    description: 'Creator partnerships, campaign thinking and content that connects a brand to its audience.',
    detail: 'As a Marketing Associate at Sid’s Farm, I managed influencer campaigns involving 17 creators, contributing to 1.09M+ organic views on a combined budget of ₹5,72,600. My work also includes Instagram performance analysis, copy ideation for organic content and Meta ads, and on-ground brand activations at Kukdukoo Fest in Pune and Bengaluru. The Kukdukoo Fest activation received Best Experiential Marketing on a Small Budget and second place for Best Use of Storytelling; I assisted the brand manager in planning the activation.',
    tags: ['Creator campaigns', 'Content strategy', 'Copywriting'],
    style: 'farm',
    image: './assets/images/sids-farm.jpeg',
    secondaryImage: './assets/images/trophies.jpeg',
    secondaryImageAlt: 'Two recognition trophies awarded for the Sid’s Farm Kukdukoo Fest activation',
    imageAlt: 'Sid’s Farm experiential event booth showing milk-testing demonstration displays',
    stat: '1.09M+',
    statCaption: 'Organic views across creator campaigns',
  },
  {
    id: 'the-paradox',
    number: '02',
    title: 'The Paradox',
    client: 'A short film',
    category: 'Film / Storytelling',
    description: 'Exploring the art of telling a story through writing and direction.',
    detail: 'A short film made for my master’s course. I worked as director and scriptwriter and handled casting. The story follows a college student confronting his past. Production took five months.',
    href: 'https://drive.google.com/file/d/1chw6W9dSwnsTOmxWICVNHxUoBSltyU9O/view?usp=sharing',
    tags: ['Co-writing', 'Co-direction', 'Short film'],
    style: 'paradox',
    image: './assets/images/paradox.jpeg',
    imageAlt: 'Scene from the short film The Paradox',
  },
  {
    id: 'sneaker',
    number: '03',
    title: 'A Day in the Life of a Sneaker',
    client: 'Independent film competition',
    category: 'Film / Creative Production',
    description: 'An independent creative film project built around a simple, playful premise.',
    detail: 'Made for an inter-college on-the-spot filmmaking competition, this film was shot on an iPhone and edited within three hours. I was its director, scriptwriter and the voice of the sneaker.',
    href: 'https://drive.google.com/file/d/1_HKB_CB_g0br2d9KaN9I4USDFfi1Al8Y/view?usp=drive_link',
    tags: ['Film production', 'Creative project'],
    style: 'sneaker',
    image: './assets/images/sneaker.jpeg',
    imageAlt: 'Film still showing sneakers being tied in A Day in the Life of a Sneaker',
  },

  {
    id: 'protein-curd-story', number: '04', title: 'Everyday protein, made relatable',
    client: 'Sid’s Farm · Protein Story', category: 'Influencer Marketing / Caption Writing',
    description: 'A creator-led high-protein curd story, with nutrition messaging and an accessible recipe.',
    detail: 'Marketing and caption-writing sample documented on page 60 of my portfolio. The accompanying caption introduces Sid’s Farm High Protein Curd, suggests a sattu drink recipe and positions protein-rich foods as a simple part of daily routines. The source presentation includes a video still but no playable video URL.',
    tags: ['Influencer content', 'Campaign copy', 'Food storytelling'], style: 'farm',
    image: './assets/images/marketing-protein.jpeg', imageAlt: 'Creator video still for a Sid’s Farm high-protein curd campaign'
  },
  {
    id: 'curd-story', number: '05', title: 'A simple, trustworthy choice',
    client: 'Sid’s Farm · Curd Story', category: 'Influencer Marketing / Social Copy',
    description: 'A lifestyle-focused creator narrative around Sid’s Farm High Protein Curd.',
    detail: 'Marketing sample documented on page 62 of my portfolio. The caption focuses on convenience, taste and confidence in the product. The source presentation contains a creator still and the written caption, but no playable video URL.',
    tags: ['Creator content', 'Social media', 'Brand messaging'], style: 'farm',
    image: './assets/images/marketing-curd.jpeg', imageAlt: 'Creator video still for the Sid’s Farm High Protein Curd lifestyle campaign'
  },
];
