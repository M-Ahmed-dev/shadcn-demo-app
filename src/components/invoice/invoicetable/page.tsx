export default function InvoiceTabel() {
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

        <tbody>
          <tr>
            <td className="px-0 py-[20px]">Brand Guidelines</td>
            <td className="px-0 py-[20px]">1</td>
            <td className="px-0 py-[20px]">$1,800.90 </td>
            <td className="px-0 py-[20px]">$1,800.90 </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
