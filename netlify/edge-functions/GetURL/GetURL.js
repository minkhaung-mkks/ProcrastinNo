export default async (request, context) => {
  const value = Netlify.env.get("DATABASE_URL");

  return new Response(`${value}`, {
    headers: { "content-type": "text/html" },
  });
};