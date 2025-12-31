'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Lock, User, Loader2, Shield } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async()=>{
      try {
        const response = await axios.get('/api/admin/auth/me');
        if (response.data.user) {
          router.replace('/main/admin');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      }
    }
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/admin/auth/login', formData);
      console.log(response.data.user);
      if (response.data.user) {
        router.replace('/main/admin');
      } else {
        setError('Access Denied: Invalid Admin Credentials');
      }
    } catch (err) {
      setError('Connection failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    // Background is deep black to match a dark layout
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-[--bg-primary] px-4">
      <div className="w-full max-w-[380px]">
        
        {/* Simple Minimal Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white tracking-tight">System Authentication</h1>
          <p className="text-xs text-zinc-500 mt-2 uppercase tracking-[0.2em]">Internal Terminal</p>
        </div>

        {/* Login Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {error && (
              <div className="text-[11px] font-medium text-red-400 bg-red-950/30 border border-red-900/50 py-2 px-3 rounded-lg text-center">
                {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Admin ID</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                    placeholder="admin@system.io"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Access Key</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-700 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none transition-all"
                    placeholder="••••••••"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button - High Contrast White */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white hover:bg-zinc-200 text-black py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Authorize"
              )}
            </button>
          </form>
        </div>

        {/* Footer Security Note */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-px w-12 bg-zinc-800"></div>
          <p className="text-[10px] text-zinc-600 tracking-tighter uppercase font-medium">
            Encrypted Session • Node 01
          </p>
        </div>
      </div>
    </div>
  );
}