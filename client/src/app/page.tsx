"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react"



export default function Home() {

  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    onOpen();
  } , [isOpen ,  onOpen]);

  
  return (
   <div>
    <h1>Hello</h1>
   </div>
  )
}
