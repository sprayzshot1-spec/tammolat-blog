import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import YouTubePromo from "@/app/_components/YouTubePromo";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          
          {/* 🔴 عرض مشغل الفيديو في نهاية المقال إذا كان الرابط موجوداً في ترويسة المقال */}
          {post.youtubeUrl && (
             <YouTubePromo videoUrl={post.youtubeUrl} title="شاهد هذا الجزء عبر يوتيوب" />
          )}

        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${CMS_NAME}`;
  
  // 🔴 دمج رابط الموقع الكامل مع تشفير المسار
  const fullImageUrl = `https://www.ahmedshaker.org${encodeURI(post.ogImage?.url || '')}`;

  // 🔴 سحر الـ SEO: استخراج وصف ديناميكي من محتوى المقال (أول 150 حرف) لعدم وجود ملخص جاهز
  const plainTextContent = post.content 
    ? post.content.replace(/<[^>]+>/g, '').replace(/[#*_\[\]]/g, '').replace(/\n/g, ' ').trim() 
    : '';
  const description = plainTextContent.length > 0 
    ? plainTextContent.substring(0, 150) + '...'
    : 'مقال فلسفي وديني يتناول تأملات وأفكار عميقة للكاتب أحمد شاكر.';

  return {
    title,
    description, // 🔴 إضافة الوصف لمحركات البحث (جوجل)
    openGraph: {
      title,
      description, // 🔴 إضافة الوصف لمنصات التواصل (فيسبوك، واتساب، تويتر)
      images: [fullImageUrl],
      url: `https://www.ahmedshaker.org/posts/${post.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    }
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}