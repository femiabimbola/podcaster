import { Leftsidebar } from "@/components/Leftsidebar";

const RootLayout = ({children}: { children: React.ReactNode;}) =>{
  return (
    <html>
      <body>
        <Leftsidebar />
        {children}
        <p>Right sidebar</p>
      </body>
    </html>
  );
}

export default RootLayout;