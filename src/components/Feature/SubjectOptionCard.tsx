import { Link } from "react-router";
import OptionPair from "./OptionPair";

interface OptionCardProps {
  optionLabel: string;
  optionName: string;
  optionBg?: string;
}

export default function SubjectOptionCard({
  optionLabel,
  optionName,
  optionBg,
}: OptionCardProps) {
  return (
    <Link
      className="flex gap-4 items-center bg-navy h-18 rounded-[0.75rem] px-3"
      to={`/subject/${optionName}`}
    >
      <OptionPair
        optionLabel={optionLabel}
        optionName={optionName}
        optionBg={optionBg}
      />
    </Link>
  );
}
