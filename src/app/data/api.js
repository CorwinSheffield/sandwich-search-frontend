export async function getSandwichShops(){
    const response = await fetch('http://localhost:8080/sandwichshops');
    if (!response.ok){
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export async function getAllRatings() {
    const response = await fetch('http://localhost:8080/sandwichshops/ratings');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function getShopRatings(shopId) {
    const response = await fetch(`http://localhost:8080/sandwichshops/${shopId}/ratings`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}