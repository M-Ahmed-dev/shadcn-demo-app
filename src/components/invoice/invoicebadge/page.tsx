export default function InvoiceBadge(props: any) {
  const { status } = props
  let bgColorClass = 'bg-[rgba(51,214,159,.0571)]'
  let textColorClass = 'text-green-400'
  let activeColor = 'bg-green-400'

  if (status.toLowerCase() === 'pending') {
    bgColorClass = 'bg-yellow-950'
    textColorClass = 'text-yellow-600'
    activeColor = 'bg-yellow-600'
  }

  if (status.toLowerCase() === 'draft') {
    bgColorClass = 'bg-[#E0E0E0]'
    textColorClass = 'text-gray-400'
    activeColor = 'bg-gray-400'
  }

  return (
    <>
      <div
        className={`flex items-center justify-center gap-[10px] font-bold text-center text-sm ${bgColorClass} p-[10px] rounded-lg w-[6.5rem]`}
      >
        <span
          className={`inline-block rounded-full w-[0.5rem] h-[0.5rem] ${activeColor}`}
        ></span>
        <p className={textColorClass}>{status}</p>
      </div>
    </>
  )
}
