import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="p-20 w-full h-full flex justify-center items-center bg-background">
        {children}
      </body>
    </html>
  );
}
