import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahmedshaker.org";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // ملاحظة: سنقوم بتطوير هذا الملف لاحقاً ليدور برمجياً (Loop) 
    // على مجلد المقالات القديمة والجديدة ويضيفها هنا تلقائياً
  ];
}