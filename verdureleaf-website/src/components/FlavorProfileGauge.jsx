export default function FlavorProfileGauge({ profile }) {
  if (!profile) return null;

  const { intensity = 3, crispness = 4, nutrition = 5 } = profile;

  const metrics = [
    {
      label: 'Flavor Intensity',
      value: intensity,
      max: 5,
      sublabel: intensity >= 4 ? 'Bold & Peppery' : intensity >= 3 ? 'Medium & Balanced' : 'Mild & Delicate',
      icon: 'local_fire_department',
      barColor: 'from-emerald-600 to-green-500',
    },
    {
      label: 'Crispness & Crunch',
      value: crispness,
      max: 5,
      sublabel: crispness >= 5 ? 'Ultra Crisp' : crispness >= 4 ? 'Juicy & Crunchy' : 'Tender Greens',
      icon: 'eco',
      barColor: 'from-teal-600 to-emerald-400',
    },
    {
      label: 'Phytonutrient Density',
      value: nutrition,
      max: 5,
      sublabel: nutrition >= 5 ? '40x Concentration' : 'Antioxidant Rich',
      icon: 'bolt',
      barColor: 'from-amber-500 to-emerald-500',
    },
  ];

  return (
    <div className="bg-surface-container-low p-5 md:p-6 rounded-2xl border border-outline-variant/30 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="font-headline text-sm md:text-base font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
          Flavor & Nutrient Profile
        </h4>
        <span className="text-[11px] font-semibold text-secondary uppercase tracking-widest bg-secondary-fixed/20 px-2.5 py-0.5 rounded-full">
          Lab Verified
        </span>
      </div>

      <div className="flex flex-col gap-3.5 pt-1">
        {metrics.map((metric) => {
          const percent = (metric.value / metric.max) * 100;
          return (
            <div key={metric.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-on-surface flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    {metric.icon}
                  </span>
                  {metric.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant text-[11px] font-medium">
                    {metric.sublabel}
                  </span>
                  <span className="text-primary font-bold text-xs">{metric.value}/5</span>
                </div>
              </div>
              {/* Progress Bar Container */}
              <div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${metric.barColor} transition-all duration-700 ease-out`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
