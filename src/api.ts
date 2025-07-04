import bands from "../mock_data/bands.json"
import album001 from "../mock_data/001.json"
import album005 from "../mock_data/005.json"
import {Album, Band} from "./types"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, Math.random() * ms))

const api = {
  getBands: async (search?: string, genre?: string): Promise<Band[]> => {
    await sleep(800)

    let filteredBands = bands

    if (genre) {
      filteredBands = filteredBands.filter((band) => band.genre === genre)
    }

    if (search) {
      filteredBands = filteredBands.filter((band) => `${band.band_name} ${band.album}`.toLowerCase().includes(search.toLowerCase()))
    }

    return filteredBands
  },
  getAlbum: async (id: Album["id"]): Promise<Album> => {
    await sleep(800)

    if (id === "001") {
      return album001
    }

    if (id === "005") {
      return album005
    }

    return {
      id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve",
      album: "Default Album",
    }
  },
}

export default api
