function Home() {
 return(
  <div className="flex-col flex items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl text-center lg:text-7xl tracking-wide">
      Welcome to
      <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text"> Hydrion Tools!</span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      We are a team of developers and designers dedicated to creating powerful and user-friendly tools for automating repetitive tasks in your development workflow. Our mission is to simplify, streamline, and enhance your productivity.
    </p>
  </div>
 )
}

export default Home;