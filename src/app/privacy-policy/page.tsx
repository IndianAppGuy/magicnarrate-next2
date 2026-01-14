'use client'
import React from 'react'
import HeaderWebApp from '@/components/global/HeaderWebApp'
import FooterWebApp from '@/components/global/FooterWebApp'

function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <HeaderWebApp />
            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-sm text-slate-600">
                        Last updated: 14 Jan 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-sm leading-relaxed text-slate-700 sm:text-base">
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Overview
                        </h2>
                        <p>
                            This Privacy Policy describes how your personal information is
                            collected, used, and shared when you visit or use MagicNarrate
                            (the &quot;Service&quot;). MagicNarrate is an AI-powered narration service
                            that turns presentations into narrated audio/video based on your slide content
                            and narration settings.
                        </p>
                        <p>
                            It explains the types of data we handle, how we use it, with whom we
                            share it, and how long we keep it.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Information We Collect
                        </h2>
                        <p>
                            We collect information you provide directly and information
                            generated through your use of MagicNarrate, including:
                        </p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                <strong>Narration Input:</strong> The content you provide or select
                                for narration (for example slide text, speaker notes, or narration scripts),
                                plus any narration settings available in the product. This data is used solely to
                                generate the narration you request.
                            </li>
                            <li>Contact details such as your email address (if you create an account).</li>
                            <li>
                                Usage information, such as which features you use, how often you
                                generate narration, and your interaction with the service.
                            </li>
                            <li>
                                Generated Outputs: The generated narration audio and/or rendered video
                                may be stored temporarily to provide the service and deliver your video link.
                            </li>
                            <li>
                                Technical data like device/browser type and IP address used to
                                help secure and improve the service.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Account Information
                        </h2>
                        <p>
                            If you choose to create an account, we may collect:
                        </p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                Basic profile details (name, email) to authenticate you and
                                manage your account.
                            </li>
                            <li>
                                Account preferences and settings you configure.
                            </li>
                            <li>
                                Authentication tokens stored securely and used solely to maintain
                                your session and deliver the service.
                            </li>
                        </ul>
                        <p>
                            You can use MagicNarrate without creating an account, in which
                            case we only collect the information necessary to generate narration
                            and provide outputs (like a video link).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            How We Use Your Information
                        </h2>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                <strong>Generate AI Narration:</strong> Process your narration input
                                to generate narration audio, and optionally render narration + slides into video.
                            </li>
                            <li>
                                Provide, maintain, and improve MagicNarrate and related
                                services.
                            </li>
                            <li>
                                Deliver generated outputs (audio/video and video links) to you and store them temporarily as
                                needed for the service.
                            </li>
                            <li>
                                Communicate with you about the service, including support and
                                service updates (if you have an account).
                            </li>
                            <li>
                                Develop new features, troubleshoot issues, and protect against
                                fraud or abuse.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            How We Share or Disclose Information
                        </h2>
                        <p>
                            We share personal information only in these circumstances:
                        </p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                With service providers that host, store, analyze, or support
                                the service (for example, cloud hosting, AI narration APIs,
                                analytics, email delivery, and customer support tools) under
                                confidentiality and data protection obligations.
                            </li>
                            <li>
                                With AI narration service providers to process your narration input
                                and generate narration. These providers are bound by their own privacy
                                policies and data protection agreements.
                            </li>
                            <li>
                                For legal, safety, or security reasons if required by law or to
                                protect rights, property, or safety.
                            </li>
                            <li>
                                In the event of a business transfer (such as a merger or
                                acquisition), subject to notice and continued protection of your
                                data.
                            </li>
                        </ul>
                        <p>
                            We do not sell or rent personal information, narration input, or generated
                            outputs. We do not use your narration input or generated outputs to train AI
                            models without your explicit consent.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Data Retention and Deletion
                        </h2>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                <strong>Narration Input and Generated Outputs:</strong> We retain your
                                narration input and generated outputs temporarily to provide the service.
                                You can request deletion of your generated outputs at any time.
                            </li>
                            <li>
                                We retain personal information while your account is active and as
                                needed to provide the service, comply with legal obligations, or
                                resolve disputes.
                            </li>
                            <li>
                                Account information and authentication tokens are removed when you
                                delete your account or after extended inactivity in line with our
                                security policies.
                            </li>
                            <li>
                                You can request deletion of your data at{' '}
                                <span className="font-medium text-slate-900">
                                support@magicslides.app
                                </span>
                                . We will delete your personal information, narration input, and generated
                                outputs from active systems within a reasonable period (typically
                                within 30 days) unless we must retain certain records for legal or
                                compliance purposes. Backup copies are removed on their normal
                                retention cycle.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Data Security
                        </h2>
                        <p>
                            We take reasonable measures to protect information from
                            unauthorized access, disclosure, alteration, or destruction,
                            including access controls, encryption in transit, and monitoring for
                            misuse.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Your Choices &amp; Contact
                        </h2>
                        <p>
                            You have control over your data:
                        </p>
                        <ul className="list-disc space-y-1 pl-5">
                            <li>
                                You can delete your generated images at any time through the
                                service interface.
                            </li>
                            <li>
                                You can delete your account at any time, which will remove your
                                account information and associated data.
                            </li>
                            <li>
                                You may contact us to request access, correction, or deletion of
                                your data.
                            </li>
                        </ul>
                        <p>
                            If you have questions about our Privacy Policy or our data
                            practices, or if you would like to delete any of your personal
                            information, narration input, or generated outputs we have collected, please
                            contact us at{' '}
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

export default PrivacyPolicy
