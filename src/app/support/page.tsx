'use client'
import React, { useState } from 'react'
import HeaderWebApp from '@/components/global/HeaderWebApp'
import FooterWebApp from '@/components/global/FooterWebApp'

function Support() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faqs = [
        {
            question: "How do I generate narration with MagicNarrate?",
            answer: "Open any presentation where the extension is installed, then click “Generate Narration”. We narrate the full deck slide-by-slide and provide a video link."
        },
        {
            question: "Can I change what gets narrated?",
            answer: "Yes. Update your slide text or speaker notes (your script), then generate again to create an updated narration and video link."
        },
        {
            question: "What do I receive after generation?",
            answer: "You’ll receive a shareable video link for your narrated presentation. Some plans may also support downloading the video."
        },
        {
            question: "Which presentations are supported?",
            answer: "Any presentation where the narration extension is installed. If you’re unsure about your environment, contact support and we’ll confirm compatibility."
        },
        {
            question: "How do I get better narration results?",
            answer: "Write like you speak: short sentences, clear punctuation, and avoid overly long paragraphs. For tricky names or acronyms, spell them out phonetically in speaker notes."
        },
        {
            question: "Do I need to record audio myself?",
            answer: "No. The extension generates the narration automatically. You can iterate on your script and regenerate until it sounds right."
        },
        {
            question: "How do I contact support?",
            answer: "You can reach our support team at support@magicslides.app. We typically respond within 24-48 hours. For urgent issues, please use the integrated chat on our website."
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <HeaderWebApp />
            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                        Support & Help Center
                    </h1>
                    <p className="mt-3 text-base text-slate-600">
                        Get help with MagicNarrate and find answers to common questions
                    </p>
                </div>

                {/* Contact Section */}
                <section className="mb-12 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 p-8 sm:p-10">
                    <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                        Need Help?
                    </h2>
                    <p className="mb-6 text-slate-700">
                        Our support team is here to help you get the most out of MagicNarrate. 
                        Reach out to us through any of the following channels:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Email Support</h3>
                                <p className="text-slate-700">
                                    <a href="mailto:support@magicslides.app" className="text-blue-600 hover:text-blue-700 underline">
                                        support@magicslides.app
                                    </a>
                                </p>
                                <p className="mt-1 text-sm text-slate-600">
                                    We typically respond within 24-48 hours
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Live Chat</h3>
                                <p className="text-slate-700">
                                    Use the integrated chat widget on our website for immediate assistance
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                        Quick Links
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <a
                            href="/privacy-policy"
                            className="block rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
                        >
                            <h3 className="mb-2 font-semibold text-slate-900">Privacy Policy</h3>
                            <p className="text-sm text-slate-600">
                                Learn how we collect, use, and protect your data
                            </p>
                        </a>
                        <a
                            href="/terms-of-use"
                            className="block rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
                        >
                            <h3 className="mb-2 font-semibold text-slate-900">Terms of Use</h3>
                            <p className="text-sm text-slate-600">
                                Review our terms and conditions of service
                            </p>
                        </a>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-semibold text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg bg-white">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="text-base font-medium text-slate-900">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-slate-600 transition-transform flex-shrink-0 ml-4 ${openFaq === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Getting Started Section */}
                <section className="mb-12 rounded-lg bg-slate-50 p-8">
                    <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                        Getting Started
                    </h2>
                    <div className="space-y-4 text-slate-700">
                        <div>
                            <h3 className="mb-2 font-semibold text-slate-900">1. Open your presentation</h3>
                            <p>
                                Open any deck where the narration extension is installed.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 font-semibold text-slate-900">2. Click “Generate Narration”</h3>
                            <p>
                                Open the add-on panel and start generation for your full deck.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-2 font-semibold text-slate-900">3. Get your video link</h3>
                            <p>
                                Once processing is done, you’ll receive a shareable video link for your narrated presentation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className="rounded-lg bg-blue-50 p-8">
                    <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                        Pro Tips for Better Results
                    </h2>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>Write short sentences with clear punctuation for natural pacing</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>Use speaker notes as your per-slide narration script</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>Spell out acronyms and names phonetically to avoid mispronunciation</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>Iterate quickly: tweak the script, regenerate, and reshare the updated video link</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-semibold">•</span>
                            <span>Keep slide text on-screen aligned with what the narration says for clarity</span>
                        </li>
                    </ul>
                </section>
            </main>
            <FooterWebApp />
        </div>
    )
}

export default Support

