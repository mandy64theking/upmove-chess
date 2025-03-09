import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
  import Link from "next/link";
  
export default function NavBar({ className }: { className?: string }) {
    return (
      <div>
      <NavigationMenu>
        <NavigationMenuList className={className}>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger >Blog</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <NavigationMenuLink>Articles</NavigationMenuLink>
              <NavigationMenuLink>Events and Tournaments</NavigationMenuLink>
              <NavigationMenuLink>Upmove's Champions!</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/book-a-free-trial" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()+" bg-foreground text-background hover:bg-background"}>
            Book a Free Trial!
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
      </div>
    );
  }
  