


const singleChefLoader = async () => {
    const loadedChef = await fetch('http://localhost:5000/chefs');
    const chef = await loadedChef.json();

    return chef;
}

export default singleChefLoader;