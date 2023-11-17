/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');
Scenario('Showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('#restaurants');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#mainContent');
  I.seeElement('#restaurants');
  I.seeElement('.restaurant-item__content');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});

Feature('Unlike Restaurant');
Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('#mainContent');
  I.seeElement('#restaurants');
  I.seeElement('.restaurant-item__content');
  const firstRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(firstRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('.restaurant-item__content');
  const secondRestaurant = locate('.restaurant-item__content h3 a').first();
  I.click(secondRestaurant);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(5);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});
