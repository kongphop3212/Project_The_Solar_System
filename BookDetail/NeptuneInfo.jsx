"use client";
import Link from "next/link";
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import TheSolarSystem from "../public/TheSolarSystem.jpg"
import Neptune2 from "../public/Neptune2.jpg"

export default function NeptuneInfo() {

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
            {/* ปกของดาวเนปจูน */}
            <h1 className="flex items-center justify-center gap-2 md:gap-8 pt-5 text-xl font-bold">Neptune / ดาวเนปจูน</h1>
            <div className='justify-center gap-2 flex px-4 pt-5'>
                <div className='w-full h-full justify-center gap-2 flex px-4 pt-1'>
                    <Image src={Neptune2} placeholder="blur" width={700} height={500}/>
                </div>
            </div>
            {/* เนื้อหาของดาวเนปจูน */}
            <div className="container mx-auto items-center px-6 py-2 pt-4 h-24">
                <h1>
                    ดาวเนปจูน (Neptune) เป็นดาวเคราะห์ในระบบสุริยะลำดับสุดท้ายมีขนาดเส้นผ่านศูนย์กลางใหญ่เป็นอันดับที่ 4 รองจากดาวพฤหัสบดี ดาวเสาร์ ดาวยูเรนัส และมีมวลเป็นลำดับที่ 3 รองจากดาวพฤหัสบดีและดาวเสาร์ คำว่า "เนปจูน"
                </h1>
                <h1 className="font-bold pt-5">
                    ข้อมูลสำคัญเกี่ยวกับดาวเนปจูน
                </h1>
                <div className="pt-5">
                    <h1 className="font-bold">1. ขนาดและมวล</h1>
                    <h1>• ดาวเนปจูนเป็นดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ มวลของดาวเนปจูนเป็นประมาณ 17.2 เท่าของมวลโลก มันมีโครงสร้างที่ปกคลุมด้วยกลศาสตร์หินและน้ำแข็ง น้ำแข็งที่ปกคลุมดาวนี้มีชื่อว่า "น้ำแข็งแห่งแคระแทน" และอาจปิดมันโดยการเริ่มที่ก้อนหินดาวเนปจูนในลักษณะที่เหมือนก้อนหินที่บดบังโดยใกล้เข้ากับศีรษะของดาวนี้</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">2. พื้นผิว</h1>
                    <h1>• เนปจูนเป็นดาวที่มีเมฆหนาบนพื้นผิว ที่ทำให้มีสีฟ้าอมเขียว น้ำเย็นแข็งแห่งแคระแทนทำให้เนปจูนมีแสงสดใสและเป็นอื่น ๆ โดยการส่งเสียงแดดซึ่งประกอบด้วยส่วนสูงของน้ำเย็นแข็งแห่งแคระแทน</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">3. ระบบแห่งวงโคจร</h1>
                    <h1>• ดาวเนปจูนมีวงโคจรหลายตัว และมีวงโคจรบางตัวที่ไม่ปกติ ดาวนี้มีวงโคจรหลายแห่งที่ประกอบด้วยดวงจักรวาล และหุ้น โดยวงโคจรที่น่าสนใจสุดคือ "ทริตรอน" ที่มีลักษณะคล้ายวงโคจรของดาวพลูโทนัส ทำให้นิวเตรสความสนุกเพิ่มขึ้นในการศึกษาดาวนี้</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">4. ความร้อน</h1>
                    <h1>• เนปจูนเป็นดาวเย็นมาก เนื่องจากมันไกลจากดวงอาทิตย์ และไม่ได้รับความร้อนจากดวงอาทิตย์เท่ากับดาวเคราะห์ที่อยู่ใกล้มาก การศึกษาเนปจูนเป็นโอกาสที่ดีในการเข้าใจความเย็นและสภาพพลังงานของดาวเคราะห์ห่างไกล</h1>
                </div>
                <div className="pt-5">
                    <h1 className="font-bold">5. การศึกษาดาวเนปจูน</h1>
                    <h1>• ดาวเนปจูนเป็นเป้าหมายหลักในการศึกษาดาราศาสตร์ มากับการสำรวจและค้นพบรายละเอียดของดาวเคราะห์นี้ การศึกษาดาวเนปจูนอาจส่งผลให้เราเข้าใจการเกิดและวิวัฒนาการของระบบสุริยะในอดีต การสังเกตดาวเนปจูนทำให้เราสามารถเข้าใจเพิ่มเติมเกี่ยวกับดวงอังคารและดาวพฤหัสบดี</h1>
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