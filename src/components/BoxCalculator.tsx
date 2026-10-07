import { useState } from 'react';
import { 
  Box, 
  RotateCcw, 
  Send, 
  Layers, 
  Scale 
} from 'lucide-react';
import { useInView } from '../hooks/useMotion';

interface BoxCalculatorProps {
  onSelectSpec?: (spec: string) => void;
}

const BOX_OPTIONS = [
  { id: 'rsc', label: 'RSC Shipping Box', desc: 'Standard flap carton' },
  { id: 'mailer', label: 'Die-Cut Mailer', desc: 'Tuck-in e-commerce' },
  { id: 'heavy', label: 'Heavy Master Box', desc: '7-ply export carton' },
  { id: 'rigid', label: 'Rigid Setup Box', desc: 'High-end packaging' },
] as const;

const PLY_OPTIONS = [
  { id: '3ply', label: '3-Ply', badge: 'Light' },
  { id: '5ply', label: '5-Ply', badge: 'Standard' },
  { id: '7ply', label: '7-Ply', badge: 'Heavy' },
] as const;

const FLUTE_OPTIONS = [
  { id: 'B', label: 'B', mm: '3mm' },
  { id: 'C', label: 'C', mm: '4mm' },
  { id: 'E', label: 'E', mm: '1.5mm' },
  { id: 'BC', label: 'BC', mm: '7mm' },
] as const;

export default function BoxCalculator({ onSelectSpec }: BoxCalculatorProps) {
  const { ref, isInView } = useInView();

  // State for dimensions (in inches)
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [boxType, setBoxType] = useState<'rsc' | 'mailer' | 'heavy' | 'rigid'>('rsc');
  const [ply, setPly] = useState<'3ply' | '5ply' | '7ply'>('5ply');
  const [flute, setFlute] = useState<'B' | 'C' | 'E' | 'BC'>('C');
  const [quantity, setQuantity] = useState(1000);
  const [printed, setPrinted] = useState(true);

  // Calculations
  const volumeCubicInches = length * width * height;
  const volumeCBM = (volumeCubicInches * 0.0000163871).toFixed(3);
  const volumeLiters = (volumeCubicInches * 0.0163871).toFixed(1);

  // Strength rating estimation
  const getPlyDetails = () => {
    switch (ply) {
      case '3ply':
        return { name: 'Single Wall (3-Ply)', maxLoad: 'Up to 12 kg', ect: 'ECT 26-32', burst: '12-14 kg/cm²' };
      case '5ply':
        return { name: 'Double Wall (5-Ply)', maxLoad: 'Up to 32 kg', ect: 'ECT 44-48', burst: '16-20 kg/cm²' };
      case '7ply':
        return { name: 'Triple Wall (7-Ply)', maxLoad: 'Up to 75 kg (Export)', ect: 'ECT 60+', burst: '24+ kg/cm²' };
    }
  };

  const plyInfo = getPlyDetails();

  // 3D visual scale factor (clamped)
  const visualScaleX = Math.min(Math.max((length / 16) * 110, 80), 150);
  const visualScaleY = Math.min(Math.max((height / 12) * 100, 70), 140);

  const handleSendToRFQ = () => {
    const specSummary = `${length}"×${width}"×${height}" ${boxType.toUpperCase()} Box (${ply.toUpperCase()}, ${flute}-Flute, ${quantity} units, ${printed ? 'Custom Printed' : 'Plain Brown'})`;
    if (onSelectSpec) {
      onSelectSpec(specSummary);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="calculator" 
      ref={ref} 
      className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive 3D Tool</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Box Dimension & Strength Calculator
          </h2>
          <p className="text-slate-600 text-base">
            Dial in your custom packaging measurements. See immediate 3D visual scaling, calculated internal volume, and load-bearing strength specifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left: 7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            
            {/* 1. Box Type */}
            <div className="mb-7">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Select Box Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BOX_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBoxType(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      boxType === item.id
                        ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimension Sliders */}
            <div className="mb-7 space-y-5 bg-white border border-slate-200 p-5 rounded-xl">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Adjust Dimensions (Inches / CM)
                </label>
                <button
                  onClick={() => { setLength(14); setWidth(10); setHeight(8); }}
                  className="text-xs text-amber-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" /> Reset Standard
                </button>
              </div>

              {/* Length */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-700 font-semibold">Length (L)</span>
                  <span className="text-slate-900 font-bold font-mono">{length} in ({Math.round(length * 2.54)} cm)</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="36"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Width */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-700 font-semibold">Width (W)</span>
                  <span className="text-slate-900 font-bold font-mono">{width} in ({Math.round(width * 2.54)} cm)</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="28"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Height */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-700 font-semibold">Height (H)</span>
                  <span className="text-slate-900 font-bold font-mono">{height} in ({Math.round(height * 2.54)} cm)</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="24"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>

            {/* 3. Ply & Fluting */}
            <div className="grid sm:grid-cols-2 gap-5 mb-7">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  3. Corrugated Ply Rating
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PLY_OPTIONS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPly(p.id)}
                      className={`py-2 px-2 rounded-lg text-center border transition-all ${
                        ply === p.id
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{p.label}</div>
                      <div className="text-[10px] text-slate-500">{p.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  4. Flute Profile
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {FLUTE_OPTIONS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFlute(f.id)}
                      className={`py-2 px-1 rounded-lg text-center border transition-all ${
                        flute === f.id
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{f.label}</div>
                      <div className="text-[9px] text-slate-500">{f.mm}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Quantity & Custom Print */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 items-center">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Estimated Quantity: <span className="text-amber-600 font-bold font-mono">{quantity.toLocaleString()} pcs</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3 rounded-lg border border-slate-200">
                <input
                  type="checkbox"
                  id="printToggle"
                  checked={printed}
                  onChange={(e) => setPrinted(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                />
                <label htmlFor="printToggle" className="text-xs font-semibold text-slate-800 cursor-pointer">
                  Include Custom Brand Flexo / Offset Printing
                </label>
              </div>
            </div>

          </div>

          {/* 3D Visual Preview & Specs Summary (Right: 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 3D Box Simulation Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col items-center">
              <div className="w-full flex items-center justify-between text-xs text-slate-600 mb-4 pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Box className="w-4 h-4 text-amber-600" />
                  <span>3D Proportional Preview</span>
                </span>
                <span className="font-mono text-slate-900 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                  {length}" × {width}" × {height}"
                </span>
              </div>

              {/* 3D Visual Container */}
              <div className="relative w-full h-56 flex items-center justify-center my-2 perspective-1000">
                <div
                  className="relative transition-all duration-300 transform-style-3d animate-float"
                  style={{
                    width: `${visualScaleX}px`,
                    height: `${visualScaleY}px`,
                    transform: 'rotateX(-18deg) rotateY(25deg)',
                  }}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-[#c48545] rounded border border-amber-300/80 p-2 shadow-md flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[8px] font-mono text-amber-950 font-bold">
                      <span>PRINT GALLERY</span>
                      <span>{ply.toUpperCase()}</span>
                    </div>

                    {printed && (
                      <div className="border border-amber-900/40 rounded p-1 bg-amber-900/10 text-center">
                        <span className="text-[9px] font-black uppercase text-amber-950 block">CUSTOM BRAND</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[7px] font-mono text-amber-950">
                      <span>L: {length}"</span>
                      <span>H: {height}"</span>
                    </div>
                  </div>

                  {/* Top Face */}
                  <div 
                    className="absolute -top-[30px] left-0 right-0 bg-[#d99b5a] rounded-t border border-amber-200 origin-bottom transform -skew-x-[35deg]"
                    style={{ height: '30px' }}
                  />

                  {/* Right Face */}
                  <div 
                    className="absolute top-0 -right-[30px] bottom-0 bg-[#8c4919] rounded-r border border-amber-900 origin-left transform -skew-y-[55deg]"
                    style={{ width: '30px' }}
                  />
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="w-full grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-slate-500 text-[11px] flex items-center gap-1 font-medium">
                    <Layers className="w-3 h-3 text-amber-600" />
                    <span>Calculated Volume</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5">{volumeLiters} Liters</div>
                  <div className="text-[10px] text-slate-500 font-mono">{volumeCBM} CBM</div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <div className="text-slate-500 text-[11px] flex items-center gap-1 font-medium">
                    <Scale className="w-3 h-3 text-emerald-600" />
                    <span>Payload Capacity</span>
                  </div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5">{plyInfo.maxLoad}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{plyInfo.ect}</div>
                </div>
              </div>
            </div>

            {/* Spec Card & Quick Request Quote Action */}
            <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2.5 py-1 rounded">
                    Engineered Specification
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Ready for Quotation
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-slate-800 space-y-1">
                  <div>• {length}"(L) × {width}"(W) × {height}"(H) Corrugated Box</div>
                  <div>• {plyInfo.name}, {flute}-Flute, Estimated Burst: {plyInfo.burst}</div>
                  <div>• Quantity: {quantity.toLocaleString()} units ({printed ? 'Branded' : 'Plain Brown'})</div>
                </div>

                <button
                  onClick={handleSendToRFQ}
                  className="w-full btn-primary text-sm font-bold py-3 flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send This Spec to RFQ Form</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
