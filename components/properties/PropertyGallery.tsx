'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type Props = {
  images: string[];
  title: string;
};

export default function PropertyGallery({ images, title }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setOpen(true);
  };

  const prev = () =>
    setLightboxIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setLightboxIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* Hero grid */}
      <div className="relative grid grid-cols-2 grid-rows-[280px_180px] gap-1.5 overflow-hidden rounded-xl">
        {/* Main large image */}
        <div
          className="relative row-span-2 cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </div>

        {/* Top right */}
        <div
          className="relative cursor-pointer"
          onClick={() => openLightbox(1)}
        >
          <Image
            src={images[1] ?? images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom right */}
        <div
          className="relative cursor-pointer"
          onClick={() => openLightbox(2)}
        >
          <Image
            src={images[2] ?? images[0]}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Show all button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openLightbox(0);
            }}
            className="absolute right-3 bottom-3 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-gray-50"
          >
            Show all {images.length} photos
          </button>
        </div>

        {/* Counter pill */}
        <div className="absolute top-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="scrollbar-hide mt-2 flex gap-2 overflow-x-auto pb-1">
        {images.slice(0, 6).map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveIndex(i);
              openLightbox(i);
            }}
            className={`relative h-[52px] w-[72px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md border transition ${
              activeIndex === i
                ? 'border-2 border-black opacity-100'
                : 'border border-gray-200 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`photo ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {images.length > 6 && (
          <div
            onClick={() => openLightbox(6)}
            className="flex h-[52px] w-[72px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md border border-gray-200 text-xs text-gray-500 transition hover:bg-gray-50"
          >
            +{images.length - 6}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full max-w-4xl border-none bg-black p-0">
          <div className="relative flex h-[80vh] w-full items-center justify-center">
            <Image
              src={images[lightboxIndex]}
              alt={`${title} - photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-3 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
