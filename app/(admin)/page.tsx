import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
const page = async () => {
  // console.log({ session });

  return (
    <div className="flex items-center justify-center p-5 text-lg font-bold text-red-500">
      Admin Protected Page
    </div>
  );
};

export default page;
