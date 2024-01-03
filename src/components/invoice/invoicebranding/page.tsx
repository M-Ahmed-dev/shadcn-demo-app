export default function InvoiceBranding(props: any) {
  const { invoiceId } = props
  return (
    <>
      <div>
        {/* <p className="text-sm font-bold mb-[0.5rem]">{itemId}</p> */}
        <p className="text-sm font-bold mb-[0.5rem]">{invoiceId}</p>
        <p className="text-sm ">Re-branding</p>
      </div>
    </>
  )
}
