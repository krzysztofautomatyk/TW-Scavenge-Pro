import React, { useState, useEffect } from 'react';
import { Lock, ShieldAlert, KeyRound, Timer } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

interface Props {
  onUnlock: () => void;
}

const STORAGE_KEYS = {
  ATTEMPTS: 'tw_auth_attempts',
  BAN_UNTIL: 'tw_auth_ban_until',
  UNLOCKED: 'tw_auth_unlocked'
};

const MAX_ATTEMPTS = 3;
const BAN_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const CORRECT_PASSWORD = 'Walhalla';

const PasswordProtection: React.FC<Props> = ({ onUnlock }) => {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(MAX_ATTEMPTS);
  const [isBanned, setIsBanned] = useState(false);
  const [banUntil, setBanUntil] = useState<number | null>(null);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Check initial state
    const storedAttempts = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
    const storedBan = localStorage.getItem(STORAGE_KEYS.BAN_UNTIL);
    const unlocked = localStorage.getItem(STORAGE_KEYS.UNLOCKED);

    if (storedBan) {
      const banTime = parseInt(storedBan);
      if (Date.now() < banTime) {
        setIsBanned(true);
        setBanUntil(banTime);
        return; // Stop here if banned
      } else {
        // Ban expired
        localStorage.removeItem(STORAGE_KEYS.BAN_UNTIL);
        localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      }
    }

    if (unlocked === 'true') {
        onUnlock();
    }

    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts));
    }
  }, [onUnlock]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isBanned) return;

    if (password === CORRECT_PASSWORD) {
      // Success
      localStorage.setItem(STORAGE_KEYS.UNLOCKED, 'true');
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      onUnlock();
    } else {
      // Failure
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);

      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, newAttempts.toString());

      if (newAttempts <= 0) {
        const banTime = Date.now() + BAN_DURATION_MS;
        localStorage.setItem(STORAGE_KEYS.BAN_UNTIL, banTime.toString());
        setBanUntil(banTime);
        setIsBanned(true);
      }
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-xl animate-fade-in p-4">
      <div className={`
        max-w-md w-full bg-[#f4e4bc] dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-[#c1a264] dark:border-slate-700
        ${shake ? 'animate-[shake_0.5s_ease-in-out]' : ''}
      `}>
        {/* Header */}
        <div className="bg-[#c1a264] dark:bg-slate-800 p-6 text-center border-b border-[#7d510f]/20 dark:border-slate-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7d510f] dark:bg-brand-600 text-[#f4e4bc] dark:text-white mb-4 shadow-lg border-2 border-[#f4e4bc]/30">
             {isBanned ? <ShieldAlert size={32} /> : <Lock size={32} />}
          </div>
          <h2 className="text-2xl font-black text-[#301c06] dark:text-white uppercase tracking-tight">
             {isBanned ? t.auth.bannedTitle : t.auth.title}
          </h2>
          <p className="text-[#603000] dark:text-slate-400 mt-2 text-sm font-medium">
             {isBanned ? t.auth.bannedDesc : t.auth.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
           {isBanned && banUntil ? (
             <div className="text-center space-y-4">
               <div className="bg-red-100 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded text-left">
                  <p className="font-bold text-red-800 dark:text-red-400 text-sm flex items-center gap-2">
                     <Timer size={16} />
                     {t.auth.bannedUntil}
                  </p>
                  <p className="text-red-700 dark:text-red-300 font-mono text-lg mt-1">
                     {formatDate(banUntil)}
                  </p>
               </div>
               <div className="text-xs text-[#603000]/60 dark:text-slate-500 italic">
                  ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
               </div>
             </div>
           ) : (
             <form onSubmit={handleLogin} className="space-y-6">
               <div className="space-y-2">
                 <div className="relative">
                   <input
                     type="password"
                     value={password}
                     onChange={(e) => {
                         setPassword(e.target.value);
                         setError(false);
                     }}
                     placeholder={t.auth.placeholder}
                     className="w-full pl-11 pr-4 py-3 bg-[#fff5da] dark:bg-slate-800 border-2 border-[#c1a264] dark:border-slate-600 rounded-lg focus:outline-none focus:border-[#7d510f] dark:focus:border-brand-500 text-[#301c06] dark:text-white font-bold transition-all placeholder-[#c1a264]"
                     autoFocus
                   />
                   <KeyRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#c1a264] dark:text-slate-500" />
                 </div>
                 
                 {error && (
                   <div className="text-red-600 dark:text-red-400 text-xs font-bold flex justify-between items-center px-1">
                      <span>{t.auth.error}</span>
                      <span>{t.auth.attempts} {attempts}</span>
                   </div>
                 )}
               </div>

               <button
                 type="submit"
                 className="w-full py-3 bg-[#7d510f] dark:bg-brand-600 hover:bg-[#5c3b0b] dark:hover:bg-brand-700 text-[#f4e4bc] dark:text-white rounded-lg font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform active:scale-95 border border-[#f4e4bc]/20"
               >
                 {t.auth.button}
               </button>
             </form>
           )}
        </div>
        
        {/* Footer decoration */}
        <div className="h-2 bg-gradient-to-r from-[#7d510f] via-[#c1a264] to-[#7d510f] dark:from-brand-900 dark:via-brand-500 dark:to-brand-900"></div>
      </div>
    </div>
  );
};

export default PasswordProtection;
