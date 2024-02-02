import getData from "@/lib/fetch_data/getData";
import Link from "next/link";
// export async function generateMetadata({ params: { userId } }){
//     const userData = getUser(userId)
//     const user = await userData

//     if (!user.name) {
//         return {
//             title: "User Not Found"
//         }
//     }

//     return {
//         title: user.name,
//         description: `This is the page of ${user.name}`
//     }

// }

// export async function generateStaticParams() {
//     const usersData= getAllUsers()
//     const users = await usersData

//     return users.map(user => ({
//         userId: user.id.toString()
//     }))
// }

export default async function Course() {
  // const dataInfo = { collection: "courses", segment: "psychology/lectures" };
  // const data = await getData(dataInfo);
  // console.log(data);
  // const courseData = data.map((course) => {
  //   course = course.info;
  //   return (
  //     <div key={course.id}>
  //       <h2>{course.title}</h2>
  //     </div>
  //   );
  // });
  return (
    <div>
      <h1>Courses</h1>
      {/*{courseData}*/}
    </div>
  );
}
