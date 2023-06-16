import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center justify-between h-16 space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        {/* <div className="flex items-center justify-end flex-1 space-x-4">
           <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="w-5 h-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle /> 
        </div> */}
        <div
          className={cn(
            "md:hidden",
            buttonVariants({
              size: "sm",
              variant: "ghost",
            })
          )}
        >
          <Icons.menu className="w-5 h-5 fill-current" />
          <span className="sr-only">menu</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold ">47 puntos</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AF</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
