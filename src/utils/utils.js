export async function getFeedback(entry) {
  const apiEndpoint = import.meta.env.VITE_OPENAI_URL;
  const apiKey = import.meta.env.VITE_OPENAI_KEY;

  const prompt =
    "Cómo un bot de acompañamiento emocional ¿qué le recomendarías a un usuario o usuaria si hoy se siente así (o le pasó esto, o escribió esto). En máximo 50 palabras. Sí es un mensaje positivo la resupesta debe ser alegre y divertida, incluso chistosa, si es triste, escribe un mensaje de apoyo. No des un mensaje que proponga una siguiente conversación, solo podrá recibir un único mensaje e intenta no sonar cursi, cuando puedas usa un refrán y/o emojis. No intentes llamarle por su nombre ni respondas con placeholders. El mensaje es: ";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt + entry,
          },
        ],
        //   temperature: 0.3,
        max_tokens: 100,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

export async function getGeneralFeedback(entry) {
  const apiEndpoint = import.meta.env.VITE_OPENAI_URL;
  const apiKey = import.meta.env.VITE_OPENAI_KEY;

  const prompt =
    "Eres un bot de acompañamiento emocional. El 'vibe_id' es una puntuación que se guarda cuando el usuario selecciona una opción entre 5 en una app 0= Increible, 10=Bien, 20=Neutral, 30=Mal, 40=Horrible. El usuario puede elegir cómo se siente de 0 a infinitas veces en el día. Dependiendo la puntuación que recibas, define un mensaje de apoyo para el usuario, si el promedio es alto, dale retoalimentación sobre su promedio y dale ánimos. Si el puntaje es bajo, felicítale por su buena racha y aliéntalo a seguir así, etcétera. Máximo un párrafo, incluye emojis cuando sea posible. Rotundamente prohibido mencionar algo sobre el vibe_id, el usuario no sabe qué es, ni propongas una continuación a la conversación, solo recibirá un mensaje y el usuario está esperando leer este mensaje. El promedio del vibe_id del mes en este caso es:  ";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt + entry,
          },
        ],
        //   temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
