import Subscribe from "../../components/homepage/subscribe";
import Head from "next/head";

function SubscribePage() {
  return (
    <>
      <Head>
        <title>Subscribe</title>
      </Head>
      <div className="subscribe-page">
        <Subscribe />
      </div>
    </>
  );
}

export default SubscribePage;
