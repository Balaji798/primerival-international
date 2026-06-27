'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import FloatingProgress from './FloatingProgress';

const stages = [
	{
		id: 1,
		number: '01',
		title: 'Raw Material Sourcing',
		subtitle: 'Premium Raw Materials for Superior Quality',
		description:
			'We source only the highest grade of materials to guarantee product durability and safety. For our latex line, we extract premium natural rubber latex directly from trusted, eco-friendly plantations. For our wagon line, we carefully select high-tensile steel frame tubes and tear-resistant 600D Oxford fabrics. Every batch undergoes rigorous quality checks before entering production.',
		image:
			'https://static.wixstatic.com/media/92604c_dd6d3fcb1c1f4f80acc22d99e57186d1~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/High-resolution%20photo%20of%20grains%20and%20corn%20and%20wheat%20%E2%80%93%20clean%20farm%20produce%20laid%20out_.jpg',
		icon: '🌾',
		color: 'from-[#fa3035] to-[#800000]',
		features: ['100% Pure Natural Latex', 'High-Tensile Structural Steel', ' Eco-Friendly Sourcing', 'Incoming Material Inspection'],
		align: 'left',
	},
	{
		id: 2,
		number: '02',
		title: 'Compounding & Formulation ',
		subtitle: 'Precision Compounding & Advanced Formulation',
		description:
			'Our state-of-the-art chemical lab customizes compounding formulas depending on product utility. Our latex is formulated to different densities: ultra-flexible and thin for medical/industrial gloves, and soft yet supportive for ergonomic pillows and mattresses. Precise temperature and blending controls ensure consistency across all batches.',
		image:
			'https://static.wixstatic.com/media/92604c_a54d492876544a88a3cfdfcc32023483~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Industrial%20feed%20production%20machinery%20or%20.jpg',
		icon: '⚙️',
		color: 'from-[#800000] to-[#fa3035]',
		features: ['Tailored Density Control', 'Automated Chemical Blending', 'High-Tensile Structural Steel', 'Batch-to-Batch Consistency'],
		align: 'right',
	},
	{
		id: 3,
		number: '03',
		title: 'Latex Product Molding',
		subtitle: 'Advanced Molding & Continuous Dipping Lines',
		description:
			'Utilizing cutting-edge production machinery, our latex is processed based on product types. Pillows and mattresses are manufactured using premium molds to create multi-zone pressure relief designs. For our latex gloves, hand-molds pass through a continuous high-speed dipping line, ensuring uniform thickness and tactile sensitivity.',
		image:
			'https://static.wixstatic.com/media/92604c_fa5cba9785524870bea0f15b64997849~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Healthy%20yellow%20chicks%20in%20a%20safe%2C%20clean%20farm%20environment_.jpg',
		icon: '🐣',
		color: 'from-[#fa3035] to-[#f6efaa]',
		features: ['High-Speed Glove Dipping', ' Multi-Zone Ergonomic Molds', 'Uniform Thickness Control', 'Industrial-Scale Production'],
		align: 'left',
	},
	{
		id: 4,
		number: '04',
		title: 'Hardware Fabrication ',
		subtitle: 'Heavy-Duty Hardware & Precision Fabrication',
		description:
			'Concurrently, our hardware manufacturing department handles the wagon line. Steel tubes are precisely cut, bent, and welded using automated robotic welding technology to guarantee absolute joint strength. The completed frames are coated with an anti-rust, weather-resistant powder layer for ultimate durability.',
		image:
			'https://static.wixstatic.com/media/92604c_86f0fe863c7a435db952064f106fb7db~mv2.jpg/v1/fill/w_378,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Free-range%20or%20cage-free%20hens%20in%20natural%2C%20sunlit%20farm%20settings_.jpg',
		icon: '🏡',
		color: 'from-[#800000] to-[#f6efaa]',
		features: [' Robotic Welding Precision', ' Anti-Rust Powder Coating', 'Structural Integrity Testing', 'Heavy-Duty Load Capacity'],
		align: 'right',
	},
	{
		id: 5,
		number: '05',
		title: 'Post-Processing & Stitching',
		subtitle: 'Hygiene Post-Processing & Fine Textile Stitching',
		description:
			'Hygiene and assembly are crucial. Latex products go through extensive vulcanization, leaching, and thorough washing cycles to eliminate chemical residues, making them 100% hypoallergenic. Simultaneously, our textile division cuts and stitches the heavy-duty fabrics for the wagons and premium covers for our mattress lines.',
		image:
			'https://static.wixstatic.com/media/92604c_7e713794f8324ea8a4244af8c15d3a16~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Eggs%20on%20a%20conveyor%20with%20inspection_scanning%20technology_.jpg',
		icon: '✓',
		color: 'from-[#fa3035] to-[#800000]',
		features: ['Hypoallergenic Post-Leaching', 'Chemical Residue Free', 'Reinforced Textile Stitching', 'Precision Component Assembly'],
		align: 'left',
	},
	{
		id: 6,
		number: '06',
		title: 'Rigorous Quality Control',
		subtitle: 'Zero-Defect Commitment & Comprehensive QC',
		description:
			'Every single finished item must pass our uncompromising Quality Control protocols. Gloves are air-and-water tested for punctures. Pillows and mattresses undergo durability compression tests, and folding wagons are stress-tested under maximum weight capacities. Only 100% certified defect-free goods move forward to packaging.',
		image:
			'https://static.wixstatic.com/media/92604c_b8d30cb4970c446e8be6d1a41a28b59e~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Clean%20automated%20egg%20packaging%20single%20line%20with%20cartons_trays_.jpg',
		icon: '📦',
		color: 'from-[#800000] to-[#fa3035]',
		features: ['100% Puncture Test for Gloves', 'Mattress Fatigue & Compression Test', 'Wagon Weight-Load Testing', ' Defect-Free Certification'],
		align: 'right',
	},
	{
		id: 7,
		number: '07',
		title: 'Smart Packaging & Global Logistics',
		subtitle: 'Smart Packaging in Smart Packaging',
		description:
			'To optimize global shipping costs for our international B2B clients and global distributors, we utilize advanced packaging technologies and smart logistical coordination. We transform bulky end-products into high-density, freight-efficient cargo.',
		image:
			'https://static.wixstatic.com/media/92604c_95592215b50a4db5b7a9242ae623b52e~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Industrial%20egg%20cracking%20machines%20or%20eggs%20being%20separated%20into%20whites_yolks_.jpg',
		icon: '🔬',
		color: 'from-[#fa3035] to-[#f6efaa]',
		features: ['Pasteurized', 'Lab Tested', 'Food Safe', 'Monitored'],
		align: 'left',
	},
	// {
	// 	id: 8,
	// 	number: '08',
	// 	title: 'Liquid Egg Products',
	// 	subtitle: 'Versatile Solutions for Food Service Excellence',
	// 	description:
	// 		'From whole liquid eggs to separated whites and yolks, our liquid products offer convenience without compromising quality. Available in various packaging formats for food service and industrial applications. Extended shelf life and consistent performance make these products ideal for professional kitchens worldwide.',
	// 	image:
	// 		'https://static.wixstatic.com/media/92604c_2b24f2a62be04fca8f6e9065cf5cfbbe~mv2.jpg/v1/fill/w_378,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Glass%20containers%20or%20industrial%20vats%20of%20liquid%20egg%20being%20poured_.jpg',
	// 	icon: '🥛',
	// 	color: 'from-[#800000] to-[#f6efaa]',
	// 	features: ['Extended Shelf Life', 'Versatile', 'Professional Grade', 'Ready to Use'],
	// 	align: 'right',
	// },
	// {
	// 	id: 9,
	// 	number: '09',
	// 	title: 'Dry Egg Products',
	// 	subtitle: 'Shelf-Stable Excellence for Global Distribution',
	// 	description:
	// 		'Our spray-drying technology creates powdered egg products with exceptional shelf stability and nutritional retention. Perfect for baking applications, protein supplements, and processed foods. Compact packaging enables efficient global shipping while maintaining product integrity for months without refrigeration.',
	// 	image:
	// 		'https://static.wixstatic.com/media/92604c_ef9967a8657540f18878f84afe100cb4~mv2.jpg/v1/fill/w_378,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/egg%20powder%20in%20bowls%20without%20the%20eggs.jpg',
	// 	icon: '🧪',
	// 	color: 'from-[#fa3035] to-[#800000]',
	// 	features: ['Long Shelf Life', 'Nutrition Retained', 'Global Shipping', 'Compact'],
	// 	align: 'left',
	// },
];

function StageCard({ stage, index, stageRef }: { stage: typeof stages[0]; index: number; stageRef: React.RefObject<HTMLDivElement> }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        springConfig
    );
    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]),
        springConfig
    );

    const isLeft = stage.align === 'left';

    return (
        <motion.div ref={cardRef} style={{ opacity, scale }} className="relative">
            {/* Stage Ref for scrolling */}
            <div ref={stageRef} className="absolute -top-32" />
            
            {/* Connecting Arrow */}
            {index < stages.length - 1 && (
                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-24 z-10"
                    style={{ y: useTransform(scrollYProgress, [0.5, 1], [0, -50]) }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="flex flex-col items-center"
                    >
                        <div className={`w-1 h-20 bg-gradient-to-b ${stage.color} rounded-full`}></div>
                        <div className={`w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-[#fa3035]`}></div>
                    </motion.div>
                </motion.div>
            )}

            <div className={`grid lg:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
                {/* Image Side */}
                <motion.div
                    style={{ y }}
                    className={`relative ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                            src={stage.image}
                            alt={stage.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Floating Number */}
                        <motion.div
                            className="absolute top-8 left-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div
                                className={`text-8xl font-bold bg-gradient-to-br ${stage.color} bg-clip-text text-transparent opacity-30 font-pally`}
                            >
                                {stage.number}
                            </div>
                        </motion.div>

                        {/* Floating Icon Badge */}
                        <motion.div
                            className="absolute bottom-8 right-8"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: 'spring' }}
                            whileHover={{ rotate: 360 }}
                        >
                            <div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-4xl shadow-2xl backdrop-blur-sm`}
                            >
                                {stage.icon}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    style={{ y: useTransform(y, (value) => -value * 0.5) }}
                    className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} ${
                        isLeft ? 'lg:pl-8' : 'lg:pr-8'
                    }`}
                >
                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Stage Badge */}
                        <motion.span
                            className={`inline-block bg-gradient-to-r ${stage.color} text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider font-pally`}
                            whileHover={{ scale: 1.05 }}
                        >
                            Stage {stage.number}
                        </motion.span>

                        {/* Title */}
                        <motion.h3
                            className="text-4xl lg:text-5xl font-bold text-gray-800 font-pally"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {stage.title}
                        </motion.h3>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl font-semibold text-[#fa3035] font-pally"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            {stage.subtitle}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="text-gray-600 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            {stage.description}
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            {stage.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#fa3035] group cursor-pointer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center space-x-3">
										<motion.div
											className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold`}
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}
										>
											✓
										</motion.div>
										<span className="text-sm font-semibold text-gray-700 group-hover:text-[#fa3035] transition-colors font-pally">
											{feature}
										</span>
									</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function ProcessStages() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stageRefs = useRef<(HTMLDivElement | null)[]>(
        Array(stages.length).fill(null)
    );

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Create refs array for FloatingProgress
    const stageRefsForProgress = stageRefs.current.map((ref) => ({ current: ref }));

    return (
        <section
            ref={containerRef}
            className="py-24 bg-gradient-to-br from-white via-[#f6efaa]/20 to-white relative overflow-hidden"
        >
            {/* Floating Progress Bar */}
            <FloatingProgress totalStages={stages.length} stageRefs={stageRefsForProgress} />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-[#f6efaa] rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-[#fa3035] rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="inline-block bg-[#fa3035] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 font-pally"
                    >
                        Our Process Journey
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-pally text-gray-800">
                        Vertically Integrated{' '}
                        <span className="text-[#fa3035]">Supply Chain</span>
                    </h2>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Follow the journey from raw materials to finished products through our 9-stage integrated process.
                    </p>
                </motion.div>

                {/* Stages Content */}
                <div className="space-y-32 lg:space-y-40">
                    {stages.map((stage, index) => (
                        <StageCard 
                            key={stage.id} 
                            stage={stage} 
                            index={index}
                            stageRef={{ current: stageRefs.current[index] }}
                        />
                    ))}

                    {/* Completion Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.3 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-block bg-white/95 backdrop-blur-sm border-2 border-gray-200 text-gray-800 px-12 py-6 rounded-3xl shadow-2xl"
                            animate={{
                                boxShadow: [
                                    '0 20px 60px rgba(0, 0, 0, 0.1)',
                                    '0 25px 70px rgba(0, 0, 0, 0.15)',
                                    '0 20px 60px rgba(0, 0, 0, 0.1)',
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="text-5xl mb-3">🎯</div>
                            <div className="text-2xl font-bold font-pally text-gray-800">
                                Journey Complete
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                From Farm to Table Excellence
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}