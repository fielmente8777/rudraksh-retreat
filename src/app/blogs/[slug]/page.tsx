import ImageBanner from "@/components/banners/ImageBanner";
import blogPostPageData from "./components/pagedata";
import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";
import { notFound } from "next/navigation";
interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogPostPageData;

  return posts.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const path = await params;
  const post = await blogPostPageData.find((post) => post.slug === path.slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  } else {
    return {
      title: post.metaData.title,
      description: post.metaData.description,
      keywords: post.metaData.keyWords,
      alternates: {
        canonical: `https://therudrakshretreat.com/blogs/${post.slug}`,
        languages: {
          "en-US": `https://therudrakshretreat.com/blogs/${post.slug}`,
        },
      },
      openGraph: {
        title: post.metaData.title,
        description: post.metaData.description,
        images: [post.bannerImage],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          nocache: true,
        },
      },
    };
  }
}

export default async function Page({ params }: Params) {
  const path = await params;
  const pageData = blogPostPageData.find((post) => post.slug === path.slug);
  if (!pageData) return notFound();
  return (
    <main className="">
      <ImageBanner
        image={pageData?.bannerImage as string}
        title={pageData?.title as string}
      />
      <SectionWithContainer>
        <div
          className="blog-data"
          dangerouslySetInnerHTML={{ __html: pageData?.content || "" }}
        />
      </SectionWithContainer>
    </main>
  );
}
