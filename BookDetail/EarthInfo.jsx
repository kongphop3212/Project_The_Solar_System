"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Earth2 from "../public/Earth2.jpg"

export default function EarthInfo() {

    const { data: session } = useSession();

    return (
    <div>
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <Link href="/dashboard">
            <h1 className="font-bold">The Solar System</h1>
            </Link>
            <div className="grow">
            <div className="flex items-center justify-center gap-2 md:gap-8">
                <div>  </div>
            </div>
            </div>
            <div>
            <button
            onClick={() => signOut()}
            className="mr-2 font-bold"
            >
            Sign Out
            </button>
            </div>
        </div>
        <div>
            {/* ปกเว็บไซต์ */}
            <div className='max-w-[1980px] h-[600px] w-full justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={TheSolarSystem} placeholder="blur" />
                </div>
            </div>
            {/* ปกของโลก */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Earth / โลก</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Earth2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของโลก */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    โลก (Earth) เป็นดาวเคราะห์ลำดับที่สามจากดวงอาทิตย์ และเป็นวัตถุทางดาราศาสตร์เพียงหนึ่งเดียวที่ทราบว่ามีสิ่งมีชีวิต จากการวัดอายุด้วยกัมมันตรังสีและแหล่งหลักฐานอื่นได้ความว่าโลกกำเนิดเมื่อประมาณ 4,500 ล้านปีก่อน โลกมีอันตรกิริยะเชิงโน้มถ่วงกับวัตถุอื่นในอวกาศโดยเฉพาะดวงอาทิตย์และดวงจันทร์ ซึ่งเป็นดาวบริวารถาวรหนึ่งเดียวของโลก โลกโคจรรอบดวงอาทิตย์ใช้เวลา 365.26 วัน เรียกว่า ปี ซึ่งระหว่างนั้นโลกโคจรรอบแกนตัวเองประมาณ 366.26 รอบ
                </h1>
                <h1 className=" font-bold pt-5">
                    นี่คือข้อมูลสำคัญเกี่ยวกับโลก
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและระยะห่าง</h1>
                    <h1>• โลกเป็นดาวเคราะห์ที่สามตำแหน่งจากดวงอาทิตย์ในระบบสุริยะของเรา มีเส้นรอบโครงสร้างประมาณ 12,742 กิโลเมตร ซึ่งทำให้มีขนาดเล็กกว่าดวงอาทิตย์แต่ใหญ่กว่าดาวพฤหัสบดีและดาวพุธ ระยะห่างจากดวงอาทิตย์ถึงโลกประมาณ 149.6 ล้าน กิโลเมตร</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. โครงสร้างและชั้นบรรยากาศ</h1>
                    <h1>• โลกมีโครงสร้างชั้นบรรยากาศที่ประกอบด้วยประมาณ 78% ไนโตรเจน, 21% ออกซิเจน, และอกซีเจน อื่นๆ เป็นส่วนใหญ่ของชั้นบรรยากาศ</h1>
                    <h1>• ชั้นบรรยากาศสามารถแบ่งเป็น 5 ชั้น ได้แก่ โทรโพสเฟียร์, สตราโทสเฟียร์, มีโซสเฟียร์, เทอร์โมสเฟียร์, เอกโซสเฟียร์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. น้ำ</h1>
                    <h1>• ด้วยความหลายหลายทางชีวิต ทะเลและแม่น้ำของโลกเป็นสิ่งที่สำคัญ มหาสมุทรมีสภาพคลื่นและสภาพฝ้ายที่หลากหลาย เรียกว่า "ทะเลทราย" มีพื้นที่สีขาวที่เป็นเกล็ดน้ำเกิดจากแข็งฟืนของหิมะที่ถูกกลับละลายที่มหาสมุทรในซัมเมอร์</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. วิธีการใช้พลังงาน</h1>
                    <h1>• โลกมีระบบมหามุมที่เรียกว่า "มหามุมแกนหมุน" หมายถึงมุมที่แกนหมุนของโลกกับแกนรอบโครงสร้างของระบบสุริยะ เป็นที่มาของภาวะทางอากาศกับฤดูกาลของโลก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. สภาพอากาศ</h1>
                    <h1>• โลกมีสภาพอากาศหรือบรรยากาศที่มีความหลากหลาย เรามีแอดมอสเฟียร์ที่ประกอบด้วยไอซี แอร์ เรน และสิ่งแวดล้อมที่สามารถรองรับชีวิต อากาศของโลกประกอบด้วยก๊าซออกซิเจนและไอเอสไอ (nitrogen) ในสมดุลของก๊าซตัวอื่น ๆ อันเจอกันในปริมาณเล็ก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การดำรงชีวิต</h1>
                    <h1>• โลกเป็นเพียงหนึ่งในโลกที่ทรงสภาพพอสมสำหรับการอาศัยของชีวิต มีสิ่งมีชีวิตหลายชนิดที่อาศัยบนโลก, รวมถึงมนุษย์, สัตว์, พืช, และจุลมีชีวิต</h1>
                </div>
                <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
                    <div className="grow">
                    <div className="flex items-center justify-center gap-2 md:gap-8">
                    <h1 className="font-bold">Kongphop Tadee 64345031-2</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}