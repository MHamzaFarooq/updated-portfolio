"use client";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import Stack from "../Stack";
import Image from "next/image";

const images = ["/images/pic1.jpg", "/images/pic2.jpeg", "/images/pic3.jpeg"];

export default function About() {
  const stackCards = images.map((src, i) => (
    <Image
      key={i}
      width={208}
      height={280}
      src={src}
      alt={`card-${i + 1}`}
      className="w-full h-full object-cover rounded-xl"
    />
  ));

  return (
    <div className="w-full min-h-screen">
      <div className=" max-w-280 mx-auto flex justify-center gap-38 py-20">
        {/* Give the stack wrapper explicit size and ensure pointer events work */}
        <div className="w-52 h-70 shrink-0 relative active:cursor-grabbing">
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={stackCards}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>

        <div className="max-w-113.75 flex flex-col">
          <Heading primary="About" secondary="me" />
          <p className="font-retail text-[16px] text-[#4F5053] mt-3">
            My name is Hamza Farooq. I am a designer turned coder, builder, and
            developer with 2+ years of professional experience in product design
            and full-stack development. In my free time, I like to try out
            different restaurants, spend time with family and friends, and I am
            a #1 fan of chai. In simple terms, I am easy to work with.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <Button variant="filled">Let's talk</Button>
            <Button variant="outline">Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
