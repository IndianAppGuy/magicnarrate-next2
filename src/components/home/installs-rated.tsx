import React from 'react'

export default function InstallsRated({ className, textClassName }: { className?: string, textClassName?: string }) {
  return (
    <div className={`text-xs mt-3 ${className} flex justify-center`}><p className={`text-xs mt-3 max-w-fit ${textClassName}`}><b>~139</b> installs & rated <b>4.5/5</b> ⭐️ by <b>5</b> reviews</p></div>
  )
}
