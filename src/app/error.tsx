"use client"

import {useRouter} from "next/navigation"

export default function Error({error}: {error: Error}) {
  const router = useRouter()

  const handleReset = () => {
    router.refresh()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h2 className="text-white-light text-2xl font-bold">Something went wrong!</h2>
      <p className="text-white-light text-base">{error.message}</p>
      <button className="bg-green text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleReset}>
        Try again
      </button>
    </div>
  )
}
