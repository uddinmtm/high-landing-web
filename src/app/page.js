import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex justify-between gap-8 mt-24">
        <div className="w-4/6">
          <h1 className="text-6xl">
            Always Track & Analyze Your Business Statistics To Succeed.
          </h1>
          <h4 className="py-8">
            A better way to manage your sales, team, clients & marketing <br />—
            on a single platform. Powerful, affordable & easy.
          </h4>
          <div className="flex py-4">
            <input
              placeholder="Enter your email"
              className="w-3/6 px-4 py-4 text-black"
            />
            <button className="text-white px-4 py-4 border-2 border-white bg-black">
              Subscribe
            </button>
          </div>
          <div className="flex mt-4 py-12 gap-4">
            <div>
              <Image
                src="/images/logo/m_visa.png"
                alt="Visa"
                width={86}
                height={40}
              />
            </div>
            <div>
              <Image
                src="/images/logo/m_mastercard.png"
                alt="Mastercard"
                width={60}
                height={40}
              />
            </div>
            <div>
              <Image
                src="/images/logo/m_paypall.png"
                alt="Paypall"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/illustrations/Illustration_1.png"
            alt="Illustration"
            width={550}
            height={580}
          />
        </div>
      </section>
    </>
  );
}
