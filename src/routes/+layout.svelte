<script>
  import "../app.css";
  import { createClient } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
  import { supabaseClient, sessionId } from '../store';
  import { v4 as uuidv4 } from 'uuid';

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  let supabase;

  onMount(()=>{
    if (!supabase) {
      supabase = createClient(supabaseUrl, supabaseKey, {
        persistSession: true,
        localStorage: window.localStorage,
      });
    }

    const localSessionId = localStorage.getItem('session_id');
    if (!localSessionId) {
      const newSessionId = uuidv4();
      sessionId.set(uuidv4());
      localStorage.setItem('session_id', $sessionId);
    } else {
      sessionId.set(localSessionId);
    }

    supabaseClient.set(supabase);
    // fetchVibes();

  });




//Return vibes
// async function fetchVibes() {
//   const { data, error } = await supabase
//     .from('Vibes')
//     .select('*');
//   if (error) {
//     console.error('Error fetching data:', error);
//     return;
//   }
//   console.log('Fetched data:', data);
// }



</script>

<slot />