import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import SideBarForm from '../sidebarform/page'

export default function Sidebar() {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="text-primary w-[9.375rem] gap-[5px] p-[10px] flex items-center rounded-full bg-[#9277FD]">
          {/* <div className="text-primary w-[9.375rem] flex py-[25px] justify-between rounded-full bg-[#9277FD]"> */}
          <span className="bg-[#FFFFFF] p-[10px] rounded-full ">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fill-rule="nonzero"
              ></path>
            </svg>
          </span>
          <p>New Invoice</p>
          {/* </div> */}
        </DrawerTrigger>
        <DrawerContent className="fixed bg-secondary inset-y-0 mt-0 max-w-[850px]">
          <SideBarForm />
        </DrawerContent>
      </Drawer>
    </>
  )
}
