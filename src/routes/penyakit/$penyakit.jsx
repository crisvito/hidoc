import { Layout } from "../../layouts";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks";

export function PenyakitDetail() {
  const { penyakit } = useParams();
  useTitle(penyakit);

  return <Layout>{penyakit}</Layout>;
}
