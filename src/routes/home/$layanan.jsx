import { useParams } from "react-router-dom";
import { Layout } from "../../layouts";

export function DetailLayanan() {
  const { layanan } = useParams();
  return <Layout>{layanan}</Layout>;
}
