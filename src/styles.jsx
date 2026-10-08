export const styles = {
    app: {
        header: `w-full p-5 shadow-xl flex justify-between items-center bg-transparent backdrop-blur-md fixed z-50`,
        h1: `font-bold text-3xl text-[#ffcd00] tracking-wider`,
        div1: `flex gap-3`,
        navBtn: `p-3 rounded-md hover:bg-[#ffcd00] transition-all duration-300 text-gray-400 hover:text-black font-mono`,

        main: `min-h-screen flex justify-center items-center w-full relative`,
        main2: `min-h-screen flex flex-col justify-center items-center w-full relative bg-[#0f0f0f] overflow-hidden px-4 py-12`,
        section: `flex justify-center items-center w-full max-w-5xl z-10`,
        div2: `text-white flex flex-col gap-8 items-center justify-center w-full`,
        h1b: `text-[#ffcd00] text-8xl`,
        searchBar: `w-full m-3 rounded-full bg-gray-800 tracking-[2px] p-3 border border-[#ffcd00]`,
        searchBtn: `bg-[#ffcd00] text-black rounded-md hover:bg-white hover:text-black p-2`,
        form: `flex flex-row w-full`,
        time: `text-6xl font-bold tracking-[2px]`,

        circle: `p-5 bg-[#ffcd00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] max-h-[400px] w-full h-full rounded-full blur-[120px] opacity-15 pointer-events-none`,

        cache1: `text-3xl md:text-4xl font-bold text-[#ffcd00] tracking-[3px] uppercase border-b-2 border-[#ffcd00]/30 pb-3 text-center`,
        cache2: `text-gray-400 text-xs`,
    
        appsGrid: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full max-w-4xl mt-4`,
        apps: `group relative flex flex-col bg-[#161616] text-white gap-3 rounded-xl border border-[#ffcd00]/20 hover:border-[#ffcd00] p-5 justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,205,0,0.15)]`,
        appsImg: `rounded-full object-cover w-16 h-16 md:w-20 md:h-20 border-2 border-[#ffcd00]/40 group-hover:border-[#ffcd00] transition-all duration-300 p-1 bg-[#1a1a1a]`,
        appsName: `text-lg font-bold tracking-[1px] text-[#f1f1f1] group-hover:text-[#ffcd00] transition-colors`,
        appsBtn: `w-full bg-transparent border border-[#ffcd00] text-[#ffcd00] hover:bg-[#ffcd00] hover:text-black py-2 px-4 rounded-lg font-bold tracking-wider transition-all duration-300 text-sm shadow-sm`,
    }
}