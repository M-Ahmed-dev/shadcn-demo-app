'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import useDataStore from '@/src/store/dataStore'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import React from 'react'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  streetAddress: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  postalCode: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  price: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  status: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  dueDate: Yup.string().required('Required')
})

export default function FormikForm() {
  const dataStore = useDataStore()
  const [date, setDate] = React.useState<Date>()

  function Calander() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[240px] mt-[20px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 " />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  }

  const CustomInput = ({ label, name, type = 'text', touched, errors }) => (
    <div className="flex flex-col">
      <label
        className="label font-bold text-sm text-[#9277FD] pb-[0.75rem]"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="rounded-sm p-[0.5rem] h-[4rem]"
        type={type}
        id={name}
        name={name}
      />
      {/* <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      /> */}
      {touched[name] && errors[name] && (
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm"
        />
      )}
    </div>
  )

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        streetAddress: '',
        city: '',
        country: '',
        postalCode: '',
        price: '',
        status: '',
        dueDate: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log('values', values)
        // const formattedDate = date
        //   ? date.toLocaleDateString('en-US', {
        //       month: 'short',
        //       year: 'numeric',
        //       day: 'numeric'
        //     })
        //   : null
        // const updatedData = {
        //   ...values,
        //   dueDate: formattedDate
        // }
        // dataStore.postData(updatedData)
      }}
    >
      {({ errors, touched }) => (
        <div className="overflow-auto">
          <Form className="mt-[5rem]">
            <div className=" flex flex-col gap-[10px]">
              <label htmlFor="firstName">First Name</label>
              <Field id="name" name="name" />

              {/* <CustomInput
                label="UserName"
                name="name"
                touched={touched}
                errors={errors}
              />
              <CustomInput
                label="Street Address"
                name="streetAddress"
                touched={touched}
                errors={errors}
              />
              <CustomInput
                label="City"
                name="city"
                touched={touched}
                errors={errors}
              />
              <div className="flex  gap-[10px]">
                <CustomInput
                  label="Country"
                  name="country"
                  touched={touched}
                  errors={errors}
                />
                <CustomInput
                  label="Postal Code"
                  name="postalCode"
                  touched={touched}
                  errors={errors}
                />
              </div>
              <CustomInput
                label="Email"
                name="email"
                touched={touched}
                errors={errors}
              />
              <CustomInput
                label="Price"
                name="price"
                touched={touched}
                errors={errors}
              />
              <CustomInput
                label="Status"
                name="status"
                touched={touched}
                errors={errors}
              /> */}
              <Calander />
            </div>

            <Button className="mt-[5rem]" type="submit">
              Save & Continue
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
