import Image from "next/image";

import { HeroHeader } from "@/components/hero-header";

export default function InsightsSlugPage() {
  return (
    <main className="bg-background relative z-10 container rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        className="max-w-6xl"
        subtitle="Insights & News"
        title="What is cross-trade shipping and when is it the best option?"
        titleClassName="text-6xl text-balance"
        description="A quick look at how cross-trade shipping works, when to use it, and how Maxline Global makes it seamless."
        descriptionClassName="text-lg"
      />
      <div className="relative container -mt-12 mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl">
        <Image
          src="/images/blogs/transport-logistics-products.jpg"
          fill
          alt=""
          className="object-cover"
        />
      </div>
      <article className="prose lg:prose-xl prose-headings:text-brand-dark prose-li:marker:text-brand-gray/50 mx-auto max-w-prose">
        <h2>What is Cross-Trade Shipping and When is It the Best Option?</h2>
        <p>
          In today’s globalized market, businesses are increasingly looking for
          smarter, more efficient ways to move goods across borders. One such
          solution is cross-trade shipping, also known as triangular trade. But
          what exactly is it, and when does it make sense for your business?
        </p>

        <h3>What is Cross-Trade Shipping?</h3>

        <p>
          Cross-trade shipping is when goods are transported between two
          countries, but the seller or buyer is located in a third country. For
          example, a company based in the UAE arranging a shipment from China to
          Germany without the goods ever entering the UAE. It’s a seamless way
          to manage international trade without routing cargo through your home
          country.
        </p>

        <h3>When is Cross-Trade the Right Option?</h3>
        <p>Cross-trade is ideal when:</p>
        <ul>
          <li>
            You’re managing a global supply chain and want to eliminate
            unnecessary transit costs and time.
          </li>
          <li>
            Your buyer and supplier are in different countries, and shipping
            directly improves delivery efficiency.
          </li>
          <li>
            You’re a distributor or trading company looking to optimize
            international logistics.
          </li>
        </ul>

        <h4>Key Benefits of Cross-Trade Shipping:</h4>
        <ul>
          <li>
            ✅ Cost-Efficient: Avoids double handling and storage in your own
            country.
          </li>
          <li>
            ✅ Time-Saving: Speeds up delivery by reducing detours and customs
            delays.
          </li>
          <li>
            ✅ Flexible & Scalable: Perfect for global trade and multi-region
            distribution.
          </li>
          <li>
            ✅ Simplified Documentation: With the right freight forwarder,
            paperwork and compliance are handled smoothly.
          </li>
        </ul>

        <h3>Why Maxline Global for Cross-Trade Logistics?</h3>
        <p>
          At Maxline Global, we specialize in managing complex cross-trade
          operations with full transparency and compliance. Whether it&apos;s
          air or sea freight, our team ensures smooth coordination between all
          parties, minimizing risk and maximizing efficiency.
        </p>

        <h3>Is Cross-Trade Right for You?</h3>
        <p>
          If you regularly buy or sell across multiple countries, cross-trade
          shipping can be a game-changer. Contact Maxline Global today to find
          out how we can streamline your global logistics and reduce overhead
          with our expert cross-trade services.
        </p>
      </article>
    </main>
  );
}
