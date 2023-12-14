import Heading from "@/components/Heading";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

const page = () => {
  return (
    <section>
      <Heading
        title="Conversation"
        desc="Have a conversation with AI."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </section>
  );
};
export default page;
