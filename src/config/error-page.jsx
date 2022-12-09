import { useTitle } from "../hooks";
import { Layout } from "../layouts";

export function Error() {
  useTitle("404 NotFound");
  return <Layout>404 not found</Layout>;
}
