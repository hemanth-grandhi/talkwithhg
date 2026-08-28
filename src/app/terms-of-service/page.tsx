import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 relative overflow-hidden bg-[#0B0B0B]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Terms of Service</h1>
          <div className="w-16 h-1 bg-primary mb-12"></div>
          
          <div className="text-muted max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing and using Talk With HG, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. 
              Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">2. Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">
              The Site and its original content, features, and functionality are owned by Talk With HG and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">3. User Conduct</h2>
            <p className="mb-6 leading-relaxed">
              You agree to use our website and services for lawful purposes only and in a manner consistent with all applicable local, 
              national, or international laws and regulations. You shall not engage in any conduct that restricts or inhibits any other 
              user from using or enjoying our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8 text-white">4. Modifications to Terms</h2>
            <p className="mb-6 leading-relaxed">
              We reserve the right to modify these terms of service at any time. We do so by posting and drawing attention to the updated terms on the Site. 
              Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
