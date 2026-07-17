import React from "react";

export default function BottomSheet({ selectedDept, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          selectedDept ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
          onClick={onClose}
        />
      </div>

      {/* Sheet */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-[2.5rem] shadow-[0_-10px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform-gpu font-work bg-card-bg text-beige border-t border-navy max-h-[85vh] ${
          selectedDept ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="w-full flex justify-center py-4 cursor-pointer" onClick={onClose}>
          <div className="w-12 h-1.5 rounded-full bg-beige opacity-20" />
        </div>

        {selectedDept && (
          <div className="px-8 pb-12 overflow-y-auto max-h-[calc(85vh-40px)]">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm bg-navy text-gold">
                  <selectedDept.icon size={24} strokeWidth={1.5} />
                </div>
               <h2 className="text-3xl font-fraunces font-bold">
                  {selectedDept.name}
                </h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 opacity-90 font-medium">
              {selectedDept.tagline}
            </p>

            <div className="mb-2">
              <h3 className="text-xs uppercase tracking-[0.15em] mb-4 opacity-60 font-bold text-gold">About the department</h3>
              <p className="text-sm leading-loose opacity-80">
                {selectedDept.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
