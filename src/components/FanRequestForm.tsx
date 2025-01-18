import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type RequestType = "music" | "chat";

export const FanRequestForm = () => {
  const [requestType, setRequestType] = useState<RequestType>("music");
  const [message, setMessage] = useState("");
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (requestType === "chat") {
      setShowPaymentDialog(true);
      return;
    }
    
    // Here you would typically send this to your backend
    toast.success(
      `Your ${requestType} request has been sent! We'll get back to you soon.`
    );
    
    setMessage("");
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment processor
    toast.success("Payment successful! Your chat request has been sent.");
    setShowPaymentDialog(false);
    setMessage("");
  };

  return (
    <>
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
            Request Chat ($50/hour)
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
          {requestType === "chat" ? "Proceed to Payment" : "Submit Request"}
        </Button>
      </form>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Payment</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Pay $50
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};