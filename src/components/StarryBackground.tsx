
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,rgba(0,0,0,0)_70%)]" />
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#8B5CF6"
        trailColor="#38BDF8"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#E879F9"
        trailColor="#A78BFA"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#38BDF8"
        trailColor="#6B21A8"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
    </div>
  );
};

export default StarryBackground;
