import { useParams } from "react-router-dom";
import { Layout } from "../../layouts";

export function DetailLayanan() {
  const { layanan } = useParams();
  return (
    <Layout>
      <h1 className="text-center my-10 font-medium text-xl">
        Opps Coming soon...
      </h1>
    </Layout>
  );
}
