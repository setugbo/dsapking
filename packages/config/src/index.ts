import type { BusinessUnitInfo, NavigationItem, Statistic, Testimonial, FAQ, TeamMember, JobListing, TimelineEvent, CoreValue, BlogPost, Project } from '@marvinho/types';

export const siteConfig = {
  name: 'Marvinho Limited',
  tagline: 'Premium Services. Trusted Excellence.',
  description:
    'Marvinho Limited is Nigeria\'s premier multi-service corporation, delivering excellence across media production, facility management, domestic services, construction finishing, and general merchandise.',
  url: 'https://marvinho.com',
  email: 'hello@marvinho.com',
  phone: '+234 XXX XXX XXXX',
  whatsapp: '+234XXXXXXXXXX',
  address: {
    street: 'Lagos, Nigeria',
    city: 'Lagos',
    state: 'Lagos',
    country: 'Nigeria',
  },
  social: {
    twitter: 'https://twitter.com/marvinho',
    instagram: 'https://instagram.com/marvinho',
    facebook: 'https://facebook.com/marvinho',
    linkedin: 'https://linkedin.com/company/marvinho',
    youtube: 'https://youtube.com/@marvinho',
  },
  businessHours: {
    weekday: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
  },
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Businesses',
    href: '/businesses',
    children: [
      { label: 'Marvinho Studio', href: '/businesses/studio' },
      { label: 'Marvinho Agency', href: '/businesses/agency' },
      { label: "Nani's Services", href: '/businesses/nani' },
      { label: 'Marvinho Tiling', href: '/businesses/tiling' },
      { label: 'Frame Enlargement', href: '/businesses/frame' },
      { label: 'General Merchandise', href: '/businesses/merchandise' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const businessUnits: BusinessUnitInfo[] = [
  {
    id: 'studio',
    name: 'Marvinho Studio',
    slug: 'studio',
    tagline: 'Capturing Moments. Creating Legacy.',
    description:
      'From breathtaking wedding cinematography to corporate brand campaigns, Marvinho Studio delivers world-class visual storytelling that elevates your brand and preserves your most important moments.',
    color: '#C9A84C',
    services: [
      { id: 'photography', name: 'Photography', slug: 'photography', description: 'Professional photography services for all occasions.', benefits: ['High-resolution deliverables', 'Professional editing', 'Multiple format outputs'] },
      { id: 'videography', name: 'Videography', slug: 'videography', description: 'Cinematic video production that tells your story.', benefits: ['4K production', 'Drone footage included', 'Professional color grading'] },
      { id: 'wedding-coverage', name: 'Wedding Coverage', slug: 'wedding-coverage', description: 'Complete wedding documentation from preparation to reception.', benefits: ['Full-day coverage', 'Highlight reel', 'Online gallery'] },
      { id: 'corporate-photography', name: 'Corporate Photography', slug: 'corporate-photography', description: 'Professional corporate imagery for brands and businesses.', benefits: ['Headshots and team photos', 'Event documentation', 'Brand consistency'] },
      { id: 'product-photography', name: 'Product Photography', slug: 'product-photography', description: 'E-commerce and catalog product photography.', benefits: ['White background shots', 'Lifestyle images', 'Social media ready'] },
      { id: 'drone-coverage', name: 'Drone Coverage', slug: 'drone-coverage', description: 'Aerial photography and videography with professional drones.', benefits: ['4K aerial video', 'Safe operations', 'Unique perspectives'] },
      { id: 'content-creation', name: 'Content Creation', slug: 'content-creation', description: 'Social media and marketing content production.', benefits: ['Platform-optimized', 'Brand-aligned', 'Consistent scheduling'] },
      { id: 'livestream-production', name: 'Livestream Production', slug: 'livestream-production', description: 'Professional live event streaming and production.', benefits: ['Multi-camera setup', 'Real-time editing', 'Multi-platform streaming'] },
    ],
  },
  {
    id: 'agency',
    name: 'Marvinho Agency',
    slug: 'agency',
    tagline: 'Spotless Spaces. Trusted People.',
    description:
      'Marvinho Agency provides premium cleaning, facility management, and staffing solutions that keep your spaces immaculate and your operations running smoothly.',
    color: '#2D2D2D',
    services: [
      { id: 'commercial-cleaning', name: 'Commercial Cleaning', slug: 'commercial-cleaning', description: 'Professional cleaning for offices, retail, and commercial spaces.', benefits: ['Custom schedules', 'Eco-friendly products', 'Insured teams'] },
      { id: 'residential-cleaning', name: 'Residential Cleaning', slug: 'residential-cleaning', description: 'Thorough home cleaning services tailored to your needs.', benefits: ['Flexible scheduling', 'Trained staff', 'Satisfaction guaranteed'] },
      { id: 'facility-management', name: 'Facility Management', slug: 'facility-management', description: 'Complete facility maintenance and management solutions.', benefits: ['24/7 support', 'Preventive maintenance', 'Cost efficiency'] },
      { id: 'deep-cleaning', name: 'Deep Cleaning', slug: 'deep-cleaning', description: 'Intensive cleaning for thorough sanitation and hygiene.', benefits: ['Hospital-grade products', 'Detailed checklist', 'Certified team'] },
      { id: 'post-construction', name: 'Post Construction Cleaning', slug: 'post-construction-cleaning', description: 'Specialized cleaning after construction and renovation projects.', benefits: ['Debris removal', 'Surface restoration', 'Move-in ready'] },
      { id: 'staff-recruitment', name: 'Cleaning Staff Recruitment', slug: 'cleaning-staff-recruitment', description: 'Vetted and trained cleaning professionals for your organization.', benefits: ['Background checked', 'Trained professionals', 'Replacement guarantee'] },
      { id: 'domestic-staff-recruitment', name: 'Domestic Staff Recruitment', slug: 'domestic-staff-recruitment', description: 'Reliable domestic staff for homes and households.', benefits: ['Verified references', 'Skills tested', 'Trial period'] },
      { id: 'property-maintenance', name: 'Property Maintenance', slug: 'property-maintenance', description: 'Comprehensive property upkeep and repair services.', benefits: ['Scheduled maintenance', 'Emergency repairs', 'Quality workmanship'] },
    ],
  },
  {
    id: 'nani',
    name: "Nani's Services",
    slug: 'nani',
    tagline: 'Caring for Your Family. Like Our Own.',
    description:
      "Nani's Services specializes in professional nanny recruitment, childcare, and domestic staffing, providing families with reliable, compassionate, and trained caregivers.",
    color: '#8B6F47',
    services: [
      { id: 'nanny-recruitment', name: 'Professional Nanny Recruitment', slug: 'nanny-recruitment', description: 'Thoroughly vetted nannies for your family.', benefits: ['Background checked', 'First aid trained', 'Child development knowledge'] },
      { id: 'child-care', name: 'Child Care', slug: 'child-care', description: 'Professional childcare services and support.', benefits: ['Age-appropriate activities', 'Safe environment', 'Daily reports'] },
      { id: 'caregiver-recruitment', name: 'Caregiver Recruitment', slug: 'caregiver-recruitment', description: 'Compassionate caregivers for elderly and special needs.', benefits: ['Medical training', 'Compassionate approach', 'Experience verified'] },
      { id: 'domestic-staffing', name: 'Domestic Staffing', slug: 'domestic-staffing', description: 'Complete household staffing solutions.', benefits: ['Skilled professionals', 'Flexible arrangements', 'Ongoing support'] },
      { id: 'housekeepers', name: 'Housekeepers', slug: 'housekeepers', description: 'Professional housekeeping services for homes.', benefits: ['Detail-oriented', 'Trustworthy', 'Consistent quality'] },
      { id: 'family-support', name: 'Family Support Services', slug: 'family-support', description: 'Comprehensive family support and household management.', benefits: ['Personalized service', 'Experienced staff', 'Family-focused'] },
    ],
  },
  {
    id: 'tiling',
    name: 'Marvinho Tiling',
    slug: 'tiling',
    tagline: 'Precision Finishing. Lasting Elegance.',
    description:
      'Marvinho Tiling delivers expert tile and marble installation, floor finishing, and interior renovation services that transform spaces with precision craftsmanship.',
    color: '#5B7553',
    services: [
      { id: 'tile-installation', name: 'Tile Installation', slug: 'tile-installation', description: 'Expert floor and wall tile installation.', benefits: ['Precision work', 'Quality materials', 'Warranty included'] },
      { id: 'marble-installation', name: 'Marble Installation', slug: 'marble-installation', description: 'Premium marble flooring and wall cladding.', benefits: ['Natural stone expertise', 'Flawless finish', 'Long-lasting results'] },
      { id: 'floor-finishing', name: 'Floor Finishing', slug: 'floor-finishing', description: 'Professional floor restoration and finishing.', benefits: ['Polishing experts', 'Stain removal', 'Protective coating'] },
      { id: 'interior-finishing', name: 'Interior Finishing', slug: 'interior-finishing', description: 'Complete interior finishing and decoration services.', benefits: ['Design consultation', 'Quality craftsmanship', 'Project management'] },
      { id: 'renovation', name: 'Renovation', slug: 'renovation', description: 'Full-scale renovation and remodeling services.', benefits: ['Complete solutions', 'On-time delivery', 'Budget-friendly'] },
      { id: 'building-finishing', name: 'Building Finishing', slug: 'building-finishing', description: 'Professional building finishing for residential and commercial projects.', benefits: ['End-to-end service', 'Quality assurance', 'Modern techniques'] },
    ],
  },
  {
    id: 'frame',
    name: 'Frame Enlargement',
    slug: 'frame',
    tagline: 'Frame Your Moments. Enlarge Your Vision.',
    description:
      'Frame Enlargement offers premium canvas printing, picture framing, and corporate wall art solutions that bring your images to life with museum-quality presentation.',
    color: '#7B6BA0',
    services: [
      { id: 'canvas-printing', name: 'Canvas Printing', slug: 'canvas-printing', description: 'High-quality canvas prints in custom sizes.', benefits: ['Gallery-grade quality', 'Custom sizing', 'Vibrant colors'] },
      { id: 'picture-framing', name: 'Picture Framing', slug: 'picture-framing', description: 'Custom framing solutions for art and photographs.', benefits: ['Premium materials', 'Custom designs', 'Expert craftsmanship'] },
      { id: 'photo-enlargement', name: 'Photo Enlargement', slug: 'photo-enlargement', description: 'Professional photo enlargement with crystal clarity.', benefits: ['High resolution', 'True-to-life colors', 'Various formats'] },
      { id: 'corporate-wall-art', name: 'Corporate Wall Art', slug: 'corporate-wall-art', description: 'Branded wall art and office decoration solutions.', benefits: ['Brand-aligned designs', 'Bulk ordering', 'Installation service'] },
      { id: 'gallery-prints', name: 'Gallery Prints', slug: 'gallery-prints', description: 'Museum-quality prints for exhibitions and collections.', benefits: ['Archival quality', 'Professional finishing', 'Expert advice'] },
    ],
  },
  {
    id: 'merchandise',
    name: 'General Merchandise',
    slug: 'merchandise',
    tagline: 'Quality Products. Global Reach.',
    description:
      'Marvinho General Merchandise handles corporate procurement, import/export, and general trading, delivering quality products and supplies to businesses across Nigeria.',
    color: '#C47A2B',
    services: [
      { id: 'corporate-procurement', name: 'Corporate Procurement', slug: 'corporate-procurement', description: 'End-to-end corporate procurement solutions.', benefits: ['Bulk pricing', 'Verified suppliers', 'Timely delivery'] },
      { id: 'office-supplies', name: 'Office Supplies', slug: 'office-supplies', description: 'Complete office supply solutions for businesses.', benefits: ['Wide range', 'Competitive pricing', 'Regular delivery'] },
      { id: 'industrial-supplies', name: 'Industrial Supplies', slug: 'industrial-supplies', description: 'Industrial equipment and supply chain solutions.', benefits: ['Quality assurance', 'Bulk orders', 'Technical support'] },
      { id: 'import-export', name: 'Import & Export', slug: 'import-export', description: 'Reliable import and export services for international trade.', benefits: ['Customs clearance', 'Logistics support', 'Global network'] },
      { id: 'general-trading', name: 'General Trading', slug: 'general-trading', description: 'Diverse general merchandise trading services.', benefits: ['Competitive rates', 'Quality products', 'Fast delivery'] },
    ],
  },
];

export const statistics: Statistic[] = [
  { label: 'Projects Completed', value: 2500, suffix: '+' },
  { label: 'Happy Clients', value: 1200, suffix: '+' },
  { label: 'Team Members', value: 150, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adaeze Okonkwo',
    role: 'CEO',
    company: 'Luxe Interiors Ltd',
    content:
      'Marvinho Studio transformed our brand imagery completely. Their corporate photography service is truly world-class. The attention to detail and creative vision exceeded our expectations.',
    rating: 5,
    avatar: '/avatars/testimonial-1.jpg',
  },
  {
    id: '2',
    name: 'Chidi Nwosu',
    role: 'Facility Manager',
    company: 'Atlantic Business Complex',
    content:
      "We've been using Marvinho Agency for our facility management needs for over three years. Their consistency, professionalism, and quality of service is unmatched in the industry.",
    rating: 5,
    avatar: '/avatars/testimonial-2.jpg',
  },
  {
    id: '3',
    name: 'Funke Adeyemi',
    role: 'Director',
    company: 'Bright Futures Academy',
    content:
      "Nani's Services found us the perfect nanny for our school's daycare program. Their vetting process is thorough and they truly understand what families need.",
    rating: 5,
    avatar: '/avatars/testimonial-3.jpg',
  },
  {
    id: '4',
    name: 'Emeka Obi',
    role: 'Architect',
    company: 'Obi & Partners',
    content:
      'Marvinho Tiling delivered exceptional quality on our latest residential project. Their marble installation work was flawless and completed ahead of schedule.',
    rating: 5,
    avatar: '/avatars/testimonial-4.jpg',
  },
  {
    id: '5',
    name: 'Amina Bello',
    role: 'Gallery Owner',
    company: 'The Art Hub Lagos',
    content:
      'The canvas printing and framing quality from Frame Enlargement is museum-grade. Every piece we receive is perfectly finished and our clients are always impressed.',
    rating: 5,
    avatar: '/avatars/testimonial-5.jpg',
  },
  {
    id: '6',
    name: 'Tunde Bakare',
    role: 'Procurement Manager',
    company: 'Greenfield Industries',
    content:
      'Marvinho General Merchandise has been our trusted procurement partner for two years. Their reliability and pricing make them our preferred supplier.',
    rating: 5,
    avatar: '/avatars/testimonial-6.jpg',
  },
];

export const companyFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What services does Marvinho Limited offer?',
    answer:
      'Marvinho Limited operates six business units: Marvinho Studio (photography and videography), Marvinho Agency (cleaning and facility management), Nani\'s Services (nanny and caregiver recruitment), Marvinho Tiling (tile and marble installation), Frame Enlargement (canvas printing and framing), and General Merchandise (procurement and trading). Each business unit provides specialized, premium services.',
  },
  {
    id: 'faq-2',
    question: 'How can I request a quote for services?',
    answer:
      'You can request a quote by visiting the Contact page, calling our office directly, sending us a WhatsApp message, or filling out the quote request form on any business unit page. Our team will respond within 24 hours with a detailed proposal.',
  },
  {
    id: 'faq-3',
    question: 'What areas do you serve in Nigeria?',
    answer:
      'We primarily serve the Lagos metropolitan area and surrounding states, but our services extend across Nigeria for large-scale projects. Contact us to discuss your specific location and requirements.',
  },
  {
    id: 'faq-4',
    question: 'Are your staff members vetted and insured?',
    answer:
      'Yes, all Marvinho staff undergo thorough background checks, reference verification, and skills assessments. We maintain comprehensive insurance coverage for all our operations and team members.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer corporate contracts?',
    answer:
      'Absolutely. We provide customized corporate contracts for businesses requiring ongoing services. Our corporate clients benefit from priority scheduling, dedicated account management, and preferential pricing.',
  },
  {
    id: 'faq-6',
    question: 'How do I book a studio session?',
    answer:
      'Studio sessions can be booked through our Contact page, by calling our studio directly, or via WhatsApp. We recommend booking at least one week in advance for peak periods. A deposit is required to secure your booking.',
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, POS payments, and cash. For corporate clients, we offer invoice-based payment terms. Online payment integration is coming soon for added convenience.',
  },
  {
    id: 'faq-8',
    question: 'Do you provide warranties on your work?',
    answer:
      'Yes, all our services come with quality guarantees. Marvinho Tiling offers a workmanship warranty, Marvinho Agency provides service satisfaction guarantees, and Marvinho Studio includes revision guarantees on all creative work.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Marvin Chukwu',
    role: 'Founder & CEO',
    bio: 'Visionary leader with over a decade of experience in building premium service brands across Nigeria. Driven by a commitment to excellence and customer satisfaction.',
    avatar: '/team/ceo.jpg',
  },
  {
    id: 'team-2',
    name: 'Chioma Eze',
    role: 'Chief Operations Officer',
    bio: 'Operations expert ensuring seamless delivery across all Marvinho business units. Passionate about process optimization and team development.',
    avatar: '/team/coo.jpg',
  },
  {
    id: 'team-3',
    name: 'Adeola Martins',
    role: 'Creative Director',
    bio: 'Award-winning creative professional leading Marvinho Studio with innovative visual storytelling and brand development expertise.',
    avatar: '/team/creative-director.jpg',
  },
  {
    id: 'team-4',
    name: 'Oluwaseun Adeyemi',
    role: 'Head of Business Development',
    bio: 'Strategic thinker driving growth and partnerships across all Marvinho business units. Expert in corporate relationship management.',
    avatar: '/team/biz-dev.jpg',
  },
];

export const coreValues: CoreValue[] = [
  {
    title: 'Excellence',
    description: 'We pursue the highest standards in everything we do, refusing to compromise on quality.',
    icon: 'Star',
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical responsibility.',
    icon: 'Shield',
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver better solutions for our clients.',
    icon: 'Lightbulb',
  },
  {
    title: 'Reliability',
    description: 'We deliver on our promises consistently, building trust through dependable service.',
    icon: 'Clock',
  },
  {
    title: 'People First',
    description: 'We value our team and clients, treating every interaction with respect and care.',
    icon: 'Heart',
  },
  {
    title: 'Growth',
    description: 'We continuously develop our capabilities to stay ahead in a changing world.',
    icon: 'TrendingUp',
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: '2014',
    title: 'Founded',
    description: 'Marvinho Limited was established with a vision to deliver premium services across Nigeria.',
  },
  {
    year: '2016',
    title: 'Studio Launch',
    description: 'Marvinho Studio was launched, offering professional photography and videography services.',
  },
  {
    year: '2018',
    title: 'Agency Expansion',
    description: 'Marvinho Agency was established, providing cleaning and facility management solutions.',
  },
  {
    year: '2019',
    title: "Nani's Services Launch",
    description: "Nani's Services was introduced to provide professional nanny and caregiver recruitment.",
  },
  {
    year: '2020',
    title: 'Tiling Division',
    description: 'Marvinho Tiling was launched to offer expert tile and marble installation services.',
  },
  {
    year: '2021',
    title: 'Frame Enlargement',
    description: 'Frame Enlargement was added, providing premium canvas printing and framing solutions.',
  },
  {
    year: '2022',
    title: 'Merchandise Division',
    description: 'General Merchandise was established, expanding into corporate procurement and trading.',
  },
  {
    year: '2024',
    title: 'Digital Platform',
    description: 'Launch of the unified digital platform, connecting all business units under one roof.',
  },
];

export const industries = [
  'Real Estate',
  'Hospitality',
  'Healthcare',
  'Education',
  'Corporate',
  'Retail',
  'Manufacturing',
  'Government',
  'Events & Entertainment',
  'Oil & Gas',
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How Professional Photography Can Elevate Your Brand',
    slug: 'professional-photography-brand-elevation',
    excerpt: 'Discover how investing in professional photography can transform your brand image and drive customer engagement.',
    content: 'Professional photography is no longer a luxury—it\'s a necessity for brands that want to stand out...',
    author: { name: 'Adeola Martins', role: 'Creative Director', avatar: '/team/creative-director.jpg' },
    category: 'Studio',
    tags: ['photography', 'branding', 'marketing'],
    publishedAt: '2024-12-15',
    readTime: 5,
    featured: true,
    image: '/blog/photography-brand.jpg',
  },
  {
    id: 'blog-2',
    title: 'The Complete Guide to Facility Management for Nigerian Businesses',
    slug: 'facility-management-guide-nigeria',
    excerpt: 'Learn how effective facility management can reduce costs and improve workplace productivity.',
    content: 'In today\'s competitive business environment, facility management plays a crucial role...',
    author: { name: 'Chioma Eze', role: 'COO', avatar: '/team/coo.jpg' },
    category: 'Agency',
    tags: ['facility-management', 'cleaning', 'business'],
    publishedAt: '2024-12-10',
    readTime: 7,
    featured: true,
    image: '/blog/facility-management.jpg',
  },
  {
    id: 'blog-3',
    title: 'Why Hiring a Professional Nanny Matters for Your Family',
    slug: 'professional-nanny-importance',
    excerpt: 'Understanding the benefits of professional nanny services and how to choose the right caregiver.',
    content: 'Finding the right nanny for your family is one of the most important decisions you can make...',
    author: { name: 'Nani Team', role: 'Nani\'s Services', avatar: '/team/nani.jpg' },
    category: 'Nani\'s Services',
    tags: ['childcare', 'nanny', 'family'],
    publishedAt: '2024-12-05',
    readTime: 4,
    featured: false,
    image: '/blog/nanny-services.jpg',
  },
  {
    id: 'blog-4',
    title: 'Modern Tiling Trends for Nigerian Homes in 2025',
    slug: 'modern-tiling-trends-2025',
    excerpt: 'Explore the latest tiling trends that are transforming Nigerian homes and commercial spaces.',
    content: 'The tiling industry continues to evolve with new materials, patterns, and techniques...',
    author: { name: 'Marvinho Tiling', role: 'Tiling Division', avatar: '/team/tiling.jpg' },
    category: 'Tiling',
    tags: ['tiling', 'interior-design', 'renovation'],
    publishedAt: '2024-11-28',
    readTime: 6,
    featured: false,
    image: '/blog/tiling-trends.jpg',
  },
];

export const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Lagos Business Summit 2024',
    slug: 'lagos-business-summit-2024',
    description: 'Complete event coverage including photography, videography, and livestream production for a 3-day business conference.',
    category: 'studio',
    images: ['/projects/summit-1.jpg', '/projects/summit-2.jpg'],
    client: 'Lagos Chamber of Commerce',
    date: '2024-11-20',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Atlantic Tower Facility Management',
    slug: 'atlantic-tower-facility-management',
    description: 'Comprehensive facility management contract for a 20-story commercial building in Victoria Island.',
    category: 'agency',
    images: ['/projects/atlantic-1.jpg'],
    client: 'Atlantic Properties',
    date: '2024-10-15',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Ikoyi Residence Tiling Project',
    slug: 'ikoyi-residence-tiling',
    description: 'Premium marble installation and floor finishing for a luxury residential property in Ikoyi.',
    category: 'tiling',
    images: ['/projects/ikoyi-1.jpg'],
    client: 'Private Client',
    date: '2024-09-20',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Art Gallery Wall Installation',
    slug: 'art-gallery-wall-installation',
    description: 'Corporate wall art and canvas printing for a new contemporary art gallery in Lagos.',
    category: 'frame',
    images: ['/projects/gallery-1.jpg'],
    client: 'The Art Hub',
    date: '2024-08-10',
    featured: true,
  },
  {
    id: 'project-5',
    title: 'Greenfield Industries Office Setup',
    slug: 'greenfield-office-setup',
    description: 'Complete office supply procurement and setup for a new industrial facility.',
    category: 'merchandise',
    images: ['/projects/greenfield-1.jpg'],
    client: 'Greenfield Industries',
    date: '2024-07-05',
    featured: true,
  },
  {
    id: 'project-6',
    title: 'Eko Hotel Wedding Coverage',
    slug: 'eko-hotel-wedding-coverage',
    description: 'Full wedding documentation including drone coverage, photography, and highlight film.',
    category: 'studio',
    images: ['/projects/wedding-1.jpg'],
    client: 'Private Client',
    date: '2024-12-01',
    featured: true,
  },
];

export const jobListings: JobListing[] = [
  {
    id: 'job-1',
    title: 'Senior Photographer',
    department: 'Marvinho Studio',
    type: 'full-time',
    location: 'Lagos, Nigeria',
    description: 'We are looking for an experienced photographer to join our creative team. The ideal candidate will have a strong portfolio and experience in corporate and commercial photography.',
    requirements: ['5+ years of professional photography experience', 'Proficient in Adobe Lightroom and Photoshop', 'Own professional camera equipment', 'Strong portfolio demonstrating technical skill and creativity'],
    slug: 'senior-photographer',
  },
  {
    id: 'job-2',
    title: 'Facility Supervisor',
    department: 'Marvinho Agency',
    type: 'full-time',
    location: 'Lagos, Nigeria',
    description: 'Join our agency team as a Facility Supervisor overseeing cleaning operations for major commercial clients.',
    requirements: ['3+ years in facility management', 'Strong leadership and communication skills', 'Knowledge of cleaning chemicals and equipment', 'Ability to work flexible hours'],
    slug: 'facility-supervisor',
  },
  {
    id: 'job-3',
    title: 'Nanny Recruiter',
    department: "Nani's Services",
    type: 'full-time',
    location: 'Lagos, Nigeria',
    description: 'Help us find and vet the best childcare professionals for our growing client base.',
    requirements: ['Background in human resources or social work', 'Experience in child care assessment', 'Excellent interpersonal skills', 'Attention to detail in vetting processes'],
    slug: 'nanny-recruiter',
  },
  {
    id: 'job-4',
    title: 'Tiling Specialist',
    department: 'Marvinho Tiling',
    type: 'contract',
    location: 'Lagos, Nigeria',
    description: 'Skilled tiling professional needed for residential and commercial projects.',
    requirements: ['3+ years of professional tiling experience', 'Expertise in marble and ceramic installation', 'Own basic tools', 'Valid identification'],
    slug: 'tiling-specialist',
  },
];
