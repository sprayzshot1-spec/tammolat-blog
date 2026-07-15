import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // إذا كان لديك مسارات خاصة لا تريد لجوجل أرشفتها يمكنك إضافتها هنا
      // disallow: '/private/', 
    },
    sitemap: 'https://www.ahmedshaker.org/sitemap.xml',
  };
}