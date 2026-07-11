// src/interfaces/post.ts
import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  youtubeUrl?: string; // 🔴 تم دمج الخاصية هنا في التعريف الوحيد
};