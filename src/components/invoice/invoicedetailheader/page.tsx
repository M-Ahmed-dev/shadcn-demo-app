'use client'
import { Button } from '@/components/ui/button'
import InvoiceBadge from '../invoicebadge/page'

import { useParams } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useToast } from '@/components/ui/use-toast'

export default function InvoiceDetailHeader(props: any) {
  const { handleDelete } = props
  const { status } = props
  const params = useParams()
  const { toast } = useToast()

  return (
    <>
      <div className="rounded-lg my-20 flex bg-secondary justify-between p-[2rem] relative">
        <div className="flex gap-[20px] items-center">
          <p className="text-sm">Status</p>
          <InvoiceBadge status={status} />
        </div>

        <div className="flex gap-[10px]">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="rounded-full bg-[#EC5757] p-[1.5rem]">
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this invoice? This action
                  cannot be undone
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    toast({
                      title: 'Scheduled: Catch up',
                      description: 'Friday, February 10, 2023 at 5:57 PM'
                    })
                    handleDelete(Number(params.id))
                  }}
                >
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  )
}
