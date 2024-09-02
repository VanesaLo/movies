export async function fetchDataMovies(endpoint: string) {
  //   const token = process.env.NEXT_PUBLIC_TOKEN;
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTNhNTc1YWQ1ZTZjYzhiYTc5NjU1NDZjMDE1MzAzYiIsIm5iZiI6MTcyNTIxODY2Ny42MDE3NTEsInN1YiI6IjY2ZDRiZDcyNDAxOTA2NzFiMWIxOTNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k2JvJX9x46-UQh6WOavwdPjB2uXVBhIn16SqKes52wg";

  //   console.log("ENPOINT", endpoint);
  //   console.log("TOKEN", token);
  try {
    const res = await fetch(endpoint, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch data ${res.status}`);
    }
    return await res.json();
  } catch (e) {
    console.log(e);
    return { message: e.message };
  }
}
