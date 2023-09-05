<script>
  import { onMount } from 'svelte';

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let days = [];

  onMount(() => {
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
  }

  function selectDay(day) {
    if (day) {
      console.log(`Día seleccionado: ${day.getDate()}`);
    }
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
  }

  function goToToday() {
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    generateCalendar(currentMonth, currentYear);
  }
</script>

<div class="flex flex-col items-center">
  <h1 class="text-2xl font-bold mb-4">Calendario: {monthNames[currentMonth]} / {currentYear}</h1>

  <div class="flex mb-4">
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded mr-2" 
      on:click={prevMonth}>Mes anterior
    </button>
    <button 
      class="bg-blue-500 text-white px-4 py-2 rounded ml-2" 
      on:click={nextMonth}>Mes siguiente
    </button>
    <button 
      class="bg-green-500 text-white px-4 py-2 rounded ml-2" 
      on:click={goToToday}>Hoy
    </button>
  </div>
  <div class="grid grid-cols-7 gap-4 mt-4">
    {#each days as day, i}
      <div 
        class="w-16 h-16 flex items-center justify-center border border-gray-300 cursor-pointer" 
        on:click={() => selectDay(day)}>
        {#if day}
          <span class="text-lg">{day.getDate()}</span>
        {/if}
      </div>
    {/each}
  </div>
</div>
