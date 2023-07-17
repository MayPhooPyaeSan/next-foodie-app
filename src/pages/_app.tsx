import { store } from "@/store";
import "./global.css";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { fetchAppData } from "@/store/slices/appSlice";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locationId = router.query.locationId as string | undefined;
  useEffect(() => {
    store.dispatch(fetchAppData({ locationId }));
  }, []);

  return (
    <SessionProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
