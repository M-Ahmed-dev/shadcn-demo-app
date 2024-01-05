import * as Yup from 'yup'
import useDataStore from '@/src/store/dataStore'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import React from 'react'
import Calander from './calander/page'
import InputField from './inputfield/page'
import AddQuantityFormat from './addquantity/page'

import validationSchema from './yupschema/page'
import { Input } from '@/components/ui/input'
import { PlusCircleIcon, PlusIcon } from 'lucide-react'

export default function SideBarForm() {
  const dataStore = useDataStore()
  const [date, setDate] = React.useState<Date>()

  type ValidationSchemaType = Yup.InferType<typeof validationSchema>

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors }
  //   } = useForm<ValidationSchemaType>({
  //     defaultValues: {
  //       name: '',
  //       email: '',
  //       streetAddress: '',
  //       city: '',
  //       country: '',
  //       postalCode: '',
  //       price: '',
  //       status: '',
  //       dueDate: '',
  //       itemName: '',
  //       quantity: ''
  //     },
  //     resolver: yupResolver(validationSchema)
  //   })

  const {
    register,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      streetAddress: '',
      city: '',
      country: '',
      postalCode: '',
      price: '',
      status: '',
      dueDate: '',
      quantity: '',
      invoices: [
        {
          id: 1,
          name: '',
          price: '',
          quantity: ''
        }
      ]
    }
    // resolver: yupResolver(validationSchema)
  })

  console.log('errors', getValues())

  const onSubmit = async (data: any) => {
    const formattedDate = date
      ? date.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
          day: 'numeric'
        })
      : null

    const updatedData = {
      ...data,
      dueDate: formattedDate
    }
    dataStore.postData(updatedData)
    console.log('updatedData', data)
  }

  return (
    <>
      <p className="text-4xl font-bold">New Invoice</p>

      <form
        className="form overflow-auto p-[1rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex mt-[5rem] flex-col gap-[20px] overflow-auto">
          <InputField
            registerValue="name"
            label="User Name"
            register={register}
            errors={errors.name}
          />

          <div className="grid grid-cols-2 gap-[5px]">
            <InputField
              registerValue="streetAddress"
              label="Street Address"
              register={register}
              errors={errors.streetAddress}
            />
            <InputField
              registerValue="city"
              label="City"
              register={register}
              errors={errors.city}
            />
          </div>
          <InputField
            registerValue="country"
            label="Country"
            register={register}
            errors={errors.country}
          />
          <InputField
            registerValue="postalCode"
            label="Postal Code"
            register={register}
            errors={errors.postalCode}
          />
          <InputField
            registerValue="email"
            label="Client Email"
            register={register}
            errors={errors.email}
          />

          <InputField
            registerValue="status"
            label="User Payment Status"
            register={register}
            errors={errors.status}
          />
          {/* <input
            type="text"
            onChange={({ target }) =>
              setValue('invoices', [{ name: 'test' + target.value }])
            }
          /> */}
          <Calander date={date} setDate={setDate} />

          {getValues().invoices.map((item, index) => {
            // id,name and price
            return (
              <div className="flex items-end gap-[6px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-sm font-bold text-[#9277FD]">
                    Item Name
                  </label>
                  <Input
                    type="text"
                    className="h-[4rem] w-full "
                    onChange={({ target }) =>
                      setValue(`invoices.${index}.name`, target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="text-sm font-bold pb-[10px] text-[#9277FD]">
                    Price
                  </label>
                  <Input
                    className="h-[4rem] w-md"
                    type="text"
                    onChange={({ target }) =>
                      setValue(`invoices.${index}.price`, target.value)
                    }
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <label className="text-sm font-bold text-[#9277FD]">
                    Qty
                  </label>
                  <Input
                    type="text"
                    className="h-[4rem] w-full"
                    onChange={({ target }) =>
                      setValue(`invoices.${index}.quantity`, target.value)
                    }
                  />
                </div>
              </div>
            )
          })}
          <Button
            onClick={() => {
              setValue('invoices', [
                ...getValues().invoices,
                {
                  id: getValues().invoices.length + 1,
                  name: '',
                  price: '',
                  quantity: ''
                }
              ])
              trigger('invoices')
            }}
            type={'button'}
            className="flex gap-[10px] items-center text-lg mt-[20px] p-[2rem]"
          >
            <PlusIcon className="font-bold" />
            Add New Item
          </Button>
        </div>
        <div className="flex gap-[1rem] mt-[3rem]">
          <Button type="submit" className="bg-[#9277FD]">
            Save & Send
          </Button>
          <Button type="submit" className="bg-red-700">
            Discard
          </Button>
        </div>
      </form>
    </>
  )
}
