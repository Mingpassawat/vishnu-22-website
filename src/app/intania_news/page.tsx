import vectorImage from "./images/vector.svg";
import backgroundImage from "./images/background.svg";
import Image from "next/image";
import next from "next";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="mr-[10%] mt-10 flex place-items-center justify-center space-x-[13%]">
        <a href="https://www.w3schools.com/tags/att_a_href.asp">
          <Image className="" src={vectorImage} alt="vector graphic" />
        </a>
        <div className="font-roboto-condensed text-2xl">intania news</div>
      </div>

      <div className="mx-auto mt-5 max-w-[80%] gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block text-xs text-white">
            รีวิวชีวิตปี 1 วิศวฯจุฬา
          </span>
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-3 gap-4 gap-6">
        <div>
          <div>
            <h2 className="relative mb-3 ml-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            </h2>
          </div>
        </div>
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            SOTUS ตัดทิ้งไป
          </span>
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-3 gap-4 gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            วิศวฯกับการเรียน
          </span>
        </div>
        <div>
          <h2 className="relative mb-3 ml-5 inline-block max-w-full break-words font-roboto-condensed text-xs text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-5 grid max-w-[80%] grid-cols-4 gap-4 gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            ฟุตบอลประเพณี
          </span>
        </div>
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            ไอเทมวิศวฯ
          </span>
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-[80%] gap-6">
        <div className="group relative col-span-2 flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="https://placehold.co/1080x720"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="bg-gradient-to-t pointer-events-none absolute inset-0 from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative mb-3 ml-4 ml-5 inline-block font-roboto-condensed text-xs text-white">
            บิดาแห่งคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </span>
        </div>
      </div>

      <div className="relative mx-auto mt-5 max-w-[80%] justify-center">
        <img
          className="h-32 w-full rounded-md object-cover"
          src="https://placehold.co/1080x720"
          alt="Random image"
        ></img>
        
        <div className=" absolute inset-0 flex content-center ">
          <div className="content-center mx-auto">
          <h2 className="font-bold text-xl my-auto" >
            รีวิวชีวิตปี 1 วิศวฯจุฬา
          </h2><div className="flex justify-center">
          <Button  className="= place-self-center" variant="outline">
            play
          </Button></div></div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="relative max-w-[40%] mx-auto mt-10">
  <img
    className="h-64 w-full object-cover rounded-md"
    src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
    alt="Random image"
  ></img>
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
  <div className="absolute inset-0 flex place-content-end">
    <div className="content-end">
      <h2 className="text-white text-3xl font-bold">
        รีวิวชีวิตปี 1 วิศวฯจุฬา
      </h2>
      <h2 className="text-white text-3xl font-bold">placeholder2?</h2>
    </div>
  </div>
</div>
</div>
*/
