import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'; 
const IconCloud = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
)

const IconBarChart = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

const IconZap = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
)

const IconCheck = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const IconChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

export default function LandingPage() {
  const [email, setEmail] = useState('')
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10"
    >
      <div className="flex items-center space-x-2">
        <IconCloud className="text-[#00FFFF]" />
        <span className="text-2xl font-bold text-white">DeployMate</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#features" className="text-white hover:text-[#00FFFF] transition-colors">Features</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#how-it-works" className="text-white hover:text-[#00FFFF] transition-colors">How It Works</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#pricing" className="text-white hover:text-[#00FFFF] transition-colors">Pricing</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="#faq" className="text-white hover:text-[#00FFFF] transition-colors">FAQ</a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}

function HeroSection({ email, setEmail, handleSubmit }) {
  return (
    <section className="container mx-auto px-4 py-20 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-5xl font-bold text-white mb-6"
      >
        Seamless Deployments, Effortless Monitoring
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        DeployMate: Your all-in-one solution for end-to-end deployment and integrated monitoring. Deploy faster, monitor smarter.
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        onSubmit={handleSubmit}
        className="flex justify-center mb-8"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 w-64 rounded-l-lg border border-gray-700 bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF]"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-black px-6 py-2 rounded-r-lg hover:from-[#00E5E5] hover:to-[#00A5E5] transition-all duration-300 flex items-center"
        >
          Get Started
          <IconChevronRight className="ml-2" />
        </motion.button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="flex justify-center space-x-4"
      >
        <span className="flex items-center text-gray-300">
          <IconCheck className="text-[#00FFFF] mr-2" />
          <span>No credit card required</span>
        </span>
        <span className="flex items-center text-gray-300">
          <IconCheck className="text-[#00FFFF] mr-2" />
          <span>14-day free trial</span>
        </span>
      </motion.div>
    </section>
  )
}

function FeaturesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Why Choose DeployMate?
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<IconCloud className="text-[#00FFFF]" />}
            title="Easy Deployments"
            description="Deploy your applications with a single click. Supports multiple environments and rollback options."
          />
          <FeatureCard
            icon={<IconBarChart className="text-[#00FFFF]" />}
            title="Integrated Monitoring"
            description="Real-time monitoring and alerts. Keep track of your application's performance and health."
          />
          <FeatureCard
            icon={<IconZap className="text-[#00FFFF]" />}
            title="Optimized Performance"
            description="Automatically optimize your deployments for speed and efficiency. Reduce downtime and improve user experience."
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  )
}

function HowItWorksSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="how-it-works" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          How DeployMate Works
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <StepCard
            number="1"
            title="Connect Your Repository"
            description="Link your Git repository to DeployMate with a few clicks."
          />
          <StepCard
            number="2"
            title="Configure Deployment"
            description="Set up your deployment preferences and environment variables."
          />
          <StepCard
            number="3"
            title="Monitor & Scale"
            description="Watch your application perform and scale as needed."
          />
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg"
    >
      <div className="text-4xl font-bold text-[#00FFFF] mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function TestimonialsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid gri d-cols-1 md:grid-cols-2 gap-8"
        >
          <TestimonialCard
            quote="DeployMate has revolutionized our deployment process. It's faster, more reliable, and the integrated monitoring is a game-changer."
            author="Jane Doe, CTO at TechCorp"
          />
          <TestimonialCard
            quote="The ease of use and powerful features of DeployMate have significantly improved our team's productivity. Highly recommended!"
            author="John Smith, Lead Developer at StartupX"
          />
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg"
    >
      <p className="text-gray-300 mb-4 italic">"{quote}"</p>
      <p className="text-white font-semibold">{author}</p>
    </motion.div>
  )
}

function PricingSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="pricing" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <PricingCard
            title="Starter"
            price="$29"
            features={[
              "5 Deployments per month",
              "Basic monitoring",
              "Email support"
            ]}
          />
          <PricingCard
            title="Pro"
            price="$99"
            features={[
              "Unlimited Deployments",
              "Advanced monitoring",
              "24/7 support",
              "Custom domains"
            ]}
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited Deployments",
              "Advanced monitoring",
              "Dedicated support",
              "Custom integrations",
              "SLA"
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, features, highlighted = false }: { title: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-lg ${
        highlighted
          ? 'bg-gradient-to-br from-[#00FFFF] to-[#00BFFF] transform scale-105'
          : 'bg-[#1A1A1A]'
      }`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${highlighted ? 'text-black' : 'text-white'}`}>{title}</h3>
      <p className={`text-4xl font-bold mb-6 ${highlighted ? 'text-black' : 'text-white'}`}>{price}<span className="text-xl font-normal">/month</span></p>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className={`flex items-center mb-2 ${highlighted ? 'text-black' : 'text-gray-300'}`}>
            <IconCheck className={`mr-2 ${highlighted ? 'text-black' : 'text-[#00FFFF]'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-2 px-4 rounded ${
          highlighted
            ? 'bg-black text-white hover:bg-gray-900'
            : 'bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-black hover:from-[#00E5E5] hover:to-[#00A5E5]'
        } transition-colors duration-300`}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  )
}

function FAQSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="faq" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-8"
        >
          <FAQItem
            question="How does DeployMate handle security?"
            answer="DeployMate uses industry-standard encryption and security practices to protect your data and deployments. We regularly undergo security audits and comply with major security standards."
          />
          <FAQItem
            question="Can I use DeployMate with my existing CI/CD pipeline?"
            answer="Yes, DeployMate is designed to integrate seamlessly with most popular CI/CD tools. We provide extensive documentation and support to help you set up the integration."
          />
          <FAQItem
            question="What kind of support do you offer?"
            answer="We offer email support for all plans, with 24/7 support available for Pro and Enterprise customers. Our Enterprise customers also get access to a dedicated support team."
          />
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </motion.div>
  )
}

function CTASection() {
  const navigate = useNavigate()

  const handleStartTrial = () => {
    navigate('/deploy')
  }
  return (
    <section className="py-20 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Ready to simplify your deployment process?</h2>
        <p className="text-xl text-gray-800 mb-8">Join thousands of developers who trust DeployMate for their deployment and monitoring needs.</p>

        <motion.button
onClick={handleStartTrial}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 inline-flex items-center text-lg font-semibold"
        >
          Start Your Free Trial
          <IconChevronRight className="ml-2" />
        </motion.button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-300 py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <IconCloud className="text-[#00FFFF]" />
            <span className="text-2xl font-bold text-white">DeployMate</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00FFFF] transition-colors">Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} DeployMate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function ParticleBackground() {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; radius: number; dx: number; dy: number; color: string }[] = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `rgba(0, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5})`
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = p.color
        ctx!.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full" />
}