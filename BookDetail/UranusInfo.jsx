"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Uranus2 from "../public/Uranus2.jpg"

export default function UranusInfo() {

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
            {/* ปกของดาวยูเรนัส */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Uranus / ดาวยูเรนัส</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Uranus2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวยูเรนัส */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวยูเรนัส (Uranus) เป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 7 ในระบบสุริยะ จัดเป็นดาวเคราะห์แก๊ส มีเส้นผ่านศูนย์กลาง 50,724 กิโลเมตร นับได้ว่ามีขนาดใหญ่เป็นอันดับที่3 ในระบบสุริยะ
                </h1>
                <h1 className="font-bold pt-5">
                    ข้อมูลสำคัญเกี่ยวกับดาวยูเรนัส
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและมวล</h1>
                    <h1>• ดาวยูเรนัสมีขนาดใหญ่กว่าโลก แต่มีมวลน้อยกว่า ดาวเสาร์ มวลของดาวยูเรนัสประมาณ 14.5 เท่าของมวลโลก ดาวยูเรนัสมีโครงสร้างภายนอกที่ปกคลุมด้วยชั้นเมฆที่หนาและโครงสร้างภายในที่มีนิวเคลียสขนาดใหญ่ที่เป็นหินและหลุมสีขาวที่แซงขึ้นมาจากแก๊สและไฮโดรเจน</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. พื้นผิว</h1>
                    <h1>• ดาวยูเรนัสมีพื้นผิวที่ไม่มีหน้าผา และมีสีเบจถึงเข้าไปด้วยเมฆหนา สีเบจเกิดจากการเล่นเงาแสงแดดเมื่อตะกอนถูกดาวยูเรนัสครอบมัน ดาวยูเรนัสมีลมพัดที่แรงอยู่ในชั้นเมฆและมีอาการแขนของหมุนที่นิดเดียว</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. ระบบแห่งวงโคจร</h1>
                    <h1>• ดาวยูเรนัสมีวงโคจรหมุนตามแนวตั้ง ซึ่งแตกต่างจากระบบโคจรของดาวเคราะห์ทั่วไปที่หมุนแนวนอน ระบบแห่งวงโคจรนี้ทำให้ดาวยูเรนัสดูเอียงออกจากแนวตั้งมาก ในหมุนครั้งเดียวของดาวยูเรนัสเกิดเหตุการณ์ชุดในระบบแห่งวงโคจรที่เป็นของมันเอง เช่น วงโคจรแห่งวงกลมแม่สูงกว่าเรื่อย ๆ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. ความร้อน</h1>
                    <h1>• ดาวยูเรนัสเป็นดาวย้อนกลับที่ไม่ส่งความร้อนให้กับอวกาศเหมือนดาวอื่น ๆ มวลส่วนใหญ่ของแก๊สในดาวยูเรนัสทำให้มันอบอวกาศออกจากดาว ด้วยที่จุดความร้อนที่ต่ำอาจส่งผลให้มันมีอากาศที่หนาและหมอกมัวหมอกความสุขาเข้มที่ไม่มีความเป็นปกติ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. อนุกรมชีวิต</h1>
                    <h1>• ดาวยูเรนัสไม่มีอนุกรมชีวิตที่เป็นผลมาจากสภาพอดิศรและสภาพพลังงานที่ทำให้มีอากาศหนาที่ค่อนข้างหนักและไม่เหมาะสำหรับการอาศัยชีวิต</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. การศึกษาดาวยูเรนัส</h1>
                    <h1>• คณะวิจัยและดาวยูเรนัสเป็นประเด็นที่น่าสนใจในดาราศาสตร์ การศึกษาดาวยูเรนัสในอนุกาสอวกาศช่วยให้เราเรียนรู้เพิ่มเติมเกี่ยวกับโลกอื่นและการสร้างระบบโคจรที่ไม่เป็นปกติ ยังมีแสดงวิธีการเข้าใจและศึกษาการปฏิเสธความร้อนของดาวยูเรนัสและวัฏจักรการหมุนแปลความร้อนที่เกิดขึ้นที่ลึกลงไปยังนิวเคลียสของดาวยูเรนัสได้ดีขึ้น ข้อมูลจากการสังเกตทางดาราศาสตร์นี้ช่วยให้เราเข้าใจวงโคจร</h1>
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