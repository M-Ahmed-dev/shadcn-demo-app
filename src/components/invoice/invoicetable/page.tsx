export default function InvoiceTable({ invoices }: props) {
  console.log('invoices', invoices)
  return (
    <>
      <table className="w-[100%] text-sm">
        <thead>
          <tr>
            <td>Item Name</td>
            <td>QTY.</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>

        {invoices?.map((item: any) => {
          return (
            <tbody>
              <tr>
                <td className="px-0 py-[20px]">{item.name}</td>
                <td className="px-0 py-[20px]">{item.quantity}</td>
                <td className="px-0 py-[20px]">{item.price}</td>
                <td className="px-0 py-[20px]">{item.total}</td>
              </tr>
            </tbody>
          )
        })}
        {/* <tbody>
          <tr>
            <td className="px-0 py-[20px]">{props.itemName}</td>
            <td className="px-0 py-[20px]">{props.quantity}</td>
            <td className="px-0 py-[20px]">{props.price}</td>
            <td className="px-0 py-[20px]">{props.total}</td>
          </tr>
        </tbody> */}
      </table>
    </>
  )
}
