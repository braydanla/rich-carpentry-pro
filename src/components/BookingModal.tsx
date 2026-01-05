import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface BookingModalProps {
  children: React.ReactNode;
}

export const BookingModal = ({ children }: BookingModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>{children}</div>
      <DialogContent className="max-w-[95vw] sm:max-w-[600px] h-[85vh] sm:h-[700px] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Book a Consultation</DialogTitle>
        </VisuallyHidden>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/BlIumnTbU1uJzT5qLOIf"
          className="w-full h-full border-none"
          scrolling="no"
          id="ghl-booking-widget"
          title="Book a Consultation"
        />
      </DialogContent>
    </Dialog>
  );
};
