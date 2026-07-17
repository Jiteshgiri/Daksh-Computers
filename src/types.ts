export interface Course {
  id: string;
  name: string;
  duration: string;
  eligibility: string;
  practicalTraining: string;
  overview: string;
  topics: string[];
  benefits: string;
  whoCanJoin: string;
  careerOpportunities: string[];
  practicalSessions: string;
  certificateInformation: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  photoUrl?: string;
}

export interface Certificate {
  id: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  photoUrl: string;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
}

export interface GalleryVideo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
}
