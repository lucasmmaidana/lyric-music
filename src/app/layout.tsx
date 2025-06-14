import type {Metadata} from "next"
import {cookies} from "next/headers"
import Link from "next/link"
import {Inter} from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Bell from "./icons/Bell"
import Message from "./icons/Message"
import Wheel from "./icons/Wheel"
import Filters from "./components/Filters"
import SearchBar from "./components/SearchBar"
import SideContent from "./components/SideContent"
import Flag from "./icons/Flag"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lyric Music",
  description: "Lyric Code Challenge",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const showSideContent = ["true", undefined].includes((await cookies()).get("showSideContent")?.value)

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className={`max-w-[1730px] mx-auto grid grid-cols-1 ${showSideContent ? "xl:grid-cols-[1fr_374px]" : ""} gap-[34px] px-7 py-7 mb-12`}>
          <main className="">
            <nav className="bg-black-dark rounded-xl flex items-center justify-between px-6 py-5 gap-3 flex-wrap flex-col lg:flex-row">
              <div className="flex items-center gap-x-16 gap-y-5 flex-wrap justify-center lg:justify-start">
                <Link href="/" className="-ml-2 min-w-11 -my-5 shrink-0">
                  <Image src="/lyric_lg_rgb_mnt_wht.png" alt="Lyric Music" width={163} height={105} priority />
                </Link>
                <Filters />
                <SearchBar />
              </div>
              <div className="flex items-center gap-4">
                <Bell className="w-10 h-10 text-white-light cursor-pointer" />
                <Message className="w-10 h-10 text-white-light cursor-pointer" />
                <Wheel className="w-10 h-10 text-white-light cursor-pointer" />
              </div>
            </nav>
            {children}
          </main>

          {showSideContent && (
            <SideContent>
              <h2 className="text-green text-xl font-bold mb-5">Welcome to Lyric Music</h2>
              <p className="text-white-dark text-base leading-7 ">
                We&apos;re thrilled to have you join us on this musical journey! Lyric Music is your gateway to a fresh and immersive way to enjoy the bands and artists you love. Whether you&apos;re
                searching for your all-time favorite tracks, exploring curated playlists crafted to fit every mood, or discovering new songs that will soon become your go-to anthems, Lyric Music is
                here to elevate your listening experience. Imagine having the perfect soundtrack for every moment of your life, from energizing workouts to peaceful evenings under the stars. With an
                intuitive interface designed to make finding music effortless and enjoyable, you&apos;ll spend less time searching and more time grooving. Best of all, it&apos;s completely
                free—because we believe that great music should be accessible to everyone. At Lyric Music, we&apos;re passionate about creating a community where music lovers like you can explore,
                connect, and celebrate the power of sound. So dive in, press play, and let the music move you. Welcome to your new favorite way to listen.
              </p>
              <div className="mt-12 bg-black-light px-6 py-5 rounded-xl">
                <div className="flex items-center gap-4">
                  <Flag className="size-24 text-green" />
                  <div>
                    <h2 className="text-green text-xl font-bold">COMING SOON</h2>
                    <p className="text-white-dark text-base leading-7 ">Check out whats new for 2025 from the Lyric team. </p>
                  </div>
                </div>
              </div>
            </SideContent>
          )}
        </div>
      </body>
    </html>
  )
}
