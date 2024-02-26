import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import snowParticleConfig from "../particles/snowParticleConfig";

const Accomodation = () => {
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
      <div className="h-full pb-11 mt-20 cursor-default">
        <div className="flex items-center justify-center p-11 text-3xl md:text-5xl text-white font-anta">
          <h1>ACCOMODATION</h1>
        </div>

        <div className="flex justify-center md:p-10 mb-20">
          <h1 className="text">Coming soon...</h1>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
