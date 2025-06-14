import Image from 'next/image'
import hero_image from '@/assets/jpg/hero_image.jpg'

export default function Home() {
  return (
    <div className='p-6 flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className="text-3xl font-bold text-center">Welcome to Mini App Cost Estimator</h1>
      <p className="text-center text-gray-600 text-lg">
        A simple cost estimation tool featuring dynamic country, port, and item selection, auto-filled item details, editable pricing, and real-time total cost calculation—all wrapped in a clean, responsive layout with intuitive navigation.
      </p>
      <Image
        className='max-h-[400px] w-full object-contain rounded-md'
        src={hero_image}
        alt='hero image'
      />
    </div>
  );
}
