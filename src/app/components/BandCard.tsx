import api from "../../api"
import {Album, Band} from "../../types"
import BandImage from "./BandImage"

export default async function BandCard({band}: {band: Band}) {
  const album: Album = await api.getAlbum(band.id)

  return (
    <article className="bg-black-dark rounded-xl overflow-hidden">
      <figure className="relative w-full h-48 bg-gray">
        <BandImage className="w-full h-full" bandName={band.band_name} bandId={band.id} />
      </figure>
      <div className="p-6">
        <h2 className="text-green text-xl font-bold mb-2">{band.band_name}</h2>
        <p className="text-white-light text-sm mb-2">{album.album || band.album}</p>
        <p className="text-white-dark text-sm">{album.description}</p>
      </div>
    </article>
  )
}
