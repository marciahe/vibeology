<script>
  import "../app.css";
  import { createClient } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
  import { supabaseClient, sessionId, userData } from '../store';
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

    fetchEntries();



  });

  async function fetchEntries() {
      let currentSessionId;
      sessionId.subscribe(value => {
        currentSessionId = value;
      });
    console.log(currentSessionId)
    const { data, error } = await supabase
      .from('VibeEntries')
      .select()
      .eq('session_id', currentSessionId);

    if (error) {
      console.error('Error fetching data:', error);
      return;
    } else {
      userData.set(data);


    }
  }



</script>



<slot />