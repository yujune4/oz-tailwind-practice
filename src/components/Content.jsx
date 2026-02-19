export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1 cursor-pointer">
      <img
        src={content.image}
        alt={content.title}
        className="w-[300px] rounded-[10px] transition-transform duration-200 hover:scale-105"
      />

      <span className="text-xs text-lime-300 border border-lime-300 px-[6px] py-[4px] rounded">
        모집중
      </span>

      <div className="text-lg font-semibold">{content.title}</div>

      <p className="text-xs text-gray-400">{content.subtitle}</p>
    </div>
  );
}
