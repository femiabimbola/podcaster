import { Leftsidebar } from "@/components/Leftsidebar";

const RootLayout = ({children}: { children: React.ReactNode;}) =>{
  return (
    <div className="relate flex flex-col">
        <Leftsidebar />
        {children}
        <p>Right sidebar</p>
      </div>
  );
}

export default RootLayout;