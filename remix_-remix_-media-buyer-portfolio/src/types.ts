export interface CaseStudy {
  id: number;
  client: string;
  result: string;
  description: string;
  tag: string;
}

export interface Skill {
  name: string;
  category: 'Platform' | 'Strategy' | 'Tool';
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}
