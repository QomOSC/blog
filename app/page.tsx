import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-between items-center mt-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-[140%]">
            محیطی برای اشتراک گذاری <span className="text-primary">دانش</span> و{" "}
            <span className="text-primary">تجربه</span>
          </h1>

          <p className="mt-5 text-gray-600">
            انجمن متن باز قم جامعه ای با هدف افزایش مهارت و اطلاعات برنامه
            نویسان و ایجاد محیطی برای آشنایی بیشتر
          </p>

          <div className="mt-8">
            <button className="btn btn-primary">به ما بپیوندید</button>
            <button className="btn btn-primary btn-outline mr-4">مشاهده رویدادها</button>
          </div>
        </div>

        <Image
          width={320}
          height={295}
          className="mr-10"
          src={"https://assets.lexoya.com/qosc/conference.svg"}
          alt="Hero Section"
        />
      </div>
    </>
  );
}
