import api from "../api"
import {Band} from "../types"
import BandCard from "./components/BandCard"
import {Suspense} from "react"
import BandCardSkeleton from "./components/BandCardSkeleton"

export default async function Home({searchParams}: {searchParams: Promise<{search?: string; genre?: string}>}) {
  const {search, genre} = await searchParams
  const bands: Band[] = await api.getBands(search, genre)

  return (
    <section className="grid grid-cols-3 gap-7 mt-8 mb-12">
      {bands.length === 0 && <div className="text-white-light text-center text-2xl font-bold">No bands found</div>}
      {bands.map((band) => (
        <Suspense key={band.id} fallback={<BandCardSkeleton />}>
          <BandCard band={band} />
        </Suspense>
      ))}
    </section>
  )
}
