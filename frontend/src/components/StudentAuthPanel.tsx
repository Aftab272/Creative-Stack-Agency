import React, { useState } from "react";
import { CheckCircle, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { postToBackend } from "../lib/api";

export interface StudentSession {
  id: string;
  name: string;
  email: string;
}

interface StudentAuthPanelProps {
  onAuthenticated: (student: StudentSession) => void;
  title?: string;
  subtitle?: string;
}

export const STUDENT_SESSION_KEY = "creative_stack_student_session";

export function getStoredStudentSession(): StudentSession | null {
  try {
    const saved = localStorage.getItem(STUDENT_SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

export function StudentAuthPanel({
  onAuthenticated,
  title = "Student Login Required",
  subtitle = "Login or create a student account before starting the quiz."
}: StudentAuthPanelProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (mode === "signup" && !name.trim()) {
      setError("Student name is required.");
      return;
    }

    if (!email.trim() || password.length < 6) {
      setError("Email and 6+ character password are required.");
      return;
    }

    setIsSubmitting(true);
    const response = await postToBackend<
      { name?: string; email: string; password: string },
      StudentSession
    >(`/api/auth/${mode === "signup" ? "signup" : "login"}`, {
      name,
      email,
      password
    });
    setIsSubmitting(false);

    if (!response?.ok || !response.data) {
      setError(response?.message || "Backend login service is not responding.");
      return;
    }

    localStorage.setItem(STUDENT_SESSION_KEY, JSON.stringify(response.data));
    onAuthenticated(response.data);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-slate-950/80 border border-blue-500/20 shadow-2xl p-6 sm:p-8 animate-fade-in">
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
          <Lock className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-xs mt-2 leading-relaxed max-w-sm mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6 rounded-xl bg-white/5 border border-white/5 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setError("");
          }}
          className={`py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
            mode === "login" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
          }`}
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("signup");
            setError("");
          }}
          className={`py-2.5 rounded-lg text-xs font-mono font-bold transition-all ${
            mode === "signup" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
          }`}
        >
          SIGNUP
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Student Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g. Ali Raza"
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none"
              />
            </div>
          </div>
        )}

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="student@example.com"
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-gray-400 uppercase font-semibold">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Minimum 6 characters"
              className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-gray-200 focus:border-blue-500/50 focus:outline-none"
            />
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300 font-mono">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
        >
          {mode === "signup" ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
          {isSubmitting ? "PLEASE WAIT..." : mode === "signup" ? "CREATE ACCOUNT & START QUIZ" : "LOGIN & START QUIZ"}
        </button>
      </form>

      <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-emerald-400 font-mono">
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Your quiz access is saved on this browser.</span>
      </div>
    </div>
  );
}
