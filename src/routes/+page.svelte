<script>
  import { supabaseClient, sessionId } from '../store'; 
  import { get } from 'svelte/store';
  import { getFeedback } from '../utils/utils';
  import { insert } from 'svelte/internal';

  const emotions = [
    { image: '/face/0.png', description: 'Increíble' },
    { image: '/face/10.png', description: 'Bien' },
    { image: '/face/20.png', description: 'Meh' },
    { image: '/face/30.png', description: 'Mal' },
    { image: '/face/40.png', description: 'Horrible' },

  ];


  let selectedEmotion = null;
  let entryText = "";
  let currentSessionId;

  sessionId.subscribe(value => {
    currentSessionId = value;
  });


  async function submitData() {
    const supabase = get(supabaseClient);
    let insertedData = null;
    if (selectedEmotion && entryText && supabase) {
      const { data, error } = await supabase
      .from('VibeEntries')
      .insert([
        { vibe_id: selectedEmotion, 
          entry_text: entryText, 
          session_id: currentSessionId 
        }
      ])
      .select();
      
      if (error) {
        console.error(sessionId + "Error inserting in DB:", error);
      } else {
        console.log(data, error)
        insertedData = data[0];
        console.log("Success inserting in DB: ");
      }
    }
    const id = insertedData.id;
    const feedback = await getFeedback(entryText);

      if ( feedback) {
        const { data: updateData, error: updateError } = await supabase
          .from('VibeEntries')
          .update({ feedback })
          .eq('id', id);

        if (updateError) {
          console.error("Error updating in DB:", updateError);
        } else {
          console.log("Success updating feedback in DB", updateData);
        }
      }
  }

</script>

<main>
  <!-- <h1 class="text-4xl font-bold p-12">✨ Vibeology ✨</h1> -->
  <h1 class="typo">vibeology</h1>
  <h2 class="text-2xl font-bold">Selecciona tu estado de ánimo</h2>
  <div class="flex">
    <!-- {#each emotions as emotion}
      <button class="button {selectedEmotion === emotion ? 'active' : ''}" on:click={() => { selectedEmotion =  emotion; }}>
      {emotion}
     </button>
    {/each} -->
    {#each emotions as emotion}
      <button class="button {selectedEmotion === emotion ? 'active' : ''}" on:click={() => { selectedEmotion = emotion; }}>
        <img src="{emotion.image}" alt="{emotion.description}" />
      </button>
    {/each}
  </div>


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

    cursor: pointer;
  }
  .active {
    background-color: #ccc;
  }


  /* @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); */

.typo{
	font-family: 'Righteous', cursive;
	font-size:4rem;
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
								8px 8px #890920,
								9px 9px #890920,
								10px 10px #890920;
}
</style>
