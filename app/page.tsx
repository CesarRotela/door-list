export default function EventLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <section className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Próximo evento
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Sesiones Nocturnas de Sintetizador
        </h1>

        <dl className="mt-6 space-y-4 border-t border-slate-800 pt-6 text-sm text-slate-300">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <dt className="font-medium text-slate-400">Fecha</dt>
            <dd className="mt-1 font-semibold text-slate-100 sm:mt-0">
              Sábado 14 de noviembre de 2026, 22:00 h
            </dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <dt className="font-medium text-slate-400">Lugar</dt>
            <dd className="mt-1 font-semibold text-slate-100 sm:mt-0">
              Sala Central 404, Distrito Cultural
            </dd>
          </div>
        </dl>

        <div className="mt-8">
          <button
            type="button"
            className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Registrarme
          </button>
        </div>
      </section>
    </main>
  );
}
