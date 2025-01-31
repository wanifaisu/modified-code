import { NetworkBar } from "@/utils/Icons";

interface CardProps {
  title: string;
  color?: string;
  value: number | string;
}

function Card({ title, value }: CardProps) {
  return (
    <article className="rounded-md px-3 py-2 bg-[#FFFFFF] text-[#231F20] flex items-center justify-between gap-x-4 hover:bg-[#FFB200] dark:bg-boxdark dark:text-white dark:border-white border transition-colors duration-300">
      <h3 className="font-medium font-inter text-base capitalize">{title}</h3>
      <div className="grid gap-y-4">
        <div className="flex gap-x-2">
          <NetworkBar />
        </div>
        {/* Only render the value if it is passed */}
        <p className="text-right font-inter font-semibold">
          {value !== undefined ? value : 0}
        </p>
      </div>
    </article>
  );
}

export default Card;
