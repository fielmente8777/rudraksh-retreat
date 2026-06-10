import ImageBanner from "@/components/banners/ImageBanner";
import Gallery from "./components/gallery";
import { galleryPageData } from "./components/pageData";

export default function Page() {
  return (
    <main>
      <ImageBanner {...galleryPageData?.bannerData} />
      {/* <GalleryBanner title={galleryPageData.bannerData.title} /> */}

      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}
