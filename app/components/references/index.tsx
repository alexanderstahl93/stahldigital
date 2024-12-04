import Image from "next/image"
import Link from "next/link"

export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-2xl font-light tracking-tight text-gray-900 sm:text-3xl">Unsere Kunden</h2>
          <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="https://www.stahlundsoehne.at">
            <Image
              alt="Stahl & Söhne KG"
              src="/stahlundsoehne.png"
              width={158}
              height={48}
              className="col-span-2 max-h-22 object-contain lg:col-span-1"
            />
            </Link>
            <Link href="https://www.malerundsoehne.at">
            <Image
              alt="Maler & Söhne KG"
              src="/malerundsoehne.png"
              width={158}
              height={48}
              className="col-span-2 max-h-22 object-contain lg:col-span-1"
            />
            </Link>
            <Link href="https://www.closerrides.com">
            <Image
              alt="Closer Rides Chauffeur Service"
              src="/CLOSER..png"
              width={158}
              height={48}
              className="col-span-2 max-h-22 object-contain lg:col-span-1"
            />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  