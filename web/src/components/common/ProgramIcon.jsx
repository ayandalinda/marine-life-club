import {
  BookOpen,
  Briefcase,
  Microscope,
  Calendar,
  Compass,
  Fish,
  Waves,
  Award,
  Crown,
  Medal,
} from 'lucide-react';

export function ProgramIcon({ icon, size = 28, className = '' }) {
  if (!icon) return <Compass size={size} className={className} />;

  // If icon is an emoji or standard name, map to Lucide icon
  if (icon.includes('📚') || icon === 'academic' || icon === 'book') {
    return <BookOpen size={size} className={className} />;
  }
  if (icon.includes('💼') || icon === 'career' || icon === 'work') {
    return <Briefcase size={size} className={className} />;
  }
  if (icon.includes('🐢') || icon.includes('🐠') || icon === 'conservation' || icon === 'turtle') {
    return <Fish size={size} className={className} />;
  }
  if (icon.includes('🔬') || icon === 'research' || icon === 'science') {
    return <Microscope size={size} className={className} />;
  }
  if (icon.includes('📅') || icon === 'events' || icon === 'outreach') {
    return <Calendar size={size} className={className} />;
  }
  if (icon.includes('🌊') || icon === 'ocean') {
    return <Waves size={size} className={className} />;
  }

  return <Compass size={size} className={className} />;
}

export function TierBadgeIcon({ slot, icon, size = 20, className = '' }) {
  if (slot === 1 || icon === '🥉' || icon === 'bronze') {
    return <Medal size={size} className={className} style={{ color: '#CD7F32' }} />;
  }
  if (slot === 2 || icon === '🥈' || icon === 'silver') {
    return <Award size={size} className={className} style={{ color: '#C0C0C0' }} />;
  }
  if (slot === 3 || icon === '🥇' || icon === 'gold') {
    return <Crown size={size} className={className} style={{ color: '#FFD700' }} />;
  }
  return <Award size={size} className={className} />;
}
