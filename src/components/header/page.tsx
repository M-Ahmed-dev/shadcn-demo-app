import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

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
          <DropdownMenu>
            <DropdownMenuTrigger>FIlter By Status</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <label className="flex gap-3">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    checked={selectedStatuses.includes('Paid')}
                    onChange={() => handleStatusChange('Paid')}
                  />
                  Paid
                </label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <label className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes('Pending')}
                    onChange={() => handleStatusChange('Pending')}
                  />
                  Pending
                </label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {' '}
                <label className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={selectedStatuses.includes('Draft')}
                    onChange={() => handleStatusChange('Draft')}
                  />
                  Draft
                </label>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sidebar />
        </div>
      </div>
    </>
  )
}
