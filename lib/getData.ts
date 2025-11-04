const API_KEY = process.env.API_KEY;

export default async function getData(){
    try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
        headers: {
            "x-api-key": API_KEY ?? "",
        },
    })
        
    if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();

    } catch (err) {
        console.error("Error fetching cat data:", err);
        return [];
    }
}


