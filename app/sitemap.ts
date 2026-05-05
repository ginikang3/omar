    import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://omar-plomeria.vercel.app', // 실제 배포될 도메인으로 나중에 수정
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}