"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import { Check } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all fields before sending.");
      return;
    }

    setStatus("submitting");

    // Simulate sending message with graceful feedback
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="border border-white/[0.15] bg-[#141414] p-8 sm:p-12 text-left space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono text-[#F4F4F4] uppercase tracking-widest">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F4F4F4] text-[#101010]">
            <Check className="w-3 h-3" />
          </span>
          <span>DISPATCH CONFIRMED</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-light text-[#F4F4F4] tracking-editorial">
          Thank you for reaching out.
        </h3>
        <p className="text-sm sm:text-base text-[#F4F4F4]/70 font-light leading-relaxed max-w-lg">
          Your transmission has been logged. I will review your note and respond promptly.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            arrow="none"
            onClick={() => setStatus("idle")}
          >
            Send Another Note
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left" noValidate>
      {status === "error" && (
        <div className="text-xs font-mono text-[#F4F4F4] border-l-2 border-[#F4F4F4] pl-3 py-1">
          {errorMessage}
        </div>
      )}

      {/* NAME INPUT */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/50"
        >
          01 / YOUR NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
          placeholder="Mohammad Rihan"
          className="w-full bg-transparent border-b border-white/[0.15] py-3 text-base sm:text-lg text-[#F4F4F4] placeholder:text-[#F4F4F4]/20 focus:border-[#F4F4F4] focus:outline-hidden transition-colors font-light"
        />
      </div>

      {/* EMAIL INPUT */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/50"
        >
          02 / YOUR EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
          placeholder="name@domain.com"
          className="w-full bg-transparent border-b border-white/[0.15] py-3 text-base sm:text-lg text-[#F4F4F4] placeholder:text-[#F4F4F4]/20 focus:border-[#F4F4F4] focus:outline-hidden transition-colors font-light"
        />
      </div>

      {/* MESSAGE INPUT */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-[11px] font-mono uppercase tracking-widest text-[#F4F4F4]/50"
        >
          03 / YOUR MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formState.message}
          onChange={handleChange}
          placeholder="Describe your project, ideas, or opportunity..."
          className="w-full bg-transparent border-b border-white/[0.15] py-3 text-base sm:text-lg text-[#F4F4F4] placeholder:text-[#F4F4F4]/20 focus:border-[#F4F4F4] focus:outline-hidden transition-colors font-light resize-none"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          arrow="right"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "TRANSMITTING..." : "SEND MESSAGE"}
        </Button>
      </div>
    </form>
  );
}
