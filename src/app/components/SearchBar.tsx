"use client"

import Search from "../icons/Search"
import {useRouter, useSearchParams} from "next/navigation"
import {useCallback, useEffect, useState} from "react"
import useDebounce from "../hooks/useDebounce"

export default function SearchBar() {
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const router = useRouter()
  const [inputValue, setInputValue] = useState(search)
  const debouncedValue = useDebounce(inputValue, 300)

  const updateSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams)
      if (value) {
        params.set("search", value)
      } else {
        params.delete("search")
      }
      router.push(`?${params.toString()}`)
    },
    [searchParams, router]
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const value = formData.get("search") as string
    if (value !== search) {
      updateSearch(value)
    }
  }

  useEffect(() => {
    if (debouncedValue !== search) {
      updateSearch(debouncedValue)
    }
  }, [debouncedValue, search, updateSearch])

  return (
    <form onSubmit={handleSubmit} className="relative w-full lg:w-auto">
      <Search className="absolute w-5 h-5 text-gray left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input
        type="search"
        className="bg-black-light w-full lg:max-w-52 rounded-full pl-10 pr-5 py-2 text-white-light focus:outline-none focus:ring-green focus:ring-1"
        value={inputValue}
        name="search"
        onChange={handleSearch}
      />
    </form>
  )
}
