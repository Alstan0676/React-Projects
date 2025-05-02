import Image from 'next/image'
import Link from 'next/link'

const featuredCruises = [
  {
    id: 1,
    title: 'Sunset Dinner Cruise',
    description: 'Experience the magic of Goa's sunset while enjoying a gourmet dinner on our luxury cruise.',
    price: 1999,
    duration: 3,
    imageUrl: '/images/sunset-cruise.jpg',
  },
  {
    id: 2,
    title: 'Mandovi River Cruise',
    description: 'Explore the beautiful Mandovi River with live music and delicious Goan cuisine.',
    price: 1499,
    duration: 2,
    imageUrl: '/images/mandovi-cruise.jpg',
  },
  {
    id: 3,
    title: 'Premium Dinner Cruise',
    description: 'Indulge in a premium dining experience with panoramic views of Goa's coastline.',
    price: 2499,
    duration: 4,
    imageUrl: '/images/premium-cruise.jpg',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury cruise in Goa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experience Luxury Dinner Cruises in Goa
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300">
            Enjoy breathtaking views, delicious cuisine, and unforgettable moments on our premium dinner cruises.
          </p>
          <div className="mt-10">
            <Link
              href="/cruises"
              className="rounded-md bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View All Cruises
            </Link>
          </div>
        </div>
      </div>

      {/* Featured cruises section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Cruises</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Choose from our selection of premium dinner cruises in Goa.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredCruises.map((cruise) => (
              <article key={cruise.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={cruise.imageUrl}
                    alt={cruise.title}
                    width={500}
                    height={300}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2024" className="text-gray-500">
                      {cruise.duration} hours
                    </time>
                    <span className="font-medium text-blue-600">₹{cruise.price}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/cruises/${cruise.id}`}>
                        <span className="absolute inset-0" />
                        {cruise.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{cruise.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 