import Image from "next/image";
import { cn } from "@/lib/utils"; // Import the cn utility

function Blog({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

function BlogTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-4xl font-bold text-center", className)}>
      <h1>{children}</h1>
    </div>
  );
}

function BlogDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-sm text-muted-foreground text-center", className)}>
      <p>{children}</p>
    </div>
  );
}

function BlogImage({
  imgLink,
  imgDescription,
  className,
}: {
  imgLink: string;
  imgDescription: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Image
        width={100}
        height={100}
        src={`${imgLink}`}
        alt=""
        className="w-[60vw] sm:w-[30vw] border-2 border-gray rounded-xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <h1 className="italic text-center text-muted-foreground">
        {imgDescription}
      </h1>
    </div>
  );
}

function BlogText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-sm max-w-[80vw] sm:max-w-[60vw] font-medium text-justify",
        className
      )}
    >
      <p>{children}</p>
    </div>
  );
}

export { Blog, BlogTitle, BlogDescription, BlogImage, BlogText };
