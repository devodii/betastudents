"use client";

import cn from "clsx";
import Image, { type ImageProps } from "next/image";
import * as React from "react";

export default function BlurImage(props: ImageProps) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0"
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
