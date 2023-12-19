import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  desc,
  icon: Icon,
  iconColor,
  bgColor,
}) => {
  return (
    <div className="mb-8 flex items-center gap-x-3 px-4  lg:px-8">
      <div className={clsx("w-fit rounded-md p-2", bgColor)}>
        <Icon className={clsx("h-10 w-10", iconColor)} />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-black/70">{desc}</p>
      </div>
    </div>
  );
};
export default Heading;
