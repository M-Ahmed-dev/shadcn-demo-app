// dataStore.js
import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'
import create from 'zustand'

const ApiData = [
  {
    id: 1,
    invoiceId: '#RT3080',
    dueDate: 'Due 19 Aug 2021',
    name: 'Jensen Huang',
    price: '$1800.91',
    status: 'Paid',
    email: 'demo@1email.com',
    streetAddress: '106 Kendell Street Sharrington',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',
    country: 'United Kingdom'
  },
  {
    id: 2,
    invoiceId: '#RT3081',
    dueDate: 'Due 20 Aug 2021',
    name: 'Alex Grim',
    price: '$1800.92',
    status: 'Paid',
    email: 'demo@2email.com',
    streetAddress: '118 West27th Street Brooklyn',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',

    country: 'Estonia'
  },
  {
    id: 3,
    invoiceId: '#RT3082',
    dueDate: 'Due 21 Aug 2021',
    name: 'Alex Pettyfer',
    price: '$1800.93',
    status: 'Pending',
    email: 'demo@3email.com',
    streetAddress: '121 W 32ND Street Manhattan',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',

    country: 'Lithuania'
  },
  {
    id: 4,
    invoiceId: '#RT3083',
    dueDate: 'Due 21 Aug 2021',
    name: 'John Morrison',
    price: '$1300.93',
    status: 'Pending',
    email: 'demo@4email.com',
    streetAddress: '130 Opera Street Jospheine',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',

    country: 'Latvia'
  },
  {
    id: 5,
    invoiceId: '#RT3084',
    dueDate: 'Due 21 Aug 2021',
    name: 'Melissa Clark',
    price: '$4000.93',
    status: 'Pending',
    email: 'demo@5email.com',
    streetAddress: '190 Freedom Lane Street',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',

    country: 'Finland'
  },
  {
    id: 6,
    invoiceId: '#RT3085',
    dueDate: 'Due 21 Aug 2021',
    name: 'Melissa Clark',
    price: '$4000.93',
    status: 'Draft',
    email: 'demo@6email.com',
    streetAddress: '106 Oslo Street Skate',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',

    country: 'Norway'
  },
  {
    id: 7,
    invoiceId: '#RT3086',
    dueDate: 'Due 27 Aug 2021',
    name: 'Melissa Clark',
    price: '$8000.93',
    status: 'Draft',
    email: 'demo@6email.com',
    streetAddress: '106 Dannish Street Lake',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',
    country: 'Denmark'
  }
]

const useDataStore = create((set) => ({
  loading: false,
  apiData: ApiData,
  deleteHandler: (idToDelete) => {
    set((state) => {
      const updatedData = state.apiData.filter((item) => item.id !== idToDelete)
      return { apiData: updatedData }
    })
  },
  postData: (formData) => {
    console.log('Posting data:', formData)
    set((state) => {
      const newId = Math.floor(Math.random() * 1000) + 1 // Generate a random ID
      const uniqueInvoiceId = `#RT${newId}` // Generate a unique invoice ID

      const updatedData = [
        ...state.apiData,
        { ...formData, id: newId, invoiceId: uniqueInvoiceId }
      ]
      return { apiData: updatedData }
    })
  }
}))

export default useDataStore
