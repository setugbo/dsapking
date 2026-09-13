'use client';

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-6 rounded-3xl bg-[var(--primary)]/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1B45] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 hidden rounded-md bg-white/5 px-3 py-1 text-[10px] text-gray-400 sm:block">
            dkingacademy.com | Enterprise Overview
          </span>
        </div>

        <div className="flex">
          <aside className="hidden w-12 flex-col items-center gap-4 border-r border-white/10 py-5 sm:flex">
            <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#006BB8] to-[#003966]" />
            <span className="h-6 w-6 rounded-lg bg-white/10" />
            <span className="h-6 w-6 rounded-lg bg-white/10" />
            <span className="h-6 w-6 rounded-lg bg-white/10" />
            <span className="mt-auto h-6 w-6 rounded-lg bg-[var(--gold)]/10" />
          </aside>

          <div className="flex-1 space-y-4 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Overview</p>
                <p className="text-sm font-bold text-white">SAP S/4HANA Finance</p>
              </div>
              <span className="rounded-full bg-[var(--gold)]/15 px-2.5 py-1 text-[10px] font-semibold text-[var(--gold)]">
                Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Postings', value: '1,284', accent: 'text-[var(--gold)]' },
                { label: 'Open PO', value: '56' },
                { label: 'Invoices', value: '203' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl bg-white/5 p-2.5">
                  <p className={`text-base font-extrabold ${kpi.accent ?? 'text-white'}`}>{kpi.value}</p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-wide text-gray-500">{kpi.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[10px] font-semibold text-gray-400">Financial Postings</p>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {[35, 55, 40, 70, 50, 80, 60, 95, 72, 88, 66, 100].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#006BB8] to-[#3D92CD]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[10px] font-semibold text-gray-400">Cost Centers</p>
                <p className="mt-1 text-lg font-extrabold text-white">128</p>
                <p className="text-[10px] text-[var(--gold)]">+12 this period</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[10px] font-semibold text-gray-400">Open Items</p>
                <p className="mt-1 text-lg font-extrabold text-white">342</p>
                <p className="text-[10px] text-[var(--gold)]">-8% vs prior</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 rounded-xl border border-[var(--gold)]/20 bg-[#0A1B45] px-4 py-3 shadow-xl">
        <p className="text-[10px] uppercase tracking-widest text-gray-500">Practical Learning</p>
        <p className="text-sm font-bold text-white">
          Hands-On <span className="text-[var(--gold)]">SAP S/4HANA</span>
        </p>
      </div>

      <div className="absolute -right-4 -top-5 rounded-xl bg-[var(--gold)] px-4 py-2.5 shadow-xl">
        <p className="text-sm font-extrabold text-[var(--navy)]">D KING</p>
      </div>
    </div>
  );
}