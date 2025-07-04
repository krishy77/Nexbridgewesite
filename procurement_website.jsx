import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building2, Bot, Handshake } from "lucide-react";
import { useEffect } from "react";

export default function ProcurementHome() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    document.body.appendChild(script);

    window.botpressWebChat = {
      "botId": "your-bot-id-here",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "your-bot-id-here",
      "lazySocket": true,
      "enableConversationDeletion": true,
      "showPoweredBy": false
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">ZamPro Procurement Solutions</h1>
        <p className="text-sm">Empowering NGOs & Private Organisations Through Seamless Procurement</p>
      </header>

      <main className="p-8 grid gap-8">
        <section className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p>
              We are a Zambia-based procurement firm dedicated to supporting NGOs and private entities
              with reliable, efficient, and transparent procurement services. Whether it’s for medical
              supplies, educational materials, or logistics support — we ensure your needs are met with quality and speed.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581093588401-69f2b00b5b99"
            alt="Procurement"
            className="rounded-xl shadow-md"
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Procurement for NGOs</h3>
                <p>
                  Customized procurement for NGO projects: food, health, shelter, education.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Private Sector Procurement</h3>
                <p>
                  Office supplies, equipment, and logistics for businesses across Zambia.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Consulting & Compliance</h3>
                <p>
                  Advisory on procurement planning, budgeting, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Partner With Us?</h2>
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="mb-2">
              Most NGOs and large organizations have their own procurement teams — and we respect that.
              ZamPro does not aim to replace them, but to complement them as a trusted, agile partner.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We handle overflow procurement during peak seasons and emergencies</li>
              <li>We specialize in categories that may be unfamiliar or hard to source locally</li>
              <li>We offer full compliance documentation for audits and reporting</li>
              <li>We help stretch budgets by leveraging our supplier relationships and bulk pricing</li>
              <li>We act as your local bridge — especially useful for international NGOs or companies</li>
            </ul>
            <p className="mt-4 font-semibold">
              Think of us as your extended arm — enhancing your procurement efficiency, not disrupting it.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Smart Tools & AI Support</h2>
          <p className="mb-4">
            We now offer live chatbot support, automated scheduling, and intelligent assistance to help you plan
            procurement meetings and follow-ups with integration to Google Calendar.
          </p>
          <Button>
            <a
              href="https://calendar.google.com/calendar/u/0/r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Bot className="w-5 h-5" /> Schedule with Google Calendar
            </a>
          </Button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="grid gap-4 md:max-w-xl">
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Textarea placeholder="Message" rows={4} required />
            <Button type="submit">Send Message</Button>
          </form>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> <span>+260 XXX XXX XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> <span>info@zamproprocure.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" /> <span>Lusaka, Zambia</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white text-center p-4 mt-8">
        &copy; {new Date().getFullYear()} ZamPro Procurement Solutions. All rights reserved.
      </footer>
    </div>
  );
}
