import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useDataStore from '@/src/store/dataStore'

export default function Sidebar() {
  const schema = z.object({
    name: z.string().min(3, { message: 'cant be empty' }),
    email: z.string().email({ message: 'invalid email' }),
    streetAddress: z.string().min(3, { message: 'cant be empty' }),
    city: z.string().min(3, { message: 'cant be empty' }),
    country: z.string().min(3, { message: 'cant be empty' }),
    postalCode: z.string().min(3, { message: 'cant be empty' }),
    price: z.string().min(3, { message: 'cant be empty' }),
    status: z.string().min(3, { message: 'cant be empty' }),
    dueDate: z.string().min(3, { message: 'cant be empty' })
  })

  type ValidationSchemaType = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      streetAddress: '',
      city: '',
      country: '',
      postalCode: '',
      price: '',
      status: '',
      dueDate: ''
    },
    resolver: zodResolver(schema)
  })

  console.log('errors', errors)
  const dataStore = useDataStore()

  const onSubmit = (data: any) => {
    dataStore.postData(data)
  }

  const InputField = ({
    label,
    register,
    registerValue,
    errors
  }: {
    label: string
    register: any
    registerValue: string
    errors?: any
  }) => {
    return (
      <div className="flex flex-col">
        <label className="label font-bold text-sm text-[#9277FD] pb-[0.75rem]">
          {label}
        </label>
        <div className="text-right ">
          {errors && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>
        <Input className="h-[4rem]" {...register(registerValue)} />
      </div>
    )
  }

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <Button className="text-primary w-[9.375rem] flex py-[25px] justify-between rounded-full bg-[#9277FD]">
            <span className="bg-[#FFFFFF] p-[10px] rounded-full ">
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                  fill="#7C5DFA"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </span>
            New Invoice
          </Button>
        </DrawerTrigger>
        <DrawerContent className="fixed bg-secondary inset-y-0 mt-0 max-w-[850px] p-[1.5rem]">
          <p className="text-4xl font-bold">New Invoice</p>

          <form
            className="form overflow-auto"
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
                registerValue="price"
                label="Price"
                register={register}
                errors={errors.price}
              />
              <InputField
                registerValue="status"
                label="User Payment Status"
                register={register}
                errors={errors.status}
              />
              <InputField
                registerValue="dueDate"
                label="Due Date"
                register={register}
                errors={errors.dueDate}
              />
            </div>
            <div className="flex gap-[1rem] mt-[3rem]">
              <Button type="submit">Save & Send</Button>
              <Button type="submit">Discard</Button>
            </div>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  )
}
