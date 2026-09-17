'use client';

import { useActionState } from 'react';
import { sendContactEmail , ContactFormState } from '@/src/lib/action';
import { Send, Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  success: false,
  message: '',
  errors: {},
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          className="w-full bg-card/80 border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
        />
        {state.errors?.name && (
          <p className="text-xs text-red-400 mt-1">{state.errors.name}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your.email@example.com"
          required
          className="w-full bg-card/80 border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
        />
        {state.errors?.email && (
          <p className="text-xs text-red-400 mt-1">{state.errors.email}</p>
        )}
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="What is this about?"
          className="w-full bg-card/80 border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Tell me about your project or idea..."
          required
          className="w-full bg-card/80 border border-border/80 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
        />
        {state.errors?.message && (
          <p className="text-xs text-red-400 mt-1">{state.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Status Message */}
      {state.message && (
        <p
          className={`text-xs font-medium ${
            state.success ? 'text-emerald-400' : 'text-red-400'
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}