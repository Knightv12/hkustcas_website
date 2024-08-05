import Bg from "/src/Bg.jsx";
const Membership = () => {
  return (
    <div className="font z-[100]">
      <div className="text-center mt-40 whitespace-pre-wrap">
        <p className="text-base text-blue-700">
            -soc房-
        </p>
        <p className="Title text-blue-600">
            開放詳情
        </p>
        <div className="info p-20 mt-10 text-base">
            <p className="text-gray-600">
                日期、時間和地點：不定時開放，請留意電郵。<br/>
                人數上限通常為12人。為避免人數超出負荷，若人數多於12人，會員或需輪候進入房間。
            </p>

            <p className="mt-10">
                The maximum number of people is 12 people. <br/>To avoid overcrowding, if
                the number of people exceeds 12, members may need to wait in line to
                enter the room.
            </p>

            <p>
                實際開放時間或地點可能會因情況而作出更改。如有任何變動會另行通知。
            </p>

            <p>
                The actual opening time or venue might be changed due to different
            conditions. Any changes will be notified separately.
            </p>
        </div>


        <p className="Title">
            借書服務
        </p>
        會員可透過以下連結查閲可供借閲的漫畫或輕小説。
        <p>
        Members can search for their interested comics or light novels through
        the following link. USTCAS Booklist
        </p>

        <p>
        如需借閲書本，必須透過以下Google Form向學會申請。
        </p>

        <p>
          If you need to borrow, you need to submit an application form below
          Google Form. Application Form
        </p>

        <p>
          會員如需借取或歸還圖書，須於開放時間期間到Meeting Room 1。 If you need
          to borrow or return books, please visit Meeting Room 1 during the
          opening hours.
        </p>
        會員必須以自己身份借閲書本。請勿代他人借閲或歸還圖書。 Members need to
        borrow books in person. Do not assist others in borrowing or returning
        the books. 會員借閲任何書籍均需出示學生證以供本會幹事確認身份。 To
        borrow any books, members should show their student ID or membership
        card for verification of identity.
      </div>
    </div>
  );
};

export default Membership;
