import BandCardSkeleton from "./components/BandCardSkeleton"

export default function Loading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 ">
      {Array.from({length: 3}).map((_, index) => (
        <BandCardSkeleton key={index} />
      ))}
    </section>
  )
}
