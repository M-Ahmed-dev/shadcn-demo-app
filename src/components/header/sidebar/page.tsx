import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

export default function Sidebar() {

  return (
    <>
      <Drawer>
        <DrawerTrigger>
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
        </DrawerTrigger>
        <DrawerContent className="fixed bg-secondary inset-y-0 mt-0 max-w-[650px] p-[1.5rem]"
        >
          <p>New Invoice</p>




        </DrawerContent>
      </Drawer>
    </>
  )
}
