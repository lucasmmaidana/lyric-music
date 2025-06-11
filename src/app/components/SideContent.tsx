"use client"

import {redirect} from "next/navigation"
import {setShowSideContent} from "../actions"
import Close from "../icons/Close"

export default function SideContent({children}: {children: React.ReactNode}) {
  const handleClose = async () => {
    await setShowSideContent(false)
    redirect("/")
  }

  return (
    <aside className="bg-black-dark rounded-xl px-9 py-10 relative">
      <button className="absolute cursor-pointer top-6 right-6 text-white-light" onClick={handleClose}>
        <Close className="size-6" />
      </button>
      {children}
    </aside>
  )
}
