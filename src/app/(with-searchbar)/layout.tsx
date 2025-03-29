import { ReactNode } from "react";

//child prop를 통해서 페이지 컴포넌트를 전달받아서 리턴문안에 페이지 컴포넌트를 어디에 렌더링 할지 결정해야함
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
