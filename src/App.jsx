import { motion } from 'framer-motion';
import {
    Dna,
    Workflow,
    TrendingUp,
    Wallet,
    Feather,
    Activity,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import logo from './assets/logo.png';
import SocialLinks from './SocialLinks';

function App() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 backdrop-blur-2xl bg-background-dark/40 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="WAYTOCOLLAB Logo" className="h-10 w-auto" />
                </div>
                <div className="hidden md:flex ml-auto gap-12 text-base font-semibold tracking-wide uppercase opacity-80">
                    <a
                        className="relative group hover:text-primary transition-colors"
                        href="#how-it-works"
                    >
                        Process
                        <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 overflow-hidden">
                            <span className="block w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </a>
                    <a
                        className="relative group hover:text-primary transition-colors"
                        href="#benefits"
                    >
                        Benefits
                        <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 overflow-hidden">
                            <span className="block w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </a>
                    <a
                        className="relative group hover:text-primary transition-colors"
                        href="#testimonials"
                    >
                        Testimonials
                        <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 overflow-hidden">
                            <span className="block w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
                {/* Quantum Field Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-quantum-line" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-3/4 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-accent-orange to-transparent animate-quantum-line" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-px h-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-quantum-line" style={{ animationDelay: '0.8s' }}></div>
                </div>

                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-accent-orange/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl w-full text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest animate-badge-morph">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        Redefining influence
                    </div>

                    <h1 className="text-5xl md:text-[6rem] font-extrabold mb-12 tracking-tighter text-white animate-magnetic-text leading-tight">
                        <span className="block animate-text-reveal" style={{ animationDelay: '0.2s' }}>THE FUTURE OF</span>
                        <span className="block bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent animate-text-reveal" style={{ animationDelay: '0.5s' }}>CREATIVE PARTNERSHIPS</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg md:text-xl opacity-60 font-light mb-12 leading-relaxed animate-text-reveal" style={{ animationDelay: '0.8s' }}>
                        A new era for brands and creators. High-impact collaborations powered by a cardless, minimalist interface.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent-orange rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(140,43,238,0.6)] animate-liquid-morph overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get Started <ArrowRight className="animate-rocket-launch transition-transform" size={20} />
                            </span>
                        </button>
                        <button className="group flex items-center gap-2 px-10 py-5 font-bold opacity-60 hover:opacity-100 transition-all underline decoration-primary underline-offset-8">
                            <Activity className="animate-target-spin" size={20} />
                            View Showcase
                        </button>
                    </div>
                </div>
            </header>

            {/* Proof of Value Strip */}
            <section className="py-24 md:py-32 px-6 md:px-8 bg-background-dark relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                    <div className="relative group">
                        <div className="text-7xl md:text-8xl font-black opacity-10 absolute -top-6 -left-2 md:-top-10 md:-left-6 group-hover:opacity-20 transition-opacity duration-300">
                            01
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative z-10">
                            Proof of Value
                        </h3>
                        <p className="opacity-40 leading-relaxed text-sm md:text-base max-w-xs">
                            Every collaboration starts with a defined outcome. No more guessing games on ROI.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="text-7xl md:text-8xl font-black opacity-10 absolute -top-6 -left-2 md:-top-10 md:-left-6 group-hover:opacity-20 transition-opacity duration-300">
                            02
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative z-10">
                            Escrow Assurance
                        </h3>
                        <p className="opacity-40 leading-relaxed text-sm md:text-base max-w-xs">
                            Financial commitments are secured up-front, releasing only when milestones are met.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="text-7xl md:text-8xl font-black opacity-10 absolute -top-6 -left-2 md:-top-10 md:-left-6 group-hover:opacity-20 transition-opacity duration-300">
                            03
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 relative z-10">
                            Verified Network
                        </h3>
                        <p className="opacity-40 leading-relaxed text-sm md:text-base max-w-xs">
                            A curated ecosystem of creators and brands who value integrity over volume.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-32 px-6 relative bg-background-dark" id="how-it-works">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3">
                        <div className="sticky top-40">
                            <h2 className="text-5xl font-extrabold mb-6 leading-none">HOW IT <br /> WORKS</h2>
                            <p className="opacity-50 text-lg mb-8">Three distinct stages revealed through vertical scrolling. Seamlessly simple.</p>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-32">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex gap-12 items-start group"
                        >
                            <div className="pt-4">
                                <div className="mb-6 relative" style={{ perspective: '1200px' }}>
                                    <motion.div
                                        className="text-5xl md:text-7xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-30 group-hover:opacity-80 transition-opacity duration-700 tracking-[0.35em]"
                                        style={{
                                            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                                            transformStyle: 'preserve-3d'
                                        }}
                                        whileHover={{
                                            rotateY: [0, 18, -18, 0],
                                            rotateX: [0, -8, 8, 0],
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                            ease: 'easeInOut'
                                        }}
                                    >
                                        {"CONNECT".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: i * 0.06,
                                                    type: "spring",
                                                    damping: 14,
                                                    stiffness: 220
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                    <Dna className="text-primary" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Discovery Engine</h3>
                                <p className="text-xl opacity-60 leading-relaxed max-w-md overflow-hidden">
                                    {"Our algorithm pairs brands with creators based on creative DNA, not just vanity metrics. Build authentic relationships from day one.".split(" ").map((word, wordIdx) => (
                                        <motion.span
                                            key={wordIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: wordIdx * 0.05,
                                                ease: "easeOut"
                                            }}
                                            className="inline-block mr-[0.3em]"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </p>
                            </div>
                        </motion.div>
                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex gap-12 items-start group"
                        >
                            <div className="pt-4">
                                <div className="mb-6 relative" style={{ perspective: '1200px' }}>
                                    <motion.div
                                        className="text-5xl md:text-7xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-30 group-hover:opacity-80 transition-opacity duration-700 tracking-[0.35em]"
                                        style={{
                                            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                                            transformStyle: 'preserve-3d'
                                        }}
                                        whileHover={{
                                            rotateY: [0, 18, -18, 0],
                                            rotateX: [0, -8, 8, 0],
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                            ease: 'easeInOut'
                                        }}
                                    >
                                        {"COLLABORATE".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: i * 0.06,
                                                    type: "spring",
                                                    damping: 14,
                                                    stiffness: 220
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full border border-accent-orange/40 flex items-center justify-center mb-8 group-hover:bg-accent-orange/20 transition-colors">
                                    <Workflow className="text-accent-orange" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Unified Workspace</h3>
                                <p className="text-xl opacity-60 leading-relaxed max-w-md overflow-hidden">
                                    {"Manage briefings, assets, and approvals in a single, high-contrast interface designed for speed and clarity.".split(" ").map((word, wordIdx) => (
                                        <motion.span
                                            key={wordIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: (wordIdx * 0.05) + 0.2,
                                                ease: "easeOut"
                                            }}
                                            className="inline-block mr-[0.3em]"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </p>
                            </div>
                        </motion.div>
                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-12 items-start group"
                        >
                            <div className="pt-4">
                                <div className="mb-6 relative" style={{ perspective: '1200px' }}>
                                    <motion.div
                                        className="text-5xl md:text-7xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-30 group-hover:opacity-80 transition-opacity duration-700 tracking-[0.35em]"
                                        style={{
                                            WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                                            transformStyle: 'preserve-3d'
                                        }}
                                        whileHover={{
                                            rotateY: [0, 18, -18, 0],
                                            rotateX: [0, -8, 8, 0],
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                            ease: 'easeInOut'
                                        }}
                                    >
                                        {"SCALE".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: i * 0.06,
                                                    type: "spring",
                                                    damping: 14,
                                                    stiffness: 220
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                    <TrendingUp className="text-primary" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Real-time Growth</h3>
                                <p className="text-xl opacity-60 leading-relaxed max-w-md overflow-hidden">
                                    {"Track performance with ultra-fast analytics and automated payouts. Scale your partnerships without the overhead.".split(" ").map((word, wordIdx) => (
                                        <motion.span
                                            key={wordIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: (wordIdx * 0.05) + 0.4,
                                                ease: "easeOut"
                                            }}
                                            className="inline-block mr-[0.3em]"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="min-h-screen pt-32 pb-24 px-6 md:px-10 flex flex-col justify-center relative overflow-hidden bg-background-dark">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                <div className="max-w-6xl lg:max-w-7xl mx-auto w-full grid grid-cols-12 gap-0 relative">
                    <div className="col-span-2 hidden md:flex justify-start items-center">
                        <h2
                            className="font-black uppercase leading-none opacity-70"
                            style={{
                                fontSize: '12vw',
                                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                                color: 'transparent',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                            }}
                        >
                            PROBLEM
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 md:pl-12">
                        {/* Creators column */}
                        <div className="space-y-12 md:space-y-16">
                            <div className="space-y-3 md:space-y-4">
                                <span className="text-accent-orange text-xs font-bold tracking-[0.3em] uppercase">
                                    For Creators
                                </span>
                                <h3 className="text-3xl md:text-5xl font-light tracking-tight">
                                    The invisible labor of <br />
                                    <span className="font-bold">unpaid effort.</span>
                                </h3>
                            </div>
                            <ul className="space-y-10 md:space-y-12">
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">01</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent-orange transition-colors">
                                            Ghosting Culture
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Weeks of creative briefing and sample production ending in silence and zero compensation.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">02</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent-orange transition-colors">
                                            Fragmented Payments
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Chasing invoices across multiple platforms with opaque fee structures and 90-day delays.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">03</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-accent-orange transition-colors">
                                            Creative Misalignment
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Vague briefs that lead to endless revisions and soul-crushing "aesthetic" disputes.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Brands column */}
                        <div className="space-y-12 md:space-y-16">
                            <div className="space-y-3 md:space-y-4">
                                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                                    For Brands
                                </span>
                                <h3 className="text-3xl md:text-5xl font-light tracking-tight">
                                    The high cost of <br />
                                    <span className="font-bold">unclear results.</span>
                                </h3>
                            </div>
                            <ul className="space-y-10 md:space-y-12">
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">01</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                                            Vanity Blindness
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Spending millions on high-follower accounts that fail to convert into meaningful brand equity.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">02</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                                            Operational Chaos
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Manual spreadsheets, lost email threads, and zero centralized oversight on active campaigns.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-6 md:gap-8 group">
                                    <span className="text-white/20 text-3xl md:text-4xl font-light">03</span>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                                            Lack of Intent
                                        </h4>
                                        <p className="text-white/50 leading-relaxed font-light text-base md:text-lg">
                                            Treating creators as ad slots rather than strategic partners, killing authentic audience trust.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shift Section */}
            <section className="min-h-screen py-32 md:py-40 px-6 md:px-10 bg-background-dark relative flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <h2 className="text-[40vw] font-black uppercase tracking-tighter">SHIFT</h2>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto">
                    <span className="inline-block mb-10 md:mb-12 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                        The Evolution
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-12 md:mb-16 leading-[1.1]">
                        Moving from <span className="opacity-30 italic font-light">Accidental</span> <br />
                        to{' '}
                        <span className="text-white relative inline-block">
                            Intentional
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent-orange" />
                        </span>{' '}
                        Growth.
                    </h2>
                    <div className="p-[1px] rounded-3xl bg-gradient-to-b from-primary/40 to-transparent mb-16 md:mb-24 max-w-3xl mx-auto">
                        <div className="bg-background-dark/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-10 md:p-16">
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-primary">
                                WayToCollab adds structure to the creative spark, turning chaotic influence into measurable commercial intent.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left border-t border-white/5 pt-16 md:pt-20">
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 md:mb-4">
                                Structure
                            </h5>
                            <p className="text-base md:text-lg opacity-70 font-light">
                                Defined milestones and automated contractual compliance for every single post.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 md:mb-4">
                                Transparency
                            </h5>
                            <p className="text-base md:text-lg opacity-70 font-light">
                                Real-time financial tracking and proof-of-work validation before any fund release.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 md:mb-4">
                                Alignment
                            </h5>
                            <p className="text-base md:text-lg opacity-70 font-light">
                                Shared goals that ensure the creator&apos;s voice and the brand&apos;s objectives act as one.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-1/3 -left-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/20 blur-[140px] rounded-full" />
                <div className="absolute -top-1/3 -right-1/3 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-orange/10 blur-[140px] rounded-full" />
            </section>

            {/* Footer */}
            < footer className="py-20 px-6 border-t border-white/5 bg-background-dark" >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <img src={logo} alt="WAYTOCOLLAB Logo" className="h-12 w-auto" />
                            </div>
                            <p className="opacity-40 leading-relaxed text-lg">Leading the next generation of creative commerce and brand evolution.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                            <div>
                                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Platform</h5>
                                <ul className="space-y-4 opacity-50 text-sm">
                                    <li><a className="hover:text-primary transition-colors" href="#">How it works</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Showcase</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h5>
                                <ul className="space-y-4 opacity-50 text-sm">
                                    <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h5>
                                <div className="relative">
                                    <input className="w-full bg-white/5 border-none rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Email address" type="email" />
                                    <button className="absolute right-1 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                        <ArrowRight className="text-white" size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                        <p className="opacity-30 text-xs tracking-widest uppercase">© 2024 WAYTOCOLLAB Technologies Inc. All rights reserved.</p>
                        <SocialLinks />
                    </div>
                </div>
                {/* Pulsing Purple Glow Decor */}
                <div className="fixed bottom-[-100px] left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
            </footer>
        </div>
    )
}

export default App
