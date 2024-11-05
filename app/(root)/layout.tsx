const RootLayout = ({children}: { children: React.ReactNode;}) =>{
  return (
    <html>
      <body>
        <p>LEFT SIDEBAR</p>
        {children}
        <p>Right sidebar</p>
      </body>
    </html>
  );
}

export default RootLayout;