import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, ArrowLeft, ExternalLink, Ticket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import inaugurationImg from "@/assets/inauguration-workshop.png";
import vlsiImg from "@/assets/vlsi-workshop.png";
import relayathonImg from "@/assets/relayathon.png";
import decodeDeliverImg from "@/assets/decode-deliver.png";
import flexNetflixImg from "@/assets/flex-netflix.png";
import industryWebinarImg from "@/assets/industry-webinar.png";

const events = [
  {
    id: "inauguration-workshop",
    title: "Inauguration & Special Workshop",
    date: "Thursday, October 23, 2025",
    time: "2:45 PM - 4:30 PM",
    description: "Kickstart the flagship event 'Auctus', a week-long technical fest by IEEE PESCE SB, on the occasion of IEEE Day! 🎉 The inauguration will officially launch this exciting journey, followed by an exclusive IEEE Special Workshop designed to give students a roadmap for the future. Whether your dreams are: Landing a job at a big MNC or even a FANG company 💼 Building your own startup 🚀 Expanding your professional network 🤝 Diving into cutting-edge R&D 🔬 …this workshop will show you how to turn those dreams into reality. From earning fame to earning money, from skill-building to opportunities, you'll discover how IEEE can guide your path. Join us, get inspired, and find the answers to the question everyone asks: 'How do I start building my future today?' ✨",
    eligibility: "Open to all PESCE students",
    entryFee: "No Fee",
    limitedSeats: "40 Participants",
    form: "https://forms.gle/uyAQABYL677PoAWS8",
    image: inaugurationImg,
  },
  {
    id: "vlsi-workshop",
    title: "VLSI Workshop – From Logic to Layout",
    date: "Thursday, 24th October 2025",
    time: "2:45 PM – 4:30 PM",
    description: "Dive into the fascinating world of VLSI with our exclusive workshop! This session is designed to give you both insight and hands-on experience in one go. Part 1 – Expert Insights: Our honorable staff member, Dr. Sahana Raj B, HOD of the VLSI Department, will guide you through the world of VLSI using real-world scenarios, helping you understand how logic translates into actual layouts in the industry. Part 2 – Hands-On Experience: Following the session, our club members, already skilled in VLSI, will provide practical, hands-on training, giving participants the chance to apply concepts and explore VLSI firsthand. Don't miss this chance to learn from the experts and get your hands dirty with VLSI—a perfect blend of theory and practice!",
    eligibility: "Open to all PESCE students",
    entryFee: "No Fee",
    limitedSeats: "40 Participants",
    form: "https://forms.gle/xTvnQeFjCnhtpfso9",
    image: vlsiImg,
  },
  {
    id: "relay-hackathon",
    title: "Relayathon: The Relay Hackathon",
    date: "Saturday, October 25, 2025",
    time: "9:30 AM - 1:45 PM",
    description: "Ready, set, code! ⚡ Relayathon is not your typical hackathon—it's a high-speed relay of brains, teamwork, and problem-solving that'll leave you buzzing (and maybe questioning your life choices). Here's how the madness unfolds: Round 1 – Debug: Team Member 1 tackles a buggy code block. Fix it, run it, and grab the credentials for your teammate. Bonus points for surviving the frustration! 🐛💻 Round 2 – Inspect: Team Member 2 dives into a website armed with those credentials. Inspect, explore, and uncover hidden secrets like a true cyber-sleuth. Sherlock vibes included. 🕵️‍♀️ Round 3 – Puzzle: Team Member 3 enters a puzzle website. Solve the mind-boggling challenges to reveal the final credentials. Warning: brain cramps guaranteed. 🧩 Round 4 – Final Task: Team Member 4 takes the final credentials and unlocks the ultimate surprise challenge. Fame, glory, and bragging rights await! 🏆 Why Join? Because Relayathon is the perfect mix of coding, puzzles, and chaotic fun. If you love teamwork, adrenaline, and proving your squad is the smartest (or funniest) on campus, this is your moment. Gather your squad, bring your brains (and snacks), and show us if your team can Relay & Conquer! 🚀",
    eligibility: "Open to all PESCE students, Each team require total of 4 participants to participate in the relay",
    entryFee: "₹200 per team",
    limitedSeats: "30 Teams (only squad)",
    teamSize: "Up to 4 members per team",
    form: "https://forms.gle/VpSs3cXjLjBx4sNU8",
    image: relayathonImg,
  },
  {
    id: "decode-deliver",
    title: "🎯 Decode and Deliver: The Data Analytics Challenge",
    date: "Monday, 27th October 2025",
    time: "3:45 PM – 4:45 PM",
    description: "Theme: Turning raw data into real insights. Get ready to put your data skills to the ultimate test! In Decode & Deliver, participants will tackle messy datasets and must decode them—analyze, clean, and visualize—then deliver actionable insights or predictions within a time limit. This is your chance to show off your analytical prowess and storytelling skills with data. Ideal For: Students familiar with Python, R, Excel, Power BI, or Tableau. Rounds: Round 1 – Data Cleaning & Exploration: Dive into the dataset, clean the mess, and explore hidden patterns. Round 2 – Data Visualization: Bring the data to life with charts, graphs, and eye-catching visuals. Round 3 – Insight Presentation / Storytelling: Present your insights clearly and convincingly—your story could make all the difference! Turn chaos into clarity, numbers into narratives, and prove your team can Decode & Deliver! 📊✨",
    eligibility: "Open to all PESCE college students",
    teamSize: "Up to 2 members per team",
    entryFee: "₹100 per team",
    form: "https://forms.gle/VaDJXSiSuTxKUyEg6",
    image: decodeDeliverImg,
  },
  {
    id: "flex-netflix",
    title: "Flex With Netflix",
    date: "28th October 2025",
    time: "2:45 PM - 4:30 PM",
    description: "Flex With Netflix is a fun-filled quiz event designed to test participants' knowledge of popular Netflix shows, movies, and characters. From Stranger Things to Money Heist, this interactive session challenges your binge-watching memory through multiple rounds of questions and fun activities. It's the perfect mix of entertainment and competition—where true Netflix fans can flex their streaming expertise and win bragging rights! The main goal of the event is to have fun and vibe with IEEE. Join us and let's have an amazing evening on 28th October 2025!",
    eligibility: "Open to all PESCE college students. Limited seats available. Solo or Teams of two participants are allowed.",
    entryFee: "₹100 per team",
    limitedSeats: "30 Teams (solo or duo)",
    form: "https://forms.gle/ie7MicVcBea66mZb7",
    image: flexNetflixImg,
  },
  {
    id: "industry-webinar",
    title: "Industry Expert Webinar",
    date: "Wednesday, 29th October 2025",
    time: "2:45 PM – 4:45 PM",
    description: "Join us for an exclusive online webinar featuring a special guest—an esteemed member of the IEEE CAS Society. The identity of the speaker will be revealed on the day of the event, adding an element of surprise! This session promises a wealth of knowledge, insights, and guidance straight from the industry. Whether you're aiming to understand cutting-edge technologies, explore career paths, or gain practical tips for success, this webinar is your gateway to learning from the best. Don't miss this opportunity to connect with an expert and gain valuable knowledge that could shape your future!",
    eligibility: "Open to all PESCE college students",
    entryFee: "No Fee",
    form: "https://forms.gle/EbyUV9PViaUynL1B6",
    image: industryWebinarImg,
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const event = events.find((e) => e.id === id);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      />

      <Navbar />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>

          {/* Event Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
              {event.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{event.time}</span>
              </div>
            </div>

            {/* Event Image */}
            {event.image && (
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm animate-slide-up">
                <h2 className="text-2xl font-bold mb-4 gradient-text">About This Event</h2>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </Card>

              {event.teamSize && (
                <Card className="p-8 bg-card/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Team Information</h2>
                  <div className="flex items-center gap-2 text-foreground/90">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{event.teamSize}</span>
                  </div>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm sticky top-24 animate-scale-in">
                <h3 className="text-xl font-bold mb-4 gradient-text">Event Details</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Eligibility</p>
                    <p className="text-foreground/90">{event.eligibility}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Entry Fee</p>
                    <p className="text-lg font-bold text-primary">{event.entryFee}</p>
                  </div>

                  {event.limitedSeats && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Limited Seats</p>
                      <p className="text-foreground/90 flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-primary" />
                        {event.limitedSeats}
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-background font-semibold"
                  onClick={() => window.open(event.form, "_blank")}
                >
                  Register Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Click to fill the registration form
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
