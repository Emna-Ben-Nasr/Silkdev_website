import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../app/globals.css';

const Silknexus: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
      {/* NavBar with SILKNEXUS branding */}
      <NavBar brandName="SILKNEXUS" showNavigation={true} ctaText="Start Free" ctaLink="#" />

      {/* 1. Hero Section */}
      <section id="hero" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Accounting, But Smarter.</h1>
            <h2 className="text-2xl md:text-3xl text-[#3BE8B0] mb-10 font-semibold">Handle invoices, taxes, and financials effortlessly — while giving your accountant real-time access.<br/>And yes, your <span className="font-bold text-[#00aac7]">built-in store</span> is ready too.</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-10">
              <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#00aac7]">Start Free – No Card Required</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center min-h-[320px]">
            {/* TODO: Dashboard/store mockup or animation here */}
            <div className="w-80 h-64 bg-gradient-to-br from-[#3BE8B0]/20 to-[#00aac7]/20 rounded-3xl flex items-center justify-center text-2xl text-white opacity-80 shadow-2xl border-4 border-[#3BE8B0]/20">[Dashboard Animation]</div>
          </div>
        </div>
      </section>

      {/* 2. Problem → Solution Section */}
      <section id="problem-solution" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🙄 Tired of Spreadsheets and Messy Tax Seasons?</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-gradient-to-br from-[#163C53]/80 to-[#1D1F34]/90 rounded-2xl shadow-lg">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-lg text-[#FF6B9A] font-bold">❌ Old Way</th>
                  <th className="py-4 px-6 text-lg text-[#3BE8B0] font-bold">✅ SILKNEXUS</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr><td className="py-3 px-6">Disconnected tools</td><td className="py-3 px-6">All-in-one dashboard</td></tr>
                <tr><td className="py-3 px-6">Manual invoicing</td><td className="py-3 px-6">Auto-generated invoices</td></tr>
                <tr><td className="py-3 px-6">Confused tax prep</td><td className="py-3 px-6">Real-time tax reports</td></tr>
                <tr><td className="py-3 px-6">Accountant delays</td><td className="py-3 px-6">Instant access for accountants</td></tr>
                <tr><td className="py-3 px-6">No e-commerce integration</td><td className="py-3 px-6">Built-in store with payment sync</td></tr>
              </tbody>
            </table>
          </div>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Automate My Accounting</button>
        </div>
      </section>

      {/* 3. Core Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">✨ Everything You Need. Nothing You Don’t.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* TODO: Replace with icons/illustrations */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">📄</div>
              <div className="font-bold text-white mb-2">Smart Invoicing</div>
              <div className="text-gray-300">Create, send & track invoices automatically.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🧾</div>
              <div className="font-bold text-white mb-2">Tax Calculator</div>
              <div className="text-gray-300">Real-time tracking of VAT, income tax, and deadlines.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">📊</div>
              <div className="font-bold text-white mb-2">Financial Dashboard</div>
              <div className="text-gray-300">Cashflow, profit & loss, and expense tracking.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🧮</div>
              <div className="font-bold text-white mb-2">Accountant Portal</div>
              <div className="text-gray-300">Invite your accountant with controlled access.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🛒</div>
              <div className="font-bold text-white mb-2">Built-in Store</div>
              <div className="text-gray-300">Launch a product/service store in minutes.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">🔔</div>
              <div className="font-bold text-white mb-2">Reminders & Alerts</div>
              <div className="text-gray-300">Never miss a deadline or a payment.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-3 text-[#3BE8B0]">📱</div>
              <div className="font-bold text-white mb-2">Mobile App</div>
              <div className="text-gray-300">Manage everything on the go.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tailored Use Cases Section */}
      <section id="usecases" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">🧠 Built for Real Businesses. Yours Included.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="text-3xl mb-2">🎯 Freelancer</div>
              <div className="text-gray-300 mb-4">Get paid faster, track expenses, auto-calculate taxes.</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">See How It Works for Freelancers</button>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="text-3xl mb-2">🧑‍💼 Small Business</div>
              <div className="text-gray-300 mb-4">Manage teams, sales, inventory, and get business insights.</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">See Business Dashboard</button>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20 hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center">
              <div className="text-3xl mb-2">🧮 Accountants</div>
              <div className="text-gray-300 mb-4">Access client data instantly, download reports, save hours.</div>
              <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-2 px-6 rounded-lg text-base shadow-md transition-all">Explore Accountant Tools</button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Live Demo or Interactive Preview Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🎬 See SILKNEXUS In Action</h2>
          {/* TODO: Embed product tour or animated walkthrough here */}
          <div className="w-full flex justify-center items-center min-h-[240px] mb-8">
            <div className="w-96 h-56 bg-gradient-to-br from-[#3BE8B0]/20 to-[#00aac7]/20 rounded-3xl flex items-center justify-center text-2xl text-white opacity-80 shadow-2xl border-4 border-[#3BE8B0]/20">[Product Tour Animation]</div>
          </div>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Try It Yourself – Free</button>
        </div>
      </section>

      {/* 6. Social Proof Section */}
      <section id="social-proof" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">❤️ Trusted by 12,000+ Businesses & Accountants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20">
              <p className="text-lg text-white mb-2">“I used to dread tax season. Now I breeze through it.”</p>
              <div className="text-[#3BE8B0] font-semibold">— Mariam, freelance designer</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-[#3BE8B0]/20">
              <p className="text-lg text-white mb-2">“My accountant loves it more than I do.”</p>
              <div className="text-[#00aac7] font-semibold">— Youssef, digital agency founder</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20">
              <div className="text-2xl">📥</div>
              <div className="font-bold text-white">100K+ invoices sent monthly</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20">
              <div className="text-2xl">💸</div>
              <div className="font-bold text-white">$20M+ tracked through the platform</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20">
              <div className="text-2xl">⏱️</div>
              <div className="font-bold text-white">3 hours saved per week (avg user)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Built-in Store Highlight Section */}
      <section id="store" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🛒 Yes, Your Store Comes With It.</h2>
          <p className="text-lg text-gray-300 mb-8">Launch a storefront in minutes — connected directly to your accounting.<br/>No more syncing platforms. No extra fees. Just smart.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-2xl mb-2">💳 Accept payments</div>
              <div className="text-gray-300">🛍️ Showcase products or services</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20 flex flex-col items-center">
              <div className="text-2xl mb-2">🧾 Auto-invoice customers</div>
              <div className="text-gray-300">📦 Track sales + taxes in one place</div>
            </div>
          </div>
          <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Set Up My Store (Free)</button>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🏷️ Transparent Pricing. No Surprises.</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gradient-to-br from-[#163C53]/80 to-[#1D1F34]/90 rounded-2xl shadow-lg">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-lg text-white font-bold">Plan</th>
                  <th className="py-4 px-6 text-lg text-white font-bold">Price</th>
                  <th className="py-4 px-6 text-lg text-white font-bold">Includes</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td className="py-4 px-6 text-2xl">Starter</td>
                  <td className="py-4 px-6 text-[#3BE8B0] font-bold text-xl">$0/month</td>
                  <td className="py-4 px-6">Invoicing, dashboard, 1 store, basic tax reports</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-2xl">Pro</td>
                  <td className="py-4 px-6 text-[#00aac7] font-bold text-xl">$12/month</td>
                  <td className="py-4 px-6">Advanced tax tools, accountant access, automation</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-2xl">Accountant</td>
                  <td className="py-4 px-6 text-[#3BE8B0] font-bold text-xl">Free</td>
                  <td className="py-4 px-6">Multi-client dashboard, export tools, full access (with invite)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all">Try Free – Upgrade Anytime</button>
          </div>
        </div>
      </section>

      {/* 9. Trust & Security Section */}
      <section id="trust" className="py-20 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">🔒 Your Data, Secured & Encrypted</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20 flex-1">
              <div className="text-lg text-white font-semibold mb-2">End-to-end encryption</div>
              <div className="text-gray-300">Your data is always protected with industry-leading encryption.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20 flex-1">
              <div className="text-lg text-white font-semibold mb-2">GDPR & local tax compliance</div>
              <div className="text-gray-300">We’re fully compliant with GDPR and local tax laws.</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-[#3BE8B0]/20 flex-1">
              <div className="text-lg text-white font-semibold mb-2">Multi-level access controls</div>
              <div className="text-gray-300">Control who can see and manage your data at every level.</div>
            </div>
          </div>
          {/* TODO: Add trusted partner/security badges here */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#3BE8B0] font-bold text-lg">Stripe</div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#3BE8B0] font-bold text-lg">GDPR</div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-[#3BE8B0] font-bold text-lg">ISO</div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section id="final-cta" className="py-24 bg-gradient-to-b from-[#1D1F34] via-[#163C53] to-[#1D1F34]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stop dreading the numbers. Start making smarter decisions.</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#3BE8B0] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all">Start Free Now</button>
            <button className="bg-[#00aac7] hover:bg-[#179e7e] text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transition-all">Schedule a 15-min Call</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Silknexus;
