import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore of Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantDBSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<p>No restaurants available.</p>';
        return;
      }

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
};

export default Restaurants;
