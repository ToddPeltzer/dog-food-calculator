"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function TanstackProvider({children}: {children: React.ReactNode}) {

    // documentation say this, but we are going a different route
    // const queryClient = new QueryClient();

    const [queryClient] = useState(() => new QueryClient);

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}