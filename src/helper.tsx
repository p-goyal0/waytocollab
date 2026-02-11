// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, FileText, Sparkles, MessageSquare, CreditCard, Linkedin, CheckCircle, Star, Users, TrendingUp, Zap, Shield, Clock, Target, Brain, Rocket, Gem, Crown, Wand2, Layers, Palette, ChevronLeft, ChevronRight, ArrowUpRight, Mail, Phone, MapPin, Send, X } from "lucide-react"
// import Link from "next/link"

// export default function HomePage() {
//   const [activeSection, setActiveSection] = useState('features')
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [currentCardIndex, setCurrentCardIndex] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)
//   const [startX, setStartX] = useState(0)
//   const [scrollLeft, setScrollLeft] = useState(0)
//   const [showAnimatedLines, setShowAnimatedLines] = useState(false)
//   const [isTabTransitioning, setIsTabTransitioning] = useState(false)
//   const [previousActiveSection, setPreviousActiveSection] = useState('features')
//   const [showStats, setShowStats] = useState(true)
//   const [hoveredPriceCard, setHoveredPriceCard] = useState<number | null>(null)
//   const [showContactModal, setShowContactModal] = useState(false)
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [isModalClosing, setIsModalClosing] = useState(false)
//   const cardsRef = useRef<HTMLDivElement>(null)
  
//   const handleCloseModal = () => {
//     setIsModalClosing(true)
//     setTimeout(() => {
//       setShowContactModal(false)
//       setIsModalClosing(false)
//     }, 300)
//   }
  
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Mock submission
//     alert('Thank you for contacting us! We\'ll get back to you soon.')
//     handleCloseModal()
//     setFormData({ name: '', email: '', message: '' })
//   }
  
//   const totalCards = 6

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['features', 'pricing', 'cta']
//       const scrollPosition = window.scrollY + 100

//         // Check for stats visibility (show when scrolled down 200px)
//         if (window.scrollY > 200) {
//           setShowStats(true)
//         } else {
//           setShowStats(false)
//         }

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener('scroll', handleScroll)
//     window.addEventListener('mousemove', handleMouseMove)
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   // Show animated lines on page load, then hide them
//   useEffect(() => {
//     // Show animated lines immediately when page loads
//     setShowAnimatedLines(true)
    
//     // Hide animated lines after 4 seconds
//     const timer = setTimeout(() => {
//       setShowAnimatedLines(false)
//     }, 4000)

//     return () => clearTimeout(timer)
//   }, [])

//   // Handle tab transition animation
//   useEffect(() => {
//     if (activeSection !== previousActiveSection) {
//       setIsTabTransitioning(true)
//       setPreviousActiveSection(activeSection)
      
//       // Reset transition state after animation completes
//       const timer = setTimeout(() => {
//         setIsTabTransitioning(false)
//       }, 800) // Match animation duration

//       return () => clearTimeout(timer)
//     }
//   }, [activeSection, previousActiveSection])

//   // Mouse interaction functions
//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return
//     e.preventDefault()
//     const x = e.pageX - cardsRef.current!.offsetLeft
//     const walk = (x - startX) * 2
//     cardsRef.current!.scrollLeft = scrollLeft - walk
//   }

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true)
//     setStartX(e.pageX - cardsRef.current!.offsetLeft)
//     setScrollLeft(cardsRef.current!.scrollLeft)
//   }

//   const handleMouseLeave = () => {
//     setIsDragging(false)
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

// const nextCard = () => {
//   if (isDragging) return
//   setIsDragging(true)
//   const nextIndex = (currentCardIndex + 1) % 6
//   setCurrentCardIndex(nextIndex)
//   setTimeout(() => setIsDragging(false), 600)
// }

// const prevCard = () => {
//   if (isDragging) return
//   setIsDragging(true)
//   const prevIndex = currentCardIndex === 0 ? 5 : currentCardIndex - 1
//   setCurrentCardIndex(prevIndex)
//   setTimeout(() => setIsDragging(false), 600)
// }

// const goToCard = (index: number) => {
//   if (isDragging) return
//   setIsDragging(true)
//   setCurrentCardIndex(index)
//   setTimeout(() => setIsDragging(false), 600)
// }

// useEffect(() => {
//   const interval = setInterval(() => {
//     nextCard()
//   }, 4000) // Increased interval for better UX

//   return () => clearInterval(interval)
// }, [currentCardIndex])

//   const navItems = [
//     { id: 'features', label: 'Features', href: '#features' },
//     { id: 'pricing', label: 'Pricing', href: '#pricing' },
//     { id: 'cta', label: 'Get Started', href: '#cta' }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
//       {/* Add global styles for responsive fonts and animations */}
//       <style jsx global>{`
//         @media (max-width: 768px) {
//           .responsive-heading-xl {
//             font-size: 2.5rem !important;
//             line-height: 1.2 !important;
//           }
//           .responsive-heading-lg {
//             font-size: 2rem !important;
//             line-height: 1.3 !important;
//           }
//           .responsive-heading-md {
//             font-size: 1.75rem !important;
//           }
//           .responsive-text-lg {
//             font-size: 1rem !important;
//           }
//         }
        
//         @media (max-width: 640px) {
//           .responsive-heading-xl {
//             font-size: 2rem !important;
//             line-height: 1.2 !important;
//           }
//           .responsive-heading-lg {
//             font-size: 1.5rem !important;
//             line-height: 1.3 !important;
//           }
//           .responsive-heading-md {
//             font-size: 1.25rem !important;
//           }
//         }

//         @keyframes float-up {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         @keyframes glow-pulse {
//           0%, 100% { 
//             box-shadow: 0 0 15px rgba(59, 130, 246, 0.3),
//                         0 0 25px rgba(59, 130, 246, 0.2),
//                         0 0 35px rgba(59, 130, 246, 0.1);
//           }
//           50% { 
//             box-shadow: 0 0 20px rgba(59, 130, 246, 0.4),
//                         0 0 35px rgba(59, 130, 246, 0.3),
//                         0 0 50px rgba(59, 130, 246, 0.2);
//           }
//         }

//         @keyframes slide-in-bottom {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .price-card-hover {
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .price-card-hover:hover {
//           transform: translateY(-10px) scale(1.02);
//         }

//         @keyframes wave-animation {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         .wave-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           pointer-events: none;
//         }

//         .wave-overlay::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(59, 130, 246, 0.1),
//             transparent
//           );
//           animation: wave-animation 8s linear infinite;
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float-slow {
//           0%, 100% { transform: translate(0, 0); }
//           33% { transform: translate(30px, -30px); }
//           66% { transform: translate(-20px, 20px); }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.1); }
//         }
        
//         @keyframes sparkle {
//           0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
//           50% { opacity: 0.6; transform: scale(0.8) rotate(180deg); }
//         }
        
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes slide-in-right {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
        
//         @keyframes slide-out-right {
//           from {
//             transform: translateX(0);
//             opacity: 1;
//           }
//           to {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//         }
        
//         @keyframes modal-backdrop-in {
//           from {
//             opacity: 0;
//             backdrop-filter: blur(0px);
//           }
//           to {
//             opacity: 1;
//             backdrop-filter: blur(10px);
//           }
//         }
        
//         @keyframes modal-backdrop-out {
//           from {
//             opacity: 1;
//             backdrop-filter: blur(10px);
//           }
//           to {
//             opacity: 0;
//             backdrop-filter: blur(0px);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-float-slow {
//           animation: float-slow 20s ease-in-out infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
        
//         .animate-sparkle {
//           animation: sparkle 2s ease-in-out infinite;
//         }
        
//         .animate-gradient-shift {
//           background-size: 200% auto;
//           animation: gradient-shift 3s ease infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .modal-slide-in {
//           animation: slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
        
//         .modal-slide-out {
//           animation: slide-out-right 0.3s cubic-bezier(0.7, 0, 0.84, 0) forwards;
//         }
        
//         .modal-backdrop-in {
//           animation: modal-backdrop-in 0.3s ease-out forwards;
//         }
        
//         .modal-backdrop-out {
//           animation: modal-backdrop-out 0.2s ease-out forwards;
//         }
        
//         /* Premium Stats Slide Up Animation */
//         @keyframes stats-slide-up {
//           0% {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-stats-slide-up {
//           animation: stats-slide-up 1s ease-out forwards;
//         }

//         /* Stagger delays for each stat - starts after buttons appear */
//         .stat-item-1 {
//           animation-delay: 3.8s;
//         }
        
//         .stat-item-2 {
//           animation-delay: 3.9s;
//         }
        
//         .stat-item-3 {
//           animation-delay: 4.0s;
//         }
        
//         .stat-item-4 {
//           animation-delay: 4.1s;
//         }
//       `}</style>

//       {/* Main Page Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20"></div>
      
//       {/* Additional Gradient Layers */}
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent"></div>
      
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      
//       {/* Premium Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
//       {/* Enhanced Grid Pattern for Top Middle */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50" style={{
//         maskImage: 'radial-gradient(ellipse 400px 200px at 50% 4%, black 70%, transparent 100%)'
//       }} />
      
//       {/* Moving Lines Animation - Only on Page Load */}
//       <div className={`absolute inset-0 transition-opacity duration-3000 ${showAnimatedLines ? 'opacity-70' : 'opacity-0'}`}>
//         {/* Random Position Lines - Moving in Random Directions */}
        
//         {/* Horizontal Lines - Random Positions */}
//         <div className="absolute top-[8%] left-[12%] w-32 h-px bg-gradient-to-r from-blue-400/60 to-transparent" style={{ 
//           animation: 'horizontalMove1 8s ease-in-out infinite',
//           animationDelay: '0s'
//         }}></div>
//         <div className="absolute top-[18%] left-[28%] w-40 h-px bg-gradient-to-r from-indigo-400/60 to-transparent" style={{ 
//           animation: 'horizontalMove2 8s ease-in-out infinite',
//           animationDelay: '1s'
//         }}></div>
        
//         {/* Vertical Lines - Random Positions */}
//         <div className="absolute top-[15%] left-[8%] w-px h-32 bg-gradient-to-b from-blue-400/60 to-transparent" style={{ 
//           animation: 'verticalMove1 8s ease-in-out infinite',
//           animationDelay: '0s'
//         }}></div>
//       </div>

//       {/* Header */}
//       <header className="border-b border-blue-500/20 bg-slate-900/90 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 border border-blue-500/30 rounded-lg flex items-center justify-center">
//               <Brain className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ResumeAI</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-8 relative">
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className={`relative text-slate-400 hover:text-blue-400 transition-all duration-300 font-medium py-2 px-4 ${
//                   activeSection === item.id ? 'text-blue-400' : ''
//                 }`}
//               >
//                 {item.label}
//                 {activeSection === item.id && (
//                   <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent">
//                     <div className={`h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-800 ${
//                       isTabTransitioning ? 'animate-tab-line-expand' : 'w-full'
//                     }`}></div>
//                   </div>
//                 )}
//               </Link>
//             ))}
//           </nav>
//           <div className="flex items-center gap-4">
//             <Button variant="ghost" asChild className="text-slate-400 hover:text-blue-400 font-medium">
//               <Link href="/login">Sign In</Link>
//             </Button>
//             <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
//               <Link href="/register">Get Started</Link>
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-32 px-6 relative pt-24 overflow-hidden">
//          {/* Quantum Field Background */}
//          <div className="absolute inset-0 opacity-20">
//            {/* Vertical Lines */}
//            <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-quantum-line-1"></div>
//            <div className="absolute top-3/4 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-quantum-line-2"></div>
//          </div>
        
//         <div className="container mx-auto w-full text-center relative">
//           {/* Morphing Badge */}
//           <div className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8 animate-badge-morph">
//             <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//             <span className="text-sm font-medium text-blue-300 animate-text-reveal">PREMIUM AI RESUME OPTIMIZATION</span>
//           </div>
          
//           {/* Magnetic Text Headline with responsive classes */}
//           <h1 className="text-4xl md:text-7xl responsive-heading-xl font-bold text-white mb-10 leading-tight animate-magnetic-text" style={{ fontFamily: '"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif' }}>
//             <span className="block animate-text-slide-up-1" style={{ animationDelay: '2s' }}>Land More Interviews with</span>
//             <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent animate-text-slide-up-2" style={{ animationDelay: '2.3s' }}>AI-Powered Resumes</span>
//           </h1>
          
//           {/* Typewriter Description */}
//           <p className="text-lg md:text-xl responsive-text-lg text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light animate-typewriter" style={{ animationDelay: '2.8s' }}>
//             Our AI doesn't just optimize your resume—it 
//             <span className="font-semibold text-blue-400"> analyzes gaps</span>, 
//             <span className="font-semibold text-indigo-400"> boosts ATS score</span>, and helps you 
//             <span className="font-semibold text-purple-400"> dominate the job market</span>.
//           </p>
          
//           {/* Liquid Morphing Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button size="lg" className="text-lg px-8 py-4 mr-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-liquid-morph" style={{ animationDelay: '3.2s' }} asChild>
//               <Link href="/register">
//                 <span className="animate-text-reveal-delay">Get Started</span>
//                 <Rocket className="ml-2 w-5 h-5 animate-rocket-launch" />
//               </Link>
//             </Button>
//             <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-slate-800/50 border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white rounded-xl font-medium hover:scale-105 transition-all duration-300" style={{ animationDelay: '3.5s' }} asChild>
//               <Link href="#features">
//                 <Target className="mr-2 w-5 h-5 animate-target-spin" />
//                 <span className="animate-text-reveal-delay-2">Explore Features</span>
//               </Link>
//             </Button>
//           </div>
          
//           {/* Premium Stats - With Slide Up Animation */}
//           <div className={`grid grid-cols-2 mt-20 md:grid-cols-4 gap-10 max-w-7xl mx-auto transition-all duration-1000`}>
//             <div className="text-center opacity-0 animate-stats-slide-up stat-item-1">
//               <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
//               <div className="text-slate-400 font-medium">Accuracy Rate</div>
//             </div>
//             <div className="text-center opacity-0 animate-stats-slide-up stat-item-2">
//               <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
//               <div className="text-slate-400 font-medium">Beta Users</div>
//             </div>
//             <div className="text-center opacity-0 animate-stats-slide-up stat-item-3">
//               <div className="text-3xl font-bold text-blue-500 mb-2">2min</div>
//               <div className="text-slate-400 font-medium">Processing Time</div>
//             </div>
//             <div className="text-center opacity-0 animate-stats-slide-up stat-item-4">
//               <div className="text-3xl font-bold text-indigo-500 mb-2">24/7</div>
//               <div className="text-slate-400 font-medium">AI Available</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Enhanced Horizontal Scroll */}
//       <section id="features" className="py-32 px-6 relative overflow-hidden">
//         {/* Premium Background Elements */}
//         <div className="absolute inset-0">
//           {/* Floating Orbs */}
//           <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
//           <div className="absolute bottom-20 right-[15%] w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl animate-pulse-slow"></div>
          
//           {/* Gradient Mesh */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
//         </div>

//         <div className="container mx-auto max-w-7xl relative">
//           {/* Section Header with Premium Animation */}
//           <div className="text-center mb-32 relative">
//             {/* Animated Badge */}
//             <div className="inline-block mb-8">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
//                 <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-blue-400/20 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold">
//                   <Sparkles className="w-4 h-4 animate-sparkle" />
//                   <span className="tracking-wider">PREMIUM FEATURES</span>
//                   <Sparkles className="w-4 h-4 animate-sparkle" style={{animationDelay: '0.5s'}} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Main Heading with Gradient Animation */}
//             <h2 className="text-5xl md:text-7xl responsive-heading-lg font-bold mb-8 relative">
//               <span className="block text-white opacity-90">Powerful AI Features</span>
//               <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
//                 Built for Success
//               </span>
//             </h2>
            
//             <p className="text-xl md:text-2xl responsive-text-lg text-slate-300/90 max-w-4xl mx-auto leading-relaxed">
//               Experience the next generation of resume optimization with our suite of intelligent tools designed to maximize your career potential
//             </p>
//           </div>

//           {/* Premium Horizontal Scrolling Carousel */}
//           <div className="relative">
//             {/* Navigation Buttons */}
//             <button 
//               onClick={prevCard}
//               className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700/80 hover:scale-110 transition-all duration-300 group"
//             >
//               <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
//             </button>
//             <button 
//               onClick={nextCard}
//               className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700/80 hover:scale-110 transition-all duration-300 group"
//             >
//               <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
//             </button>


//             {/* Carousel Container */}
//           <div className="relative h-[400px] flex items-center justify-center">
//             {/* Cards Container */}
//             <div className="relative w-full h-[320px] flex items-center justify-center">
//             {[
//               { 
//                 icon: Brain, 
//                 title: "Neural Analysis", 
//                 description: "Deep learning algorithms analyze industry patterns to optimize your resume for maximum impact",
//                 gradient: "from-blue-600 to-indigo-600",
//                 bgGradient: "from-blue-900/20 to-indigo-900/20",
//                 borderColor: "border-blue-500/30",
//                 shadowColor: "rgba(59, 130, 246, 0.4)"
//               },
//               { 
//                 icon: Wand2, 
//                 title: "Smart Enhancement", 
//                 description: "Transform basic descriptions into powerful achievement statements that catch recruiters' attention",
//                 gradient: "from-indigo-600 to-purple-600",
//                 bgGradient: "from-indigo-900/20 to-purple-900/20",
//                 borderColor: "border-indigo-500/30",
//                 shadowColor: "rgba(99, 102, 241, 0.4)"
//               },
//               { 
//                 icon: MessageSquare, 
//                 title: "AI Assistant", 
//                 description: "Get personalized guidance and strategic career advice instantly from our intelligent chatbot",
//                 gradient: "from-purple-600 to-pink-600",
//                 bgGradient: "from-purple-900/20 to-pink-900/20",
//                 borderColor: "border-purple-500/30",
//                 shadowColor: "rgba(168, 85, 247, 0.4)"
//               },
//               { 
//                 icon: Target, 
//                 title: "Precision Matching", 
//                 description: "Align your experience perfectly with job requirements using advanced keyword optimization",
//                 gradient: "from-cyan-600 to-blue-600",
//                 bgGradient: "from-cyan-900/20 to-blue-900/20",
//                 borderColor: "border-cyan-500/30",
//                 shadowColor: "rgba(34, 211, 238, 0.4)"
//               },
//               { 
//                 icon: Shield, 
//                 title: "ATS Shield", 
//                 description: "Guaranteed compatibility with all major applicant tracking systems for maximum visibility",
//                 gradient: "from-emerald-600 to-teal-600",
//                 bgGradient: "from-emerald-900/20 to-teal-900/20",
//                 borderColor: "border-emerald-500/30",
//                 shadowColor: "rgba(16, 185, 129, 0.4)"
//               },
//               { 
//                 icon: Zap, 
//                 title: "Instant Results", 
//                 description: "Professional optimization completed in under 2 minutes with lightning-fast processing",
//                 gradient: "from-orange-600 to-red-600",
//                 bgGradient: "from-orange-900/20 to-red-900/20",
//                 borderColor: "border-orange-500/30",
//                 shadowColor: "rgba(249, 115, 22, 0.4)"
//               }
//             ].map((feature, index) => {
//               const diff = index - currentCardIndex
//               const totalCards = 6
              
//               // Calculate proper diff considering wrap-around
//               let normalizedDiff = diff
//               if (Math.abs(diff) > totalCards / 2) {
//                 normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards
//               }
              
//               // Determine card style based on position
//               let transformValue = ''
//               let opacityValue = 0
//               let zIndexValue = 10
//               let pointerEventsValue: 'auto' | 'none' = 'none'
//               let visibilityValue: 'visible' | 'hidden' = 'hidden'
              
//               if (normalizedDiff === 0) {
//                 // Center card
//                 transformValue = 'translateX(0) scale(1)'
//                 opacityValue = 1
//                 zIndexValue = 30
//                 pointerEventsValue = 'auto'
//                 visibilityValue = 'visible'
//               } else if (normalizedDiff === -1) {
//                 // Left card
//                 transformValue = 'translateX(-85%) scale(0.85)'
//                 opacityValue = 0.6
//                 zIndexValue = 20
//                 pointerEventsValue = 'auto'
//                 visibilityValue = 'visible'
//               } else if (normalizedDiff === 1) {
//                 // Right card
//                 transformValue = 'translateX(85%) scale(0.85)'
//                 opacityValue = 0.6
//                 zIndexValue = 20
//                 pointerEventsValue = 'auto'
//                 visibilityValue = 'visible'
//               } else {
//                 // Hidden cards - keep them completely invisible
//                 transformValue = normalizedDiff < 0 ? 'translateX(-150%) scale(0.7)' : 'translateX(150%) scale(0.7)'
//                 opacityValue = 0
//                 zIndexValue = 1
//                 pointerEventsValue = 'none'
//                 visibilityValue = 'hidden'
//               }
              
//               const isCenter = normalizedDiff === 0
              
//               return (
//                 <div 
//                   key={index}
//                   className={`absolute w-[400px] ${normalizedDiff >= -1 && normalizedDiff <= 1 ? 'cursor-pointer' : ''}`}
//                   style={{
//                     transform: transformValue,
//                     opacity: opacityValue,
//                     zIndex: zIndexValue,
//                     pointerEvents: pointerEventsValue,
//                     visibility: visibilityValue,
//                     transition: normalizedDiff >= -1 && normalizedDiff <= 1 ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s ease, z-index 0s' : 'none'
//                   }}
//                   onClick={() => !isCenter && normalizedDiff >= -1 && normalizedDiff <= 1 && goToCard(index)}
//                 >
//                   <div 
//                     className={`relative h-[320px] bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl border ${feature.borderColor} rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] group`}
//                     style={{ 
//                       boxShadow: isCenter 
//                         ? `0 0 0 2px ${feature.shadowColor}, 0 2px 8px ${feature.shadowColor}` 
//                         : `0 0 0 1px rgba(255,255,255,0.08), 0 1px 4px rgba(0,0,0,0.1)`
//                     }}
//                   >
//                     {/* Animated Background Pattern */}
//                     <div className="absolute inset-0 rounded-3xl overflow-hidden">
//                       <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
//                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="relative z-10">
//                       {/* Icon Container */}
//                       <div className="mb-6 relative">
//                         <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-500`}></div>
//                         <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6`}>
//                           <feature.icon className="w-8 h-8 text-white" />
//                         </div>
//                       </div>
                      
//                       {/* Text Content */}
//                       <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300">
//                         {feature.title}
//                       </h3>
//                       <p className="text-slate-300 leading-relaxed text-base">
//                         {feature.description}
//                       </p>
//                     </div>
                    
//                     {/* Decorative Elements */}
//                     <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
//                     <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
//                   </div>
//                 </div>
//               )
//             })}
//             </div>
//           </div>
//             {/* Progress Indicators */}
//             <div className="flex justify-center gap-3 mt-12">
//               {[0, 1, 2, 3, 4, 5].map((dot) => (
//                 <button
//                   key={dot}
//                   onClick={() => goToCard(dot)}
//                   className={`transition-all duration-500 rounded-full ${
//                     currentCardIndex === dot 
//                       ? 'w-10 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 shadow-lg shadow-blue-500/50' 
//                       : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section - Enhanced */}
//       <section id="pricing" className="py-32 px-6 relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="container mx-auto max-w-7xl relative">
//           <div className="text-center mb-24">
//             <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in-bottom">
//               <Gem className="w-4 h-4" />
//               PRICING PLANS
//             </div>
//             <h2 className="text-5xl md:text-6xl responsive-heading-lg font-bold text-white mb-8">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-2xl responsive-text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
//               No monthly subscriptions. Pay only for the optimizations you need. Start free and scale as you grow.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Free Plan */}
//             <div 
//               className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 price-card-hover relative overflow-hidden"
//               onMouseEnter={() => setHoveredPriceCard(0)}
//               onMouseLeave={() => setHoveredPriceCard(null)}
//             >
//               {hoveredPriceCard === 0 && <div className="wave-overlay"></div>}
//               <div className="text-center relative z-10">
//                 <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
//                 <div className="text-4xl font-bold text-blue-400 mb-4">$0</div>
//                 <p className="text-slate-400 mb-8">Perfect for getting started</p>
//                 <ul className="space-y-4 mb-8">
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.1s'}} />
//                     1 Resume per month
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.2s'}} />
//                     2 Job Description optimizations
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.3s'}} />
//                     Basic AI analysis
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.4s'}} />
//                     Standard templates
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300" asChild>
//                   <Link href="/register">Start Free</Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Basic Plan */}
//             <div 
//               className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 price-card-hover relative overflow-hidden"
//               onMouseEnter={() => setHoveredPriceCard(1)}
//               onMouseLeave={() => setHoveredPriceCard(null)}
//             >
//               {hoveredPriceCard === 1 && <div className="wave-overlay"></div>}
//               <div className="text-center relative z-10">
//                 <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
//                 <div className="text-4xl font-bold text-indigo-400 mb-4">$2</div>
//                 <p className="text-slate-400 mb-8">For serious job seekers</p>
//                 <ul className="space-y-4 mb-8">
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.1s'}} />
//                     2 Resumes per month
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.2s'}} />
//                     20 Job Description optimizations
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.3s'}} />
//                     Advanced AI analysis
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.4s'}} />
//                     Priority support
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300" asChild>
//                   <Link href="/register">Get Started</Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Pro Plan - Most Popular */}
//             <div 
//               className="bg-slate-800/50 border-2 border-blue-500 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 price-card-hover relative "
//               onMouseEnter={() => setHoveredPriceCard(2)}
//               onMouseLeave={() => setHoveredPriceCard(null)}
//               style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
//             >
//               {hoveredPriceCard === 2 && <div className="wave-overlay"></div>}
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
//                   Most Popular
//                 </div>
//               </div>
//               <div className="text-center relative z-10">
//                 <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
//                 <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">$5</div>
//                 <p className="text-slate-400 mb-8">For career professionals</p>
//                 <ul className="space-y-4 mb-8">
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.1s'}} />
//                     5 Resumes per month
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.2s'}} />
//                     100 Job Description optimizations
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.3s'}} />
//                     Advanced AI analysis
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.4s'}} />
//                     Edit resumes after optimization
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.5s'}} />
//                     Priority support
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg" asChild>
//                   <Link href="/register">
//                     Get Started
//                     <ArrowUpRight className="ml-2 w-4 h-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>

//             {/* Premium Plan */}
//             <div 
//               className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 price-card-hover relative overflow-hidden"
//               onMouseEnter={() => setHoveredPriceCard(3)}
//               onMouseLeave={() => setHoveredPriceCard(null)}
//             >
//               {hoveredPriceCard === 3 && <div className="wave-overlay"></div>}
//               <div className="text-center relative z-10">
//                 <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
//                 <div className="text-4xl font-bold text-purple-400 mb-4">$10</div>
//                 <p className="text-slate-400 mb-8">For power users</p>
//                 <ul className="space-y-4 mb-8">
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.1s'}} />
//                     10 Resumes per month
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.2s'}} />
//                     200 Job Description optimizations
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.3s'}} />
//                     Advanced AI analysis
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.4s'}} />
//                     Edit resumes after optimization
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.5s'}} />
//                     Premium templates
//                   </li>
//                   <li className="flex items-center text-slate-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-float-up" style={{animationDelay: '0.6s'}} />
//                     Priority support
//                   </li>
//                 </ul>
//                 <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300" asChild>
//                   <Link href="/register">Get Started</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section - Enhanced */}
//       <section id="cta" className="py-24 px-6 relative overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
//           {/* Rotating gradient ring */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
//             <div className="w-full h-full rounded-full border border-blue-500/10 animate-spin" style={{animationDuration: '20s'}}></div>
//           </div>
//         </div>
        
//         <div className="container mx-auto max-w-4xl text-center relative">
//           <div className="mb-6">
//             <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-6 animate-pulse">
//               <Zap className="w-4 h-4 mr-2" />
//               TRANSFORM YOUR CAREER
//             </div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl responsive-heading-lg font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-slide-in-bottom">
//             Ready to Transform Your Career?
//           </h2>
//           <p className="text-xl responsive-text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Join thousands of professionals who've already revolutionized their job search with AI-powered resume optimization.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <Button 
//               size="lg" 
//               className="text-lg px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group" 
//               asChild
//             >
//               <Link href="/register">
//                 <span className="relative z-10">Get Started Now</span>
//                 <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </Link>
//             </Button>
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="text-lg px-12 py-4 bg-slate-800/50 border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white rounded-xl font-medium hover:scale-105 transition-all duration-300" 
//               asChild
//             >
//               <Link href="#features">Learn More</Link>
//             </Button>
//           </div>
          
//           {/* Trust Indicators */}
//           <div className="mt-16 pt-16 border-t border-slate-700/50">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div className="animate-slide-in-bottom" style={{animationDelay: '0.1s'}}>
//                 <div className="text-3xl font-bold text-blue-400 mb-2">30-Day</div>
//                 <p className="text-slate-400">Money-back guarantee</p>
//               </div>
//               <div className="animate-slide-in-bottom" style={{animationDelay: '0.2s'}}>
//                 <div className="text-3xl font-bold text-indigo-400 mb-2">100%</div>
//                 <p className="text-slate-400">Secure & Private</p>
//               </div>
//               <div className="animate-slide-in-bottom" style={{animationDelay: '0.3s'}}>
//                 <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
//                 <p className="text-slate-400">Customer Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16 px-6 relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-slate-900/20"></div>
//         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="container mx-auto max-w-6xl relative">
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
//                   <FileText className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ResumeAI</span>
//               </div>
//               <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
//                 The most advanced AI-powered resume optimization platform. Transform your resume into a powerful tool that gets you noticed.
//               </p>
//               <div className="flex gap-4">
//                 <div className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer group">
//                   <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
//                 </div>
//                 <div className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer group">
//                   <MessageSquare className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="font-bold text-white mb-4 text-lg">Product</h3>
//               <ul className="space-y-3">
//                 <li><Link href="#features" className="text-slate-400 hover:text-blue-400 transition-colors">Features</Link></li>
//                 <li><Link href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="font-bold text-white mb-4 text-lg">Support</h3>
//               <ul className="space-y-3">
//                 <li><Link href="/help" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</Link></li>
//                 <li><button onClick={() => setShowContactModal(true)} className="text-slate-400 hover:text-blue-400 transition-colors text-left">Contact Us</button></li>
//                 <li><Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
//                 <li><Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="pt-8 border-t border-slate-700 text-center text-slate-400">
//             <p>&copy; 2024 ResumeAI. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Contact Modal */}
//       {showContactModal && (
//         <div className={`fixed inset-0 z-[100] flex items-center justify-end ${isModalClosing ? 'modal-backdrop-out' : 'modal-backdrop-in'}`}>
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
//             onClick={handleCloseModal}
//           ></div>
          
//           {/* Modal Content */}
//           <div className={`relative w-full max-w-md h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-l border-blue-500/20 shadow-2xl overflow-y-auto ${isModalClosing ? 'modal-slide-out' : 'modal-slide-in'}`}>
//             {/* Background Effects */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
//             <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
//             <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
            
//             {/* Content */}
//             <div className="relative z-10 p-8">
//               {/* Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div>
//                   <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">Get In Touch</h2>
//                   <p className="text-slate-400">We'd love to hear from you</p>
//                 </div>
//                 <button
//                   onClick={handleCloseModal}
//                   className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
//                 >
//                   <X className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
//                 </button>
//               </div>
              
//               {/* Contact Information Cards */}
//               <div className="space-y-4 mb-8">
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <Mail className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-slate-400 mb-1">Email Us</div>
//                       <div className="text-white font-medium">contact@resumeai.com</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 group">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <Phone className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-slate-400 mb-1">Call Us</div>
//                       <div className="text-white font-medium">+1 (555) 123-4567</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/50 hover:border-purple-500/30 transition-all duration-300 group">
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-sm text-slate-400 mb-1">Visit Us</div>
//                       <div className="text-white font-medium">San Francisco, CA 94102</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Divider with Animation */}
//               <div className="relative my-8">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-slate-700"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-slate-400">Or send us a message</span>
//                 </div>
//               </div>
              
//               {/* Contact Form */}
//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
//                     placeholder="John Doe"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
//                     placeholder="john@example.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
//                   <textarea
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none"
//                     placeholder="Tell us how we can help..."
//                   />
//                 </div>
                
//                 <button
//                   onClick={(e) => {
//                     if (formData.name && formData.email && formData.message) {
//                       handleSubmit(e as any)
//                     } else {
//                       alert('Please fill in all fields')
//                     }
//                   }}
//                   className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
//                 >
//                   <span>Send Message</span>
//                   <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
              
//               {/* Footer Info */}
//               <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
//                 <p className="text-sm text-slate-400 text-center">
//                   We typically respond within 24 hours. For urgent matters, please call us directly.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }