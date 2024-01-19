import Header from "../components/Header.jsx";
import MenuHome from "../components/MenuHome.jsx";
import Service from "../components/Service.jsx";
import Proposal from "../components/Proposal.jsx";
import Company from "../components/Company.jsx"

export default function Home() {



  return (
    <>
      <div className="bgHome">
      <Header/>
      <Service/>
      <MenuHome status={'flex-col-center'}/>
      <Proposal/>
      </div>
      <div className="bgCompany " >
      <Company/>
      </div>
    </>
  );
}










// import { useForm } from 'react-hook-form';
// import { Link } from "react-router-dom";
// export default function Login() {
  

//   const {
//     register,
//     handleSubmit,
//   } = useForm();
  


//     async function tesnewt(data){
//      await fetch('http://localhost:3000/users')
//       .then((res)=>res.json())
//       .then((alldatas)=>{
//        const resault= alldatas.some(function(users){
//           return (users.email,users.password)===(data.email,data.password)
//         })
//         if(resault==false){
//           alert("رمز عبور یا ایمیل اشتباه است")
//         }else{
//          alert("با موفقیت وارد شدید")
//         }
//     })


   
//   }

  

  

//   return (
//     <div className=" w-full flex flex-col items-center  bg-[url(images/body2.jpg)] bg-fixed pt-36 pb-20">
//              <form onSubmit={handleSubmit(tesnewt)} className="w-11/12  md:w-7/12 lg:w-5/12 flex-col-center border-2 bg2 border-orange-500 rounded-[40px] md:text-xl text-md">
//                <span className="text-orange-500 vazir-bold text-4xl mt-10">
//                  ورود به حساب
//                </span>
//                <label
//                  className=" w-full text-right mr-14 md:mr-28 text-white text-xl vazir-bold mb-3 mt-10"
//                  htmlFor="#username"
                
//                >
//                  : ایمیل
//                </label>
//                <input
//                  className="w-[85%] h-12 rounded-2xl mb-5 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
//                  id="username"
//                  type="email"
//                  {...register('email')}
                 
//                />
//                <label
//                  className=" w-full text-right mr-14 md:mr-28 text-white text-xl vazir-bold mb-3"
//                  htmlFor="#username"
                
//                >
//                  : شماره تماس
//                </label>
//                <input
//                  className="w-[85%] h-12 rounded-2xl mb-5 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
//                  id="username"
//                  type="phone"
//                  {...register('phone')}
                 
//                />
//                <label
//                  className=" w-full text-right mr-14 md:mr-28  text-white text-xl vazir-bold mb-3"
//                  htmlFor="#password"
//                >
//                  : کلمه عبور
//                </label>
//                <input
//                  className="w-[85%] h-12 rounded-2xl mb-5 border-4 border-orange-500 focus:outline-0 px-4 text-xl"
//                  id="password"
//                  type="password"
//                  {...register('password')}
//                />
//                <input
//                  className="py-2 px-6 mb-5 bg-white rounded-3xl  text-xl vazir-bold cursor-pointer border-4 border-orange-500"
//                  type="submit"
//                  value={"ورود "}
//                />
//                <div className="w-full text-right py-5 text-white text-xl vazir-bold mb-3 ">
//                  <div className="flex-col-center text-[15px] md:text-xl text-center">
//                    <div className="flex-row-center">
//                    <Link to='/Signup' className="text-orange-500 cursor-pointer ">ثبت نام کنید</Link>
//                    <span  className="ml-3 ">حساب کاربری ندارید ؟</span>
//                    </div>
//                   <div className="mt-5 text-orange-500">
//                   <Link to='/Forgoat'  className="cursor-pointer">فراموشی رمز عبور</Link>
//                   </div>
//                  </div>
//                </div>
//              </form>
//            </div>
//   )
// }

