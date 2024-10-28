"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className="w-full h-fit">
        <body className="p-20 w-full h-full flex justify-center items-center bg-background">
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
