'use client'
import { Button } from '@/components/ui/button'
import InvoiceBadge from '../invoicebadge/page'

import data from '../../../components/data.json'
import { useRouter } from 'next/navigation'
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
import { useState } from 'react'

export default function InvoiceDetailHeader(props: any) {
  const ApiData = data
  const { status } = props
  const router = useRouter()

  return (
    <>
      <div className="rounded-lg my-20 flex bg-secondary justify-between p-[2rem] relative">
        <div className="flex gap-[20px] items-center">
          <p className="text-sm">Status</p>
          <InvoiceBadge status={status} />
        </div>

        <div className="flex gap-[10px]">
          <Button className="rounded-full p-[1.5rem] ">Edit</Button>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="rounded-full bg-[#EC5757]  p-[1.5rem]">
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
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  )
}
