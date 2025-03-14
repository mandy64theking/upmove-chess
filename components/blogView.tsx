import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";

export default function BlogView({
  className,
  title,
  description,
  imgLink,
  href,
}: {
  title: string;
  description: string;
  className?: string;
  imgLink?: string;
  href: string;
}) {
  return (
    <div>
      <a href={href}>
        <Card className={cn("cursor-pointer", className)}>
          <CardHeader>
            <CardTitle>
              <Image
                width={100}
                height={100}
                src={`${imgLink}`}
                alt=""
                className="w-[60vw] sm:w-[30vw] border-2 border-gray"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </CardTitle>
            <b>{title}</b>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      </a>
    </div>
  );
}
