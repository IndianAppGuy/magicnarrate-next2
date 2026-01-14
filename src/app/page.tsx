'use client'

import HeaderWebApp from '@/components/global/HeaderWebApp'
import { Sparkles } from 'lucide-react'
import FooterWebApp from '@/components/global/FooterWebApp'
import HeroCenter from '@/components/home/HeroCenter'
import { useState } from 'react'
import { toast } from 'sonner'
import { Metadata } from 'next'
import { generateMetaData } from '../../utils'

export const metadata: Metadata = generateMetaData({
    title: 'AI Narration Add-on for Presentations | MagicNarrate',
    description: 'MagicNarrate turns any presentation into a narrated video. Open your deck, click “Generate Narration”, and get a shareable video link in minutes.',
    slug: '/',
    ogimage: `https://pbs.twimg.com/media/G-m6tlMb0AAm5n8?format=jpg&name=large`
})

const Page = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const [currentSlide, setCurrentSlide] = useState(0)

    const narrationShowcase = [
        {
            id: 1,
            title: "Shareable video link",
            description: "We render your slides + narration into a video and give you a link you can send anywhere."
        },
        {
            id: 2,
            title: "One click from your deck",
            description: "No exporting, uploading, or switching tabs—generate narration directly from the add-on."
        },
        {
            id: 3,
            title: "Narrates the full deck",
            description: "Click “Generate Narration” once—your entire presentation gets narrated slide-by-slide."
        },
        {
            id: 4,
            title: "Fast iterations",
            description: "Update slide text or speaker notes, regenerate, and share the updated video link."
        },
        {
            id: 5,
            title: "Made for async teams",
            description: "Perfect for product updates, training, and demos—no meeting needed."
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderWebApp />

            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-8">

                {/* Hero Section */}
                <HeroCenter />

                {/* AI Features Sections - Simple Text Layout */}
                {(() => {
                    const sections = [
                        {
                            title: "One-click narration for your entire deck",
                            subtitle: "AI Narration Extension",
                            description: [
                                "Open any presentation, click \"Generate Narration\", and we create a natural voiceover across all slides. Great for async updates, training, and product demos."
                            ],
                            features: [
                                "Narrates all slides automatically",
                                "Natural-sounding AI voice",
                                "Perfect for async communication"
                            ]
                        },
                        {
                            title: "Seamless inside your presentation",
                            subtitle: "Integrated as an Add-on",
                            description: [
                                "No exporting, uploading, or switching tabs. The extension lives where you work—generate narration without leaving your deck."
                            ],
                            features: [
                                "Works directly in your presentation",
                                "No file downloads required",
                                "One-click generation"
                            ]
                        },
                        {
                            title: "Get a video link you can share",
                            subtitle: "Instant video output",
                            description: [
                                "After narration is generated, we render your presentation into a video and provide a shareable link—perfect for sending to clients, teammates, or students."
                            ],
                            features: [
                                "Shareable video link",
                                "Works on any device",
                                "No account needed to view"
                            ]
                        }
                    ];

                    return sections.map((section, sectionIndex) => (
                        <article key={sectionIndex} className="py-16 mb-16 animate-fade-in border-b border-slate-200 last:border-b-0" style={{ animationDelay: `${0.3 + sectionIndex * 0.1}s` }}>
                            <div className="max-w-4xl mx-auto">
                                <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
                                    {section.subtitle}
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
                                    {section.title}
                                </h2>
                                <div className="space-y-4 mb-6">
                                    {section.description.map((desc, descIndex) => (
                                        <p key={descIndex} className="text-lg text-slate-600 leading-relaxed">
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <ul className="space-y-2 mb-8">
                                    {section.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => toast.info('Addon awaiting going live, check back in 72 hours')}
                                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Try AI Narration Add-on
                                </button>
                            </div>
                        </article>
                    ));
                })()}

                {/* How to Generate AI Narration Section */}
                <section className="py-24 mb-12 bg-slate-800 rounded-[3rem] px-8 sm:px-16 animate-fade-in border border-slate-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Column - Steps */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Generate narration in minutes</h2>
                                <p className="text-lg text-white">Four simple steps to turn slides into a narrated video link.</p>
                            </div>

                            <ol className="space-y-8">
                                {[
                                    { step: 1, title: "Open your presentation", text: "Open any deck where the extension is installed." },
                                    { step: 2, title: "Click “Generate Narration”", text: "Start narration generation directly from the add-on panel." },
                                    { step: 3, title: "Review and adjust", text: "Preview your slides and speaker notes, then generate when ready." },
                                    { step: 4, title: "Get your video link", text: "We narrate every slide, render a video, and provide a shareable link." }
                                ].map((item) => (
                                    <li key={item.step} className="flex items-start gap-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md border border-slate-100 flex items-center justify-center text-xl font-bold text-indigo-600 transition-transform group-hover:scale-110">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                            <p className="text-white leading-relaxed">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Right Column - Preview Slider */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
                            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-2 border-slate-700">
                                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {narrationShowcase.map((item) => (
                                        <div key={item.id} className="w-full flex-shrink-0">
                                            <div className="h-[500px] p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900/40 flex flex-col justify-between">
                                                <div className="flex items-start justify-between gap-6">
                                                    <div className="space-y-3">
                                                        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-200">
                                                            Preview
                                                        </p>
                                                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                                        <p className="text-slate-200 leading-relaxed">{item.description}</p>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 17c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-semibold text-white">Output</p>
                                                        <span className="text-xs font-bold text-indigo-200">Video link ready</span>
                                                    </div>
                                                    <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                                        <div className="h-full w-2/3 bg-indigo-400 rounded-full"></div>
                                                    </div>
                                                    <p className="mt-3 text-xs text-slate-200">
                                                        Rendering narration + slides…
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Slider Controls */}
                                <div className="absolute inset-y-0 left-0 flex items-center px-4">
                                    <button 
                                        onClick={() => setCurrentSlide(prev => (prev === 0 ? narrationShowcase.length - 1 : prev - 1))} 
                                        className="w-10 h-10 bg-slate-900/50 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-900 transition-all"
                                        aria-label="Previous preview"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                                    <button 
                                        onClick={() => setCurrentSlide(prev => (prev === narrationShowcase.length - 1 ? 0 : prev + 1))} 
                                        className="w-10 h-10 bg-slate-900/50 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-900 transition-all"
                                        aria-label="Next preview"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pro Tips Section */}
                <section className="py-24 mb-12 animate-fade-in">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Expert Tips</h2>
                            <p className="text-lg text-slate-600">Make your AI narration sound natural and polished with these quick wins.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Write like you speak",
                                text: "Use short sentences and simple phrasing. If it's hard to say out loud, it will sound unnatural as narration."
                            },
                            {
                                title: "Use speaker notes as your script",
                                text: "Put the narration script in speaker notes for each slide, then generate. It's the easiest way to control what's said."
                            },
                            {
                                title: "Spell out names & acronyms",
                                text: "Write \"SaaS (sass)\" or \"Nguyen (win)\" to avoid mispronunciations—especially for brand names and people."
                            }
                        ].map((tip, i) => (
                            <article key={i} className="bg-slate-800 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] group">
                                <div className="w-12 h-12 bg-sky-400 rounded-2xl flex items-center justify-center text-white mb-6">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-200 mb-3">{tip.title}</h3>
                                <p className="text-slate-300 leading-relaxed text-sm">{tip.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 mb-12 animate-fade-in">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
                        <p className="text-lg text-slate-600">Everything you need to know about AI narration for presentations.</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "How does AI narration work?",
                                a: "Install the extension, open any presentation, then click “Generate Narration”. We narrate the full deck slide-by-slide and provide a shareable video link."
                            },
                            {
                                q: "What do I get after generation?",
                                a: "You’ll get a video link for your narrated presentation. If downloads are enabled in your plan, you may also be able to download the video file."
                            },
                            {
                                q: "Can I edit the script?",
                                a: "Yes. Update your slide text or speaker notes, then generate again to create an updated narration and video link."
                            },
                            {
                                q: "Which presentations are supported?",
                                a: "Any presentation where the narration extension is installed. If you’re unsure, contact support and we’ll confirm compatibility for your workflow."
                            }
                        ].map((faq, i) => (
                            <div key={i} className={`rounded-[2rem] overflow-hidden shadow-md ${openFaq === i ? 'bg-slate-800' : i % 2 === 0 ? 'bg-slate-700' : 'bg-slate-600'}`}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                >
                                    <span className="text-lg font-bold text-slate-200">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-180 bg-slate-900 text-white' : 'bg-slate-500 text-slate-200'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </button>
                                {openFaq === i && (
                                    <div className="px-8 pb-8 text-slate-300 leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional SEO Content Section */}
                <section className="py-24 mt-24 border-t border-slate-200/50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose MagicNarrate?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                {
                                    title: "Natural-sounding narration",
                                    description: "Create narration that sounds clear and professional for training, demos, and async updates."
                                },
                                {
                                    title: "Integrated Workflow",
                                    description: "No more exporting and re-uploading. Generate narration directly inside your presentation."
                                },
                                {
                                    title: "Shareable output",
                                    description: "Get a video link you can share with a team, clients, or students—perfect for presentations that need to travel."
                                },
                                {
                                    title: "Fast turnaround",
                                    description: "Generate, review, tweak your script, and regenerate quickly until it’s exactly right."
                                }
                            ].map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                                        <div className="w-1.5 h-6 bg-indigo-500 rounded-full"></div>
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-slate-800 rounded-3xl text-center">
                            <h3 className="text-2xl font-bold text-slate-200 mb-4">Ready to transform your presentations?</h3>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Turn any deck into a narrated video link your audience can watch anytime.</p>
                            <button
                                onClick={() => toast.info('Addon awaiting going live, check back in 72 hours')}
                                className="inline-block px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all hover:scale-105"
                            >
                                Install MagicNarrate
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <FooterWebApp />
        </div>
    )
}

export default Page
