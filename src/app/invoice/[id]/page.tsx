'use client'
import GoBack from '@/src/components/invoice/goback/page'
import InvoiceAddress from '@/src/components/invoice/invoiceaddress/page'
import InvoiceBranding from '@/src/components/invoice/invoicebranding/page'
import InvoiceDetailHeader from '@/src/components/invoice/invoicedetailheader/page'
import InvoiceDetails from '@/src/components/invoice/invoicedetails/page'
import InvoiceTotal from '@/src/components/invoice/invoicetotal/page'
import { useParams, useRouter } from 'next/navigation'
import InvoiceTable from '../../../components/invoice/invoicetable/page'

import data from '../../../components/data.json'

export default function InvoiceDetailPageID() {
  const router = useRouter()
  const params = useParams()

  console.log(params)

  console.log('data:', data)

  return (
    <>
      {data.map((invoice) => {
        if (params.id === invoice.id.toString()) {
          return (
            <div className="container py-24" key={invoice.id}>
              <GoBack />
              <InvoiceDetailHeader status={invoice.status} />

              <div className="rounded-lg bg-secondary p-[1.5rem]">
                <div className="flex justify-between">
                  <InvoiceBranding invoiceId={invoice.invoiceId} />
                  <InvoiceAddress />
                </div>
                <InvoiceDetails {...invoice} />

                <div className="p-[2rem] bg-secondary">
                  <InvoiceTable />
                </div>
                <InvoiceTotal />
              </div>
            </div>
          )
        }

        // Make sure to add a default return if the condition is not met
        return null
      })}
    </>
  )
}