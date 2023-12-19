import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <p className="text-muted-foreground text-center text-sm">{label}</p>
    </div>
  );
};
export default Empty;
