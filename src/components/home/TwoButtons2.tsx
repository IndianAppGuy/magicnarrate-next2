"use client"
import { toast } from 'sonner';

interface TwoButtons2Props {
    className?: string;
}

export default function TwoButtons2({ className }: TwoButtons2Props) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toast.info('This link is not live yet. Coming soon!', {
            duration: 3000,
        });
    };

    return (
        <div>
            <div className={`${className} mx-auto w-full mt-10 flex justify-center items-center gap-x-6`}>
                <button
                    onClick={handleClick}
                    className="items-center rounded-full px-8 py-4 font-semibold text-white border-2 border-gray-600 bg-gray-800 shadow-sm hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 text-xl transition-all"
                >
                    Install MagicNarrate <span aria-hidden="true">→</span>
                </button>
            </div>
        </div>
    )
}
