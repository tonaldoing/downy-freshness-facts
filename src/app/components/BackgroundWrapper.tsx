"use client";
import Image from "next/image";

export default function BackgroundWrapper({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className="min-h-screen relative bg-gradient-to-b from-[#094A72] to-[#4395B7] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
      onClick={onClick}
    >
      {/* FLORES DECORATIVAS */}
      <Image
        src="/images/flower-1.png"
        alt="Flower"
        width={150}
        height={150}
        className="absolute top-0 left-0 h-auto"
        priority
      />
      <Image
        src="/images/flower-2.png"
        alt="Flower"
        width={75}
        height={75}
        className="absolute top-0 right-0 h-auto"
        priority
      />
      <Image
        src="/images/flower-3.png"
        alt="Flower"
        width={75}
        height={75}
        className="absolute bottom-0 right-0 h-auto"
        priority
      />
      {children}
    </div>
  );
}
