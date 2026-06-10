import { galleryPageData } from "./components/pageData";
import GalleryBanner from "./components/galleryBanner";
import Gallery from "./components/gallery";
// import { homePageData } from "../(home)/components/pageData";
// import TitleSection from "@/components/TitleSection";

export default function Page() {
  return (
    <main>
      {/* <TitleSection titles={homePageData.titles} /> */}
      <GalleryBanner title={galleryPageData.bannerData.title} />

      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}
