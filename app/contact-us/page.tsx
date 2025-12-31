import CustomNavBar from "../customNavBar";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#339D87]/5 via-transparent to-transparent">
      <CustomNavBar />

      {/* ================= CHESS BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left */}
        <div className="absolute top-16 left-10 text-7xl text-[#339D87]/25 upmove-fade">
          ♔
        </div>
        <div className="absolute top-40 left-24 text-5xl text-[#339D87]/20 upmove-fade">
          ♘
        </div>

        {/* Top Right */}
        <div className="absolute top-20 right-16 text-7xl text-[#339D87]/25 upmove-fade">
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

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative min-h-[90vh] w-full flex flex-col sm:flex-row-reverse justify-center items-center px-6 pt-[18vh]">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1
            className="font-extrabold text-4xl tracking-tight
                       bg-gradient-to-r from-[#339D87] to-[#1f6f60]
                       bg-clip-text text-transparent"
          >
            Contact Us
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Feel free to reach out with any questions or concerns. We’re always
            happy to help and look forward to hearing from you.
          </p>

          {/* Email */}
          <div className="mt-10 flex items-center gap-3">
            <a href="mailto:upmovechess@gmail.com">
              <img
                src="email.png"
                className="w-8 h-8 dark:invert opacity-80"
                alt="Email"
              />
            </a>
            <span className="text-base font-medium">upmovechess@gmail.com</span>
          </div>

          {/* WhatsApp */}
          <div className="mt-4 flex items-center gap-3">
            <a href="https://wa.me/918484920962">
              <img
                src="whatsapp.png"
                className="w-8 h-8 dark:invert opacity-80"
                alt="WhatsApp"
              />
            </a>
            <span className="text-base font-medium">
              +91&nbsp;84849&nbsp;20962
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center mt-12 sm:mt-0">
          <img
            src="analog-clock.jpg"
            className="rounded-full object-cover
                       w-[45vh] h-[45vh]
                       sm:w-[55vh] sm:h-[55vh]
                       shadow-lg"
            alt="Time & Commitment"
          />
        </div>
      </section>
    </div>
  );
}
