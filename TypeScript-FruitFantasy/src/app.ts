const container: HTMLElement | any = document.getElementById("app");
const fruits: number = 10;
type Fruit =
    {
        id: number;
        name: string;
        image: string;
        price: string;
        unit?: string;
    }
const fetchData = (): void => {
    for (let i = 1; i <= fruits; i++) {
        getFruits(i);
    }
};
const getFruits = async (id: number): Promise<void> => {
    const data: Response = await fetch(`http://localhost:3000/fruits/${id}`);
    const fruit: any = await data.json();
    console.log(fruit.length);

    const transformedFruit = {
        id: fruit.id,
        name: fruit.name,
        image: fruit.image,
        price: fruit.price
    };
    showFruits(transformedFruit);
};
const showFruits = (transformedFruit: Fruit): void => {
    let output: string = `
              <div class="card" style="width:10rem;display:inline-block;margin-left:20px;margin-bottom:10px;">
                  <img width=100px height=100px src=${transformedFruit.image} alt=${transformedFruit.name} />
                  <h5 class="card-title" style="margin-left:20px">${transformedFruit.name}</h5>
                  <h5 class="card-body">Price:$${transformedFruit.price}</h5>
              </div>
          `;
    container.innerHTML += output;
};

fetchData();