'use client'

import React from 'react'
import HeaderWebApp from '@/components/global/HeaderWebApp'
import FooterWebApp from '@/components/global/FooterWebApp'

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderWebApp />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Last updated: 14 Jan 2026
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-slate-700 sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p>
              This website and service are operated by MagicNarrate. Throughout
              the site and service, the terms &quot;we&quot;, &quot;us&quot;
              and &quot;our&quot; refer to MagicNarrate. By accessing or using our
              website or any of our products, you agree to be bound by these
              Terms of Use, including any additional terms and policies we
              reference or make available to you.
            </p>
            <p>
              If you do not agree to all of the terms and conditions set out
              here, you may not access the website or use any of our services.
              Your continued use of MagicNarrate after we post any changes to
                these terms constitutes acceptance of those changes (similar to
                the approach used by MagicNarrate in its{' '}
              <a
                href="https://www.magicnarrate.app/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Terms of Use
              </a>
              ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              1. Eligibility and Acceptable Use
            </h2>
            <p>
              By using MagicNarrate, you represent that you are at least the age
              of majority in your jurisdiction, or that you are the age of
              majority and you have given consent for any of your minor
              dependents to use the service.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                You may not use MagicNarrate for any illegal or unauthorized
                purpose.
              </li>
              <li>
                You agree to comply with all applicable laws in your
                jurisdiction, including intellectual property and data
                protection laws.
              </li>
              <li>
                You must not attempt to interfere with or disrupt the
                integrity, security, or performance of our systems.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              2. Service Description
            </h2>
            <p>
              MagicNarrate is an AI-powered narration service that generates
              narration for presentations and may render narration + slides into
              audio/video outputs (such as a shareable video link). We may add,
              modify, or remove features at any time.
            </p>
            <p>
              We do not guarantee that the service will be available at all
              times, will be error‑free, or will always meet your expectations.
              Experimental AI features may occasionally generate unexpected or
              undesirable outputs; you are responsible for reviewing all content
              before using it in your own work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              3. Accounts, Billing and Subscriptions
            </h2>
            <p>
              Some parts of MagicNarrate may be offered for free, while others may
              require a paid subscription. By subscribing, you authorize us and
              our billing providers (such as Stripe) to
              charge the payment method you provide for recurring fees until you
              cancel.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                You agree to provide current, complete, and accurate account and
                billing information.
              </li>
              <li>
                We reserve the right to change prices or introduce new charges,
                with reasonable notice.
              </li>
              <li>
                We may suspend or terminate access if payments are not
                successfully processed.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              4. Refunds
            </h2>
            <p>
              Unless otherwise required by law or explicitly stated in an offer,
              all fees are non‑refundable. In certain cases, we may, at our sole
              discretion, issue a refund or credit. Any such decision is
              case‑by‑case and does not create an obligation to provide future
              refunds, consistent with the approach described in our{' '}
              <a
                href="https://www.magicnarrate.app/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                refund policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              5. Intellectual Property and Content
            </h2>
            <p>
              MagicNarrate and its licensors retain all rights, title and interest
              in and to the service, including the underlying software, models,
              branding, and documentation.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                You retain rights to the prompts you submit and, subject to
                applicable law and any explicit limitations stated in your plan,
                to the narration and outputs generated for you.
              </li>
              <li>
                You are solely responsible for ensuring that your prompts and
                use of generated images do not infringe on any third‑party
                rights.
              </li>
              <li>
                You may not scrape, reverse engineer, or attempt to replicate
                our models or service.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              6. Prohibited Uses
            </h2>
            <p>
              In addition to other prohibitions set out in these terms, you are
              prohibited from using MagicNarrate to:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Generate unlawful, defamatory, hateful, harassing, pornographic
                or otherwise harmful content.
              </li>
              <li>
                Violate the intellectual property or privacy rights of others.
              </li>
              <li>
                Upload or transmit malicious code, viruses, or automated scripts
                that could affect the operation of the service.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              7. Third‑Party Services and AI Providers
            </h2>
            <p>
              MagicNarrate may integrate with third‑party services and AI
              providers that help deliver the functionality of the product,
              including providers used for AI generation, billing, and delivery,
              as described in our Terms of Use at{' '}
              <a
                href="https://www.magicnarrate.app/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                magicnarrate.app/terms-of-use
              </a>
              .
            </p>
            <p>
              Your use of any third‑party services is subject to their own terms
              and privacy policies. We are not responsible for third‑party
              content, websites, or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              8. Disclaimers and Limitation of Liability
            </h2>
            <p>
              MagicNarrate is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis, without warranties of any kind, whether
              express or implied. We do not warrant that the service will be
              uninterrupted, timely, secure, or error‑free.
            </p>
            <p>
              To the maximum extent permitted by law, MagicNarrate and its owners,
              employees, and partners will not be liable for any indirect,
              incidental, special, consequential or punitive damages, or any
              loss of profits or revenues arising out of or related to your use
              of the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              9. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time by posting the
              revised version on this page. It is your responsibility to review
              this page periodically for changes. Your continued use of
              MagicNarrate after changes become effective constitutes your
              acceptance of the updated terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at{' '}
              <span className="font-medium text-slate-900">
                support@magicslides.app
              </span>
              .
            </p>
          </section>
        </div>
      </main>
      <FooterWebApp />
    </div>
  )
}

export default TermsOfUse


