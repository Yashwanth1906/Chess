import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChessLandingPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
          {[...Array(64)].map((_, i) => (
            <div key={i} className={`${(i + Math.floor(i / 8)) % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">Master the Game</h1>
          <p className="text-xl mb-8">Elevate your chess skills with our cutting-edge platform</p>
          <Button size="lg" className="bg-[#f0d9b5] text-black hover:bg-[#b58863]">
            Start Playing Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Advanced AI Opponent", description: "Challenge yourself against our state-of-the-art AI", icon: "♔" },
            { title: "Live Tournaments", description: "Compete in real-time tournaments with players worldwide", icon: "♕" },
            { title: "Interactive Lessons", description: "Learn from grandmasters with our interactive video lessons", icon: "♖" },
          ].map((feature, index) => (
            <Card key={index} className="bg-[#2a2a2a] border-none">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#2a2a2a]">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Players Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Alice", rating: "2200", quote: "This platform has revolutionized my chess game!" },
            { name: "Bob", rating: "1800", quote: "The interactive lessons are incredibly helpful." },
            { name: "Charlie", rating: "2400", quote: "I love the competitive atmosphere in the tournaments." },
            { name: "Diana", rating: "2000", quote: "The AI opponent provides a real challenge every time." },
          ].map((testimonial, index) => (
            <div key={index} className={`p-6 ${index % 2 === 0 ? 'bg-[#f0d9b5]' : 'bg-[#b58863]'} text-black`}>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name} - Rating: {testimonial.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-[#2a2a2a]">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="step1">Step 1</TabsTrigger>
              <TabsTrigger value="step2">Step 2</TabsTrigger>
              <TabsTrigger value="step3">Step 3</TabsTrigger>
            </TabsList>
            <TabsContent value="step1" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                  <CardDescription>Join our chess community in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Sign up for free and set up your profile. Choose your preferred settings and get ready to play.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="step2" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Opponent</CardTitle>
                  <CardDescription>Play against AI or real players</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Select your preferred game mode. Challenge our AI at various difficulty levels or match with players from around the world.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="step3" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Improve Your Skills</CardTitle>
                  <CardDescription>Learn and grow with every game</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Analyze your games, take interactive lessons, and track your progress. Watch your chess rating soar as you become a better player.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Pawn", price: "$9.99", features: ["Basic AI opponent", "5 tournaments/month", "10 video lessons"] },
            { title: "Knight", price: "$19.99", features: ["Advanced AI opponent", "Unlimited tournaments", "50 video lessons", "Personal coach"] },
            { title: "Queen", price: "$29.99", features: ["Grandmaster AI opponent", "Unlimited tournaments", "All video lessons", "1-on-1 coaching", "Exclusive events"] },
          ].map((plan, index) => (
            <Card key={index} className={`${index === 1 ? 'border-[#f0d9b5]' : 'border-[#b58863]'} border-2`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-3xl font-bold">{plan.price}/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#f0d9b5] text-black hover:bg-[#b58863]">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "The Immortal Game", players: "Anderssen vs Kieseritzky", year: 1851 },
            { title: "Opera Game", players: "Morphy vs Duke of Brunswick and Count Isouard", year: 1858 },
            { title: "Game of the Century", players: "Donald Byrne vs 13-year-old Bobby Fischer", year: 1956 },
          ].map((game, index) => (
            <Card key={index} className="bg-[#2a2a2a] border-none">
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>{game.players}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Year: {game.year}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Study Game</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#2a2a2a] text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Become a Chess Master?</h2>
        <p className="text-xl mb-8">Join our platform today and take your game to the next level!</p>
        <Button size="lg" className="bg-[#f0d9b5] text-black hover:bg-[#b58863]">
          Sign Up Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p>&copy; 2023 Chess Master Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}

