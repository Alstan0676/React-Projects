'use client';

import { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { FiClock, FiUsers, FiCalendar } from 'react-icons/fi'
import toast from 'react-hot-toast'

// This would come from your API in a real application
const cruise = {
  id: 1,
  title: 'Sunset Dinner Cruise',
  description: 'Experience the magic of Goa's sunset while enjoying a gourmet dinner on our luxury cruise. Our expert chefs prepare a delightful mix of local and international cuisine while you take in the breathtaking views of the coastline. Live music and entertainment make this an unforgettable evening.',
  price: 1999,
  duration: 3,
  imageUrl: '/images/sunset-cruise.jpg',
  startTime: '6:00 PM',
  capacity: 100,
  features: [
    'Welcome drink on arrival',
    'Multi-cuisine buffet dinner',
    'Live music and entertainment',
    'Upper deck access',
    'Professional photographer',
    'Air-conditioned lower deck',
  ],
  itinerary: [
    { time: '5:30 PM', activity: 'Check-in and boarding' },
    { time: '6:00 PM', activity: 'Cruise departure' },
    { time: '6:30 PM', activity: 'Welcome drinks and snacks' },
    { time: '7:00 PM', activity: 'Live music begins' },
    { time: '7:30 PM', activity: 'Dinner service starts' },
    { time: '8:30 PM', activity: 'Return to dock' },
  ],
}

export default function CruiseDetails() {
  const [quantity, setQuantity] = useState(1)
  const params = useParams()

  const handleBooking = () => {
    // In a real application, this would make an API call to create a booking
    toast.success('Booking successful! Check your email for confirmation.')
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image gallery */}
          <div className="relative">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={cruise.imageUrl}
                alt={cruise.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Cruise info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{cruise.title}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Cruise information</h2>
              <p className="text-3xl tracking-tight text-gray-900">₹{cruise.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{cruise.description}</p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center space-x-4">
                <FiClock className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">{cruise.duration} hours</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiCalendar className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">Start time: {cruise.startTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiUsers className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">Capacity: {cruise.capacity} people</span>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Features</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {cruise.features.map((feature) => (
                    <li key={feature} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Itinerary</h3>
              <div className="mt-4 border-t border-gray-200">
                {cruise.itinerary.map((item, index) => (
                  <div
                    key={item.time}
                    className={`py-4 ${
                      index !== cruise.itinerary.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <dt className="text-sm font-medium text-gray-600">{item.time}</dt>
                      <dd className="text-sm text-gray-700">{item.activity}</dd>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Select quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-gray-900">{quantity}</span>
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleBooking}
              >
                Book Now - ₹{cruise.price * quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 