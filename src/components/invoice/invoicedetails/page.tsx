export default function InvoiceDetails(props: any) {
  return (
    <>
      <div className="flex gap-[24%] align-start mb-[2.5rem]">
        <div className="flex gap-[5rem]">
          <div>
            <p className="text-sm mb-[1rem]">Invoice Date</p>
            <p className="text-xl font-bold mb-[2rem]">18 Aug 2021</p>
            <p className="text-sm mb-[1rem] mt-[]">Payment Due</p>
            <p className="text-xl font-bold">19 Aug 2021</p>
          </div>
          <div>
            <p className="text-sm mb-[1rem]">BillTo</p>
            <p className="text-xl font-bold mb-[0.75rem]">{props.name}</p>
            <p>{props.streetAddress}</p>
            <p>{props.postalCode}</p>
            <p>{props.city}</p>
            <p>{props.country}</p>
          </div>
        </div>

        <div>
          <p className="text-sm mb-[1rem]">SentTo</p>
          <p className="text-xl font-bold mb-[0.75rem]">{props.email}</p>
        </div>
      </div>
    </>
  )
}
