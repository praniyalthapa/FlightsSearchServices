'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
    modelNumber:'Airbus A320',
    capacity:130,
    createdAt:new Date(),
     updatedAt:new Date()
    
   },
   {
    modelNumber:'Airbus A330',
    capacity:274,
    createdAt:new Date(),
     updatedAt:new Date()
   },
   {
    modelNumber:'ATR 72-500s',
    capacity:100,
    createdAt:new Date(),
     updatedAt:new Date()
   },
   {
    modelNumber:'Boeing 757-200M',
    capacity:239,
    createdAt:new Date(),
     updatedAt:new Date()
   },
   {
    modelNumber:'ATR 42-320',
    capacity:239,
    createdAt:new Date(),
     updatedAt:new Date()
   }

  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
