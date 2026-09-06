import Image from "next/image";
import ChapterHero from "@/components/ChapterHero";
import PagBar from "@/components/PagBar";
import Reveal from "@/components/Reveal";
import TransitionLink from "@/components/TransitionLink";

import moments2022 from "@/assets/2022-2.jpeg";
import graduation1 from "@/assets/2023-Nana-kofi-Master's-graduation-1.jpeg";
import graduation2 from "@/assets/2023-Nana-kofi-Master's-graduation-2.jpeg";
import moments2025 from "@/assets/2025-2.jpeg";
import juliaWedding2 from "@/assets/2026-Julia's-wedding-2.jpeg";
import juliaWedding3 from "@/assets/2026-Julia's-wedding-3.jpeg";

import prewedding01 from "@/assets/wede/prewedding-01.jpeg";
import prewedding02 from "@/assets/wede/prewedding-02.jpeg";
import prewedding03 from "@/assets/wede/prewedding-03.jpeg";
import prewedding04 from "@/assets/wede/prewedding-04.jpeg";
import prewedding05 from "@/assets/wede/prewedding-05.jpeg";
import prewedding06 from "@/assets/wede/prewedding-06.jpeg";
import prewedding07 from "@/assets/wede/prewedding-07.jpeg";
import prewedding08 from "@/assets/wede/prewedding-08.jpeg";
import prewedding09 from "@/assets/wede/prewedding-09.jpeg";
import prewedding10 from "@/assets/wede/prewedding-10.jpeg";
import prewedding11 from "@/assets/wede/prewedding-11.jpeg";
import prewedding12 from "@/assets/wede/prewedding-12.jpeg";
import prewedding13 from "@/assets/wede/prewedding-13.jpeg";
import prewedding14 from "@/assets/wede/prewedding-14.jpeg";
import prewedding15 from "@/assets/wede/prewedding-15.jpeg";
import prewedding16 from "@/assets/wede/prewedding-16.jpeg";
import prewedding17 from "@/assets/wede/prewedding-17.jpeg";
import prewedding18 from "@/assets/wede/prewedding-18.jpeg";

const PREWEDDING_PHOTOS = [
  prewedding01,
  prewedding02,
  prewedding03,
  prewedding04,
  prewedding05,
  prewedding06,
  prewedding07,
  prewedding08,
  prewedding09,
  prewedding10,
  prewedding11,
  prewedding12,
  prewedding13,
  prewedding14,
  prewedding15,
  prewedding16,
  prewedding17,
  prewedding18,
];

const PHOTOS = [
  {
    video: "/gallery-videos/2020-first-visit1.mp4",
    caption: "Our first visit",
    sub: "2020",
  },
  {
    video: "/gallery-videos/2020-first-visit2.mp4",
    caption: "Our first visit",
    sub: "2020",
  },
  {
    video: "/gallery-videos/2020-first-visit3.mp4",
    caption: "Our first visit",
    sub: "2020",
  },
  {
    video: "/gallery-videos/2021-the-funeral-anniversary.mp4",
    caption: "Remembering together",
    sub: "2021 — the funeral anniversary",
  },
  {
    video: "/gallery-videos/2022-1.mp4",
    caption: "Moments from 2022",
    sub: "2022",
  },
  {
    img: moments2022,
    caption: "Moments from 2022",
    sub: "2022",
  },
  {
    img: graduation1,
    caption: "Nana Kofi's graduation",
    sub: "2023 — celebrating his Master's",
  },
  {
    img: graduation2,
    caption: "Nana Kofi's graduation",
    sub: "2023 — celebrating his Master's",
  },
  {
    video: "/gallery-videos/2023-Nana-kofi-Masters-graduation-3.mp4",
    caption: "Nana Kofi's graduation",
    sub: "2023 — celebrating his Master's",
  },
  {
    video: "/gallery-videos/2023-Nana-kofi-Masters-graduation-4.mp4",
    caption: "Nana Kofi's graduation",
    sub: "2023 — celebrating his Master's",
  },
  {
    video: "/gallery-videos/2024-Easter-together-1.mp4",
    caption: "Easter together",
    sub: "2024",
  },
  {
    video: "/gallery-videos/2024-Easter-together-2.mp4",
    caption: "Easter together",
    sub: "2024",
  },
  {
    video: "/gallery-videos/2024-Easter-together-3.mp4",
    caption: "Easter together",
    sub: "2024",
  },
  {
    video: "/gallery-videos/2024-Easter-together-4.mp4",
    caption: "Moments from 2025",
    sub: "2025",
  },
  {
    video: "/gallery-videos/2024-Easter-together-5.mp4",
    caption: "Moments from 2025",
    sub: "2025",
  },
  {
    video: "/gallery-videos/2025-1.mp4",
    caption: "Moments from 2025",
    sub: "2025",
  },
  {
    img: moments2025,
    caption: "Moments from 2025",
    sub: "2025",
  },
  {
    video: "/gallery-videos/2026-Julias-wedding-1.mp4",
    caption: "Julia's wedding",
    sub: "2026",
  },
  {
    img: juliaWedding2,
    caption: "Julia's wedding",
    sub: "2026",
  },
  {
    img: juliaWedding3,
    caption: "Julia's wedding",
    sub: "2026",
  },
  ...PREWEDDING_PHOTOS.map((img) => ({
    img,
    caption: "Our pre-wedding photoshoot",
    sub: "2026",
  })),
];

export default function GalleryPage() {
  return (
    <section className="chapter">
      <ChapterHero
        eyebrow="MOMENTS WE TREASURE"
        title={
          <>
            Our <em>Gallery</em>
          </>
        }
        lede="Moments captured in time — a peek into the story so far, with plenty more to come."
      />
      <div className="chapter-body">
        <div className="gallery-grid">
          {PHOTOS.map((p, i) => (
            <Reveal
              as="div"
              delay={(i % 3) * 0.08}
              className="gallery-item"
              key={`${p.caption}-${i}`}
            >
              <div className="gallery-tile" style={{ position: "relative" }}>
                {p.video ? (
                  <video src={p.video} muted controls playsInline />
                ) : p.img ? (
                  <Image
                    src={p.img}
                    alt={p.caption}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    priority={i < 3}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className={`tile-ph ${p.ph}`}>
                    Photo {String(i + 1).padStart(2, "0")}
                  </div>
                )}
              </div>
              <div className="gallery-caption">
                <span className="cap-rule" />
                <div>
                  {p.caption}
                  <span className="cap-sub">{p.sub}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={0.1} className="share-cta">
          <hr className="rule center" />
          <p className="share-cta-question">Were you at the wedding?</p>
          <TransitionLink href="/guest-gallery" className="filled-btn">
            SHARE YOUR PHOTOS
          </TransitionLink>
        </Reveal>
      </div>
      <PagBar
        prev={{ href: "/story", label: "OUR STORY" }}
        next={{ href: "/details", label: "THE DETAILS" }}
      />
    </section>
  );
}
