import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05010d] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: copyright */}
        <p className="text-gray-400 text-sm font-medium tracking-wide">
          © 2026 C R Renuka
        </p>

        {/* Center/Right side branding */}
        <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
          <Code className="w-4 h-4 text-purple-400" />
          <span>Crafted with passion</span>
        </div>
      </div>
    </footer>
  );
}
