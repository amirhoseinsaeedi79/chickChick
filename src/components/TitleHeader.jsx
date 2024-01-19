
export default function TitleHeader(title) {

  return (
    <div className=" mt-8 md:mt-16">
      <div data-aos="zoom-out">
      <h4  className="text-[32px] pt-5 pb-2 md:text-[48px] w-full flex-row-center h-[140px] bg2 text-white vazir-bold border-b-4 text-shadow  shadow-orange-500 border-orange-400 ">{title.title}</h4>
      </div>
    </div>
  )
}
