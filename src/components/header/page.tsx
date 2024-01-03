import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { Plus } from 'lucide-react'

export default function Header(props: any) {
  const { selectedStatuses, handleStatusChange } = props
  return (
    <>
      <div className="flex justify-between items-center mb-[3.5rem]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Invoices</h1>
          <p>There are total 7 invoices</p>
        </div>

        <div className="flex gap-8 items-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Filter by status</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col absolute border border-#9277FD p-[1.5rem]">
                  <label className="flex gap-3">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      checked={selectedStatuses.includes('Paid')}
                      onChange={() => handleStatusChange('Paid')}
                    />
                    Paid
                  </label>
                  <label className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes('Pending')}
                      onChange={() => handleStatusChange('Pending')}
                    />
                    Pending
                  </label>
                  <label className="flex gap-3">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes('Draft')}
                      onChange={() => handleStatusChange('Draft')}
                    />
                    Draft
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="text-primary w-[9.375rem] flex py-[25px] justify-between rounded-full  bg-[#9277FD]">
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
        </div>
      </div>
    </>
  )
}
