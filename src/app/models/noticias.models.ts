export interface Noticia {
  id?: string;
  title: string;
  author?: string;
  createdAt: Date | any;  // 'any' for Firestore timestamps
  updatedAt?: Date | any;
  imageUrl?: string;
  content: string;
}