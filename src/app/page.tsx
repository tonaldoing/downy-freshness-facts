"use client";

import { useState } from "react";
import Image from "next/image";
import BackgroundWrapper from "./components/BackgroundWrapper";

const facts = [
  {
    title: "DUSTING AROUND THE HOUSE",
    description:
      "Use a dryer sheet to remove dust from surfaces such as window blinds and computer screens.",
    image: "/images/fact-1.webp",
  },
  {
    title: "FRESHEN UP YOUR DRAWERS",
    description:
      "Slip an unused dryer sheet in a sock, lingerie, or other dresser drawer for a light, fresh scent. Your clothes will always smell fresh from the dryer.",
    image: "/images/fact-2.webp",
  },
  {
    title: "THE BEST-KEPT TRAVEL SECRET",
    description:
      "Keep a dryer sheet in your suitcase or carry-on bag between trips so your luggage always smells fresh.",
    image: "/images/fact-3.webp",
  },
  {
    title: "FRESHEN ANY AND EVERYTHING",
    description:
      "Your imagination is the limit when it comes to bringing Downy freshness outside of the laundry room...",
    image: "/images/fact-4.webp",
  },
  {
    title: "HOW TO USE DOWNY BALL",
    description:
      "Adding fabric softener to your wash is hassle-free. With the Downy Ball, you’ll no longer worry...",
    image: "/images/fact-5.webp",
  },
  {
    title:
      "DOWNY RINSE & REFRESH REMOVES ODOR SIGNIFICANTLY BETTER THAN VINEGAR",
    description:
      "Based on odor and stain removal vs leading national vinegar brand. 5 cups vinegar = 1/2 cup Downy Rinse",
    image: "/images/fact-6.webp",
  },
];

const backgrounds = [
  "bg-gradient-to-b from-[#030D62] to-[#4C8FBB]",
  "bg-gradient-to-b from-[#000000] to-[#61CBC7]",
  "bg-gradient-to-b from-[#00295B] to-[#D47DA8]",
  "bg-gradient-to-b from-[#081F49] to-[#A688BC]",
  "bg-gradient-to-b from-[#04163C] to-[#3F886B]",
  "bg-gradient-to-b from-[#05143C] to-[#E15F2F]",
];

const titleColors = [
  "#24B6FF",
  "#65CAC6",
  "#D47DA8",
  "#C1ABD7",
  "#66C1A2",
  "#E15F2F",
];

export default function Home() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // FORM SCREEN
  if (showForm) {
    return (
      <BackgroundWrapper>
        <div className="w-full max-w-md aspect-[9/16] rounded-[35px] overflow-hidden shadow-lg bg-white z-10">
          <iframe
            src="https://www.pggoodeveryday.com/?iss=https%3A%2F%2Faccount.pggoodeveryday.com%2F"
            title="PG Good Everyday"
            className="w-full h-full border-none"
          />
        </div>

        <button
          onClick={() => {
            setShowForm(false);
            setFlippedIndex(null);
          }}
          className="w-[400px] mx-auto mt-10 bg-white text-[#094A72] font-bold text-sm px-8 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-105 cursor-pointer transition z-10 text-center"
        >
          MORE FACTS
          <span className="text-xl">→</span>
        </button>
      </BackgroundWrapper>
    );
  }

  // FLIPPED FACT SCREEN
  if (flippedIndex !== null) {
    return (
      <BackgroundWrapper onClick={() => setFlippedIndex(null)}>
        <div
          className="relative bg-white p-[5px] rounded-[40px] w-[400px] z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`rounded-[35px] text-white flex flex-col items-center justify-between h-full min-h-[460px] ${backgrounds[flippedIndex]}`}
          >
            <h2
              className="text-[35px] leading-tight font-bold text-center uppercase mb-4 px-6 pt-6"
              style={{ color: titleColors[flippedIndex] }}
            >
              {facts[flippedIndex].title}
            </h2>
            <p className="text-[25px] leading-snug text-white text-center mb-2 px-6">
              {facts[flippedIndex].description}
            </p>
            <Image
              src={facts[flippedIndex].image}
              alt="Fact illustration"
              className="w-full"
              width={300}
              height={200}
            />
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowForm(true);
          }}
          className="w-[400px] mx-auto mt-10 bg-white text-[#094A72] font-bold text-sm px-8 py-3 rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-105 cursor-pointer transition z-10 text-center"
        >
          KEEP GOING
          <span className="text-xl">→</span>
        </button>
      </BackgroundWrapper>
    );
  }

  // MAIN SCREEN
  return (
    <BackgroundWrapper>
      <h1 className="text-2xl font-bold mb-2 bg-white px-4 py-2 text-[#094A72] rounded-xl">
        FRESHNESS FACTS
      </h1>
      <p className="text-lg text-white font-bold mb-4">
        Pick a card to reveal a clever Downy hack
      </p>

      <div className="flex flex-col items-center justify-center flex-1 max-h-[calc(100vh-150px)] overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-2">
          {facts.map((_, index) => (
            <div
              key={index}
              className="p-[5px] bg-white rounded-[20px] relative hover:scale-105 transition"
            >
              <button
                onClick={() => setFlippedIndex(index)}
                className={`w-[278px] h-[clamp(280px,35vh,360px)] ${backgrounds[index]} rounded-[15px] shadow-lg flex flex-col justify-center items-center cursor-pointer`}
              >
                {/* FLORES DECORATIVAS */}
                <Image
                  src="/images/mini-flower-1.png"
                  alt="Flower"
                  width={33}
                  height={30}
                  className="absolute top-5 right-10 h-auto"
                  priority
                />
                <Image
                  src="/images/mini-flower-2.png"
                  alt="Flower"
                  width={49}
                  height={49}
                  className="absolute bottom-10 left-0 h-auto"
                  priority
                />
                <Image
                  src="/images/mini-flower-3.png"
                  alt="Flower"
                  width={49}
                  height={64}
                  className="absolute bottom-0 right-0 h-auto"
                  priority
                />

                <Image
                  src="/images/Downy.png"
                  alt="Downy Logo"
                  width={140}
                  height={77}
                  priority
                />
                <span className="text-3xl leading-10 font-bold uppercase text-white text-center break-words">
                  Freshness <br />
                  Fact
                </span>
                <span className="text-white font-bold text-7xl leading-tight mt-2 text-white">
                  {index + 1}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </BackgroundWrapper>
  );
}
