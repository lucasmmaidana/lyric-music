import Image from "next/image"
import Bell from "./icons/Bell"
import Message from "./icons/Message"
import Wheel from "./icons/Wheel"
import SearchBox from "./components/SearchBox"
import Filters from "./components/Filters"
import api from "../api"
import {Band} from "../types"
import BandCard from "./components/BandCard"
import {Suspense} from "react"
import BandCardSkeleton from "./components/BandCardSkeleton"
import Link from "next/link"

export default async function Home({searchParams}: {searchParams: Promise<{search?: string; genre?: string}>}) {
  const {search, genre} = await searchParams
  const bands: Band[] = await api.getBands(search, genre)

  return (
    <div className="max-w-[1730px] mx-auto grid grid-cols-[1fr_374px] gap-[34px] px-7 py-7">
      <main className="">
        <nav className="bg-black-dark rounded-xl flex items-center justify-between pl-1.5 pr-6">
          <Link href="/">
            <Image className="" src="/lyric_lg_rgb_mnt_wht.png" alt="Lyric Music" width={163} height={105} priority />
          </Link>
          <Filters />
          <SearchBox />
          <div className="flex items-center gap-4">
            <Bell className="w-10 h-10 text-white-light" />
            <Message className="w-10 h-10 text-white-light" />
            <Wheel className="w-10 h-10 text-white-light" />
          </div>
        </nav>
        <section className="grid grid-cols-3 gap-7 mt-8">
          {bands.map((band) => (
            <Suspense key={band.id} fallback={<BandCardSkeleton />}>
              <BandCard band={band} />
            </Suspense>
          ))}
        </section>
      </main>
      <aside className="bg-black-dark rounded-xl px-9 py-10"></aside>
    </div>
  )
}
