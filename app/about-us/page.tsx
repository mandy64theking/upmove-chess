import CustomNavBar from "../customNavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#339D87]/5 via-transparent to-transparent">
      <CustomNavBar />

      {/* Decorative Chess Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-12 left-10 text-7xl text-[#339D87]/25 upmove-fade">
          ♔
        </div>
        <div className="absolute top-40 left-24 text-5xl text-[#339D87]/20 upmove-fade">
          ♘
        </div>

        {/* Top Right */}
        <div className="absolute top-16 right-16 text-7xl text-[#339D87]/25 upmove-fade">
          ♕
        </div>
        <div className="absolute top-48 right-28 text-5xl text-[#339D87]/20 upmove-fade">
          ♖
        </div>

        {/* Center Ambient */}
        <div className="absolute top-1/2 left-1/3 text-8xl text-[#339D87]/10 upmove-fade">
          ♛
        </div>

        {/* Bottom */}
        <div className="absolute bottom-28 left-24 text-6xl text-[#339D87]/20 upmove-fade">
          ♟
        </div>
        <div className="absolute bottom-20 right-32 text-6xl text-[#339D87]/20 upmove-fade">
          ♝
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-[18vh] px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl">
          <h1
            className="font-extrabold text-3xl sm:text-4xl tracking-tight
                       bg-gradient-to-r from-[#339D87] to-[#1f6f60]
                       bg-clip-text text-transparent"
          >
            What We Do Differently
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            A structured, student-first approach focused on long-term chess
            growth — not shortcuts or random training.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-6xl w-full">
          <Card className="border-l-4 border-[#339D87] dark:bg-muted hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-center">
                Personalized Coaching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Each student follows an individual training plan tailored to
                their level, learning pace, and competitive goals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#339D87] dark:bg-muted hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-center">
                Learning from Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                We treat mistakes as data. Every error is analyzed, understood,
                and converted into a strength.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-[#339D87] dark:bg-muted hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-center">
                Tournament Preparation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Structured preparation, psychological readiness, and post-game
                analysis ensure consistent tournament performance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Credibility */}
        <div className="mt-20 text-center max-w-2xl">
          <h2 className="font-semibold text-xl text-[#339D87]">
            Operational Since 2023
          </h2>
          <p className="mt-2 text-muted-foreground">
            Upmove Chess Academy is an established name in mentoring students to
            become confident, competitive chess players.
          </p>
        </div>

        {/* Presence */}
        <div className="mt-10 text-center">
          <h3 className="font-semibold text-lg">Global Presence</h3>
          <p className="mt-2 text-muted-foreground">
            USA • India • Canada • Germany • Poland • UAE • Singapore • New
            Zealand
          </p>
        </div>
      </section>
    </div>
  );
}
