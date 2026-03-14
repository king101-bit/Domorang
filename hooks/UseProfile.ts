'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  role: string | null;
  avatar_url: string | null;
  onboarding_completed: boolean | null;
  created_at: string | null;
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data }) => setProfile(data));
    });
  }, []);

  return profile;
}
