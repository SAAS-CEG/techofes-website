import sponser_1 from "../assets/sponsers/sponser_1.jpg";
import sponser_2 from "../assets/sponsers/sponser_2.jpg";
import sponser_3 from "../assets/sponsers/sponser_3.jpg";
import sponser_4 from "../assets/sponsers/sponser_4.jpg";
import sponser_5 from "../assets/sponsers/sponser_5.jpg";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import snowParticleConfig from "../particles/snowParticleConfig";

const Sponsors = () => {
  const imgs = [sponser_1, sponser_2, sponser_3, sponser_4, sponser_5];

  async function loadParticles(main) {
    await loadSlim(main);
  }

  return (
    <div>
      <Particles
        id="tsparticles"
        init={loadParticles}
        options={snowParticleConfig}
      />
      <div className=" h-full  pb-11">
        <div className="flex items-center justify-center p-11 text-4xl text-white">
          <h1>OUR SPONSERS</h1>
        </div>

        <div className="grid grid-cols-3 gap-10 relative w-[1000px] left-[250px]  border-4 p-11 rounded-xl">
          {imgs.map((img, index) => (
            <div className="h-[300px] w-[300px]  rounded-xl hover:size-[310px] relative top-5 border-2">
              <img
                key={index}
                src={img}
                alt={`Sponsor ${index + 1}`}
                className="rounded-xl h-[200px] w-[400px]"
              />
              <div className="p-2 relative left-[80px] text-2xl text-white">
                <h1 className="pb-3 pl-5">Name</h1>
                <p>Description</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
