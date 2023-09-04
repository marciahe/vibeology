<script>
  import { supabaseClient, sessionId } from '../store'; 
  import { get } from 'svelte/store';

  const emotions = ['0', '10', '20', '30', '40'];

  let selectedEmotion = null;
  let entryText = "";
  let currentSessionId;
  sessionId.subscribe(value => {
    currentSessionId = value;
  });

  async function submitData() {
    const supabase = get(supabaseClient);
    if (selectedEmotion && entryText && supabase) {
      const { data, error } = await supabase
        .from('VibeEntries')
        .insert([
          { vibe_id: selectedEmotion, entry_text: entryText, session_id: currentSessionId }
        ]);

      if (error) {
        console.error(sessionId + "Error al insertar en Supabase:", error);
      } else {
        console.log("Datos insertados exitosamente:", data);
      }
    }
  }
</script>

<main>
  <h1 class="text-4xl font-bold p-12">
    ✨ Vibeology ✨
  </h1>
<h2 class="text-2xl font-bold">Selecciona tu estado de ánimo</h2>
<div class="flex">
{#each emotions as emotion}
    <button class="button {selectedEmotion === emotion ? 'active' : ''}" on:click={() => { selectedEmotion = emotion; }}>
      {emotion}
    </button>
    {/each}
  </div>

<!-- Campo para texto del diario -->
<h1 class="mt-10 mb-2">Ingresa el texto para tu diario</h1>
<textarea 
  bind:value={entryText}
          class="h-full min-h-[100px] w-96 resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"

    rows="3"
    placeholder="¿Cómo te has sentido hoy?"
></textarea>

<!-- Botón para enviar los datos -->
<button on:click={submitData}
  class= "mt-4 w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Enviar
</button>
</main>

<style lang="css">
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
    .button {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .active {
    background-color: #ccc;
  }
</style>
