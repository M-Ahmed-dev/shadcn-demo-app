'use client'

import Header from '../components/header/page'
import InvoiceLabel from '../components/invoice/invoicelabel/page'
import Link from 'next/link'
import { useState } from 'react'
import useDataStore from '../store/dataStore'

export default function Home() {
  const { loading, apiData } = useDataStore()
  const [selectedStatuses, setSelectedStatuses] = useState([])

  const handleStatusChange = (status: any) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
  }

  const filteredData = apiData.filter((item: any) => {
    if (selectedStatuses.length === 0) return true // If no status is selected, show all
    return selectedStatuses.includes(item?.status)
  })

  return (
    <section className="py-24">
      <div className="container">
        <Header
          selectedStatuses={selectedStatuses}
          handleStatusChange={handleStatusChange}
        />

        {loading ? (
          // Loading indicator or skeleton UI goes here
          <p>Loading...</p>
        ) : (
          // Render the data when not loading
          filteredData.map((item: any) => (
            <Link href={`/invoice/${item.id}`} key={item.id}>
              <InvoiceLabel
                invoiceId={item.invoiceId}
                dueDate={item.dueDate}
                name={item.name}
                price={item.price}
                status={item.status}
              />
            </Link>
          ))
        )}
      </div>
    </section>
  )
}
