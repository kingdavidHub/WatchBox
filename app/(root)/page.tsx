import { Button } from "@/components/ui/button";
import { bebasNeue } from "../fonts";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <section>
      <div className="hero-wrapper">
        <div className="hero-overlay flex-between">
          <div className="p-10 flex-between w-full hero-container">
            {/* left section */}
            <div className="flex-1 flex-cols gap-4 p-6">
              <h1 className={cn(bebasNeue.variable, "text-white font-extrabold uppercase text-3xl" )}>Furiosa: A Mad Max Saga</h1>
              <p className="text-white">
                In &quot;Furioso: A Mad Max Saga,&quot; the fierce warrior
                Furiosa embarks on a perilous <br /> journey through a post-apocalyptic
                wasteland, battling ruthless enemies to <br /> reclaim her homeland.
              </p>
              <Button className="w-[10rem]">Watch</Button>
            </div>

            {/* Right section */}
            <div className="flex-1">
              <h1>image</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
