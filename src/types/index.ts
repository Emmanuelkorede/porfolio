export type ProjectStatus = 'BUILDING' | 'Live' 

export interface Project {
  title: string;
  status: ProjectStatus
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export type StackCategory = 'Frontend' | 'Backend + Database'  | 'Tools and design';

export interface StackItem {
  name: string;
  category: StackCategory;
  iconName: string;
  proficiency?: string;
  isMarquee?: boolean;
}

export interface JourneyMilestone {
  title: string;
  period: string;
  description: string;
  listTitle : string ;
  achievements: string[];
  quote? : string ; 
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string | null;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
}