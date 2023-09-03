<script>
  import "../app.css";
  import { createClient } from '@supabase/supabase-js';
  import { onMount } from 'svelte';


  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  let supabase;

  onMount(()=>{
    supabase = createClient(supabaseUrl, supabaseKey, {
      persistSession: true,
        localStorage: window.localStorage,
    });

    fetchVibes();

  });

async function fetchVibes() {
  const { data, error } = await supabase
    .from('Vibes')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Fetched data:', data);
}



</script>

<slot />