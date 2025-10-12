import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  details: string;
  registration?: string;
  image?: string;
  delay?: number;
  form?: string;
}

const EventCard = ({ id, title, date, time, details, registration, image, delay = 0, form }: EventCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/event/${id}`);
  };

  const handleRegister = () => {
    if (form) {
      window.open(form, '_blank');
    }
  };

  return (
    <Card
      className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      {/* Event Image */}
      {image && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
      )}
      
      <div className="relative p-6 sm:p-8 space-y-4 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>

        {/* Date & Time */}
        <div className="space-y-2">
          <div className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
            <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>{time}</span>
          </div>
        </div>

        {/* Details */}
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-2 flex-grow">
          {details}
        </p>

        {/* Registration Info */}
        {registration && (
          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-primary">
              <IndianRupee className="w-4 h-4" />
              <span>{registration}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 mt-auto">
          <Button
            onClick={handleViewDetails}
            variant="glass"
            className="flex-1"
          >
            View Details
          </Button>
          {form && (
            <Button
              onClick={handleRegister}
              variant="default"
              className="flex-1"
            >
              Register
            </Button>
          )}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
    </Card>
  );
};

export default EventCard;
