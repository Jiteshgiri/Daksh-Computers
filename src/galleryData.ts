// ==========================================
// DAKSH COMPUTERS - GALLERY DATA
// ==========================================
// 
// [HINGLISH GUIDE]:
// Is file me aap naye events, saal (years), aur unki photos/videos easily add ya edit kar sakte hain.
// Isko bahut hi simple format me banaya gaya hai taaki aapko changes karne me koi pareshani na ho.
// 
// HOW TO ADD PHOTOS (Nayi Photo kaise dalein):
// Har photo ek item hai jisme niche likhi cheezein hoti hain:
// - id: Unique ID (Kuch bhi unique text jaise 'img-101')
// - url: Photo ka path ya link (Aap online link de sakte hain ya '/images/gallery/filename.jpg')
// - caption: Photo ke niche dikhne wala naam ya description (optional)

export interface GalleryPhoto {
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

// Event Categories aur unke years ke according organized data:
export interface EventCategory {
  id: string;         // Category ID (e.g. 'teachers-day', 'picnic')
  name: string;       // Dikhne wala naam (e.g. 'Teachers Day', 'Picnic')
  description: string;// Chhota sa description
  years: {
    [year: string]: GalleryPhoto[]; // Year ke andar photos ki list
  };
}

export const galleryEvents: EventCategory[] = [
  {
    id: "teachers-day",
    name: "Teachers Day",
    description: "Celebrations & moments with our respected mentors",
    years: {
      "2025": [
        {
          id: "td-26-1",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205417/IMG-20260716-WA0020_aphzcx.jpg",
          caption: "Teachers Day 2026"
        },
        {
          id: "td-26-2",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205407/IMG-20260716-WA0036_we86tf.jpg",
          caption: "Manish Saxena Sir"
        },
        {
          id: "td-26-3",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205405/IMG-20260716-WA0026_uwmste.jpg",
          caption: "Teachers Day Group Photo 1"
        },
        {
          id: "td-26-4",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205406/IMG-20260716-WA0032_ogvwya.jpg",
          caption: "All Faculty"
        },
        {
          id: "td-26-5",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205404/IMG-20260716-WA0029_l2joen.jpg",
          caption: "Teachers Day Group Photo 2"
        },
        {
          id: "td-26-6",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205397/IMG-20260716-WA0028_zf2fmj.jpg",
          caption: "Gift"
        },
        {
          id: "td-26-7",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205406/IMG-20260716-WA0031_ltrakl.jpg",
          caption: "Manish sir"
        },
        {
          id: "td-26-8",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205405/IMG-20260716-WA0023_fh1xdb.jpg",
          caption: "Bharat Sir"
        },
        {
          id: "td-26-9",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205405/IMG-20260716-WA0030_kxakz6.jpg",
          caption: "Subham sir"
        },
        {
          id: "td-26-10",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205404/IMG-20260716-WA0024_pqotkw.jpg",
          caption: "Renu Ma'am"
        },
        {
          id: "td-26-11",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784223945/IMG-20260716-WA0124_usndlt.jpg",
          caption: "Jitesh sir"
        }
      ],
      "2026": [
        {
          id: "td-25-1",
          url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
          caption: "Teachers Day 2025 Group Photo"
        }
      ]
    }
  },
  {
    id: "picnic",
    name: "Picnic & Outings",
    description: "Fun, games and refreshments beyond studies",
    years: {
      "2025": [
        {
          id: "pic-25-1",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205379/IMG-20260716-WA0060_bfm5xm.jpg",
          caption: "Picnic-1 2025"
        },
        {
          id: "pic-25-2",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205365/IMG-20260716-WA0057_ytpjmc.jpg",
          caption: "Picnic-2 2025"
        }
        ,
        {
          id: "pic-25-3",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205364/IMG-20260716-WA0056_cmlmvm.jpg",
          caption: "Picnic-3 2025"
        }
        ,
        {
          id: "pic-25-4",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205358/IMG-20260716-WA0058_i9zs1b.jpg",
          caption: "Picnic-4 2025"
        },
        {
          id: "pic-25-5",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205355/IMG-20260716-WA0075_u3iv1z.jpg",
          caption: "Picnic-5 2025"
        },
        {
          id: "pic-25-6",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784225397/IMG-20260716-WA0125_yjfwlo.jpg",
          caption: "Picnic-6 2025"
        },
        {
          id: "pic-25-7",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205390/IMG-20260716-WA0051_zcal6g.jpg",
          caption: "Picnic-7 2025"
        },
        {
          id: "pic-25-8",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205383/IMG-20260716-WA0053_ib4xwf.jpg",
          caption: "Picnic-8 2025"
        },
        {
          id: "pic-25-9",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205385/IMG-20260716-WA0050_h7qkrl.jpg",
          caption: "Picnic-9 2025"
        },
        {
          id: "pic-25-10",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205379/IMG-20260716-WA0060_bfm5xm.jpg",
          caption: "Picnic-10 2025"
        },
        {
          id: "pic-25-11",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205348/IMG-20260716-WA0067_vzui0i.jpg",
          caption: "Picnic-11 2025"
        },
        {
          id: "pic-25-12",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205354/IMG-20260716-WA0065_sdqr8d.jpg",
          caption: "Picnic-12 2025"
        },
        {
          id: "pic-25-13",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205347/IMG-20260716-WA0078_qdgisc.jpg",
          caption: "Picnic-13 2025"
        },
        {
          id: "pic-25-14",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205354/IMG-20260716-WA0072_zxet6d.jpg",
          caption: "Picnic-14 2025"
        },
        {
          id: "pic-25-15",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205353/IMG-20260716-WA0066_ghnhs0.jpg",
          caption: "Picnic-15 2025"
        },
        {
          id: "pic-25-16",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205354/IMG-20260716-WA0074_wswc1n.jpg",
          caption: "Picnic-16 2025"
        },
        {
          id: "pic-25-17",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205364/IMG-20260716-WA0055_qsd3hg.jpg",
          caption: "Picnic-17 2025"
        },
        {
          id: "pic-25-18",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205380/IMG-20260716-WA0054_v0pb7v.jpg",
          caption: "Picnic-18 2025"
        },
        {
          id: "pic-25-19",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205381/IMG-20260716-WA0052_mzykpj.jpg",
          caption: "Picnic-19 2025"
        },
        {
          id: "pic-25-20",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205345/IMG-20260716-WA0087_u6gya1.jpg",
          caption: "Picnic-20 2025"
        },
        {
          id: "pic-25-21",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205345/IMG-20260716-WA0068_u3vpzs.jpg",
          caption: "Picnic-21 2025"
        },
        {
          id: "pic-25-22",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205345/IMG-20260716-WA0070_ui8jfp.jpg",
          caption: "Picnic-22 2025"
        },
        {
          id: "pic-25-23",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205344/IMG-20260716-WA0080_bgjwdj.jpg",
          caption: "Picnic-23 2025"
        },
        {
          id: "pic-25-24",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205343/IMG-20260716-WA0076_ymeclu.jpg",
          caption: "Picnic-24 2025"
        },
        {
          id: "pic-25-25",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205343/IMG-20260716-WA0077_wqmttq.jpg",
          caption: "Picnic-25 2025"
        },
        {
          id: "pic-25-26",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205343/IMG-20260716-WA0085_w7xdwa.jpg",
          caption: "Picnic-26 2025"
        },
        {
          id: "pic-25-27",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-27 2025"
        },
        /*{
          id: "pic-25-28",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-28 2025"
        },
        {
          id: "pic-25-29",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-29 2025"
        },
        {
          id: "pic-25-30",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-30 2025"
        },
        {
          id: "pic-25-31",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-31 2025"
        },
        {
          id: "pic-25-32",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-32 2025"
        },
        {
          id: "pic-25-33",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-33 2025"
        },
        {
          id: "pic-25-34",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205341/IMG-20260716-WA0081_o0m4cs.jpg",
          caption: "Picnic-34 2025"
        }*/
      ],
      "2026": [
        {
          id: "pic-26-1",
          url: "ji",
          caption: "Outdoor Adventure Trip 2025"
        }
      ]
    }
  },
  {
    id: "classrooms",
    name: "Classroom Activities",
    description: "Our high-tech computer lab and live coding sessions",
    years: {
      "2026": [
        {
          id: "cls-26-1",
          url: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205340/IMG-20260716-WA0016_cjyibd.jpg",
          caption: "Farewell PGDCA"
        },
        {
          id: "cls-26-2",
          url: "ji",
          caption: "Hands-on Student Practice Session"
        }
      ]
    }
  }
  
];

// Gallery Videos list:
export const galleryVideos: GalleryVideo[] = [
  {
    id: "vid-1",
    url: "https://res.cloudinary.com/mpwyauoh/video/upload/v1784219984/picnic_in_daksh_xasqcn.mp4",
    thumbnail: "https://res.cloudinary.com/mpwyauoh/image/upload/v1784205379/IMG-20260716-WA0060_bfm5xm.jpg",
    title: "दaksh Computers Student Picnic Highlights"
  }
];
