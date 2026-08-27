// ضع بيانات مشروعك من Supabase Dashboard > Project Settings > API.
const supabaseUrl = 'https://szkszyubvmhxtzciusnk.supabase.co';
const supabaseAnonKey = 'sb_publishable_iDHvCPRTlSXTykvoiX6-dg_ka-4NiH8';

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
