"use client"

import {useSearchParams} from "next/navigation"
import FilterChip from "./FilterChip"

export default function Filters() {
  const searchParams = useSearchParams()
  const filters = [
    {name: "All", value: ""},
    {name: "Country", value: "country"},
    {name: "Rock", value: "rock"},
    {name: "Pop", value: "pop"},
  ]
  const activeFilter = searchParams.get("genre") || ""
  const params = new URLSearchParams(searchParams)

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      {filters.map((filter) => {
        if (filter.value) {
          params.set("genre", filter.value)
        } else {
          params.delete("genre")
        }
        const href = `?${params.toString()}`
        return (
          <FilterChip key={filter.value} active={activeFilter === filter.value} href={href}>
            {filter.name}
          </FilterChip>
        )
      })}
    </div>
  )
}
