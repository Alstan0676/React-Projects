'use client';

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'
import toast from 'react-hot-toast'

// This would come from your API in a real application
const cruises = [
  {
    id: 1,
    title: 'Sunset Dinner Cruise',
    price: 1999,
    duration: 3,
    imageUrl: '/images/sunset-cruise.jpg',
    startTime: '6:00 PM',
    capacity: 100,
    isActive: true,
  },
  {
    id: 2,
    title: 'Mandovi River Cruise',
    price: 1499,
    duration: 2,
    imageUrl: '/images/mandovi-cruise.jpg',
    startTime: '7:00 PM',
    capacity: 80,
    isActive: true,
  },
  {
    id: 3,
    title: 'Premium Dinner Cruise',
    price: 2499,
    duration: 4,
    imageUrl: '/images/premium-cruise.jpg',
    startTime: '5:30 PM',
    capacity: 60,
    isActive: false,
  },
]

export default function AdminCruises() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleDelete = (id: number) => {
    // In a real application, this would make an API call to delete the cruise
    toast.success('Cruise deleted successfully')
  }

  const handleToggleStatus = (id: number) => {
    // In a real application, this would make an API call to update the cruise status
    toast.success('Cruise status updated successfully')
  }

  const filteredCruises = cruises.filter((cruise) =>
    cruise.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Cruises</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all cruises including their title, price, duration, and status.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            href="/admin/cruises/new"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <FiPlus className="mr-2 h-4 w-4" />
            Add Cruise
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search cruises..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Start Time
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Capacity
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredCruises.map((cruise) => (
                      <tr key={cruise.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <Image
                                src={cruise.imageUrl}
                                alt={cruise.title}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{cruise.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹{cruise.price}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cruise.duration} hours</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cruise.startTime}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cruise.capacity}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <button
                            onClick={() => handleToggleStatus(cruise.id)}
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              cruise.isActive
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {cruise.isActive ? 'Active' : 'Inactive'}
                          </button>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex items-center justify-end space-x-3">
                            <Link
                              href={`/admin/cruises/${cruise.id}/edit`}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <FiEdit2 className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Link>
                            <button
                              onClick={() => handleDelete(cruise.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FiTrash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 