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
        className="relative min-h-screen flex flex-col items-center text-center px-6 overflow-hidden
        bg-gradient-to-br from-[#339D87] via-[#2f8f7b] to-[#1f6f60]"
      >
        {/* Chess Pieces Background + layered gradient overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle overlay to enrich the base teal gradient and add purple accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4f45]/40 via-[#339D87]/25 to-[#6b46c1]/18 mix-blend-overlay" />
          {/* Blurred color orbs for depth */}
          <div className="absolute -top-20 -left-16 w-96 h-96 bg-purple-600/12 rounded-full blur-3xl" />
          <div className="absolute bottom-24 -right-24 w-80 h-80 bg-blue-500/12 rounded-full blur-2xl" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#33a089]/10 rounded-full blur-2xl" />

          {/* Large background pieces (multiple, varied sizes/positions) */}
          <Image
            src="/chess-king.png"
            alt=""
            width={460}
            height={460}
            className="absolute top-12 left-[-12px] opacity-48 blur-sm scale-105 transition-all duration-700"
          />
          <Image
            src="/chess-queen.png"
            alt=""
            width={400}
            height={400}
            className="absolute bottom-12 right-[-4px] opacity-44 blur-sm scale-105 transition-all duration-700"
          />
          <Image
            src="/chess-knight.png"
            alt=""
            width={340}
            height={340}
            className="absolute top-1/2 right-1/4 opacity-36 blur-sm scale-105 transition-all duration-700"
          />
          <Image
            src="/chess-king.png"
            alt=""
            width={260}
            height={260}
            className="absolute bottom-40 left-[-20px] opacity-36 blur-sm scale-105 transition-all duration-900"
          />
          <Image
            src="/chess-queen.png"
            alt=""
            width={220}
            height={220}
            className="absolute top-28 right-1/3 opacity-32 blur-sm scale-100 transition-all duration-900"
          />

          {/* Decorative emoji chess pieces (increased count, staggered delays) */}
          <div
            className="absolute top-8 left-6 text-8xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0s" }}
          >
            ♔
          </div>
          <div
            className="absolute top-16 right-12 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.3s" }}
          >
            ♕
          </div>
          <div
            className="absolute top-28 left-28 text-6xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.6s" }}
          >
            ♖
          </div>
          <div
            className="absolute top-1/3 right-20 text-9xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.9s" }}
          >
            ♛
          </div>
          <div
            className="absolute left-1/3 bottom-44 text-8xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.1s" }}
          >
            ♘
          </div>
          <div
            className="absolute bottom-28 right-28 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.4s" }}
          >
            ♝
          </div>
          <div
            className="absolute bottom-12 left-16 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.6s" }}
          >
            ♟️
          </div>
          <div
            className="absolute right-16 top-1/2 text-6xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.9s" }}
          >
            ♞
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <CustomNavBar />

          <div className="mt-64 flex flex-col items-center">
            <h1
              className="hero-title text-white font-extrabold text-4xl sm:text-6xl max-w-4xl leading-tight"
              style={{
                textShadow:
                  "0 0 30px rgba(51, 157, 135, 0.5), 0 0 60px rgba(51, 157, 135, 0.3)",
              }}
            >
              Train Like a Champion! <br /> Play Like One.
            </h1>

            <p className="mt-8 text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Expert training by FIDE-rated coaches • Consistent Results <br />
              Trusted by 1,000+ learners worldwide
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book-a-free-trial">
                <Button className="bg-white cursor-pointer text-[#339D87] font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/95">
                  Book a Free Trial
                </Button>
              </a>

              <Button
                onClick={scrollToWhyChess}
                className="bg-transparent border-2 cursor-pointer border-white text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:border-white/80"
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
        {/* Decorative chess pieces */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-10 left-8 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0s" }}
          >
            ♘
          </div>
          <div
            className="absolute bottom-20 right-12 text-6xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.5s" }}
          >
            ♗
          </div>
          <div
            className="absolute top-1/3 right-20 text-5xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1s" }}
          >
            ♙
          </div>
        </div>
        <div className="relative">
          <h2
            className="font-bold text-4xl text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60]
          bg-clip-text text-transparent"
          >
            Why Chess?
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-5xl">
            {[
              {
                title: "A Game for All Ages",
                desc: "Chess is a lifelong journey of learning and enjoyment. It’s never too early—or too late—to start.",
              },
              {
                title: "Enhances Critical Thinking",
                desc: "Develops planning, foresight, and decision-making skills essential in academics and life.",
              },
              {
                title: "Improves Memory & Focus",
                desc: "Strengthens concentration and recall through pattern recognition and calculation.",
              },
              {
                title: "Boosts Academic Performance",
                desc: "Proven to improve logical reasoning, mathematics, and reading comprehension.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-[#339D87] dark:bg-muted"
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-muted/30">
        {/* Decorative chess pieces */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-10 left-8 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.2s" }}
          >
            ♔
          </div>
          <div
            className="absolute bottom-20 right-12 text-6xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.7s" }}
          >
            ♕
          </div>
          <div
            className="absolute top-1/3 right-20 text-5xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.2s" }}
          >
            ♖
          </div>
        </div>
        <div className="relative">
          <h2
            className="font-bold text-4xl text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60]
          bg-clip-text text-transparent"
          >
            Who We Are
          </h2>

          <p className="mt-8 max-w-3xl text-center text-lg">
            <b>Upmove Chess Academy</b> is a professional chess institute
            delivering structured mentorship, personalized plans, and real-game
            analysis to players across the globe.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-6xl">
            {[
              { label: "Students Trained", value: "200+" },
              { label: "Rated Players Created", value: "20+" },
              { label: "Hours of Training", value: "10,000+" },
              { label: "FIDE Rated Trainers", value: "5+ Years Exp." },
              { label: "Global Presence", value: "10+ Countries" },
              { label: "Tournament Victories", value: "Unlimited" },
            ].map((item, index) => (
              <Card key={index} className="text-center dark:bg-muted">
                <CardHeader>
                  <CardTitle>{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="font-bold text-2xl">
                  {item.value}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20">
        {/* Decorative chess pieces */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-10 left-8 text-7xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.1s" }}
          >
            ♛
          </div>
          <div
            className="absolute bottom-20 right-12 text-6xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "0.6s" }}
          >
            ♝
          </div>
          <div
            className="absolute top-1/3 right-20 text-5xl text-[#339D87] upmove-fade"
            style={{ animationDelay: "1.1s" }}
          >
            ♟️
          </div>
        </div>
        <div className="relative">
          <h2 className="font-bold text-4xl text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60] bg-clip-text text-transparent">
            What We Do
          </h2>

          <p className="mt-8 max-w-3xl text-center text-lg mx-auto">
            We offer <b>Group</b> and <b>1-on-1</b> coaching sessions with
            expert trainers, tailored for beginners to advanced tournament
            players.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Group Classes",
                desc: "Small batches of 3–6 students following a structured, level-wise curriculum.",
              },
              {
                title: "1-on-1 Coaching",
                desc: "Personalized training plans with deep analysis and performance tracking.",
              },
              {
                title: "Offline Classes",
                desc: "In-person coaching with structured lessons and fun learning activities.",
                footer: "Available in Amravati (M.H)",
              },
            ].map((item, index) => (
              <Card key={index} className="dark:bg-muted">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {item.desc}
                </CardContent>
                {item.footer && (
                  <CardFooter className="text-sm text-muted-foreground">
                    {item.footer}
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-[#339D87] to-[#1f6f60]">
        {/* Decorative chess pieces */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-10 left-8 text-7xl text-white upmove-fade"
            style={{ animationDelay: "0s" }}
          >
            ♚
          </div>
          <div
            className="absolute bottom-20 right-12 text-6xl text-white upmove-fade"
            style={{ animationDelay: "0.4s" }}
          >
            ♘
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Ready to See Real Progress in Chess?
          </h2>
          <p className="text-white/90 mt-4 max-w-xl mx-auto">
            Book a free trial session and experience structured coaching that
            delivers results.
          </p>
          <a href="/book-a-free-trial">
            <Button className="mt-8 cursor-pointer bg-white text-[#339D87] px-8 py-6 text-lg font-semibold">
              Book a Free Trial
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
