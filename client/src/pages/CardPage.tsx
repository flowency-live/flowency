'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CardPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  useEffect(() => {
    // Generate QR code URL using QR Server API
    const cardUrl = encodeURIComponent('https://flowency.co.uk/card')
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${cardUrl}`)
  }, [])

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jason Jones
ORG:Flowency
TITLE:Founder
EMAIL:hello@flowency.co.uk
URL:https://flowency.co.uk
TEL;TYPE=WORK,VOICE:+44 7758 240770
NOTE:We help your delivery systems flow. Framework agnostic, method diverse, AI-aware, value focused.
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Jason-Jones-Flowency.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Card Container */}
        <div className="bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-500/40 overflow-hidden">
          {/* Header with Logo */}
          <motion.div
            className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-10 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
            <div className="mb-6 relative">
              <img
                src="/assets/images/Flowency Logo - Orange.svg"
                alt="Flowency"
                className="h-24 w-auto mx-auto drop-shadow-2xl"
              />
            </div>
            <motion.h1
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Jason Jones
            </motion.h1>
            <p className="text-orange-200 text-base font-medium tracking-wide">Founder</p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="p-8 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Company */}
            <div className="text-center pb-4 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-slate-100 mb-3">
                Flowency
              </h2>
              <p className="text-base text-orange-400 font-medium">
                We help your delivery systems flow
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:hello@flowency.co.uk"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-200 hover:text-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Email</p>
                  <p className="text-sm font-semibold truncate">hello@flowency.co.uk</p>
                </div>
              </a>

              <a
                href="https://flowency.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-200 hover:text-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Website</p>
                  <p className="text-sm font-semibold truncate">flowency.co.uk</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jjonesuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-200 hover:text-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">LinkedIn</p>
                  <p className="text-sm font-semibold truncate">Jason Jones</p>
                </div>
              </a>

              <a
                href="tel:+447758240770"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-200 hover:text-orange-400 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Phone</p>
                  <p className="text-sm font-semibold">+44 7758 240770</p>
                </div>
              </a>
            </div>

            {/* QR Code */}
            {qrCodeUrl && (
              <motion.div
                className="pt-6 border-t border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <p className="text-xs text-slate-500 text-center mb-3">Share this card</p>
                <div className="bg-white p-4 rounded-xl mx-auto w-fit">
                  <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
                </div>
                <p className="text-xs text-slate-500 text-center mt-2">Scan to save contact</p>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="space-y-3 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <button
                onClick={downloadVCard}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Save to Contacts
                </span>
              </button>

              <a
                href="/#contact"
                className="block w-full bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-4 px-6 rounded-xl transition-all text-center border border-slate-600 hover:border-slate-500"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-slate-500 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Flowency - Adaptive Delivery
        </motion.p>
      </motion.div>
    </div>
  )
}
