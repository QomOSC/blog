import Image from "next/image";

export default function HomePage() {
  return (
    <section className="my-12 lg:my-16">
      <div className="flex justify-between items-center max-lg:flex-col-reverse">
        <div className="flex-1 max-lg:text-center max-lg:mt-8">
          <h1 className="text-2xl lg:text-4xl font-bold leading-[140%]">
            محیطی برای اشتراک گذاری <span className="text-primary">دانش</span> و{" "}
            <span className="text-primary">تجربه</span>
          </h1>

          <p className="mt-5 text-gray-600">
            انجمن متن باز قم جامعه ای با هدف افزایش مهارت و اطلاعات برنامه
            نویسان و ایجاد محیطی برای آشنایی بیشتر
          </p>

          <div className="mt-12 max-lg:flex flex-col">
            <button className="btn btn-primary">به ما بپیوندید</button>
            <button className="btn btn-primary btn-outline lg:mr-4 mt-2 lg:mt-0">
              مشاهده رویدادها
            </button>
          </div>
        </div>

        <Image
          width={480}
          height={295}
          className="lg:mr-24"
          src="https://assets.lexoya.com/qosc/conference.svg"
          alt="Hero Section"
        />
      </div>

      <div className="flex justify-between items-center flex-row-reverse max-lg:flex-col-reverse mt-24">
        <div className="flex-1 max-lg:text-center max-lg:mt-8 lg:mr-24">
          <h1 className="text-2xl lg:text-4xl font-bold leading-[140%]">
            با برنامه‌نویس‌ها و دیزاینرها ارتباط بگیر
          </h1>

          <p className="mt-5 text-gray-600">
            برای پروژه جدیدت دنبال تیم می‌گردی؟ رویدادها بهترین جا برای شبکه
            سازی و پیدا کردن افراد مختلف هستن
          </p>

          <div className="mt-12">
            <button className="btn btn-primary btn-outline">
              مشاهده رویدادها
            </button>
          </div>
        </div>

        <Image
          width={480}
          height={295}
          src="https://assets.lexoya.com/qosc/job-offer.svg"
          alt="Hero Section"
        />
      </div>

      <div className="flex justify-between items-center max-lg:flex-col-reverse mt-24">
        <div className="flex-1 max-lg:text-center max-lg:mt-8">
          <h1 className="text-2xl lg:text-4xl font-bold leading-[140%]">
            اگه حرفی برای گفتن داری الان وقتشه
          </h1>

          <p className="mt-5 text-gray-600">
            اگه حرفی برای گفتن داری یا تخصصی داری که به بقیه کمک می‌کنه می‌تونی
            اینجا ارائه‌اش کنی
          </p>

          <div className="mt-12">
            <button className="btn btn-primary">به ما بپیوندید</button>
          </div>
        </div>

        <Image
          width={480}
          height={295}
          className="lg:mr-24"
          src="https://assets.lexoya.com/qosc/seminar.svg"
          alt="Hero Section"
        />
      </div>

      <div className="flex justify-between items-center flex-row-reverse max-lg:flex-col-reverse mt-24">
        <div className="flex-1 max-lg:text-center max-lg:mt-8 lg:mr-24">
          <h1 className="text-2xl lg:text-4xl font-bold leading-[140%]">
            سوالتو از حرفه‌ای ها بپرس
          </h1>

          <p className="mt-5 text-gray-600">
            اینجا همه مشتاق کمک کردنن! اگه سوالی داری می‌تونی با هر کسی که دوست
            داشتی گپ بزنی و سوالتو ازش بپرسی
          </p>

          <div className="mt-12">
            <button className="btn btn-primary btn-outline">
              لینک گروه تلگرام
            </button>
          </div>
        </div>

        <Image
          width={480}
          height={295}
          src="https://assets.lexoya.com/qosc/chat.svg"
          alt="Hero Section"
        />
      </div>
    </section>
  );
}
