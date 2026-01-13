'use client';

import { useRouter } from 'next/navigation';

export default function FooterWebApp() {
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-24 w-full border-t border-slate-200/50 bg-white/50 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="text-xl font-bold text-slate-900">MagicNarrate</div>
                        <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
                            Turn presentations into narrated videos with a shareable link.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
                        <a href="/privacy-policy" className="text-slate-600 hover:text-indigo-600 transition-colors">Privacy Policy</a>
                        <a href="/terms-of-use" className="text-slate-600 hover:text-indigo-600 transition-colors">Terms of Service</a>
                        <a href="/support" className="text-slate-600 hover:text-indigo-600 transition-colors">Support</a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">
                        © {currentYear} MagicNarrate. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {/* Social links or badges could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
