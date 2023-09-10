import Layout from "@/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";

type AboutProps = {};

export const AboutPage: BlitzPage = ({}: AboutProps) => {
  return (
    <Layout title="About">
      <div>This is the about page</div>
    </Layout>
  );
};

export default AboutPage;
