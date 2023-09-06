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

  let activeTab = 'Home';

</script>



<h1 class="typo mb-0 text-center w-full">✨vibeology</h1>

<ul class="hidden mt-4 max-w-xs m-auto text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
  <li class="w-full">
    <a href="/"
      class={`inline-block w-full p-2 focus:ring-4 focus:ring-blue-300 focus:outline-none ${activeTab === 'Home' ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white' : 'bg-white dark:bg-gray-800'} rounded-l-lg`}
      aria-current={activeTab === 'Home' ? 'page' : undefined}
      on:click={() => activeTab = 'Home'}>
      Home
    </a>
  </li>
  <li class="w-full">
    <a href="/calendar"
      class={`inline-block w-full p-2 focus:ring-4 focus:ring-blue-300 focus:outline-none ${activeTab === 'Calendario' ? 'text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white' : 'bg-white dark:bg-gray-800'} rounded-r-lg`}
      aria-current={activeTab === 'Calendario' ? 'page' : undefined}
      on:click={() => activeTab = 'Calendario'}>
      Calendario
    </a>
  </li>
</ul>

    
<style>
    .typo{
    font-family: 'Righteous', cursive;
    font-size:3rem;
    display:inline-block;
    font-weight: bold;
    letter-spacing:2px;
    position:relative;
    color:#f3395a;
    transform: skew(-5deg,-5deg) rotate(5deg);
    transform-origin:center center;
    text-shadow: 	1px 1px #d10e31,
                  2px 2px #d10e31,
                  3px 3px #d10e31,
                  4px 4px #d10e31,
                  5px 5px #d10e31,
                  6px 6px #d10e31,
                  7px 7px #d10e31,
                  8px 8px #a30b27,
                  9px 9px #a30b27,
                  10px 10px #a30b27;
}
</style>

<slot />
