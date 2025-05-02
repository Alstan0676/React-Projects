'use client';

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiFilter } from 'react-icons/fi'

const cruises = [
  {
    id: 1,
    title: 'Sunset Dinner Cruise',
    description: 'Experience the magic of Goa's sunset while enjoying a gourmet dinner on our luxury cruise.',
    price: 1999,
    duration: 3,
    imageUrl: '/images/sunset-cruise.jpg',
    startTime: '6:00 PM',
    capacity: 100,
  },
  {
    id: 2,
    title: 'Mandovi River Cruise',
    description: 'Explore the beautiful Mandovi River with live music and delicious Goan cuisine.',
    price: 1499,
    duration: 2,
    imageUrl: '/images/mandovi-cruise.jpg',
    startTime: '7:00 PM',
    capacity: 80,
  },
  {
    id: 3,
    title: 'Premium Dinner Cruise',
    description: 'Indulge in a premium dining experience with panoramic views of Goa's coastline.',
    price: 2499,
    duration: 4,
    imageUrl: '/images/premium-cruise.jpg',
    startTime: '5:30 PM',
    capacity: 60,
  },
  // Add more cruises here
]

const filters = [
  { name: 'Duration', options: ['2 hours', '3 hours', '4 hours'] },
  { name: 'Price Range', options: ['Under ₹1500', '₹1500 - ₹2000', 'Above ₹2000'] },
  { name: 'Start Time', options: ['5:00 PM - 6:00 PM', '6:00 PM - 7:00 PM', '7:00 PM - 8:00 PM'] },
]

export default function CruisesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const filteredCruises = cruises.filter((cruise) => {
    const matchesSearch = cruise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cruise.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">All Cruises</h1>
            <p className="mt-2 text-sm text-gray-700">
              {filteredCruises.length} results
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search cruises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Filters</h3>

            {filters.map((section) => (
              <div key={section.name} className="border-b border-gray-200 py-6">
                <h3 className="flow-root -my-3">
                  <span className="font-medium text-gray-900">{section.name}</span>
                </h3>
                <div className="mt-4">
                  <div className="space-y-4">
                    {section.options.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          onChange={(e) => {
                            const newFilters = { ...selectedFilters }
                            if (!newFilters[section.name]) {
                              newFilters[section.name] = []
                            }
                            if (e.target.checked) {
                              newFilters[section.name].push(option)
                            } else {
                              newFilters[section.name] = newFilters[section.name].filter(
                                (item) => item !== option
                              )
                            }
                            setSelectedFilters(newFilters)
                          }}
                        />
                        <label className="ml-3 text-sm text-gray-600">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </form>

          {/* Cruise grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCruises.map((cruise) => (
                <div key={cruise.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                    <Image
                      src={cruise.imageUrl}
                      alt={cruise.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`/cruises/${cruise.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {cruise.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{cruise.duration} hours</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">₹{cruise.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 