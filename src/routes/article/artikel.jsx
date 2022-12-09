import { ArtikelTerbaru } from "../../contents";
import { useTitle } from "../../hooks";
import { Layout } from "../../layouts";

export function Artikel() {
  useTitle("Artikel");
  return (
    <Layout>
      <ArtikelTerbaru />
    </Layout>
  );
}
