'use client'
import GoBack from '@/src/components/invoice/goback/page'
import InvoiceAddress from '@/src/components/invoice/invoiceaddress/page'
import InvoiceBranding from '@/src/components/invoice/invoicebranding/page'
import InvoiceDetailHeader from '@/src/components/invoice/invoicedetailheader/page'
import InvoiceDetails from '@/src/components/invoice/invoicedetails/page'
import InvoiceTotal from '@/src/components/invoice/invoicetotal/page'
import { useParams, useRouter } from 'next/navigation'
import InvoiceTable from '../../../components/invoice/invoicetable/page'

import useDataStore from '../../../store/dataStore'

export default function InvoiceDetailPageID() {
  const router = useRouter()
  const params = useParams()

  const { apiData, deleteHandler } = useDataStore()

  const handleDelete = async (id: any) => {
    deleteHandler(id)
    await router.push('/')
  }

  console.log('apiData', apiData)

  return (
    <>
      {apiData.map((invoice: any) => {
        if (params.id === invoice.id.toString()) {
          return (
            <div className="container py-24" key={invoice.id}>
              <GoBack />

              <InvoiceDetailHeader
                handleDelete={handleDelete}
                status={invoice.status}
              />

              <div className="rounded-lg bg-secondary p-[1.5rem]">
                <div className="flex justify-between">
                  <InvoiceBranding invoiceId={invoice.invoiceId} />
                  <InvoiceAddress />
                </div>
                <InvoiceDetails {...invoice} />

                <div className="p-[2rem] bg-secondary">
                  <InvoiceTable invoices={invoice.invoices} />
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
