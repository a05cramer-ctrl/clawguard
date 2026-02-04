import { useState, useEffect } from 'react'
import './TypewriterText.css'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

function TypewriterText({ 
  texts, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseDuration = 2000 
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypewriterText
