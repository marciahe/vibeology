import { writable } from "svelte/store";

export const supabaseClient = writable(null);
export const sessionId = writable(null);
