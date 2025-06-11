"use server"

import {cookies} from "next/headers"

export async function setShowSideContent(showSideContent: boolean) {
  const cookieStore = await cookies()

  cookieStore.set("showSideContent", showSideContent.toString())
}
