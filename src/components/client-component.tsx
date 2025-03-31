"use client";

import React, { ReactNode } from "react";
//클라이언트컴포넌트에서 서버컴포넌트를 import해서 사용하게 되면
//서버 컴포넌트 파일이 useClient같은 이런 디렉티브가 없어도 넥스트js에 의해 자동으로 클라이언트 컴포넌트로 변환
//import ServerComponent from "./server-component";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라이언트 컴포넌트!");
  //클라이언트 컴포넌트에서 서버컴포넌트를 자식컴포넌트로서 렌더링하는 방법은 지양해야함(위의 import)
  //왜냐하면 hydration을 위해 js번들을 받아올때, 서버컴포넌트를 클라이언트 컴포넌트로 인식해서 jsbundle용량이 커지게 되서 hydration이 오래걸림
  //그래서 위에서 import하지말고, 클라이언트컴포넌트에서 서버컴포넌트를 children props로 받아서 사용할것
  //하지만 children props로 받아도 개발환경(dev)에서 실행해도 서버컨포넌트에 정의된 콘솔이 브라우저에서 찍힘
  //정리하면 개발환경에서 빌드하지 않는이상 props로 넘기든, import해서 쓰든 서버컴포넌트의 콘솔이 브라우저에 나타남
  //하지만 빌드해서 보면, 확실히 props로 넘길때 서버컴포넌트 콘솔이 브라우저에서 안나타남
  //   return <ServerComponent />;
  return <div>{children}</div>;
}
