
import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Chad";

  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
         <div className="font-bold">CodeFastSaaS</div>
         <div className="space-x-4 max-md:hidden">
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">FAQ</a>
         </div>
        <div>
      </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
        </div>
   


      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
      <h1 className="text-4xl lg:text-5-xl font-extrabold mb-6">
        Collect customer feedback to build better products</h1>
      <div className="opacity-90 mb-10">
        Create a feedback board in minutes, priotize features, and 
        build products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
      </section>
    </main>
  );
}

export default Home;

