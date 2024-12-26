
import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Chad";

  return (
    <main>
      <h1 className="title extra-space">Collect customer feedback to build better products</h1>
      <div>
        Create a feedback board in minutes, priotize features, and 
        build products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
        
    </main>
  );
}

export default Home;

