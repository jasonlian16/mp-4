import getData from "@/lib/getData";
import { CatImageTypes } from "@/types/CatImageTypes";

export default async function Image() {
    const data = await getData(); 
    const cats = Array.isArray(data) ? data : [];

    return (
        <main>
        <h1 className="text-lg">Random Cat Images</h1>

        <div className="flex flex-wrap justify-center gap-6">
            {(cats.map((cat: CatImageTypes) => {
                const breed = cat.breeds?.[0]; {/* all cats has breed[], either undefined or undefined */}
                return (
                    <div key={cat.id} className="text-center">
                        {/* if cat has attribute breed.? use that other wise use the latter ??  */}
                        <img src={cat.url} alt={breed?.name ?? "random cat"} width={400} height={400} />
                        <h2>Breed: {breed?.name ?? "unknown "}</h2>
                        <p>Origin: {breed?.origin ?? "unknown "}</p>
                        <p>Life Span: {breed?.life_span ?? "unknown "} years</p>
                    </div>
                );
                })
            )}
        </div>
        </main>
    );
}
    
