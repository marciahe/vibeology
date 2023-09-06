<script>
  import { supabaseClient, sessionId } from '../store'; 
  import { get } from 'svelte/store';
  import { getFeedback } from '../utils/utils';

  const emotions = [
    { id: 0, image: '/face/0.png', description: 'Increíble' },
    { id: 10, image: '/face/10.png', description: 'Bien' },
    { id: 20, image: '/face/20.png', description: 'Meh' },
    { id: 30, image: '/face/30.png', description: 'Mal' },
    { id: 40, image: '/face/40.png', description: 'Horrible' },
  ];

  let selectedEmotion = null;
  let entryText = "";
  let currentSessionId;
  let feedbackText = "";
  let isLoading = false;

  sessionId.subscribe(value => {
    currentSessionId = value;
  });

  let canSubmit = false;
  $: {
    canSubmit = selectedEmotion !== null && entryText.length >= 3;
  }



  async function submitData() {
    isLoading = true;
  const supabase = get(supabaseClient);

  let insertedData = null;
  if (selectedEmotion && entryText && supabase) {
    const { data, error } = await supabase
    .from('VibeEntries')
    .insert([
      { vibe_id: selectedEmotion.id, 
        entry_text: entryText, 
        session_id: currentSessionId 
      }
    ])
    .select();


    if (error) {
      console.error(sessionId + " Error inserting in DB:", error);
      return;
    }
    insertedData = data[0];

    if(data) {
      insertedData = data[0];
      // console.log("Inserted Data:", insertedData);
    } else {
      console.log("Data is null");
    }


    const id = insertedData.id;
    const feedback = await getFeedback(entryText);
    feedbackText = feedback;

    if (feedback) {
      const { data: updateData, error: updateError } = await supabase
        .from('VibeEntries')
        .update({ feedback })
        .eq('id', id);

      if (updateError) {
        console.error("Error updating in DB:", updateError);
      } else {
        // console.log("Success updating feedback in DB", updateData);
      }
    }
    isLoading = false;
  }
}


  export async function generateBulkData() {
    const supabase = get(supabaseClient);

    function getRandomFromArray(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getRandomDate() {
      const today = new Date();
      const threeMonthsAgo = new Date(today);
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      const randomDate = new Date(threeMonthsAgo.getTime() + Math.random() * (today.getTime() - threeMonthsAgo.getTime()));
      return randomDate.toISOString().split('.')[0] + "+00";
    }

    const fakeEntries = Array.from({ length: 50 }, (_, i) => ({
      vibe_id: getRandomFromArray([0, 10, 20, 30, 40]),
      entry_text: getRandomFromArray(["Bien", "Muy Bien", "Excelente", "Masomenos", "Regular", "Mal", "Muy mal"]),
      created_at: getRandomDate(),
      session_id: currentSessionId 
    }));

    const { error } = await supabase
      .from('VibeEntries')
      .insert(fakeEntries);

    if (error) {
      console.error('Error insertando datos:', error);
    } else {
      console.log('Datos ficticios insertados exitosamente.');
    }
  }
</script>

<main>
  <h2 class="text-xl mt-8 font-bold text-slate-700">Selecciona tu estado de ánimo:</h2>
  <div class="flex w-5/6 max-w-[800px]">
    {#each emotions as emotion}
      <button class="button {selectedEmotion === emotion ? 'active' : ''}" on:click={() => { selectedEmotion = emotion; }}>
        <img src="{emotion.image}" alt="{emotion.description}" />
      </button>
    {/each}
  </div>

  <h1 class="text-xl font-bold mt-8 mb-4 text-slate-700">Ingresa el texto para tu diario:</h1>
  <textarea 
    bind:value={entryText}
            class="h-full min-h-[100px] w-5/6 max-w-[700px] resize-none rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"

      rows="3"
      placeholder="¿Cómo te has sentido hoy?"
  ></textarea>

  <button 
    on:click={submitData}
    class="mt-4 w-5/6 max-w-[700px] h-12 py-2 px-4 rounded font-bold text-lg transition-all duration-300
    {canSubmit ? 'bg-emerald-300 hover:bg-emerald-400 text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
    disabled={!canSubmit}
  >
    
      {#if isLoading}
        Cargando...
      {:else}
        Enviar
      {/if}
  </button>

  {#if feedbackText}
    <div class="p-4 rounded shadow-md max-w-[700px] mt-8 bg-orange-200">
      <p class=" text-xl">{feedbackText}</p>
    </div>
  {/if}


  <button class="bg-red-300 hover:bg-red-400 px-8 py-2 rounded bottom-4 fixed" on:click={generateBulkData}>Generar 50 entradas ficticias</button>

</main>

<style lang="css">
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
    .button {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
  }
  .active {
    background-color: rgb(110 231 183);
    border-radius: 100%;
  }

</style>