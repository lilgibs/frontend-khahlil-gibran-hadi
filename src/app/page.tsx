import Image from 'next/image'
import hero_image from '@/assets/jpg/hero_image.jpg'

export default function Home() {
  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className="text-3xl font-bold text-center">Welcome to Mini App Purchase Management</h1>
      <p className="text-center text-gray-600 text-lg">
        A simple and clean purchase management system that helps you monitor products, stocks, and transactions efficiently.
      </p>
      <Image
        className='max-h-[400px] w-full object-contain rounded-md'
        src={hero_image}
        alt='hero image'
      />
    </div>
  );
}
