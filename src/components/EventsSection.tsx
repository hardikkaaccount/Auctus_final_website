import EventCard from "./EventCard";
import inaugurationImg from "@/assets/inauguration-workshop.png";
import vlsiImg from "@/assets/vlsi-workshop.png";
import relayathonImg from "@/assets/relayathon.png";
import decodeDeliverImg from "@/assets/decode-deliver.png";
import flexNetflixImg from "@/assets/flex-netflix.png";
import industryWebinarImg from "@/assets/industry-webinar.png";

const EventsSection = () => {
  const events = [
    {
      id: "inauguration-workshop",
      title: "Inauguration & Exploring IEEE: Benefits and Global Opportunities",
      date: "Thursday, October 23, 2025",
      time: "2:45 PM - 4:30 PM",
      details: "Kickstart the flagship event 'Auctus', a week-long technical fest by IEEE PESCE SB",
      description: "Kickstart the flagship event 'Auctus', a week-long technical fest by IEEE PESCE SB, on the occasion of IEEE Day! 🎉 The inauguration will officially launch this exciting journey, followed by an exclusive IEEE Special Workshop designed to give students a roadmap for the future. Whether your dreams are: Landing a job at a big MNC or even a FANG company 💼 Building your own startup 🚀 Expanding your professional network 🤝 Diving into cutting-edge R&D 🔬 …this workshop will show you how to turn those dreams into reality. From earning fame to earning money, from skill-building to opportunities, you'll discover how IEEE can guide your path. Join us, get inspired, and find the answers to the question everyone asks: 'How do I start building my future today?' ✨",
      eligibility: "Open to all Engineering students all over karnataka",
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
      details: "Dive into the fascinating world of VLSI with our exclusive workshop!",
      description: "Dive into the fascinating world of VLSI with our exclusive workshop! This session is designed to give you both insight and hands-on experience in one go. Part 1 – Expert Insights: Our honorable staff member, Dr. Sahana Raj B, HOD of the VLSI Department, will guide you through the world of VLSI using real-world scenarios, helping you understand how logic translates into actual layouts in the industry. Part 2 – Hands-On Experience: Following the session, our club members, already skilled in VLSI, will provide practical, hands-on training, giving participants the chance to apply concepts and explore VLSI firsthand. Don't miss this chance to learn from the experts and get your hands dirty with VLSI—a perfect blend of theory and practice!",
      eligibility: "Open to all Engineering students all over karnataka",
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
      details: "Teams of up to 4 members.",
      registration: "200 per team",
      description: "Ready, set, code! ⚡ Relayathon is not your typical hackathon—it's a high-speed relay of brains, teamwork, and problem-solving that'll leave you buzzing (and maybe questioning your life choices). Here's how the madness unfolds: Round 1 – Debug: Team Member 1 tackles a buggy code block. Fix it, run it, and grab the credentials for your teammate. Bonus points for surviving the frustration! 🐛💻 Round 2 – Inspect: Team Member 2 dives into a website armed with those credentials. Inspect, explore, and uncover hidden secrets like a true cyber-sleuth. Sherlock vibes included. 🕵️‍♀️ Round 3 – Puzzle: Team Member 3 enters a puzzle website. Solve the mind-boggling challenges to reveal the final credentials. Warning: brain cramps guaranteed. 🧩 Round 4 – Final Task: Team Member 4 takes the final credentials and unlocks the ultimate surprise challenge. Fame, glory, and bragging rights await! 🏆 Why Join? Because Relayathon is the perfect mix of coding, puzzles, and chaotic fun. If you love teamwork, adrenaline, and proving your squad is the smartest (or funniest) on campus, this is your moment. Gather your squad, bring your brains (and snacks), and show us if your team can Relay & Conquer! 🚀",
      eligibility: "Open to all Engineering students all over karnataka, Each team require total of 4 participants to participate in the relay",
      entryFee: "₹200 per team",
      limitedSeats: "30 Teams (only squad)",
      form: "https://forms.gle/VpSs3cXjLjBx4sNU8",
      image: relayathonImg,
    },
    {
      id: "decode-deliver",
      title: "🎯 Decode and Deliver: The Data Analytics Challenge",
      date: "Monday, 27th October 2025",
      time: "3:45 PM – 4:45 PM",
      details: "Teams of up to 4 members.",
      registration: "100 per team",
      description: "Theme: Turning raw data into real insights. Get ready to put your data skills to the ultimate test! In Decode & Deliver, participants will tackle messy datasets and must decode them—analyze, clean, and visualize—then deliver actionable insights or predictions within a time limit. This is your chance to show off your analytical prowess and storytelling skills with data. Ideal For: Students familiar with Python, R, Excel, Power BI, or Tableau. Rounds: Round 1 – Data Cleaning & Exploration: Dive into the dataset, clean the mess, and explore hidden patterns. Round 2 – Data Visualization: Bring the data to life with charts, graphs, and eye-catching visuals. Round 3 – Insight Presentation / Storytelling: Present your insights clearly and convincingly—your story could make all the difference! Turn chaos into clarity, numbers into narratives, and prove your team can Decode & Deliver! 📊✨",
      eligibility: "Open to all Engineering students all over karnataka",
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
      details: "A fun non-technical event. Teams of up to 2.",
      registration: "100 per team",
      description: "Flex With Netflix is a fun-filled quiz event designed to test participants' knowledge of popular Netflix shows, movies, and characters. From Stranger Things to Money Heist, this interactive session challenges your binge-watching memory through multiple rounds of questions and fun activities. It's the perfect mix of entertainment and competition—where true Netflix fans can flex their streaming expertise and win bragging rights! The main goal of the event is to have fun and vibe with IEEE. Join us and let's have an amazing evening on 28th October 2025!",
      eligibility: "Open to all Engineering students all over karnataka Limited seats available. Solo or Teams of two participants are allowed.",
      entryFee: "100 per team",
      limitedSeats: "30 Teams (solo or duo)",
      form: "https://forms.gle/ie7MicVcBea66mZb7",
      image: flexNetflixImg,
    },
    {
      id: "industry-webinar",
      title: "Job First or Startup First? - Webinar",
      date: "Wednesday, 29th October 2025",
      time: "6:30 PM – 7:30 PM",
      details: "Insights from industry leaders.",
      description: "Join us for an exclusive online webinar featuring Mr. Vinod Sharma, an esteemed member of the IEEE CAS Society and an inspiring industry expert. The session titled 'Job First or Startup First?' will explore real-world perspectives on choosing between a secure job and launching your own startup. Discover the pros, cons, and success strategies from someone who has been there and done that! 💼🚀\n\nSpeaker: Vinod Sharma\nLinkedIn: https://www.linkedin.com/in/vinodsharma10x/\n\nThis session promises a wealth of knowledge, insights, and guidance straight from the industry. Whether you're aiming to understand cutting-edge technologies, explore career paths, or gain practical tips for success, this webinar is your gateway to learning from the best. Don't miss this opportunity to connect with an expert and gain valuable knowledge that could shape your future!",
      eligibility: "Open to all Engineering students all over karnataka",
      entryFee: "No Fee",
      form: "https://forms.gle/EbyUV9PViaUynL1B6",
      image: industryWebinarImg,
    },
  ];

  return (
    <section id="events" className="py-16 sm:py-20 md:py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">
            Schedule of Events
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A week packed with innovation, learning, and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-slide-up">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                details={event.details}
                registration={event.registration}
                image={event.image}
                delay={index * 100}
                form={event.form}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
