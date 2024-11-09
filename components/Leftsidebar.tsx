import Image from "next/image"
import Link from "next/link"

export const Leftsidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href={'/'} className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
        <Image src={"/icons/logo.svg"}alt="logo" width={23} height={27}/>
        <h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcast by AI</h1>
        </Link>
        {}
      </nav>
    </section>
  )
}

