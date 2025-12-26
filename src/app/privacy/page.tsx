import { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Red Moose Exterior cleaning services in Charlotte, NC.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2024</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            When you request a quote or contact us, we collect information you
            provide directly, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Property details relevant to your service request</li>
            <li>Any additional information you choose to provide</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Respond to your service inquiries and provide quotes</li>
            <li>Schedule and perform cleaning services</li>
            <li>Communicate with you about your service</li>
            <li>Improve our services and customer experience</li>
            <li>Send occasional updates about our services (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Information Sharing
          </h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>With service providers who assist in our operations</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Cookies
          </h2>
          <p className="text-gray-600 mb-6">
            Our website may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us analyze
            web traffic and improve our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have questions about this Privacy Policy or our practices,
            please contact us:
          </p>
          <ul className="list-none text-gray-600 mb-6 space-y-2">
            <li>
              <strong>Phone:</strong> {siteConfig.phone}
            </li>
            <li>
              <strong>Email:</strong> {siteConfig.email}
            </li>
            <li>
              <strong>Location:</strong> {siteConfig.address}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
        </div>
      </div>
    </div>
  );
}
