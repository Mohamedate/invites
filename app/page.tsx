import Image from "next/image";

export default async function Home() {
  return (
    <div className=" h-screen w-screen ">
      <div className="relative h-full w-full px-4">
        <Image
          src="/test.jpg"
          alt="bg"
          fill
          className="object-cover absolute"
          priority
        />
        {/* <div className="relative flex items-center  justify-center h-full w-full">
          <FormCard />
        </div> */}
      </div>
    </div>
  );
}
