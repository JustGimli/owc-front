import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


export default function AuthPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1090 });

   return <></>
}