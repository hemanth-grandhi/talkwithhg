import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 relative overflow-hidden bg-[#0B0B0B]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Privacy Policy</h1>
          <div className="w-16 h-1 bg-primary mb-12"></div>
          
          <div className="text-muted max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              Welcome to Talk With HG. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">2. Data We Collect</h2>
            <p className="mb-6 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-white">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-white">Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong className="text-white">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong className="text-white">Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">3. Contact Us</h2>
            <p className="mb-6 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <br />
              <strong className="text-white">Email:</strong> hello@talkwithhg.com
              <br />
              <strong className="text-white">Location:</strong> Hyderabad, India
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
