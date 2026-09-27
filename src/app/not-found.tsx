import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 max-w-3xl mx-auto">
      <div className="text-xs font-mono uppercase tracking-widest text-[#F4F4F4]/40 mb-6">
        ERROR 404 // NULL_POINTER
      </div>

      <h1 className="text-7xl sm:text-9xl font-light tracking-editorial text-[#F4F4F4] leading-none">
        404
      </h1>

      <p className="mt-8 text-base sm:text-xl text-[#F4F4F4]/70 font-light max-w-md">
        The requested vector coordinate does not exist or has been shifted in the manifold.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary" arrow="none">
          Return Home
        </Button>
        <Button href="/work" variant="outline" arrow="right">
          View Selected Work
        </Button>
      </div>

      <div className="mt-16 text-xs font-mono text-[#F4F4F4]/30">
        COORDINATE_OFFSET: 0x00000000
      </div>
    </div>
  );
}
