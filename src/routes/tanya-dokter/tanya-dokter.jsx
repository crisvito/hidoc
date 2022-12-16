import { TanyaHeader, TanyaList } from "../../contents";
import { Layout } from "../../layouts";

export function TanyaDokter() {
  return (
    <Layout>
      <div className="dark:bg-transparent bg-white my-10 shadow-lg rounded-lg">
        <TanyaHeader />
        <TanyaList />
      </div>
    </Layout>
  );
}
