"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const locations = [
  {
    id: "thukididou",
    name: "Θουκυδίδου",
    address: "Θουκυδίδου 41, Σέρρες 62124",
    hours: [
      { day: "Δευτέρα - Παρασκευή", time: "07:00 - 22:00" },
      { day: "Σάββατο", time: "08:00 - 22:00" },
      { day: "Κυριακή", time: "09:00 - 21:00" },
    ],
    phone: "+30 2321 012345",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8!2d23.54!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyM8KwMzInMTQuMCJF!5e0!3m2!1sel!2sgr!4v1234567890",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Θουκυδίδου+41+Σέρρες",
  },
  {
    id: "bekiari",
    name: "Μπεκιάρη",
    address: "Μπεκιάρη 27, Σέρρες",
    hours: [
      { day: "Δευτέρα - Παρασκευή", time: "07:30 - 21:00" },
      { day: "Σάββατο", time: "08:00 - 21:00" },
      { day: "Κυριακή", time: "10:00 - 20:00" },
    ],
    phone: "+30 2321 098765",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8!2d23.55!3d41.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDFCsDA1JzM0LjAiTiAyM8KwMzInMTguMCJF!5e0!3m2!1sel!2sgr!4v1234567890",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Μπεκιάρη+27+Σέρρες",
  },
];

function LocationPin({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5 7 13 7 13s7-8 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

interface LocationCardProps {
  location: typeof locations[0];
  index: number;
  isInView: boolean;
}

function LocationCard({ location, index, isInView }: LocationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        {/* Map embed */}
        <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
          <iframe
            src={location.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
            title={`Χάρτης - ${location.name}`}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Location name badge */}
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mb-4"
          >
            <LocationPin className="w-4 h-4" />
            <span className="font-script text-lg">{location.name}</span>
          </motion.div>

          {/* Address */}
          <address className="font-sans text-lg text-black not-italic mb-4">
            {location.address}
          </address>

          {/* Hours */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ClockIcon className="w-4 h-4 text-black/40" />
              <span className="font-sans text-sm text-black/60">Ωράριο</span>
            </div>
            <div className="space-y-1 pl-6">
              {location.hours.map((schedule, i) => (
                <div key={i} className="flex justify-between font-sans text-sm text-black/70">
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 mb-6">
            <PhoneIcon className="w-4 h-4 text-black/40" />
            <a
              href={`tel:${location.phone}`}
              className="font-sans text-sm text-black/70 hover:text-black transition-colors"
            >
              {location.phone}
            </a>
          </div>

          {/* CTA Button */}
          <motion.a
            href={location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-full font-sans font-medium hover:bg-black/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Οδηγίες
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locations" ref={ref} className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-black mb-4">
            Βρείτε μας
          </h2>
          <p className="font-sans text-lg text-black/60 max-w-2xl mx-auto">
            Δύο τοποθεσίες στη καρδιά των Σερρών για να σας εξυπηρετούμε καλύτερα.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
