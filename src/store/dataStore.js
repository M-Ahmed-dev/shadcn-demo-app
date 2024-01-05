// dataStore.js
import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'
import create from 'zustand'

// const ItemQuantityData = []

const ApiData = [
  {
    id: 1,
    invoiceId: '#RT3080',
    dueDate: 'Due 19 Aug 2021',
    name: 'Jensen Huang',
    status: 'Paid',
    email: 'demo@1email.com',
    streetAddress: '106 Kendell Street Sharrington',
    postalCode: 'NR24 5WQ',
    city: 'Sharrington',
    price: '$1800.91',
    country: 'United Kingdom',
    itemName: 'Brand Identity',
    quantity: 1,
    itemPrice: '$1800.91',
    total: '3,1204.04',
    items: [
      {
        itemName: 'Brand Identity',
        quantity: 1,
        itemPrice: '$1800.91',
        total: '3,1204.04'
      },
      {
        itemName: 'Brand Identity',
        quantity: 1,
        itemPrice: '$1800.91',
        total: '3,1204.04'
      }
    ]
  }
]

const ItemQuantityData = [
  {
    id: 1,
    quantity: 1,
    itemName: 'Brand Identity',
    total: '3,1204.04',
    price: '$1800.91'
  }
]

const useDataStore = create((set) => ({
  loading: false,
  apiData: ApiData,
  quantityForm: ItemQuantityData,
  deleteHandler: (idToDelete) => {
    set((state) => {
      const updatedData = state.apiData.filter((item) => item.id !== idToDelete)
      return { apiData: updatedData }
    })
  },
  postData: (formData) => {
    console.log('Posting data:', formData)
    set((state) => {
      const newId = Math.floor(Math.random() * 1000) + 1
      const uniqueInvoiceId = `#RT${newId}`
      const formattedPrice = `$${parseFloat(formData.price).toFixed(2)}`
      const formattedDueDate = `Due ${formData.dueDate}`

      const updatedData = [
        ...state.apiData,
        {
          ...formData,
          id: newId,
          invoiceId: uniqueInvoiceId,
          price: formattedPrice,
          dueDate: formattedDueDate
        }
      ]
      return { apiData: updatedData }
    })
  },
  addQuantityForm: () => {
    const newId = Math.floor(Math.random() * 1000) + 1

    set((state) => ({
      quantityForm: [
        ...state.quantityForm,
        {
          itemName: '', // Set default or empty value for itemName
          quantity: '', // Set default or empty value for quantity
          price: '' // Set default or empty value for price
        }
      ]
    }))
  },

  removeQuantityForm: (index) => {
    set((state) => {
      const updatedForms = [...state.quantityForm]
      updatedForms.splice(index, 1)
      return { quantityForm: updatedForms }
    })
  }
}))

export default useDataStore
