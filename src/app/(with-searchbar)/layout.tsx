import { ReactNode } from "react";
import Searchbar from "./searchbar";

//child prop를 통해서 페이지 컴포넌트를 전달받아서 리턴문안에 페이지 컴포넌트를 어디에 렌더링 할지 결정해야함
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
