export default function Header() {
  return (
    <header className="flex justify-between items-center py-2.5 px-5 bg-black text-white">
      <h1 className="font-bold">OZ코딩스쿨</h1>

      <ul className="flex items-center gap-5 text-[13px]">
        <li className="cursor-pointer hover:text-gray-300">로그인</li>
        <li className="cursor-pointer hover:text-gray-300">회원가입</li>
        <li className="cursor-pointer hover:text-gray-300">내클래스</li>
      </ul>
    </header>
  );
}
