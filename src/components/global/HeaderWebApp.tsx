import Image from 'next/image';
import magicNarrateIcon from '@/components/icons/magicslidenarrate.png';
import Link from 'next/link';

export default function HeaderWebApp({ className }: { className?: string }) {

    return (
        <header
            className={`w-full bg-white/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300 border-b border-slate-200/50 ${className || ''
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link
                    type="button"
                    href={`/`}
                    className="group inline-flex items-center gap-3 transition-opacity hover:opacity-90"
                >
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-1">
                        <Image
                            src={magicNarrateIcon}
                            alt="MagicNarrate app icon"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        MagicNarrate
                    </span>
                </Link>
            </div>
        </header>
    );
}
