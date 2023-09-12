import React from "react"

import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4">
            <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 bg-secondary pt-10 w-32" side={"left"}>
            <Sidebar isPro={true} />
        </SheetContent>
    </Sheet>
  )
}
