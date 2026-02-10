import { motion } from 'framer-motion';
import logo from './assets/WTC.png';

function App() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-all duration-500 backdrop-blur-md bg-background-dark/20">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="WAYTOCOLLAB Logo" className="h-10 w-auto" />
                </div>
                <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide uppercase opacity-80">
                    <a className="hover:text-primary transition-colors" href="#how-it-works">Process</a>
                    <a className="hover:text-primary transition-colors" href="#benefits">Benefits</a>
                    <a className="hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
                </div>
                <button className="bg-primary/10 border border-primary/20 hover:bg-primary transition-all px-6 py-2 rounded-full font-semibold text-sm">
                    Launch Platform
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-accent-orange/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl w-full text-center relative z-10">
                    <span className="inline-block mb-8 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
                        Redefining influence
                    </span>
                    <h1 className="hero-title text-5xl md:text-[6rem] font-extrabold mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 overflow-hidden">
                        {"THE FUTURE OF CREATIVE PARTNERSHIPS".split(" ").map((word, wordIdx) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
                                {word.split("").map((char, charIdx) => (
                                    <motion.span
                                        key={charIdx}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: (wordIdx * 0.15) + (charIdx * 0.03),
                                            ease: [0.33, 1, 0.68, 1]
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx === 1 || wordIdx === 3 ? <br /> : null}
                            </span>
                        ))}
                    </h1>
                    <p className="max-w-xl mx-auto text-lg md:text-xl opacity-60 font-light mb-12 leading-relaxed">
                        A new era for brands and creators. High-impact collaborations powered by a cardless, minimalist interface.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent-orange rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(140,43,238,0.6)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                        <button className="px-10 py-5 font-bold opacity-60 hover:opacity-100 transition-opacity underline decoration-primary underline-offset-8">
                            View Showcase
                        </button>
                    </div>
                </div>
            </header>

            {/* How it Works Section */}
            <section className="py-32 px-6 relative bg-graphite" id="how-it-works">
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
                            <div className="vertical-text text-8xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-20 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                CONNECT
                            </div>
                            <div className="pt-4">
                                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">hub</span>
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
                            <div className="vertical-text text-8xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-20 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                COLLABORATE
                            </div>
                            <div className="pt-4">
                                <div className="w-16 h-16 rounded-full border border-accent-orange/40 flex items-center justify-center mb-8 group-hover:bg-accent-orange/20 transition-colors">
                                    <span className="material-icons text-accent-orange text-3xl">auto_fix_high</span>
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
                            <div className="vertical-text text-8xl font-black text-transparent stroke-white/10 stroke-1 select-none opacity-20 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                SCALE
                            </div>
                            <div className="pt-4">
                                <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-primary text-3xl">analytics</span>
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

            {/* Benefits Section */}
            <section className="py-32 px-6 bg-background-dark" id="benefits">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">PREMIUM ADVANTAGE</h2>
                        <p className="opacity-50 text-xl max-w-2xl mx-auto leading-relaxed">Elevate your creative operations with modules that work as hard as you do.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="glass-card neon-glow rounded-xl p-10 transition-all duration-500 hover:-translate-y-2 border border-white/5"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-8">
                                <span className="material-icons text-primary">payments</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Seamless Payments</h4>
                            <p className="opacity-60 leading-relaxed mb-8">Instant payouts with zero hidden fees. Automated invoicing and tax compliance built-in.</p>
                            <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-50" alt="Abstract sleek financial dashboard representation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgK4ujvKHRpukPucMaV1gKLQi4q_9GnpYYCOmCkkvQdIdck_jpqHrSsLQep6Oo4hhXpEzNQAyhzTIKmJAlP31WCtfZmRRYDHVQ09ny3bpmZXVtbVnHKQ33Sn5PzZS33Ipr44RkhFx6Yok4HTd1T_qgu-kNiZs9T1Di4braVmkra7bRmnTppYzFlpKMi9bLG-xDBH_nPpSAbTKgkbnvZZ4dNkVD07sezMJjghXdc3Wfy0S_yQ589o9rqx7auaj_qfIipBW8AjQXnZdn" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                            </div>
                        </motion.div>
                        {/* Benefit 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                            className="glass-card neon-glow rounded-xl p-10 transition-all duration-500 hover:-translate-y-2 border border-white/5"
                        >
                            <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center mb-8">
                                <span className="material-icons text-accent-orange">diversity_2</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Creative Freedom</h4>
                            <p className="opacity-60 leading-relaxed mb-8">Direct communication lines without the agency middleman. Your vision, your rules, our platform.</p>
                            <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-50" alt="Abstract colorful neon technology wires" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADWWl-c2s9PjA_W0fp-luBkXUAe2Go48NLZBUOLrPf3qp-E5WDig8VCcepVyqmmOt8eoKM22pbo4wZh600IfJlxsBj-k3d1jww_c7SC_vt6sO4ydRKSj2yiKgFHVcf5Ema_-7lgdZFhPcTCajvNdgLOpMKRuSvAaWZaAg1c0YBmHnHVtsOKzQD_yOYkqiqcITUnRAki3bv0kG8cH53KqWYnczVJcHb-RjUG52qBGSitITjHhG2MGOnjyq6FKLIzwFeppmz9Q78ISuJ" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                            </div>
                        </motion.div>
                        {/* Benefit 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                            className="glass-card neon-glow rounded-xl p-10 transition-all duration-500 hover:-translate-y-2 border border-white/5"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-8">
                                <span className="material-icons text-primary">bar_chart</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Real-time Insights</h4>
                            <p className="opacity-60 leading-relaxed mb-8">Deep analytics on every collaboration. Understand engagement, sentiment, and ROI in seconds.</p>
                            <div className="w-full h-40 rounded-lg overflow-hidden relative">
                                <img className="w-full h-full object-cover opacity-50" alt="Abstract data visualization with purple glowing lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgN5sX-FeoPu4fH0bxmvCMQrTY4TGXi-PLXIpWUMuHxWrObCthtY6UwRFEPIITNbBJaTsCrrTxVjcZsrqWMyWc7UCriO2XKVK_BSyJXl9nqYGrBIzZu3oSGXIuu8ixD5nTjIrwc9whtzuoJZgv-YQl6VCla0q9ec7-knl-v0Dzu4J6mBl_YDwA-0pyjdry9FX7-R5FE8QFpqiHdMY-lBdpV9GSCK8y9h5olqoPiJC30MMNrWq76UsWxbCaNf4cgJ-q4wvFVCzBwpnL" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-32 px-6 bg-graphite overflow-hidden" id="testimonials">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">PARTNERING WITH THE BEST</h2>
                            <p className="opacity-50 text-xl">Trusted by over 500+ global brands and creators.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-icons">chevron_left</span>
                            </button>
                            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-icons">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    {/* Brand Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 opacity-30">
                        <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <img className="h-full object-contain" alt="Minimalist company logo 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKIXzPfGdx_VkzAiwh4hyeGeQhdmHGo57GdlrOskjI4nPHL8Y2X_j2Grnz6CtP1TTCLu621SXiKU5DGmB813SUrU9ptaKs2b3g-YRGgRSlior90rap7a2b1CsiWm1Wjc6N9hCpLsCcH3AQ0NXWA_99QHBJM1kQLSZUuF27fQTsaTDEvm6g0BrHUP-KBza6FIS-_fpBKVpwmRQckNFDpVxetD1axwmU4INc3lavNFBl7qG3LfHHDvpIEUT4gf_rQJ7kLs6jYFNUW1rD" />
                        </div>
                        <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <img className="h-full object-contain" alt="Minimalist company logo 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5hUsokaTCf6eGaVyQlGcPF-_w6gbDoX95_IHu_09SnqjTYmNMdKY3-T4EYhDvAsuxA8gaXCl-04RsONyU3bHR3Y8eRNvVLAZWxtamyeXxDaezfFIMx9dfKhPXKC2zAlT4_2uWU3EaiTZyoI4yLezrfN4DtwwKXS_7g8f4gg9gSdZu4xRriaMr-1YZCYAb-Zer46tH7ngRrcqcmNizmOPz3rloWlHbjzSM4SAlcipqEtWypk7gYPdbNMBqG42vP_prfUQOl_EIr9IQ" />
                        </div>
                        <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <img className="h-full object-contain" alt="Minimalist company logo 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbdDD0VQ9cBGaw5cg7f-KxwkBbRBy0YvLbQX7Y2Rpb19ZVgOGpCqhQLyuMW1DWjolpLia_LD8x7g9hqWZdc36b9E2b_3JgNzdeGXN_o6e0BjUe_eTluGa7JQnmRi89gs6f__0zwXrogSgxbMqXqFFfudEEcB_mXSZqMfxyevrwUVMa4cMv7LGmqLht-VWoCoFu_1dtpz7WgdJIWLDlakEcMLWjXTPCPZXERolOD5zrbio_5yT0c9TH30iFipxRE0e0D0sTHhAM8_2s" />
                        </div>
                        <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                            <img className="h-full object-contain" alt="Minimalist company logo 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAleWMzD_ktvPAtiveaHazj0besvfmvISPPU80K1m1IXLubxLraQC71SIhX7HrHt9O8GSlO3xBihcEqU7Cve9duiRqq14EVmION0xe2VYq7dqJSBiETA4TGTX7US-ANYRsuuMqfRONR2V0l0OgJhiVjazBIlbTKdgkdWjkllHzPgluZroWphDUiTuY3tysj4dZPdhGUTSxfR81s3PLx7pUPXNyX6VAxbs4BsRoYsx3Neukz2NM6qmi4nBLtl9cVfvnjCy3l1smbvP-Q" />
                        </div>
                    </div>
                    {/* Testimonial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <p className="text-2xl font-medium leading-snug">"The level of transparency on KREO is unmatched. We found our best creative partners in weeks."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20">
                                    <img className="w-full h-full object-cover" alt="Professional portrait of a brand manager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBKYEOHurba-Z83_CkAOt0gFwy48D9QaBwMrtEBTfB7qlq0TsY6fYYls8d59E2H1NpBOOa4D1SV07fwMZFy1FgxPnrlZ_0R3AkFv-P1UMbg1zv5C9GsJk2WLFSWBigT3ax4tU2Ta01_nTqTRwrCkSyCT_snmXe6YRbWNphEtUEIugX3mNGA06bwhc20Z_SOgfgCrsJJiBFLqzmI-bbLlgSr9pusX9DPYOA5zx_wx8x3-zYZKAYHaHAIeyFhLseUZRXV_LLdilJgdIw" />
                                </div>
                                <div>
                                    <p className="font-bold">Elena Vance</p>
                                    <p className="text-xs uppercase tracking-widest opacity-40">Creative Lead, Lumina</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-2xl font-medium leading-snug">"As a creator, the minimalist workflow allows me to focus on my craft rather than administration."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-accent-orange/20">
                                    <img className="w-full h-full object-cover" alt="Portrait of a creative content creator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVLGCMku2RmSccjTZ16FQAUq1ATIlH9AxHZGkMrKZQClHnDamAW2ZLqH-P7GLoviWjFr_g3UtyYNOLMu-57TaFyyKBPu4T2loZUWXh2ckMFvyQ_VpRekfDAPHfsP9JtzfUKuy8zMHgODDpGFCmzzVeDp15ukAccB8w3MAguls6Y5KU7bgjaXK8_Qk6yo0gH-svasinfXFijE40XVB1_FMcBGugIp9RS_jTViG-zvZBBvU2dwOes4LbUVGQZxVxHJZOOqxTJuG_RKvX" />
                                </div>
                                <div>
                                    <p className="font-bold">Marcus Thorne</p>
                                    <p className="text-xs uppercase tracking-widest opacity-40">Visual Artist</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-2xl font-medium leading-snug">"The predictive matching engine saved us hundreds of hours of manual searching. Simply brilliant."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20">
                                    <img className="w-full h-full object-cover" alt="Portrait of a technology executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgCiZpAroXDEA2_fgDCStPXROmHf2fKwPin_4xvzGiyfbnsH3S0RdnJhg9xqAB8F45kmJUW17qnIAJGTETgNZCJWw0tG3elzKdIR4rGamBQOVidJiuLYB-SD-MYUqSf-95KpjDRWl3YIx4veP2r0cvWknlG-gCTOU7c09FiLVtJ7sESkcZFdm02Bz3OM7nQ3rMKa6xu_zEKAMcfwhcr2-VeZu_RhPl-bOzJcYGKQaI4EEOf29yTU4-RYbzVF_L08uzNlPN9oQPoKvP" />
                                </div>
                                <div>
                                    <p className="font-bold">Sarah Chen</p>
                                    <p className="text-xs uppercase tracking-widest opacity-40">CEO, TechBound</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

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
                                        <span className="material-icons text-white text-xs">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                        <p className="opacity-30 text-xs tracking-widest uppercase">© 2024 WAYTOCOLLAB Technologies Inc. All rights reserved.</p>
                        <div className="flex gap-8 opacity-40">
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-icons text-xl">camera_alt</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-icons text-xl">alternate_email</span></a>
                            <a className="hover:text-primary transition-colors" href="#"><span className="material-icons text-xl">public</span></a>
                        </div>
                    </div>
                </div>
                {/* Pulsing Purple Glow Decor */}
                <div className="fixed bottom-[-100px] left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
            </footer>
        </div>
    )
}

export default App
