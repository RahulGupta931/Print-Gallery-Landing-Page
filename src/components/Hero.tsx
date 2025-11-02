export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                {/* <Package className="w-12 h-12 text-amber-500" strokeWidth={2} /> */}
                <img src="/logo.png" alt="" className="w-16 h-16 rounded-full border-3 border-amber-500 p-1 bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-sm" />
                <div>
                  <div className="text-3xl font-bold tracking-tight">PRINT GALLERY</div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The Best Choice For Your{' '}
              <span className="text-amber-500">Successful Business</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Leading provider of high quality printing and packaging services with innovative and sustainable solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-amber-500/30">
                {/* <Package className="w-full h-64 text-amber-500/30" strokeWidth={1} /> */}
                <img src="/O1CN01clwYha1unbYHXIdlU_!!6000000006082-2-yinhe.png_.avif" alt="" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
