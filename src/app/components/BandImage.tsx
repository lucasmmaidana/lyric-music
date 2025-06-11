"use client"

import {useState} from "react"
import Image from "next/image"
export default function BandImage({bandName, bandId, className}: {bandName: string; bandId: string; className: string}) {
  const [imgSrc, setImgSrc] = useState(`/im${bandId}.png`)
  const fallbackImage = `/default.png`

  return <Image src={imgSrc} alt={bandName} fill objectFit="cover" className={className} onError={() => setImgSrc(fallbackImage)} />
}
