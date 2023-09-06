<script>
  import { onMount } from 'svelte';
  import { userData } from '../../store'; 
  import { getGeneralFeedback } from '../../utils/utils';

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let days = [];
  let currentUserData =[];
  let selectedDayData = [];

  let dayColors = {};

function updateDayColors() {
  dayColors = {};
  if (currentUserData !== null) {
    currentUserData.forEach(entry => {
      const entryDate = new Date(entry.created_at).getDate();
      const entryMonth = new Date(entry.created_at).getMonth();
      const entryYear = new Date(entry.created_at).getFullYear();

      if (entryMonth === currentMonth && entryYear === currentYear) {
        dayColors[entryDate] = `color-${entry.vibe_id}`;
      }
    });
  }
}

userData.subscribe(value => {
  if (value !== null) {
    currentUserData = value;
    updateDayColors();
  }
});


  onMount(async() => {
    generateCalendar(currentMonth, currentYear);
  });

  function generateCalendar(month, year) {
    const startDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDate; i++) {
      days.push(new Date(year, month, i));
    }
    updateDayColors();
    getMonthlyFeedback();


  }

  function selectDay(day) {
    if (day) {
      console.log(`Día seleccionado: ${day.getDate()}`);

      selectedDayData = currentUserData.filter(entry => {
      const entryDate = new Date(entry.created_at);
      return entryDate.getDate() === day.getDate() && 
             entryDate.getMonth() === day.getMonth() &&
             entryDate.getFullYear() === day.getFullYear();
    });

    console.log("Datos del día seleccionado:", selectedDayData);
    }
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
    updateDayColors();

  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
    updateDayColors();

  }

  function goToToday() {
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    generateCalendar(currentMonth, currentYear);
    updateDayColors();

  }

  let monthlyFeedback = "";


async function getMonthlyFeedback() {
  if (!currentUserData) {
    console.log("Nohay o hay")
    return
  }

  const thisMonthEntries = currentUserData.filter(entry => {
    const entryDate = new Date(entry.created_at);
    return entryDate.getMonth() === currentMonth && 
          entryDate.getFullYear() === currentYear;
  });

  if (thisMonthEntries.length === 0) {
    monthlyFeedback = "Parece que este mes no has usado Vibeology :(";
    return;
  }
  
  const totalVibe = thisMonthEntries.reduce((acc, entry) => acc + entry.vibe_id, 0);
  const averageVibe = totalVibe / thisMonthEntries.length;

  monthlyFeedback = await getGeneralFeedback(averageVibe);
  // monthlyFeedback = tempFeedback;

}


  
</script>


<div class="flex flex-col items-center">
  <div class="mt-4">
    <h2 class="text-xl font-bold mb-2">Retroalimentación Mensual:</h2>
    <div class="bg-white p-4 rounded shadow-lg">
      <p>{monthlyFeedback || 'Cargando...'}</p>
    </div>
  </div>

  <h1 class="text-2xl font-bold mb-4"> {monthNames[currentMonth]} / {currentYear}</h1>
  <div class="flex mb-4">
    <button class="bg-blue-500 text-white px-4 py-2 rounded mr-2" on:click={prevMonth}>Mes anterior</button>
    <button class="bg-blue-500 text-white px-4 py-2 rounded ml-2" on:click={nextMonth}>Mes siguiente</button>
    <button class="bg-green-500 text-white px-4 py-2 rounded ml-2" on:click={goToToday}>Hoy</button>
  </div>
  <div class="grid grid-cols-7 gap-4 mt-4">
    {#each days as day, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div 
        class="w-16 h-16 flex items-center justify-center border border-gray-300 cursor-pointer 
        {day ? dayColors[day.getDate()] : ''}" 
        on:click={() => selectDay(day)}>
        {#if day}
          <span class="text-lg">{day.getDate()}</span>
        {/if}
      </div>
    {/each}
  </div>
</div>


<div class="flex flex-wrap mt-4"> 
  {#each selectedDayData as data}
    <div class="bg-white p-4 m-2 rounded shadow-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"> 
      <p><strong>Fecha:</strong> {new Date(data.created_at).toLocaleDateString()}</p>
      <p><strong>Vibe ID:</strong> {data.vibe_id === 40 ? "Vibe 1" : "Vibe 2"}</p>
      <p><strong>Texto de la entrada:</strong> {data.entry_text}</p>
      <p><strong>Vibeology:</strong> {data.feedback === null ? ":(" : data.feedback}</p>
    </div>
  {/each}
</div>

<style>
  .color-0 {
  background-color: #ffda21;
  }
  .color-10 {
  background-color: rgb(255, 152, 41);
  }
  .color-20 {
  background-color: rgb(159, 4, 226);
  }
  .color-30 {
    background-color: rgb(0, 246, 185);
  }
  .color-40 {
    background-color: rgb(26, 118, 255);
  }
</style>