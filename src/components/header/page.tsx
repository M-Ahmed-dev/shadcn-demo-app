import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import { Plus } from 'lucide-react'
import Sidebar from './sidebar/page'

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

          <Sidebar />
        </div>
      </div>
    </>
  )
}
