


const singleChefLoader = async () => {
    const loadedChef = await fetch('https://assignment-10-server-belayethossen.vercel.app/chefs');
    const chef = await loadedChef.json();

    return chef;
}

export default singleChefLoader;