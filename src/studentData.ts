// ==========================================
// DAKSH COMPUTERS - STUDENT CERTIFICATE DATA
// ==========================================
// 
// [HINGLISH GUIDE]:
// Is file me aap naye students aur unke certificates add kar sakte hain.
// Har student ka data ek object `{ ... }` ke roop me hai.
// 
// NAYA STUDENT ADD KARNE KE LIYE:
// Bas niche diye gaye formats me se kisi ek ko copy karein aur list ke andar paste kar dein.
// 
// PHOTO & CERTIFICATE REPLACEMENT:
// 1. "profilePhoto": Aap apni image 'src/assets/images/' folder me rakh kar uska path de sakte hain (import karke)
//    ya fir direct online image URL ya '/images/students/photo.jpg' jaisa static path likh sakte hain.
// 2. "certificateUrl": Certificate image (.jpg/.png) ya PDF (.pdf) ka path likhein. Aap online image link bhi de sakte hain.

export interface StudentCertificate {
  id: string;             // Unique ID (Certificate Number) - isko unique rakhein
  studentName: string;    // Student ka naam
  course: 'Programming' | 'Basic Computer' | 'DCA' | 'PGDCA' | 'Web Development' | 'Internship' | 'Tally-Prime'; // Main Category (Inhi me se select karein)
  language?: 'C' | 'C++' | 'Python' | 'Java' | 'JavaScript' | string; // Language (Sirf 'Programming' course ke liye, baki me khali chhod dein)
  profilePhoto: string;   // Student ki profile photo ka path ya online URL
  certificateUrl: string; // Certificate image ya PDF ka path ya online URL
  issueDate: string;      // Certificate kab issue hua (DD/MM/YYYY ya Month Year)
}

export const studentsCertificates: StudentCertificate[] = [
  // ==========================================
  // 1. PROGRAMMING STUDENTS
  // ==========================================
  {
    id: "DC-PROG-2026-001",
    studentName: "Gyan Prakash Prajapti",
    course: "Programming",
    language: "Python",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784284547/IMG-20260717-WA0013_ko8iha.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784263075/IMG-20260717-WA0001_qcmvwf.jpg",
    issueDate: "25.06.2025 to 25.08.2025"
  },
  {
    id: "DC-PROG-2026-002",
    studentName: "Jitesh Giri",
    course: "Programming",
    language: "C++",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784285965/SAVE_20260202_133812_nq7txe.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784230193/IMG_20260717_005848_maagvh.jpg",
    issueDate: "24.12.2024 to 24.03.2025"
  },
  {
    id: "DC-PROG-2026-003",
    studentName: "Jitesh Giri",
    course: "Programming",
    language: "Python",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784285965/SAVE_20260202_133812_nq7txe.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784229930/IMG_20260717_005116_icvnsh.jpg",
    issueDate: "25.06.2025 to 25.08.2025"
  },
  {
    id: "DC-PROG-2026-004",
    studentName: "Jitesh Giri",
    course: "Programming",
    language: "C",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784285965/SAVE_20260202_133812_nq7txe.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784230193/IMG_20260717_005848_maagvh.jpg",
    issueDate: "15 February 2026"
  },
  // ==========================================
  // 2. Internship
  // ==========================================
  {
    id: "DC-INT-2026-001",
    studentName: "Jitesh Giri",
    course: "Internship",
    language: "Python",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784285965/SAVE_20260202_133812_nq7txe.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784230193/IMG_20260717_005922_dd3skf.jpg",
    issueDate: "25.06.2025 to 25.08.2025"
  },

  // ==========================================
  // 3. BASIC COMPUTER STUDENTS
  // ==========================================
  {
    id: "DC-BASIC-2026-101",
    studentName: "Rajesh Kumar",
    course: "Basic Computer",
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    certificateUrl: "https://images.unsplash.com/photo-1558025137-0b407a9dc3ed?q=80&w=800&auto=format&fit=crop",
    issueDate: "01 June 2026"
  },
  {
    id: "DC-BASIC-2026-102",
    studentName: "Kiran Lodhi",
    course: "Basic Computer",
    profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    certificateUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    issueDate: "18 June 2026"
  },

  // ==========================================
  // 4. DCA STUDENTS
  // ==========================================
  {
    id: "DC-DCA-2026-201",
    studentName: "none",
    course: "DCA",
    profilePhoto: "ji",
    certificateUrl: "ji",
    issueDate: "28 June 2026"
  },
  {
    id: "DC-DCA-2026-202",
    studentName: "none",
    course: "DCA",
    profilePhoto: "ji",
    certificateUrl: "ji",
    issueDate: "11 May 2026"
  },

  // ==========================================
  // 5. PGDCA STUDENTS
  // ==========================================
  {
    id: "DC-PGDCA-2026-301",
    studentName: "none",
    course: "PGDCA",
    profilePhoto: "ji",
    certificateUrl: "ji",
    issueDate: "22 May 2026"
  },

  // ==========================================
  // 6. WEB DEVELOPMENT STUDENTS
  // ==========================================
  {
    id: "DC-WEB-2026-401",
    studentName: "none",
    course: "Web Development",
    profilePhoto: "ji",
    certificateUrl: "ji",
    issueDate: "14 July 2026"
  },
  // ==========================================
  // 7. Tally-Prime
  // ==========================================
  {
    id: "DC-WEB-2026-401",
    studentName: "Ritu Gupta",
    course: "Tally-Prime",
    profilePhoto: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784374276/IMG-20260718-WA0029_pbfsbj.jpg",
    certificateUrl: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784374317/IMG-20260718-WA0014_yvxovl.jpg",
    issueDate: "16.01.2026 to 16.04.2026"
  }
];
