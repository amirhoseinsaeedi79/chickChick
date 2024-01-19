import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="w-full h-[450px] md:h-[600px]  lg:w-full lg:h-[620px] bg-proposal flex-col-center">
      <div  className="container mt-8 flex-col-center lg:flex ">
        <h1 data-aos="zoom-in-up" data-aos-delay="100" className="flex-col-center vazir-bold text-[56px] lg:text-[96px] lg:flex lg:flex-row-reverse md:text-[105px] mb-10  text-white">
          <span className="text-[56px] md:text-[96px]  text-white px-7 ">
            سوخاری
          </span>
          <span className=" ">چیک چیک</span>
        </h1>
        <span data-aos="zoom-in-up" data-aos-delay="300"  className="text-[22px] lg:text-[32px] vazir-bold  md:text-5xl text-white  drop-shadow-[0_2px_1px_black] ">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("کیفیت تبلیغ ماست")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("بابهترین مواد اولیه")
                .start()
                .pauseFor(1000); 
            }}
            options={{
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
}
