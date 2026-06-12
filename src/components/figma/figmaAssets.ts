/** Stable portrait URLs for Figma-accurate avatars (fictional demo users). */
export const FIGMA_PHOTOS = {
  user: "https://i.pravatar.cc/96?img=12",
  decio: "https://i.pravatar.cc/96?img=33",
  dylan: "https://i.pravatar.cc/96?img=15",
  gator: "https://i.pravatar.cc/96?img=28",
  mikhail: "https://i.pravatar.cc/96?img=51",
  aeyzechiah: "https://i.pravatar.cc/96?img=22",
  ankur: "https://i.pravatar.cc/96?img=8",
  adeeb: "https://i.pravatar.cc/96?img=45",
  ashish: "https://i.pravatar.cc/96?img=68",
  account: "https://i.pravatar.cc/96?img=11",
} as const;

export type FigmaPhotoId = keyof typeof FIGMA_PHOTOS;

export const FIGMA_DM_USERS = [
  { name: "Dylan Tallon", online: true, photo: "dylan" as FigmaPhotoId },
  { name: "GatorAide", online: true, photo: "gator" as FigmaPhotoId },
  { name: "Mikhail Budko", online: true, photo: "mikhail" as FigmaPhotoId },
  { name: "Dylan Tallon", online: false, photo: "dylan" as FigmaPhotoId },
  { name: "Aeyzechiah Vasquez", online: false, photo: "aeyzechiah" as FigmaPhotoId },
  { name: "Ankur Garg", online: false, photo: "ankur" as FigmaPhotoId },
  { name: "Adeeb Rashid", online: false, photo: "adeeb" as FigmaPhotoId },
];
