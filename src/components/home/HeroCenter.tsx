"use client"
import TwoButtons2 from './TwoButtons2'
import UniversalVideoPlayer from '@/components/global/UniversalVideoPlayer'
import InstallsRated from './installs-rated'
import AutoPlayVideo from './AutoPlayVideo'

export default function HeroCenter() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className={`text-4xl font-bold text-gray-900 sm:text-5xl leading-tight`}>
              AI Narration Add-on for Presentations
            </h1>
            {/* set max width */}
            <p className={`mt-3 text-sm text-gray-600 sm:mt-4 sm:text-lg leading-6`}>
              Turn any presentation into a narrated video. Open your deck, click “Generate Narration”, and get a shareable video link in minutes.
            </p>
            <TwoButtons2 />
            <InstallsRated />
          </div>
        </div>

        <div className="mt-6 max-w-4xl mx-auto">
          <AutoPlayVideo src='https://screen.studio/share/nrQ5z4DE' />
        </div>
      </div>
    </div>
  )
}
