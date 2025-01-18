import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type RequestType = "music" | "chat";

export const FanRequestForm = () => {
  const [requestType, setRequestType] = useState<RequestType>("music");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your backend
    toast.success(
      `Your ${requestType} request has been sent! We'll get back to you soon.`
    );
    
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-4">
        <Button
          type="button"
          variant={requestType === "music" ? "default" : "outline"}
          onClick={() => setRequestType("music")}
        >
          Request New Music
        </Button>
        <Button
          type="button"
          variant={requestType === "chat" ? "default" : "outline"}
          onClick={() => setRequestType("chat")}
        >
          Request Chat
        </Button>
      </div>

      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={
          requestType === "music"
            ? "What kind of music would you like to hear?"
            : "What would you like to discuss?"
        }
        className="min-h-[100px]"
      />

      <Button type="submit" className="w-full">
        Submit Request
      </Button>
    </form>
  );
};