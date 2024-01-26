"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { Button } from "@/components/ui/button"

export function ExhibitorDetailsDrawer(){


    return (

        <Drawer onOpenChange={(test)=>console.log(test)}>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent >
        <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose>
        <Button variant="outline">Cancel</Button>
        </DrawerClose>
        </DrawerFooter>
        </DrawerContent>
        </Drawer>

    )
}