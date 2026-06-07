import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Shield,
  Users,
  MessageCircle,
  Phone,
  Calendar,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  TreePine,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-3">
          <Icon className="w-6 h-6 text-teal-700" />
        </div>
        <CardTitle className="text-lg text-slate-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-slate-800 group-hover:text-teal-700 transition-colors">
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-slate-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function LittleOwl() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-amber-50/50 text-slate-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur-md ${
          darkMode
            ? "bg-slate-900/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Little Owl
            </span>
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-teal-600 transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-teal-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#community"
              className="hover:text-teal-600 transition-colors"
            >
              Community
            </a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Join Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              A Quiet Corner for Growth and Connection
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Find your footing,{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                one step at a time
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              A supportive community for anyone exploring a healthier path forward. Whether you're seeking connection, tools for change, or simply a listening ear — you're welcome here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8"
              >
                Join the Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Stats Bar */}
      <section
        className={`border-y ${
          darkMode
            ? "bg-slate-800/50 border-slate-800"
            : "bg-white/60 border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600">2,400+</div>
              <div className="text-sm text-slate-500 mt-1">Members Connected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">150+</div>
              <div className="text-sm text-slate-500 mt-1">Community Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">98%</div>
              <div className="text-sm text-slate-500 mt-1">Feel Less Alone</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">24/7</div>
              <div className="text-sm text-slate-500 mt-1">Always Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-slate-600 text-lg">
              No two paths look the same. We offer several ways to connect and move forward at your own pace.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Users}
              title="Peer Support Groups"
              description="Connect with others who get it. Moderated group conversations led by people who've been there."
            />
            <FeatureCard
              icon={MessageCircle}
              title="Safe Chat Space"
              description="Reach out anytime — day or night — and find someone ready to listen, without judgment or pressure."
            />
            <FeatureCard
              icon={Phone}
              title="24/7 Support Line"
              description="Caring volunteers available around the clock. When you need a voice on the other end, we're here."
            />
            <FeatureCard
              icon={Calendar}
              title="Community Gatherings"
              description="Virtual and in-person gatherings, workshops, and social events to rebuild connections and find joy again."
            />
            <FeatureCard
              icon={Shield}
              title="Resource Directory"
              description="A curated, verified collection of local wellness resources, counseling options, and supportive services near you."
            />
            <FeatureCard
              icon={Heart}
              title="Daily Check-ins"
              description="Gentle check-ins and optional reminders to help you notice the small wins along the way."
            />
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section
        id="community"
        className={`py-20 md:py-28 ${
          darkMode ? "bg-slate-800/50" : "bg-gradient-to-b from-teal-50/50 to-amber-50/30"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built by people who've been there,{" "}
                <span className="text-teal-600">for people finding their way</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Little Owl was started by people who wished a space like this existed — somewhere warm, human, and free from clinical barriers or stigma. No paperwork required. No judgment. Just people showing up for each other.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "100% free to join and use",
                  "No real names required — privacy first",
                  "Moderated by trained peers, not bots",
                  "LGBTQ+ affirming and trauma-informed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <TreePine className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                Become a Member
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div
                    className={`rounded-2xl p-6 shadow-lg ${
                      darkMode ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-lg">
                        🦉
                      </div>
                      <div>
                        <div className="font-medium text-sm">Oliver</div>
                        <div className="text-xs text-slate-500">Community Guide</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      "This place reminded me I'm not alone. Now I get to be that reminder for someone else."
                    </p>
                  </div>
                  <div
                    className={`rounded-2xl p-6 shadow-lg ${
                      darkMode ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-lg">
                        🌱
                      </div>
                      <div>
                        <div className="font-medium text-sm">Sam</div>
                        <div className="text-xs text-slate-500">Community Member</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      "I finally found people who meet me where I am. No pressure, just support."
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div
                    className={`rounded-2xl p-6 shadow-lg ${
                      darkMode ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg">
                        💚
                      </div>
                      <div>
                        <div className="font-medium text-sm">Jordan</div>
                        <div className="text-xs text-slate-500">Community Member</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 italic">
                      "Knowing someone is always there makes the hard nights feel a little lighter."
                    </p>
                  </div>
                  <div
                    className={`rounded-2xl p-5 shadow-lg ${
                      darkMode ? "bg-slate-700" : "bg-teal-600"
                    } text-white`}
                  >
                    <div className="text-2xl font-bold mb-1">4.9/5</div>
                    <div className="text-sm opacity-90">
                      Average member rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions? We've Got Answers
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to feel comfortable taking that first step.
            </p>
          </div>
          <div
            className={`rounded-2xl p-6 md:p-8 ${
              darkMode ? "bg-slate-800" : "bg-white shadow-md"
            }`}
          >
            <FAQItem
              question="Is there any cost to join?"
              answer="Nope. Little Owl is completely free. We're supported by grants and donations, so there are no fees, subscriptions, or premium tiers."
            />
            <FAQItem
              question="Do I have to use my real name?"
              answer="Not at all. You can join with any username you'd like. Your privacy and comfort are our top priorities. We never share member data with third parties."
            />
            <FAQItem
              question="Can I use this alongside other support?"
              answer="Little Owl is a companion to professional care, not a replacement. We always encourage members to work with licensed providers when they can, and we're happy to help you find referrals."
            />
            <FAQItem
              question="What if I'm not sure what I want yet?"
              answer="That's completely okay. We're a come-as-you-are space. Whether you're exploring change, taking small steps, or just need someone to talk things through with — you're welcome here."
            />
            <FAQItem
              question="How do I become a community guide?"
              answer="After 6 months of active participation, members can apply for guide training. Our training covers active listening, crisis response, and trauma-informed support."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className={`py-20 ${
          darkMode
            ? "bg-gradient-to-b from-slate-800 to-slate-900"
            : "bg-gradient-to-b from-teal-600 to-emerald-700"
        } text-white`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curious about what comes next?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join thousands of others who found connection, clarity, and a gentler way forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-slate-100 px-8"
            >
              Join Free Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              <Phone className="w-4 h-4 mr-2" />
              Reach Out
            </Button>
          </div>
          <p className="text-sm opacity-60 mt-6">
            Need someone right now? We're here. Text OWL to 741741 or call SAMHSA 1-800-662-4357
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t ${
          darkMode
            ? "bg-slate-900 border-slate-800 text-slate-400"
            : "bg-white border-slate-200 text-slate-500"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  <Moon className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">Little Owl</span>
              </button>
              <p className="text-sm mt-2">
                A nonprofit peer support community for anyone navigating change.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Join
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Find a Group
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Crisis Lines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Support Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Harm Reduction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    For Families
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Little Owl Support Network. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-teal-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
