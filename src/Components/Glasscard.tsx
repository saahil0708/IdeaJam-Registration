import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  const Component = hover ? motion.div : 'div';

  return (
    <Component
      {...(hover && {
        whileHover: { scale: 1.02 },
        transition: { duration: 0.2 }
      })}
      className={cn(
        "relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl",
        "shadow-xl shadow-black/20",
        "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-[#1cb683]/30 before:to-transparent",
        "before:-z-10 before:blur-sm",
        hover && "hover:shadow-[#1cb683]/20 hover:border-[#1cb683]/30 transition-all duration-300",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GlassCard;