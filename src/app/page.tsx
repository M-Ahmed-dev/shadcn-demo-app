'use client'

import Header from '../components/header/page'
import data from '../components/data.json'
import InvoiceLabel from '../components/invoice/invoicelabel/page'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedStatuses, setSelectedStatuses] = useState([])
  const [loading, setLoading] = useState(false)

  const [ApiData, setApiData] = useState([])

  const fetchDataFromApi = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/invoices', {
        headers: {
          Accept: 'application/json',
          method: ' GET'
        }
      })
      if (response) {
        const data = await response.json()
        setApiData(data.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataFromApi()
  }, [])

  const handleStatusChange = (status) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
  }

  const filteredData = ApiData.filter((item) => {
    if (selectedStatuses.length === 0) return true // If no status is selected, show all
    return selectedStatuses.includes(item.status)
  })

  console.log('ApiData:', ApiData)

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
          filteredData.map((item) => (
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

        {/* {filteredData.map((item) => (
          <Link href={`/invoice/${item.id}`}>
            <InvoiceLabel
              key={item.id}
              invoiceId={item.invoiceId}
              dueDate={item.dueDate}
              name={item.name}
              price={item.price}
              status={item.status}
            />
          </Link>
        ))} */}
      </div>
    </section>
  )
}
