import * as React from "react";

export default function useFilePreview(file: any) {
  const [imgSrc, setImgSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (file && file[0]) {
      console.log(file[0].size);
      const url = URL.createObjectURL(file[0]);
      const img = new Image();
      img.src = url;
      img.onload = function () {
        document.body.appendChild(img);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx?.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            const fr = new FileReader();
            fr.readAsDataURL(blob!);

            fr.addEventListener("load", () => {
              const dataURL = fr.result;

              setImgSrc(dataURL as string);
            });
            console.log("logging blob");
            console.log(blob, blob?.size);
          },
          "image/webp",
          0.7
        );
      };
    }
  }, [file]);

  return [imgSrc, setImgSrc];
}
