var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById("app");
const fruits = 10;
const fetchData = () => {
    for (let i = 1; i <= fruits; i++) {
        console.log("loop check");
        getFruits(i);
    }
};
// const getFruits = async (id: number): Promise<void> => {
//     const data: Response = await fetch(`http://localhost:3000/fruits/${id}`);
//     const fruit: any = await data.json();
//     console.log(fruit.length);
const getFruits = (id) => __awaiter(this, void 0, void 0, function* () {
    const data = yield fetch(`http://localhost:3000/fruits/${id}`);
    const fruit = yield data.json();
    console.log(fruit.length);
    const transformedFruit = {
        id: fruit.id,
        name: fruit.name,
        image: fruit.image,
        price: fruit.price
    };
    showFruits(transformedFruit);
});
const showFruits = (transformedFruit) => {
    let output = `
              <div class="card" style="width:10rem;display:inline-block;margin-left:20px;margin-bottom:10px;">
                  <img width=100px height=100px src=${transformedFruit.image} alt=${transformedFruit.name} />
                  <h5 class="card-title" style="margin-left:20px">${transformedFruit.name}</h5>
                  <h5 class="card-body">Price:$${transformedFruit.price}</h5>
              </div>
          `;
    container.innerHTML += output;
};
fetchData();
