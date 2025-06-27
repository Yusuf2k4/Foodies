"use client";

import { getURL } from "@/lib/getUrl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageURL({ image }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    async function fetchImage() {
      const data = await getURL(image);
      const img = new window.Image();
      img.src = data;
      setImageUrl(data);
    }
    if (image) {
      fetchImage();
      console.log("IMAGE URRRRR" + imageUrl);
    }
  }, [image]);
  return (
    <>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Meal image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="image-placeholder">Loading...</div> // optional skeleton
      )}
    </>
  );
}
