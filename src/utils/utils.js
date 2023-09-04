export async function getFeedback(entry) {
  const apiEndpoint = import.meta.env.VITE_OPENAI_URL;
  const apiKey = import.meta.env.VITE_OPENAI_KEY;

  const prompt =
    "¿Cómo un bot de apoyo emocional qué le recomendarías a un usuario o usuaria de manera amable si hoy se siente así (o le pasó esto), en máximo 50 palabras?. Sí es un mensaje positivo la resupesta debe ser alegre y divertida, incluso chistosa, si es triste, escribe un mensaje de apoyo. No des un mensaje que proponga una siguiente conversación, solo podrá recibir un único mensaje e intenta no sonar cursi, cuando puedas usa un refrán: ";

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
      temperature: 0.3,
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  console.log("Retroalimentación:", data.choices[0].message.content);
}
