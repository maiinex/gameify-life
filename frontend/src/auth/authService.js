import { supabase } from '../api/supabaseClient';

export async function register(email, password) {
    return await supabase.auth.signUp({
        email,
        password,
    });
}

export async function login(email, password) {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    });
}

export async function logout() {
    return await supabase.auth.signOut();
}

export async function getSession() {
    return await supabase.auth.getSession();
}

export function onAuthChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
}