import { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Red Moose Exterior cleaning services in Charlotte, NC.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2024</p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the services provided by {siteConfig.name},
            you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Services
          </h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.name} provides professional pressure washing and soft
            washing services for residential and commercial properties in the
            Charlotte, NC area. All services are subject to availability and
            weather conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Quotes and Pricing
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>
              All quotes are estimates based on information provided and visual
              assessment
            </li>
            <li>
              Final pricing may vary based on actual conditions discovered during
              service
            </li>
            <li>Quotes are valid for 30 days from the date of issue</li>
            <li>
              We reserve the right to adjust pricing for additional work requested
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Scheduling and Cancellation
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>
              Services will be scheduled at mutually agreed upon times
            </li>
            <li>
              We request 24-hour notice for cancellations or rescheduling
            </li>
            <li>
              Weather-related rescheduling will be accommodated at no charge
            </li>
            <li>
              Repeated no-shows may result in cancellation of future bookings
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Customer Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">
            Customers are responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Providing accurate information about the property</li>
            <li>Ensuring access to water and electrical sources as needed</li>
            <li>Removing or securing personal items from work areas</li>
            <li>Securing pets during service</li>
            <li>Informing us of any known hazards or special conditions</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Liability and Insurance
          </h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.name} is fully licensed and insured. We carry
            comprehensive liability insurance to protect both our team and your
            property. However, we are not liable for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Pre-existing damage or conditions</li>
            <li>
              Damage caused by surfaces already in a deteriorated state
            </li>
            <li>Items not properly secured or removed from work areas</li>
            <li>
              Damage resulting from customer-provided inaccurate information
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Satisfaction Guarantee
          </h2>
          <p className="text-gray-600 mb-6">
            We stand behind our work. If you are not satisfied with our service,
            please contact us within 48 hours and we will return to address any
            concerns at no additional charge.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Payment Terms
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Payment is due upon completion of service</li>
            <li>
              We accept cash, check, and all major credit/debit cards
            </li>
            <li>
              Commercial accounts may be eligible for invoicing with net-30 terms
            </li>
            <li>Late payments may incur additional fees</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-6">
            To the maximum extent permitted by law, {siteConfig.name} shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use of our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to our website. Continued use
            of our services after changes constitutes acceptance of the new
            terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms of Service, please contact us:
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
        </div>
      </div>
    </div>
  );
}
