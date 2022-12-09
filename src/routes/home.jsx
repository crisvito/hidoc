import { HomeHero, HomeService } from "../contents";
import { Layout } from "../layouts";

export function Home() {
  return (
    <Layout>
      <div>
        <HomeHero />
        <HomeService />
      </div>
    </Layout>
  );
}
