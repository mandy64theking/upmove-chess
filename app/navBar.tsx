import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={className}>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " hover:text-white"}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:text-white">
            Blog
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="hover:text-white">
              Articles
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:text-white">
              Events and Tournaments
            </NavigationMenuLink>
            <NavigationMenuLink className="hover:text-white">
              Upmove's Champions!
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " hover:text-white"}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + " hover:text-white"}
            >
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/book-a-free-trial" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                navigationMenuTriggerStyle() +
                " bg-foreground text-background hover:bg-[#339D87] hover:text-white"
              }
            >
              Book a Free Trial!
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
