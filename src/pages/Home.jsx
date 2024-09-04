import Company from '../components/Company.jsx';
import Header from '../components/Header.jsx';
import MenuHome from '../components/MenuHome.jsx';
import Proposal from '../components/Proposal.jsx';
import Service from '../components/Service.jsx';

export default function Home() {



  return (
    <>
      <div className="bgHome">
      <Header/>
      <Service/>
      <MenuHome status={'flex-col-center'}/>
      <Proposal/>
      </div>
      <div className="bgCompany" >
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
//     <div className="flex w-full flex-col items-center bg-[url(images/body2.jpg)] bg-fixed pb-20 pt-36">
//              <form onSubmit={handleSubmit(tesnewt)} className="flex-col-center bg2 text-md w-11/12 rounded-[40px] border-2 border-orange-500 md:w-7/12 md:text-xl lg:w-5/12">
//                <span className="vazir-bold mt-10 text-4xl text-orange-500">
//                  ورود به حساب
//                </span>
//                <label
//                  className="vazir-bold mb-3 mr-14 mt-10 w-full text-right text-xl text-white md:mr-28"
//                  htmlFor="#username"
                
//                >
//                  : ایمیل
//                </label>
//                <input
//                  className="mb-5 h-12 w-[85%] rounded-2xl border-4 border-orange-500 px-4 text-xl focus:outline-0"
//                  id="username"
//                  type="email"
//                  {...register('email')}
                 
//                />
//                <label
//                  className="vazir-bold mb-3 mr-14 w-full text-right text-xl text-white md:mr-28"
//                  htmlFor="#username"
                
//                >
//                  : شماره تماس
//                </label>
//                <input
//                  className="mb-5 h-12 w-[85%] rounded-2xl border-4 border-orange-500 px-4 text-xl focus:outline-0"
//                  id="username"
//                  type="phone"
//                  {...register('phone')}
                 
//                />
//                <label
//                  className="vazir-bold mb-3 mr-14 w-full text-right text-xl text-white md:mr-28"
//                  htmlFor="#password"
//                >
//                  : کلمه عبور
//                </label>
//                <input
//                  className="mb-5 h-12 w-[85%] rounded-2xl border-4 border-orange-500 px-4 text-xl focus:outline-0"
//                  id="password"
//                  type="password"
//                  {...register('password')}
//                />
//                <input
//                  className="vazir-bold mb-5 cursor-pointer rounded-3xl border-4 border-orange-500 bg-white px-6 py-2 text-xl"
//                  type="submit"
//                  value={"ورود "}
//                />
//                <div className="vazir-bold mb-3 w-full py-5 text-right text-xl text-white">
//                  <div className="flex-col-center text-center text-[15px] md:text-xl">
//                    <div className="flex-row-center">
//                    <Link to='/Signup' className="cursor-pointer text-orange-500">ثبت نام کنید</Link>
//                    <span  className="ml-3">حساب کاربری ندارید ؟</span>
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

