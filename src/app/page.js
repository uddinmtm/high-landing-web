import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex justify-between gap-8 mt-24">
        <div className="w-4/6">
          <h1 className="text-6xl">
            Always Track & Analyze Your Business Statistics To Succeed.
          </h1>
          <p className="py-8">
            A better way to manage your sales, team, clients & marketing <br />—
            on a single platform. Powerful, affordable & easy.
          </p>
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

      <section className="flex justify-between gap-8 mt-24">
        <div>
          <Image
            src="/images/illustrations/Illustrations_2.png"
            alt="Illustration"
            width={580}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-8 w-4/6">
          <span className="w-fit py-2 px-4 border-2 border-black uppercase font-bold">
            About Us
          </span>
          <h1 className="text-5xl">
            Faster, friendlier feedback loops make life easier.
          </h1>
          <p className="text-base">
            Add a Viewer to your team so they can see everything you share, or
            invite people to individual documents. It’s up to you. Stakeholders
            can check out designs in their web browser, test prototypes and
            leave feedback for free.
          </p>
          <ul className="flex flex-col gap-4 list-square list-inside text-lg">
            <li>Shared Cloud Libraries, for a single source of truth</li>
            <li>Prototype previews for user testing and research</li>
            <li>Easy organization with projects</li>
            <li>Free developer handoff, right inside the browser</li>
            <li>Two-factor authentication and SSO</li>
          </ul>
        </div>
      </section>

      <section className="flex justify-between gap-12 mt-24">
        <div className="flex flex-col gap-8 w-3/6">
          <span className="w-fit py-2 px-4 border-2 border-black uppercase font-bold">
            How It Works
          </span>
          <h1 className="text-5xl">
            Building the best space for collaboration.
          </h1>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="/images/icons/icon_1.png"
                alt="Icon 1"
                width={100}
                height={100}
              />
              <div className="w-4/5 flex flex-col gap-2">
                <h2 className="text-2xl">Shared Cloud Libraries</h2>
                <p className="text-base">
                  Navigate to the Your work panel in the left sidebar. Select
                  the library you want to share. Select the Share icon in the
                  upper right to share the library.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/icons/icon_2.png"
                alt="Icon 2"
                width={100}
                height={100}
              />
              <div className="w-4/5 flex flex-col gap-2">
                <h2 className="text-2xl">
                  Free developer handoff, right inside
                </h2>
                <p className="text-base">
                  Cloud Inspector makes it easy for developers to get the
                  information they need to turn pixels into code — all in the
                  browser and, most importantly, for free.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/icons/icon_3.png"
                alt="Icon 3"
                width={100}
                height={100}
              />
              <div className="w-4/5 flex flex-col gap-2">
                <h2 className="text-2xl">Real-time collaborative editing</h2>
                <p className="text-base">
                  Room Service helps you build real-time collaborative features.
                  Add real-time data sync! Let users edit the same data at the
                  same time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/images/icons/icon_4.png"
                alt="Icon 4"
                width={100}
                height={100}
              />
              <div className="w-4/5 flex flex-col gap-2">
                <h2 className="text-2xl">Integrations with the Cloud API</h2>
                <p className="text-base">
                  Unlocking that value requires an iPaaS that delivers the
                  transformative power of APIs and integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/illustrations/Illustration_3.png"
            alt="Illustration"
            width={490}
            height={700}
          />
        </div>
      </section>

      <section className="flex flex-col gap-12 mt-24">
        <div className="flex justify-between gap-8">
          <div className="w-2/3">
            <Image
              src="/images/illustrations/Illustration_4.png"
              alt="Illustration"
              width={470}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8 text-right items-end">
            <span className="w-fit py-2 px-4 border-2 border-black uppercase font-bold">
              Pricing
            </span>
            <h1 className="text-5xl">
              Select a membership level the right price for you.
            </h1>
            <p className="text-base w-2/3 items-end">
              Prices listed in USD. Taxes may apply. By using program you agree
              to our terms and policies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 min-h-[540px]">
          <div className="flex flex-col gap-4 border-2 border-black py-8 px-8 min-h-full">
            <div className="flex">
              <small className="font-bold">$</small>
              <h1 className="text-6xl font-bold">49</h1>
              <span className="ml-4 self-end font-bold">per month</span>
            </div>

            <p className="text-base">A pay-once license, just for you</p>

            <ul className="flex flex-col gap-4 list-square list-inside mt-4">
              <li>The Mac app — yours to keep</li>
              <li>Beautiful White_level</li>
              <li>One year of saving to Cloud</li>
            </ul>

            <div className="relative h-full w-full">
              <button className="absolute inset-x-0 bottom-0  w-full bg-black text-white py-4 px-4">
                Join
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 text-white bg-black border-black py-8 px-8 min-h-full">
            <div className="flex">
              <small className="font-bold">$</small>
              <h1 className="text-6xl font-bold">99</h1>
              <span className="ml-4 self-end font-bold">per month</span>
            </div>

            <p className="text-base">Pro account, just for you</p>

            <ul className="flex flex-col gap-4 list-square list-inside mt-4">
              <li>The Mac app — yours to keep</li>
              <li>One year of Mac app updates</li>
              <li>One year of saving to Cloud</li>
              <li>A personal Cloud workspace</li>
              <li>All tools, just for you</li>
            </ul>

            <div className="relative h-full w-full">
              <button className="absolute inset-x-0 bottom-0  w-full bg-white text-black py-4 px-4">
                Join
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 bg-white py-8 px-8 min-h-full">
            <div className="flex">
              <small className="font-bold">$</small>
              <h1 className="text-6xl font-bold">299</h1>
              <span className="ml-4 self-end font-bold">per month</span>
            </div>

            <p className="text-base">A subscription for the whole team</p>

            <ul className="flex flex-col gap-4 list-square list-inside mt-4">
              <li>Access to the Mac app for all</li>
              <li>A shared Cloud workspace</li>
              <li>Free Cloud access for unlim</li>
              <li>Easy team management</li>
              <li>No license key required</li>
            </ul>

            <div className="relative h-full w-full">
              <button className="absolute inset-x-0 bottom-0  w-full bg-black text-white py-4 px-4">
                Join
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
