"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import CustomNavBar from "./customNavBar";

export default function Home() {
  const scrollToWhyChess = () => {
    const section = document.getElementById("why-chess");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919028698447">
        <Image
          src="/whatsapp-green.png"
          width={70}
          height={70}
          alt="Whatsapp icon"
          className="fixed bottom-5 right-5 z-50 cursor-pointer"
        />
      </a>

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative min-h-screen
          flex flex-col items-center justify-center
          text-center px-6 overflow-hidden
          bg-gradient-to-br from-[#339D87] via-[#2f8f7b] to-[#1f6f60]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4f45]/40 via-[#339D87]/25 to-[#6b46c1]/18 mix-blend-overlay" />
          <div className="absolute -top-20 -left-16 w-96 h-96 bg-purple-600/12 rounded-full blur-3xl" />
          <div className="absolute bottom-24 -right-24 w-80 h-80 bg-blue-500/12 rounded-full blur-2xl" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#33a089]/10 rounded-full blur-2xl" />

          {/* Large chess pieces */}
          <Image
            src="/chess-king.png"
            alt=""
            width={460}
            height={460}
            className="absolute top-12 left-[-12px] opacity-40 blur-sm"
          />
          <Image
            src="/chess-queen.png"
            alt=""
            width={400}
            height={400}
            className="absolute bottom-12 right-[-4px] opacity-40 blur-sm"
          />
          <Image
            src="/chess-knight.png"
            alt=""
            width={340}
            height={340}
            className="absolute top-1/2 right-1/4 opacity-30 blur-sm"
          />
        </div>

        {/* Foreground */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <CustomNavBar />

          {/* Hero Content */}
          <div className="flex flex-col items-center pt-[8vh]">
            <h1
              className="hero-title font-extrabold text-4xl sm:text-6xl max-w-4xl leading-tight text-white"
              style={{
                textShadow:
                  "0 0 30px rgba(51,157,135,0.5), 0 0 60px rgba(51,157,135,0.3)",
              }}
            >
              Train Like a{" "}
              <span
                className="bg-[#F4C430] bg-clip-text text-transparent"
                style={{ textShadow: "0 0 18px rgba(244,196,48,0.35)" }}
              >
                Champion
              </span>
              ! <br />
              Play Like One.
            </h1>

            <p className="mt-8 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Expert training by FIDE-rated coaches • Consistent Results <br />
              Trusted by 1,000+ learners worldwide
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-a-free-trial">
                <Button className="bg-white text-[#339D87] font-semibold px-8 py-6 text-lg shadow-lg hover:scale-105 transition">
                  Book a Free Trial
                </Button>
              </a>

              <Button
                onClick={scrollToWhyChess}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-6 text-lg hover:bg-white/10 transition"
              >
                Learn More ↓
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHESS ================= */}
      <section
        id="why-chess"
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="font-bold text-4xl text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60] bg-clip-text text-transparent">
          Why Chess?
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-5xl">
          {[
            {
              title: "A Game for All Ages",
              desc: "Chess is a lifelong journey of learning and enjoyment.",
            },
            {
              title: "Enhances Critical Thinking",
              desc: "Develops planning and decision-making skills.",
            },
            {
              title: "Improves Memory & Focus",
              desc: "Strengthens concentration and recall.",
            },
            {
              title: "Boosts Academic Performance",
              desc: "Improves logical reasoning and comprehension.",
            },
          ].map((item, index) => (
            <Card key={index} className="border-l-4 border-[#339D87]">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60]">
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Ready to See Real Progress in Chess?
        </h2>
        <p className="text-white/90 mt-4 max-w-xl mx-auto">
          Book a free trial session and experience structured coaching that
          delivers results.
        </p>
        <a href="/book-a-free-trial">
          <Button className="mt-8 bg-white text-[#339D87] px-8 py-6 text-lg font-semibold">
            Book a Free Trial
          </Button>
        </a>
      </section>
    </div>
  );
}
