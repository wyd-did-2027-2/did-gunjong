import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem00() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/gunjong/mk_1.png`}
        alt="군종1"
        fill
        className="object-fill min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/gunjong/pk_1.png`}
        alt="군종1"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
