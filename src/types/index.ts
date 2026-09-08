export interface Certification {
  id: string;
  title: string;
  institution: string;
  category: "icf_aacop" | "neuroscience" | "barca" | "cognitive";
  badgeLabel?: string;
  description?: string;
  year?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  sport: string;
  teamOrRole: string;
  image: string;
  quote?: string;
  highlight: string;
  isFeatured?: boolean;
  stats?: { label: string; value: string }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface MethodStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}
