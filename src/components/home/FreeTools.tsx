import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, BookOpen, Heart, Sparkles } from "lucide-react";
import marathonFinish from "@/assets/podcast/marathon-finish.png";

const FreeTools = () => {
  const tools = [
    { icon: BookOpen, label: "Workbooks" },
    { icon: Heart, label: "Self-Care Guides" },
    { icon: Sparkles, label: "Healing Prompts" },
  ];

  return (
    <section className="relative section-padding overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url(${marathonFinish})`,
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
      </div>
      
      <div className="relative container-custom">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-shazmeen-red/20 rounded-full flex items-center justify-center">
              <Download size={24} className="text-shazmeen-red" />
            </div>
            <span className="text-white uppercase tracking-widest text-sm font-semibold">
              Free Resources
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-white mb-6">
            Free Tools for Growth & Clarity
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Start where you are—with no pressure. These free downloads are created to help you reconnect with yourself, reflect on what you truly need, and take your next step forward.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-transparent px-5 py-3 rounded-lg border border-zinc-600"
              >
                <tool.icon size={20} className="text-shazmeen-red" />
                <span className="text-gray-300 font-medium">{tool.label}</span>
              </div>
            ))}
          </div>
          
          <Link to="/free-resources">
            <Button className="bg-transparent text-white text-xl px-10 py-5 border-2 border-shazmeen-red hover:bg-shazmeen-red/10 transition-all duration-300">
              Access Free Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
