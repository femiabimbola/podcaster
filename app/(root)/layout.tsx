import { Leftsidebar } from "@/components/Leftsidebar";
import { MobileNav } from "@/components/MobileNav";
import {RightSidebar} from "@/components/RightSidebar";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({children}: { children: React.ReactNode;}) =>{
  return (
    <div className="relate flex flex-col">
      <main className="relative flex bg-black-3 ">
        <Leftsidebar />
        <section className=" min-h-screen flex-1 flex-col sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src={"/icons/logo.svg"} width={30} height={30} alt="menu icon"/>
             <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              <Toaster />
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
        </main>
      </div>
  );
}

export default RootLayout;