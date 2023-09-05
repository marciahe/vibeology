export async function getFeedback(entry) {
  const apiEndpoint = import.meta.env.VITE_OPENAI_URL;
  const apiKey = import.meta.env.VITE_OPENAI_KEY;

  const prompt =
    "¿Cómo un bot de acompañamiento emocional qué le recomendarías a un usuario o usuaria si hoy se siente así (o le pasó esto, o escribió esto). En máximo 50 palabras. Sí es un mensaje positivo la resupesta debe ser alegre y divertida, incluso chistosa, si es triste, escribe un mensaje de apoyo. No des un mensaje que proponga una siguiente conversación, solo podrá recibir un único mensaje e intenta no sonar cursi, cuando puedas usa un refrán y/o emojis. No intentes llamarle por su nombre ni respondas con placeholders. El mensaje es: ";
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
    //   console.log(prompt + entry);
    console.log("Retroalimentación:", data.choices[0].message.content);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
