"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import TheSun2 from "../public/TheSun2.jpg"

export default function TheSunInfo() {

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
            {/* ปกของดวงอาทิตย์ */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Sun / ดวงอาทิตย์</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={TheSun2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดวงอาทิตย์ */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดวงอาทิตย์ (Sun) เป็นดาวฤกษ์ ณ ใจกลางระบบสุริยะ เป็นพลาสมาร้อนทรงเกือบกลมสมบูรณ์ โดยมีการเคลื่อนที่พาซึ่งผลิตสนามแม่เหล็กผ่านกระบวนการไดนาโม ปัจจุบันเป็นแหล่งพลังงานสำคัญที่สุดสำหรับสิ่งมีชีวิตบนโลก มีเส้นผ่านศูนย์กลางประมาณ 1.39 ล้านกิโลเมตร ใหญ่กว่าโลก 109 เท่า และมีมวลประมาณ 330,000 เท่าของโลก คิดเป็นประมาณร้อยละ 99.86 ของมวลทั้งหมดของระบบสุริยะ มวลประมาณสามในสี่ของดวงอาทิตย์เป็นไฮโดรเจน ส่วนที่เหลือเป็นฮีเลียมเป็นหลัก โดยมีปริมาณธาตุหนักกว่าเล็กน้อย รวมทั้งออกซิเจน คาร์บอน นีออนและเหล็ก
                </h1>
                <h1 className="font-bold pt-5">
                    ข้อมูลสำคัญเกี่ยวกับดวงอาทิตย์
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและมวล</h1>
                    <h1>• ดาวอาทิตย์มีขนาดใหญ่มาก โดยมวลของดาวอาทิตย์มากมาก มากถึง 1.989 x 10^30 กิโลกรัม ซึ่งเทียบเท่ากับประมาณ 333,000 ครั้งของมวลโลก ซึ่งมันเป็นสามารถสร้างแรงดึงดูดทางดาราศาสตร์ที่ควบคุมการเคลื่อนที่ของดวงอาทิตย์และดาวรอบตัวเอง</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. โครงสร้าง</h1>
                    <h1>• ดาวอาทิตย์เป็นดาวรูปกลมทรงและประกอบด้วยนิวเคลียสในส่วนศูนย์กลางที่ชุบด้วยแก๊สแบบพลาสมา มีองค์ประกอบหลักของดาวอาทิตย์ประกอบด้วยไฮโดรเจน ฮีเลียม ดลูทอเนียม และอีกหลายธาตุและแก๊สอื่น ๆ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. การปรากฏสี</h1>
                    <h1>• ดาวอาทิตย์ส่งออกแสงและความร้อนผ่านการรวมร่างระหว่างนิวเคลียสและผิวของดาวอาทิตย์ ซึ่งสร้างการปรากฏสีจากดาวอาทิตย์ ที่มีสีเป็นสีขาว</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. การใช้พลังงาน</h1>
                    <h1>• ดาวอาทิตย์ใช้นิวเคลียสของฮีเลียมในกระบวนการหมุนคลื่นนิวเคลียร์เป็นโปรตอนเพื่อสร้างพลังงานและแสง ซึ่งเป็นแหล่งพลังงานสำคัญสำหรับการรักษาชีวิตบนโลก</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. ควบคุมระบบสุริยะ</h1>
                    <h1>• ดาวอาทิตย์ควบคุมระบบสุริยะของเรา มีดวงอาทิตย์รอบตัว ซึ่งรวมถึงดาวเคราะห์อื่น ๆ และองค์ประกอบของระบบดาวเคราะห์ เธอคือแหล่งของแรงดึงดูดแรงโน้มถ่วงที่ควบคุมการเคลื่อนที่ของดาวเคราะห์ทุกตัวในระบบ</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">6. อนุกรมชีวิต</h1>
                    <h1>• ดาวอาทิตย์มีบทบาทสำคัญในกระบวนการสร้างธาตุและการสมดุลโซลาร์ ซึ่งเป็นสิ่งสำคัญในการเกิดดาวเคราะห์และระบบดาวเคราะห์ การแผ่ขยายเวลาสู่อนาคต, ดาวอาทิตย์คาดว่าจะขยายขนาดของตัวเองเมื่อหมดพลังงานและนำไปสู่สถานะที่สองของวัตถุประสงค์ โดยสุดท้ายเธอจะกลายเป็นดาวคราฟท์ (White Dwarf) เป็นสิ่งสำคัญในกระบวนการทางดาราศาสตร์และการเคลื่อนที่ของดาวเคราะห์ในระบบสุริยะ</h1>
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