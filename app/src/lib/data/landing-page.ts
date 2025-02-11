import {
  BadgeCheck,
  Boxes,
  LayoutDashboard,
  Lightning,
  Smile,
  User,
} from 'lucide-react';

export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export const heroSection = {
  title: 'Build Your Dream Website Today',
  description:
    'Our AI-powered platform helps you create stunning, responsive websites without writing a single line of code.',
  buttonText: 'Get Started',
  buttonLink: '/signup',
};

export const featuresSection = [
  {
    title: 'Drag & Drop Builder',
    description:
      'Easily create your website with our intuitive drag and drop interface.',
    icon: LayoutDashboard,
  },
  {
    title: 'AI-Powered Design',
    description:
      'Let our AI suggest design elements and layouts for a professional look.',
    icon: Lightning,
  },
  {
    title: 'Fully Responsive',
    description:
      'Your website will look great on any device, from mobile to desktop.',
    icon: Boxes,
  },
  {
    title: 'SEO Optimized',
    description:
      'Get found on search engines with our built-in SEO optimization tools.',
    icon: BadgeCheck,
  },
];

export const testimonialsSection = [
  {
    name: 'John Doe',
    title: 'CEO, Company XYZ',
    quote:
      "This platform transformed our online presence. We saw a 50% increase in traffic within the first month!",
    avatar: `https://picsum.photos/seed/john/100/100`,
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Manager, ABC Corp',
    quote:
      "The easiest and most intuitive website builder I've ever used. Highly recommended!",
    avatar: `https://picsum.photos/seed/jane/100/100`,
  },
  {
    name: 'David Lee',
    title: 'Freelancer',
    quote:
      "I was able to create a professional portfolio in just a few hours. Amazing!",
    avatar: `https://picsum.photos/seed/david/100/100`,
  },
    {
    name: 'Sarah Williams',
    title: 'Small Business Owner',
    quote:
      "The customer support is top-notch. They helped me every step of the way.",
    avatar: `https://picsum.photos/seed/sarah/100/100`,
  },
];

export const callToActionSection = {
  title: 'Ready to Get Started?',
  description:
    'Join thousands of satisfied users and create your dream website today.',
  buttonText: 'Sign Up Now',
  buttonLink: '/signup',
};

export const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];