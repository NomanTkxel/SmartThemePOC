import { useState } from "react";

import { MyAppProps } from "components/types";
import { Layouts } from "components/layouts/Layouts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "../components/trpc";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  // Creating TRCP Query Instance
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  // Creating TRCP client instance
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "https://15ab-116-58-60-28.ngrok-free.app",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
export default MyApp;
