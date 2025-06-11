export default function BandCardSkeleton() {
  return (
    <div className="bg-black-dark rounded-xl overflow-hidden min-h-[420px]">
      <div className="w-full h-48 bg-gray animate-pulse" />
      <div className="p-6">
        <div className="w-full h-6 bg-gray animate-pulse mb-2" />
        <div className="w-full h-4 bg-gray animate-pulse mb-2" />
        <div className="w-full h-4 bg-gray animate-pulse" />
      </div>
    </div>
  )
}
