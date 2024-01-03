import Link from 'next/link'
import InvoiceBadge from '../invoicebadge/page'

export default function InvoiceLabel(props: any) {
  const { invoiceId, dueDate, name, price, status } = props
  return (
    <>
      <div className="py-[10px]">
        <div
          className="flex items-center justify-between bg-secondary py-[30px] px-[30px]
          rounded-lg cursor-pointer hover:border-[#9277fd] hover:border-[1px] hover:transition-ease-in-out hover:duration-300"
        >
          <p className="text-sm">{invoiceId}</p>
          <p className="text-sm">{dueDate}</p>
          <p className="text-sm">{name}</p>
          <p className="text-lg font-bold">{price}</p>
          <div>
            <InvoiceBadge status={status} />
          </div>
        </div>
      </div>
    </>
  )
}
