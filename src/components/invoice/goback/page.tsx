'use client'
import { ChevronLeft } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

export default function GoBack() {
  const params = useParams()
  const router = useRouter()
  return (
    <>
      <div
        className="cursor-pointer text-md cursor-pointer flex gap-[10px]"
        onClick={() => router.push('/')}
      >
        <ChevronLeft />
        Go Back
      </div>
    </>
  )
}
