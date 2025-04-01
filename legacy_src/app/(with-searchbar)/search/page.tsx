import ClientComponent from "../../../components/client-component";

//원래는 함수형 컴포넌트에 async키워드를 붙일수 없지만, 한번만 실행되는 서버컴포넌트이기에 가능?
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      Search 페이지 : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
